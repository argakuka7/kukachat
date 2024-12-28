'use client';

import { useState, useCallback } from 'react';
import { AiArtGenerator } from '@/components/ai-art-generator';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Toaster } from 'sonner';

export default function AiArtPage() {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [imageError, setImageError] = useState<boolean>(false);

  const handleImageGenerated = useCallback((imageUrl: string | null) => {
    setGeneratedImage(imageUrl);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    console.error('Failed to load image:', generatedImage);
    setImageError(true);
  }, [generatedImage]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Toaster position="top-center" richColors closeButton />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">AI Art Generator</h1>
        <p className="text-muted-foreground mb-8">
          Enter a prompt to generate unique AI artwork using FLUX.
        </p>
        
        <AiArtGenerator onImageGenerated={handleImageGenerated} />

        {typeof generatedImage === 'string' && generatedImage.startsWith('http') && !imageError && (
          <Card className="mt-8 p-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src={generatedImage}
                alt="Generated artwork"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                unoptimized
                onError={handleImageError}
              />
            </div>
          </Card>
        )}

        {imageError && (
          <Card className="mt-8 p-4 bg-destructive/10">
            <p className="text-destructive text-center">
              Failed to load the generated image. Please try again.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
} 