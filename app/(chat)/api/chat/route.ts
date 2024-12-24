import {
  type Message,
  type CoreMessage,
  type CoreUserMessage,
  type CoreAssistantMessage,
  type CoreToolMessage,
  type TextPart,
  type ToolCallPart,
  type DataStreamWriter,
  type JSONValue,
  convertToCoreMessages,
  createDataStreamResponse,
  streamObject,
  streamText,
} from 'ai';
import { z } from 'zod';

import { auth } from '@/app/(auth)/auth';
import { customModel } from '@/lib/ai';
import { models } from '@/lib/ai/models';
import {
  codePrompt,
  systemPrompt,
  updateDocumentPrompt,
} from '@/lib/ai/prompts';
import {
  deleteChatById,
  getChatById,
  getDocumentById,
  saveChat,
  saveDocument,
  saveMessages,
  saveSuggestions,
} from '@/lib/db/queries';
import type { Suggestion } from '@/lib/db/schema';
import {
  generateUUID,
  getMostRecentUserMessage,
  sanitizeResponseMessages,
} from '@/lib/utils';

import { generateTitleFromUserMessage } from '../../actions';

export const maxDuration = 60;

type AllowedTools =
  | 'createDocument'
  | 'updateDocument'
  | 'requestSuggestions'
  | 'getWeather';

const blocksTools: AllowedTools[] = [
  'createDocument',
  'updateDocument',
  'requestSuggestions',
];

const weatherTools: AllowedTools[] = ['getWeather'];

const allTools: AllowedTools[] = [...blocksTools, ...weatherTools];

// Provider-specific configurations
const PROVIDER_CONFIGS = {
  openai: {
    timeout: 30000,
    retries: 1,
    streamChunkSize: 1024,
  },
  anthropic: {
    timeout: 45000,
    retries: 2,
    streamChunkSize: 512,
  },
  default: {
    timeout: 30000,
    retries: 1,
    streamChunkSize: 1024,
  }
} as const;

// Add cache for recent messages
const messageCache = new Map<string, {
  messages: any[];
  timestamp: number;
}>();

// Add response type for better type safety
type StreamResponseType = 
  | 'text-delta'
  | 'error'
  | 'done'
  | 'user-message-id'
  | 'suggestion'
  | 'id'
  | 'title'
  | 'kind'
  | 'clear'
  | 'code-delta'
  | 'start'
  | 'complete'
  | 'saved';

interface StreamResponse {
  type: StreamResponseType;
  content: JSONValue;
}

interface StreamContent extends TextPart {
  type: 'text';
  text: string;
}

// Stream state management
interface StreamState {
  isStarted: boolean;
  isProcessing: boolean;
  isComplete: boolean;
  error: string | null;
}

// Enhanced retry logic
const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY = 1000;

async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  retries = MAX_RETRIES,
  delay = INITIAL_RETRY_DELAY
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    if (retries === 0) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return retryWithBackoff(operation, retries - 1, delay * 2);
  }
}

// Response validation
function validateResponse(response: any): boolean {
  if (!response || !response.messages) {
    return false;
  }
  return response.messages.every((msg: any) => 
    msg && 
    typeof msg.role === 'string' && 
    (typeof msg.content === 'string' || Array.isArray(msg.content))
  );
}

// Enhanced stream handling
async function handleStreamWithRecovery(
  dataStream: DataStreamWriter,
  content: string | (TextPart | ToolCallPart)[],
  type: 'text' | 'code' = 'text',
  state: StreamState
) {
  try {
    if (!state.isStarted) {
      state.isStarted = true;
      dataStream.writeData({
        type: 'start',
        content: { state: 'started' }
      });
    }

    state.isProcessing = true;
    
    if (typeof content === 'string') {
      await retryWithBackoff(async () => {
        dataStream.writeData({
          type: `${type}-delta` as StreamResponseType,
          content: content.trim()
        });
      });
    } else if (Array.isArray(content)) {
      for (const chunk of content) {
        if (chunk.type === 'text' && 'text' in chunk) {
          await retryWithBackoff(async () => {
            dataStream.writeData({
              type: `${type}-delta` as StreamResponseType,
              content: chunk.text.trim()
            });
          });
        }
      }
    }
    
    state.isProcessing = false;
    state.isComplete = true;
    
    dataStream.writeData({
      type: 'done',
      content: { state: 'completed' }
    });
  } catch (error) {
    state.error = error instanceof Error ? error.message : 'Stream processing failed';
    console.error('Stream handling error:', state.error);
    
    // Try to recover
    if (!state.isComplete) {
      dataStream.writeData({
        type: 'error',
        content: {
          message: 'Stream interrupted, attempting recovery...',
          recoverable: true,
          error: state.error
        }
      });
      
      // Attempt recovery by retrying
      try {
        await retryWithBackoff(async () => {
          if (typeof content === 'string') {
            dataStream.writeData({
              type: `${type}-delta` as StreamResponseType,
              content: content.trim()
            });
          }
        });
        
        state.error = null;
        state.isComplete = true;
        
        dataStream.writeData({
          type: 'done',
          content: { state: 'recovered' }
        });
      } catch (recoveryError) {
        dataStream.writeData({
          type: 'error',
          content: {
            message: 'Recovery failed, please try again',
            recoverable: false,
            error: recoveryError instanceof Error ? recoveryError.message : 'Recovery failed'
          }
        });
      }
    }
  }
}

// Helper function to validate message content
function isValidMessageContent(content: unknown): content is string | (TextPart | ToolCallPart)[] {
  if (typeof content === 'string') return true;
  if (Array.isArray(content)) {
    return content.every(chunk => 
      (chunk.type === 'text' && 'text' in chunk && typeof chunk.text === 'string') ||
      (chunk.type === 'tool-call' && 'toolCallId' in chunk)
    );
  }
  return false;
}

// Improve message processing with better type checking
function processMessagesForProvider(messages: CoreMessage[], provider: string): CoreAssistantMessage[] {
  return messages
    .filter((msg): msg is CoreAssistantMessage => 
      msg.role === 'assistant' && isValidMessageContent(msg.content)
    )
    .map(msg => ({
      role: 'assistant' as const,
      content: normalizeContent(msg.content)
    }));
}

// Normalize messages with proper type checking
function normalizeMessagesForProvider(
  messages: (CoreUserMessage | CoreAssistantMessage)[],
  provider: string
): (CoreUserMessage | CoreAssistantMessage)[] {
  return messages.map(msg => {
    if (msg.role === 'user') {
      return {
        ...msg,
        content: typeof msg.content === 'string' ? msg.content.trim() : msg.content
      } as CoreUserMessage;
    }
    return {
      ...msg,
      content: normalizeContent(msg.content)
    } as CoreAssistantMessage;
  });
}

function normalizeContent(
  content: string | (TextPart | ToolCallPart)[]
): string {
  if (typeof content === 'string') {
    return content.trim();
  }
  
  return content
    .filter((c): c is TextPart => c.type === 'text' && 'text' in c)
    .map(c => c.text)
    .join(' ')
    .trim();
}

// Add return type for executeWithRetry
async function executeWithRetry(
  operation: () => Promise<Response>,
  retries: number,
  delay: number
): Promise<Response> {
  try {
    return await operation();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }
    await new Promise(resolve => setTimeout(resolve, delay));
    return executeWithRetry(operation, retries - 1, delay * 2);
  }
}

export async function POST(request: Request): Promise<Response> {
  const streamState: StreamState = {
    isStarted: false,
    isProcessing: false,
    isComplete: false,
    error: null
  };

  try {
    const {
      id,
      messages,
      modelId,
    }: { id: string; messages: Array<Message>; modelId: string } =
      await request.json();

    const session = await auth();

    if (!session?.user?.id) {
      return new Response('Unauthorized', { status: 401 });
    }

    const model = models.find((model) => model.id === modelId);

    if (!model) {
      return new Response('Model not found', { status: 404 });
    }

    const providerConfig = PROVIDER_CONFIGS[model.apiIdentifier as keyof typeof PROVIDER_CONFIGS] || PROVIDER_CONFIGS.default;

    // Enhanced cache check with validation
    const cacheKey = `${id}-${messages.length}`;
    const cachedData = messageCache.get(cacheKey);
    if (cachedData && 
        Date.now() - cachedData.timestamp < 5000 && 
        Array.isArray(cachedData.messages) && 
        cachedData.messages.length > 0) {
      return new Response(JSON.stringify(cachedData.messages), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const coreMessages = convertToCoreMessages(messages);
    const userMessage = getMostRecentUserMessage(coreMessages);

    if (!userMessage) {
      return new Response('No user message found', { status: 400 });
    }

    const validMessages = normalizeMessagesForProvider(
      coreMessages.filter(
        (msg): msg is CoreUserMessage | CoreAssistantMessage =>
          msg.role === 'user' || msg.role === 'assistant'
      ),
      model.apiIdentifier
    );

    if (validMessages.length === 0) {
      return new Response('Invalid message format', { status: 400 });
    }

    const chat = await getChatById({ id });

    if (!chat) {
      const title = await generateTitleFromUserMessage({ message: userMessage });
      await saveChat({ id, userId: session.user.id, title });
    }

    const userMessageId = generateUUID();

    await saveMessages({
      messages: [
        { ...userMessage, id: userMessageId, createdAt: new Date(), chatId: id },
      ],
    });

    // Enhanced retry logic with state management and proper typing
    const executeStreamResponse = async (retries: number): Promise<Response> => {
      for (let i = 0; i < retries; i++) {
        try {
          const responsePromise = createDataStreamResponse({
            execute: async (dataStream) => {
              try {
                if (!streamState.isStarted) {
                  dataStream.writeData({
                    type: 'start',
                    content: { state: 'started' }
                  });
                  streamState.isStarted = true;
                }

                dataStream.writeData({
                  type: 'user-message-id',
                  content: userMessageId,
                });

                const result = await retryWithBackoff(async () => 
                  streamText({
                    model: customModel(model.apiIdentifier),
                    system: systemPrompt,
                    messages: validMessages,
                    maxSteps: 5,
                    experimental_activeTools: allTools,
                    tools: {
                      getWeather: {
                        description: 'Get the current weather at a location',
                        parameters: z.object({
                          latitude: z.number(),
                          longitude: z.number(),
                        }),
                        execute: async ({ latitude, longitude }) => {
                          const response = await fetch(
                            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&hourly=temperature_2m&daily=sunrise,sunset&timezone=auto`,
                          );

                          const weatherData = await response.json();
                          return weatherData;
                        },
                      },
                      createDocument: {
                        description:
                          'Create a document for a writing activity. This tool will call other functions that will generate the contents of the document based on the title and kind.',
                        parameters: z.object({
                          title: z.string(),
                          kind: z.enum(['text', 'code']),
                        }),
                        execute: async ({ title, kind }) => {
                          const id = generateUUID();
                          let draftText = '';

                          dataStream.writeData({
                            type: 'id',
                            content: id,
                          });

                          dataStream.writeData({
                            type: 'title',
                            content: title,
                          });

                          dataStream.writeData({
                            type: 'kind',
                            content: kind,
                          });

                          dataStream.writeData({
                            type: 'clear',
                            content: '',
                          });

                          if (kind === 'text') {
                            const { fullStream } = streamText({
                              model: customModel(model.apiIdentifier),
                              system:
                                'Write about the given topic. Markdown is supported. Use headings wherever appropriate.',
                              prompt: title,
                            });

                            for await (const delta of fullStream) {
                              const { type } = delta;

                              if (type === 'text-delta') {
                                const { textDelta } = delta;
                                if (textDelta) {
                                  draftText += textDelta;
                                  dataStream.writeData({
                                    type: 'text-delta',
                                    content: textDelta,
                                  });
                                }
                              }
                            }

                            dataStream.writeData({ type: 'finish', content: '' });
                          } else if (kind === 'code') {
                            const { fullStream } = streamObject({
                              model: customModel(model.apiIdentifier),
                              system: codePrompt,
                              prompt: title,
                              schema: z.object({
                                code: z.string(),
                              }),
                            });

                            for await (const delta of fullStream) {
                              const { type } = delta;

                              if (type === 'object') {
                                const { object } = delta;
                                const { code } = object;

                                if (code) {
                                  dataStream.writeData({
                                    type: 'code-delta',
                                    content: code,
                                  });

                                  draftText = code;
                                }
                              }
                            }

                            dataStream.writeData({ type: 'finish', content: '' });
                          }

                          if (session.user?.id && draftText.trim()) {
                            try {
                              await saveDocument({
                                id,
                                title,
                                kind,
                                content: draftText,
                                userId: session.user.id,
                              });

                              return {
                                id,
                                title,
                                kind,
                                content: 'A document was created and is now visible to the user.',
                              };
                            } catch (error) {
                              console.error('Failed to save document:', error);
                              return {
                                error: 'Failed to save document',
                              };
                            }
                          } else {
                            console.error('Failed to create document: Empty content or missing user');
                            return {
                              error: 'Failed to create document due to empty content or missing user',
                            };
                          }
                        },
                      },
                      updateDocument: {
                        description: 'Update a document with the given description.',
                        parameters: z.object({
                          id: z.string().describe('The ID of the document to update'),
                          description: z
                            .string()
                            .describe('The description of changes that need to be made'),
                        }),
                        execute: async ({ id, description }) => {
                          const document = await getDocumentById({ id });

                          if (!document) {
                            return {
                              error: 'Document not found',
                            };
                          }

                          const { content: currentContent } = document;
                          let draftText = '';

                          dataStream.writeData({
                            type: 'clear',
                            content: document.title,
                          });

                          if (document.kind === 'text') {
                            const { fullStream } = streamText({
                              model: customModel(model.apiIdentifier),
                              system: updateDocumentPrompt(currentContent),
                              prompt: description,
                              experimental_providerMetadata: {
                                openai: {
                                  prediction: {
                                    type: 'content',
                                    content: currentContent,
                                  },
                                },
                              },
                            });

                            for await (const delta of fullStream) {
                              const { type } = delta;

                              if (type === 'text-delta') {
                                const { textDelta } = delta;

                                draftText += textDelta;
                                dataStream.writeData({
                                  type: 'text-delta',
                                  content: textDelta,
                                });
                              }
                            }

                            dataStream.writeData({ type: 'finish', content: '' });
                          } else if (document.kind === 'code') {
                            const { fullStream } = streamObject({
                              model: customModel(model.apiIdentifier),
                              system: updateDocumentPrompt(currentContent),
                              prompt: description,
                              schema: z.object({
                                code: z.string(),
                              }),
                            });

                            for await (const delta of fullStream) {
                              const { type } = delta;

                              if (type === 'object') {
                                const { object } = delta;
                                const { code } = object;

                                if (code) {
                                  dataStream.writeData({
                                    type: 'code-delta',
                                    content: code ?? '',
                                  });

                                  draftText = code;
                                }
                              }
                            }

                            dataStream.writeData({ type: 'finish', content: '' });
                          }

                          if (session.user?.id) {
                            await saveDocument({
                              id,
                              title: document.title,
                              content: draftText,
                              kind: document.kind,
                              userId: session.user.id,
                            });
                          }

                          return {
                            id,
                            title: document.title,
                            kind: document.kind,
                            content: 'The document has been updated successfully.',
                          };
                        },
                      },
                      requestSuggestions: {
                        description: 'Request suggestions for a document',
                        parameters: z.object({
                          documentId: z
                            .string()
                            .describe('The ID of the document to request edits'),
                        }),
                        execute: async ({ documentId }) => {
                          const document = await getDocumentById({ id: documentId });

                          if (!document || !document.content) {
                            return {
                              error: 'Document not found',
                            };
                          }

                          const suggestions: Array<
                            Omit<Suggestion, 'userId' | 'createdAt' | 'documentCreatedAt'>
                          > = [];

                          const { elementStream } = streamObject({
                            model: customModel(model.apiIdentifier),
                            system:
                              'You are a help writing assistant. Given a piece of writing, please offer suggestions to improve the piece of writing and describe the change. It is very important for the edits to contain full sentences instead of just words. Max 5 suggestions.',
                            prompt: document.content,
                            output: 'array',
                            schema: z.object({
                              originalSentence: z
                                .string()
                                .describe('The original sentence'),
                              suggestedSentence: z
                                .string()
                                .describe('The suggested sentence'),
                              description: z
                                .string()
                                .describe('The description of the suggestion'),
                            }),
                          });

                          for await (const element of elementStream) {
                            const suggestion = {
                              originalText: element.originalSentence,
                              suggestedText: element.suggestedSentence,
                              description: element.description,
                              id: generateUUID(),
                              documentId: documentId,
                              isResolved: false,
                            };

                            dataStream.writeData({
                              type: 'suggestion',
                              content: suggestion,
                            });

                            suggestions.push(suggestion);
                          }

                          if (session.user?.id) {
                            const userId = session.user.id;

                            await saveSuggestions({
                              suggestions: suggestions.map((suggestion) => ({
                                ...suggestion,
                                userId,
                                createdAt: new Date(),
                                documentCreatedAt: document.createdAt,
                              })),
                            });
                          }

                          return {
                            id: documentId,
                            title: document.title,
                            kind: document.kind,
                            message: 'Suggestions have been added to the document',
                          };
                        },
                      },
                    },
                    onFinish: async ({ response }) => {
                      if (session.user?.id) {
                        try {
                          if (!validateResponse(response)) {
                            dataStream.writeData({
                              type: 'error',
                              content: {
                                message: 'Invalid response format',
                                recoverable: false
                              }
                            });
                            return;
                          }

                          const validMessages = sanitizeResponseMessages(response.messages);
                          
                          if (!validMessages?.length) {
                            dataStream.writeData({
                              type: 'error',
                              content: {
                                message: 'No valid response received',
                                recoverable: true
                              }
                            });
                            return;
                          }

                          const messagesToSave = processMessagesForProvider(
                            validMessages,
                            model.apiIdentifier
                          )
                            .filter((message): message is CoreAssistantMessage => {
                              if (!message || message.role !== 'assistant') return false;
                              return typeof message.content === 'string' && message.content.trim().length > 0;
                            })
                            .map((message) => {
                              const messageId = generateUUID();
                              
                              dataStream.writeMessageAnnotation({
                                messageIdFromServer: messageId,
                              });

                              const normalizedContent = normalizeContent(message.content);
                              
                              // Use enhanced stream handling
                              handleStreamWithRecovery(dataStream, normalizedContent, 'text', streamState);

                              return {
                                id: messageId,
                                chatId: id,
                                role: message.role,
                                content: normalizedContent,
                                createdAt: new Date(),
                              };
                            });

                          if (messagesToSave.length > 0) {
                            await saveMessages({ messages: messagesToSave });
                            messageCache.set(cacheKey, {
                              messages: messagesToSave,
                              timestamp: Date.now()
                            });
                            
                            dataStream.writeData({
                              type: 'saved',
                              content: { state: 'saved' }
                            });
                          }
                        } catch (error) {
                          console.error('Failed to save chat:', error instanceof Error ? error.message : String(error));
                          dataStream.writeData({
                            type: 'error',
                            content: {
                              message: 'Failed to save message',
                              recoverable: true,
                              error: error instanceof Error ? error.message : 'Unknown error'
                            }
                          });
                        }
                      }
                    },
                  })
                );

                await result.mergeIntoDataStream(dataStream);
                
                if (!streamState.error && !streamState.isComplete) {
                  streamState.isComplete = true;
                  dataStream.writeData({
                    type: 'complete',
                    content: { state: 'completed' }
                  });
                }
              } catch (streamError) {
                if (i === retries - 1) {
                  streamState.error = streamError instanceof Error ? streamError.message : 'Stream failed';
                  console.error('Final streaming attempt failed:', streamState.error);
                  dataStream.writeData({
                    type: 'error',
                    content: {
                      message: 'Failed to stream response',
                      recoverable: false,
                      error: streamState.error
                    }
                  });
                } else {
                  throw streamError; // Retry
                }
              }
            },
          });

          const timeoutPromise = new Promise<never>((_, reject) => {
            setTimeout(() => {
              streamState.error = 'Response timeout';
              reject(new Error('Response timeout'));
            }, providerConfig.timeout);
          });

          return await Promise.race([responsePromise, timeoutPromise]);
        } catch (error) {
          if (i === retries - 1) {
            return new Response(
              JSON.stringify({
                error: error instanceof Error ? error.message : 'Unknown error',
                recoverable: false
              }),
              { status: 500 }
            );
          }
          await new Promise(resolve => setTimeout(resolve, INITIAL_RETRY_DELAY * Math.pow(2, i)));
        }
      }
      
      // Fallback response if all retries fail
      return new Response(
        JSON.stringify({
          error: 'All retry attempts failed',
          recoverable: false
        }),
        { status: 500 }
      );
    };

    return await executeStreamResponse(providerConfig.retries);
  } catch (error) {
    console.error('Chat API error:', error instanceof Error ? error.message : String(error));
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}

export async function DELETE(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new Response('Not Found', { status: 404 });
  }

  const session = await auth();

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const chat = await getChatById({ id });

    if (!chat || chat.userId !== session.user.id) {
      return new Response('Unauthorized', { status: 401 });
    }

    await deleteChatById({ id });

    return new Response(
      JSON.stringify({ message: 'Chat deleted successfully' }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
