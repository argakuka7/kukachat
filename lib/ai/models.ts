// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
  provider: 'openai' | 'google' | 'anthropic';
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
    provider: 'openai',
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
    provider: 'openai',
  },
  {
    id: 'gemini-2-flash',
    label: 'Gemini 2.0 Flash',
    apiIdentifier: 'gemini-2.0-flash-exp',
    description: 'Fast, efficient model for quick responses',
    provider: 'google',
  },
  {
    id: 'gemini-exp',
    label: 'Gemini Experimental',
    apiIdentifier: 'gemini-exp-1206',
    description: 'Experimental model with latest features',
    provider: 'google',
  },
  {
    id: 'gemini-2-flash-thinking',
    label: 'Gemini 2.0 Flash Thinking',
    apiIdentifier: 'gemini-2.0-flash-thinking-exp-1219',
    description: 'Advanced model with enhanced reasoning',
    provider: 'google',
  },
  {
    id: 'claude-3.5-sonnet',
    label: 'Claude 3.5 Sonnet',
    apiIdentifier: 'claude-3-5-sonnet-20241022',
    description: 'Anthropic\'s Claude 3.5 Sonnet model',
    provider: 'anthropic',
  },
  {
    id: 'claude-3.5-haiku',
    label: 'Claude 3.5 Haiku',
    apiIdentifier: 'claude-3-5-haiku-20241022',
    description: 'Anthropic\'s Claude 3.5 Haiku model',
    provider: 'anthropic',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
