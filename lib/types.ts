import type { Attachment as AIAttachment } from 'ai';

export interface CustomAttachment {
  url: string;
  name: string;
  contentType: string;
  llmData?: string;
}

export type { Message } from 'ai'; 