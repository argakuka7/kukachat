'use client';

import type {
  Attachment,
  ChatRequestOptions,
  CreateMessage,
  Message,
} from 'ai';
import type { CustomAttachment } from '@/lib/types';
import cx from 'classnames';
import type React from 'react';
import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
  memo,
} from 'react';
import { toast } from 'sonner';
import { useLocalStorage, useWindowSize } from 'usehooks-ts';

import { sanitizeUIMessages } from '@/lib/utils';

import { ArrowUpIcon, PaperclipIcon, StopIcon } from './icons';
import { PreviewAttachment } from './preview-attachment';
import { Button } from './ui/button';
import { AIInputWithSearch } from './ui/ai-input-with-search';
import { SuggestedActions } from './suggested-actions';
import equal from 'fast-deep-equal';

function PureMultimodalInput({
  chatId,
  input,
  setInput,
  isLoading,
  stop,
  attachments,
  setAttachments,
  messages,
  setMessages,
  append,
  handleSubmit,
  className,
}: {
  chatId: string;
  input: string;
  setInput: (value: string) => void;
  isLoading: boolean;
  stop: () => void;
  attachments: Array<Attachment>;
  setAttachments: Dispatch<SetStateAction<Array<Attachment>>>;
  messages: Array<Message>;
  setMessages: Dispatch<SetStateAction<Array<Message>>>;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions,
  ) => Promise<string | null | undefined>;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions,
  ) => void;
  className?: string;
}) {
  const { width } = useWindowSize();
  const [showSearch, setShowSearch] = useState(true);

  const [localStorageInput, setLocalStorageInput] = useLocalStorage(
    'input',
    '',
  );

  useEffect(() => {
    const finalValue = localStorageInput || '';
    setInput(finalValue);
  }, []);

  useEffect(() => {
    setLocalStorageInput(input);
  }, [input, setLocalStorageInput]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadQueue, setUploadQueue] = useState<Array<string>>([]);

  const submitForm = useCallback(() => {
    if (isLoading) {
      toast.error('Please wait for the model to finish its response!');
      return;
    }

    window.history.replaceState({}, '', `/chat/${chatId}`);

    handleSubmit(undefined, {
      experimental_attachments: attachments,
    });

    setAttachments([]);
    setLocalStorageInput('');
  }, [
    attachments,
    handleSubmit,
    setAttachments,
    setLocalStorageInput,
    chatId,
    isLoading,
  ]);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    // Validate files before upload
    const invalidFiles = files.filter(file => {
      const isPdf = file.type === 'application/pdf';
      const isCsv = file.type === 'text/csv' || file.name.endsWith('.csv');
      const maxAllowedSize = isPdf ? 10 * 1024 * 1024 : 
                            isCsv ? 5 * 1024 * 1024 : 
                            5 * 1024 * 1024; // 5MB default
      
      return file.size > maxAllowedSize;
    });

    if (invalidFiles.length > 0) {
      const fileNames = invalidFiles.map(f => f.name).join(', ');
      toast.error(`File(s) too large: ${fileNames}. PDFs must be under 10MB, other files under 5MB.`);
      return;
    }

    setUploadQueue(files.map((file) => file.name));

    try {
      const uploadPromises = files.map((file) => uploadFile(file));
      const uploadedAttachments = await Promise.all(uploadPromises);
      const successfullyUploadedAttachments = uploadedAttachments.filter(
        (attachment): attachment is CustomAttachment => attachment !== undefined,
      );

      setAttachments(prev => [...prev, ...successfullyUploadedAttachments]);
      setUploadQueue([]);
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload files, please try again!');
      setUploadQueue([]);
    }
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/files/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const { error } = await response.json();
        toast.error(error || 'Failed to upload file');
        return;
      }

      const data = await response.json();
      const { url, pathname, contentType } = data;

      return {
        url,
        name: pathname,
        contentType: contentType || (file.name.endsWith('.csv') ? 'text/csv' : file.type),
      };
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload file, please try again!');
    }
  };

  const convertedAttachments = attachments
    .map(attachment => {
      if (!attachment.name) return null;
      return {
        url: attachment.url || '',
        name: attachment.name,
        contentType: attachment.contentType || 'application/octet-stream',
        llmData: undefined
      } as CustomAttachment;
    })
    .filter((a): a is CustomAttachment => a !== null);

  return (
    <div className={cx('relative flex flex-col w-full gap-4', className)}>
      {messages.length === 0 && !isLoading && input.length === 0 && (
        <div className="w-full">
          <SuggestedActions append={append} chatId={chatId} />
        </div>
      )}

      <div className="flex flex-col flex-grow">
        {convertedAttachments.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {convertedAttachments.map((attachment) => (
              <PreviewAttachment
                key={attachment.url}
                attachment={attachment}
                onRemove={() => {
                  setAttachments((prev) =>
                    prev.filter((a) => a.url !== attachment.url)
                  );
                }}
              />
            ))}
          </div>
        )}

        <div className="relative flex items-end w-full gap-2">
          <AIInputWithSearch
            value={input}
            onChange={setInput}
            placeholder="Message..."
            onSubmit={(value, withSearch) => {
              submitForm();
            }}
            onFileSelect={(file) => {
              if (fileInputRef.current) {
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                fileInputRef.current.files = dataTransfer.files;
                handleFileChange({ target: fileInputRef.current } as ChangeEvent<HTMLInputElement>);
              }
            }}
            className="flex-grow"
            minHeight={24}
            maxHeight={window.innerHeight * 0.75}
          />

          <input
            ref={fileInputRef}
            className="hidden"
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.csv"
            multiple
          />
        </div>
      </div>
    </div>
  );
}

export const MultimodalInput = memo(PureMultimodalInput, (prevProps, nextProps) => {
  return (
    prevProps.input === nextProps.input &&
    prevProps.isLoading === nextProps.isLoading &&
    equal(prevProps.attachments, nextProps.attachments) &&
    equal(prevProps.messages, nextProps.messages)
  );
});

function PureAttachmentsButton({
  fileInputRef,
  isLoading,
}: {
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
  isLoading: boolean;
}) {
  return (
    <Button
      className="rounded-md rounded-bl-lg p-[7px] h-fit dark:border-zinc-700 hover:dark:bg-zinc-900 hover:bg-zinc-200"
      onClick={(event) => {
        event.preventDefault();
        fileInputRef.current?.click();
      }}
      disabled={isLoading}
      variant="ghost"
    >
      <PaperclipIcon size={14} />
    </Button>
  );
}

const AttachmentsButton = memo(PureAttachmentsButton);

function PureStopButton({
  stop,
  setMessages,
}: {
  stop: () => void;
  setMessages: Dispatch<SetStateAction<Array<Message>>>;
}) {
  return (
    <Button
      className="rounded-full p-1.5 h-fit border dark:border-zinc-600"
      onClick={(event) => {
        event.preventDefault();
        stop();
        setMessages((messages) => sanitizeUIMessages(messages));
      }}
    >
      <StopIcon size={14} />
    </Button>
  );
}

const StopButton = memo(PureStopButton);

function PureSendButton({
  submitForm,
  input,
  uploadQueue,
}: {
  submitForm: () => void;
  input: string;
  uploadQueue: Array<string>;
}) {
  return (
    <Button
      className="rounded-full p-1.5 h-fit border dark:border-zinc-600"
      onClick={(event) => {
        event.preventDefault();
        submitForm();
      }}
      disabled={input.length === 0 || uploadQueue.length > 0}
    >
      <ArrowUpIcon size={14} />
    </Button>
  );
}

const SendButton = memo(PureSendButton, (prevProps, nextProps) => {
  if (prevProps.uploadQueue.length !== nextProps.uploadQueue.length)
    return false;
  if (prevProps.input !== nextProps.input) return false;
  return true;
});
