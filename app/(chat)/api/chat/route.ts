import { fal } from '@fal-ai/client';
import { uploadImageToSupabase } from '@/lib/supabase';

// Configure FAL.ai client
fal.config({
  credentials: process.env.FAL_KEY,
});

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
import { put } from '@vercel/blob';

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
  | 'getWeather'
  | 'generateImage';

const blocksTools: AllowedTools[] = [
  'createDocument',
  'updateDocument',
  'requestSuggestions',
];

const weatherTools: AllowedTools[] = ['getWeather'];
const imageTools: AllowedTools[] = ['generateImage'];

const allTools: AllowedTools[] = [...blocksTools, ...weatherTools, ...imageTools];

console.log('\n=== Available Tools ===');
console.log('Image Tools:', imageTools);
console.log('All Tools:', allTools);
console.log('=== End Available Tools ===\n');

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
      msg.role === 'assistant' && 
      isValidMessageContent(msg.content) &&
      // Skip empty messages after normalization
      normalizeContent(msg.content).length > 0
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
    // Skip confirmation messages for images
    if (content.toLowerCase().startsWith('here is')) {
      return '';
    }
    return content.trim();
  }
  
  const textParts = content
    .filter((c): c is TextPart => 
      c.type === 'text' && 
      'text' in c &&
      // Skip any confirmation messages
      !c.text.toLowerCase().startsWith('here is')
    )
    .map(c => c.text);

  return textParts.join(' ').trim();
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

// Add type definitions at the top
type ImageSize = 'square' | 'portrait_4_3' | 'landscape_4_3' | 'portrait_16_9' | 'landscape_16_9' | 'square_hd';

interface FalResponse {
  data: {
    images: Array<{
      url: string;
      width?: number;
      height?: number;
    }>;
  };
}

// Update ToolResult interface to include new properties
interface ToolResult {
  error?: string;
  images?: Array<{
    url: string;
    width: number;
    height: number;
    error?: string;
  }>;
  partialSuccess?: boolean;
  totalGenerated?: number;
  successfullyProcessed?: number;
  errorDetails?: {
    message: string;
    timestamp: string;
    prompt: string;
    requestedImages: number;
  };
}

interface Tool {
  name: string;
  description: string;
  parameters: z.ZodObject<any>;
  execute: (args: any) => Promise<ToolResult>;
}

// Use model directly without logging middleware
const model = customModel('gpt-4');

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

    console.log('\n=== Request Debug ===');
    console.log('Latest message:', messages[messages.length - 1]);
    console.log('Model ID:', modelId);
    console.log('=== End Request Debug ===\n');

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

                const tools = {
                  createDocument: {
                    name: 'createDocument',
                    description: 'Create a document for writing text or code',
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
                          system: 'Write about the given topic. Markdown is supported. Use headings wherever appropriate.',
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
                  } as Tool,
                  getWeather: {
                    name: 'getWeather',
                    description: 'Get the current weather at a location',
                    parameters: z.object({
                      latitude: z.number(),
                      longitude: z.number(),
                    }),
                    execute: async ({ latitude, longitude }: { latitude: number; longitude: number }) => {
                      try {
                        const response = await fetch(
                          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&hourly=temperature_2m&daily=sunrise,sunset&timezone=auto`,
                        );
                        const weatherData = await response.json();
                        return weatherData;
                      } catch (error) {
                        console.error('Weather API error:', error);
                        return { error: 'Failed to fetch weather data' };
                      }
                    },
                  } as Tool,
                  generateImage: {
                    name: 'generateImage',
                    description: 'Generate images using FLUX AI model based on a text prompt',
                    parameters: z.object({
                      prompt: z.string().describe('The text prompt to generate images from'),
                      num_images: z.number().default(1).describe('Number of images to generate'),
                      image_size: z.enum(['square', 'portrait_4_3', 'landscape_4_3', 'portrait_16_9', 'landscape_16_9', 'square_hd'])
                        .default('landscape_4_3')
                        .describe('Size/aspect ratio of the generated image'),
                    }),
                    execute: async ({ prompt, num_images = 1, image_size = 'landscape_4_3' }: {
                      prompt: string;
                      num_images?: number;
                      image_size?: ImageSize;
                    }): Promise<ToolResult> => {
                      try {
                        console.log('\n=== GENERATE IMAGE EXECUTION START ===');
                        console.log('Parameters:', { prompt, num_images, image_size });
                        
                        if (!process.env.FAL_KEY) {
                          console.error('FAL_KEY is missing in environment variables');
                          throw new Error('FAL_KEY is not configured');
                        }

                        if (!prompt.trim()) {
                          throw new Error('Empty prompt provided');
                        }

                        fal.config({
                          credentials: process.env.FAL_KEY,
                        });

                        console.log('Making request to FAL.ai with model: fal-ai/flux/schnell');
                        
                        const result = await fal.subscribe('fal-ai/flux/schnell', {
                          input: {
                            prompt,
                            image_size,
                            num_images,
                            sync_mode: true
                          },
                          pollInterval: 1000,
                          onQueueUpdate: (update) => {
                            console.log('Generation status:', update);
                          }
                        });

                        if (!result.data?.images?.length) {
                          throw new Error('No images generated by FAL.ai');
                        }

                        const savedImages = await Promise.all(
                          result.data.images.map(async (image, index: number) => {
                            try {
                              if (!image?.url) {
                                throw new Error(`Image ${index + 1} has no URL`);
                              }

                              const publicUrl = await uploadImageToSupabase(image.url);
                              if (!publicUrl) {
                                throw new Error(`Failed to upload image ${index + 1} to Supabase`);
                              }

                              // Ensure we have valid numbers for width and height
                              const width = typeof image.width === 'number' ? image.width : 1024;
                              const height = typeof image.height === 'number' ? image.height : 768;

                              return {
                                url: publicUrl,
                                width,
                                height,
                              };
                            } catch (uploadError) {
                              console.error(`Upload error for image ${index + 1}:`, uploadError);
                              // Return fallback with original URL
                              return {
                                url: image.url,
                                width: typeof image.width === 'number' ? image.width : 1024,
                                height: typeof image.height === 'number' ? image.height : 768,
                                error: uploadError instanceof Error ? uploadError.message : 'Upload failed'
                              };
                            }
                          })
                        );

                        const successfulImages = savedImages.filter(img => !img.error);
                        if (successfulImages.length === 0) {
                          throw new Error('Failed to process any images successfully');
                        }

                        return { 
                          images: successfulImages,
                          partialSuccess: successfulImages.length < result.data.images.length,
                          totalGenerated: result.data.images.length,
                          successfullyProcessed: successfulImages.length
                        };
                      } catch (error) {
                        console.error('Fatal error in image generation:', error);
                        const errorMessage = error instanceof Error ? error.message : 'Unknown error in image generation';
                        return {
                          error: errorMessage,
                          errorDetails: {
                            message: errorMessage,
                            timestamp: new Date().toISOString(),
                            prompt,
                            requestedImages: num_images
                          },
                          images: [] // Empty array for type consistency
                        };
                      }
                    },
                  } as Tool,
                };

                // Add debug logging for tool registration
                console.log('\n=== TOOLS CONFIGURATION ===');
                console.log('Registered tools:', Object.keys(tools));
                console.log('Active tools:', ['createDocument', 'getWeather', 'generateImage']);
                console.log('=== END TOOLS CONFIGURATION ===\n');

                const result = await retryWithBackoff(async () => 
                  streamText({
                    model: customModel(model.apiIdentifier),
                    system: systemPrompt + '\nYou have access to the following tools:\n' +
                      '1. createDocument - Use this to create text documents or code examples\n' +
                      '2. generateImage - Use this to generate images from text descriptions\n' +
                      '3. getWeather - Use this to get weather information for a specific location\n\n' +
                      'Please choose the appropriate tool based on the user\'s request.',
                    messages: validMessages,
                    tools,
                    experimental_activeTools: ['createDocument', 'getWeather', 'generateImage'],
                    maxSteps: 5,
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
                              
                              // Skip streaming for tool calls to prevent duplicates
                              if (!message.content.toString().includes('generateImage')) {
                                handleStreamWithRecovery(dataStream, normalizedContent, 'text', streamState);
                              }

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
