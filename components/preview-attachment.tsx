import type { Attachment } from 'ai';
import { FileIcon, LoaderIcon } from './icons';
import { cn } from '@/lib/utils';

export const PreviewAttachment = ({
  attachment,
  isUploading = false,
  onRemove,
}: {
  attachment: Attachment;
  isUploading?: boolean;
  onRemove?: () => void;
}) => {
  const { name, url, contentType } = attachment;

  return (
    <div className="group relative">
      <div className="flex flex-col gap-2">
        <div className="relative w-20 h-16 bg-muted rounded-lg overflow-hidden border border-border">
          {contentType ? (
            contentType.startsWith('image') ? (
              <div className="relative w-full h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={url}
                  src={url}
                  alt={name ?? 'An image attachment'}
                  className="size-full object-cover"
                />
                {onRemove && !isUploading && (
                  <button
                    onClick={onRemove}
                    className="absolute top-1 right-1 p-1 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Remove attachment"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                )}
              </div>
            ) : contentType === 'application/pdf' ? (
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full h-full hover:bg-black/5 transition-colors"
              >
                <FileIcon className="w-8 h-8 text-zinc-500" />
                {onRemove && !isUploading && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemove();
                    }}
                    className="absolute top-1 right-1 p-1 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Remove attachment"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                )}
              </a>
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <FileIcon className="w-8 h-8 text-zinc-500" />
              </div>
            )
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <FileIcon className="w-8 h-8 text-zinc-500" />
            </div>
          )}

          {isUploading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
              <div className="animate-spin text-white">
                <LoaderIcon className="w-6 h-6" />
              </div>
            </div>
          )}
        </div>
        <div className="text-xs text-zinc-500 max-w-16 truncate px-1">{name}</div>
      </div>
    </div>
  );
};
