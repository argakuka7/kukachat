'use client';

import Image from 'next/image';
import { Card } from './ui/card';
import { Skeleton } from './ui/skeleton';
import { useState } from 'react';

interface ImagePreviewProps {
  images: Array<{
    url: string;
    width?: number;
    height?: number;
  }>;
}

export function ImagePreview({ images }: ImagePreviewProps) {
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<string, boolean>>({});

  if (!images || images.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <Card className="overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Skeleton className="h-full w-full" />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      {images.map((image, index) => (
        <Card key={image.url} className="overflow-hidden">
          <div className="relative aspect-[4/3]">
            {loadingImages[image.url] && (
              <Skeleton className="absolute inset-0 z-10" />
            )}
            <Image
              src={image.url}
              alt={`Generated image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              priority={index === 0}
              onLoadingComplete={() => {
                setLoadingImages(prev => ({
                  ...prev,
                  [image.url]: false
                }));
              }}
              onError={() => {
                setErrorImages(prev => ({
                  ...prev,
                  [image.url]: true
                }));
                console.error(`Failed to load image: ${image.url}`);
              }}
            />
            {errorImages[image.url] && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <p className="text-sm text-muted-foreground">Failed to load image</p>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
} 