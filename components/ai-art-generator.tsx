'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface AiArtGeneratorProps {
  onImageGenerated: (imageUrl: string | null) => void;
}

interface FluxResponse {
  success: boolean;
  images?: string[];
  error?: string;
  seed?: number;
}

export function AiArtGenerator({ onImageGenerated }: AiArtGeneratorProps) {
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerate = useCallback(async () => {
    const trimmedPrompt = prompt.trim();
    if (!trimmedPrompt) return;
    
    setIsLoading(true);
    onImageGenerated(null);
    
    try {
      console.log('Sending request with prompt:', trimmedPrompt);
      
      const response = await fetch('/api/generate-art', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: trimmedPrompt })
      });
      
      const data: FluxResponse = await response.json();
      console.log('Full API Response:', data);
      
      if (!response.ok) {
        console.error('HTTP Error:', response.status, response.statusText);
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }
      
      if (!data.success) {
        console.error('API Error:', data.error);
        throw new Error(data.error || 'API returned unsuccessful response');
      }
      
      if (!data.images || !Array.isArray(data.images) || data.images.length === 0) {
        console.error('No images in response:', data);
        throw new Error('No images received from API');
      }

      const imageUrl = data.images[0];
      console.log('Received image URL:', imageUrl);

      if (typeof imageUrl !== 'string') {
        console.error('Invalid image URL type:', typeof imageUrl);
        throw new Error('Invalid image URL type received');
      }

      if (!imageUrl.startsWith('http')) {
        console.error('Invalid image URL format:', imageUrl);
        throw new Error('Invalid image URL format');
      }

      // Update state first
      onImageGenerated(imageUrl);
      
      // Then show toast
      requestAnimationFrame(() => {
        toast.success('Image generated successfully!');
      });
    } catch (error) {
      console.error('Detailed error:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
      
      requestAnimationFrame(() => {
        toast.error(error instanceof Error ? error.message : 'Failed to generate image');
      });
      onImageGenerated(null);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, onImageGenerated]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading && prompt.trim()) {
      handleGenerate();
    }
  }, [handleGenerate, isLoading, prompt]);

  return (
    <Card className="p-6">
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your art prompt..."
          disabled={isLoading}
          onKeyDown={handleKeyDown}
        />
        <Button
          onClick={handleGenerate}
          disabled={isLoading || !prompt.trim()}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate Art'
          )}
        </Button>
      </div>
    </Card>
  );
} 