import { openai } from '@ai-sdk/openai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createAnthropic } from '@ai-sdk/anthropic';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { models } from './models';
import { customMiddleware } from './custom-middleware';

const googleAI = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const customModel = (apiIdentifier: string) => {
  if (apiIdentifier === 'gemini-2.0-flash-exp') {
    return wrapLanguageModel({
      model: googleAI('gemini-2.0-flash-exp'),
      middleware: customMiddleware,
    });
  }

  if (apiIdentifier === 'gemini-exp-1206') {
    return wrapLanguageModel({
      model: googleAI('gemini-exp-1206'),
      middleware: customMiddleware,
    });
  }

  if (apiIdentifier === 'claude-3-5-sonnet-20241022') {
    return wrapLanguageModel({
      model: anthropic('claude-3-5-sonnet-20241022'),
      middleware: customMiddleware,
    });
  }

  if (apiIdentifier === 'claude-3-5-haiku-20241022') {
    return wrapLanguageModel({
      model: anthropic('claude-3-5-haiku-20241022'),
      middleware: customMiddleware,
    });
  }

  if (apiIdentifier === 'gemini-2.0-flash-thinking-exp-1219') {
    return wrapLanguageModel({
      model: googleAI('gemini-2.0-flash-thinking-exp-1219'),
      middleware: customMiddleware,
    });
  }
  
  return wrapLanguageModel({
    model: openai(apiIdentifier),
    middleware: customMiddleware,
  });
};

// Export individual model instances for direct use
export const models_instances = {
  'gpt-4o-mini': customModel('gpt-4o-mini'),
  'gpt-4o': customModel('gpt-4o'),
  'gemini-2.0-flash-exp': customModel('gemini-2.0-flash-exp'),
  'gemini-exp-1206': customModel('gemini-exp-1206'),
  'gemini-2.0-flash-thinking-exp-1219': customModel('gemini-2.0-flash-thinking-exp-1219'),
};

// Helper to get model instance by ID
export function getModelInstance(modelId: string) {
  const model = models.find((m: { id: string }) => m.id === modelId);
  if (!model) {
    throw new Error(`Model ${modelId} not found`);
  }
  return customModel(model.apiIdentifier);
}
