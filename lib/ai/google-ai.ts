import { createGoogleGenerativeAI } from '@ai-sdk/google';

// Initialize the Google AI provider
export const googleAI = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});

// Create model instances
export const gemini2Flash = googleAI('gemini-2.0-flash-exp');
export const geminiExp = googleAI('gemini-exp-1206');
export const gemini2FlashThinking = googleAI('gemini-2.0-flash-thinking-exp-1219');

// Helper function to get model by name
export function getGoogleModel(modelName: string) {
  switch (modelName) {
    case 'gemini-2.0-flash-exp':
      return gemini2Flash;
    case 'gemini-exp-1206':
      return geminiExp;
    case 'gemini-2.0-flash-thinking-exp-1219':
      return gemini2FlashThinking;
    default:
      throw new Error(`Unknown Google AI model: ${modelName}`);
  }
} 