import { NextResponse } from 'next/server';
import { fal } from '@fal-ai/client';

if (!process.env.FAL_KEY) {
  throw new Error('FAL_KEY environment variable is not set');
}

fal.config({
  credentials: process.env.FAL_KEY,
});

interface FluxImage {
  url: string;
  width: number;
  height: number;
  content_type: string;
}

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: 'Prompt is required' },
        { status: 400 }
      );
    }

    console.log('Starting image generation with prompt:', prompt);

    const result = await fal.subscribe('fal-ai/flux/schnell', {
      input: {
        prompt,
        image_size: 'landscape_4_3',
        num_inference_steps: 4,
        num_images: 1,
        enable_safety_checker: true
      },
      pollInterval: 1000, // Poll every second
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === 'IN_PROGRESS') {
          console.log('Generation progress:', update.logs.map((log) => log.message));
        }
      }
    });

    console.log('Raw API Response:', JSON.stringify(result, null, 2));

    if (!result?.data?.images) {
      console.error('Invalid response from FLUX API:', result);
      throw new Error('Invalid response from image generation API');
    }

    const images = result.data.images as FluxImage[];
    
    if (!Array.isArray(images) || images.length === 0) {
      console.error('No images in FLUX response:', result.data);
      throw new Error('No images generated');
    }

    // Extract and validate image URLs
    const validImages = images
      .map(img => img.url)
      .filter((url): url is string => 
        typeof url === 'string' && url.startsWith('http')
      );
    
    if (validImages.length === 0) {
      console.error('No valid image URLs in response:', images);
      throw new Error('No valid image URLs generated');
    }

    return NextResponse.json({
      success: true,
      images: validImages,
      seed: result.data.seed
    });
  } catch (error) {
    console.error('Error in generate-art API:', error);
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Failed to generate image';
      
    return NextResponse.json(
      { 
        success: false,
        error: errorMessage
      },
      { status: 500 }
    );
  }
} 