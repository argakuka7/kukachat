import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

async function retryUpload(
  filename: string, 
  blob: Blob, 
  options: any, 
  maxRetries = 3
): Promise<any> {
  let lastError;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      console.log(`Upload attempt ${i + 1} of ${maxRetries}...`);
      const { data, error } = await supabase.storage
        .from('images')
        .upload(filename, blob, options);

      if (error) {
        console.error(`Attempt ${i + 1} failed:`, error);
        lastError = error;
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        continue;
      }

      return { data, error: null };
    } catch (err) {
      console.error(`Attempt ${i + 1} failed with exception:`, err);
      lastError = err;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }

  return { data: null, error: lastError };
}

export async function uploadImageToSupabase(imageUrl: string): Promise<string> {
  try {
    console.log('Starting Supabase upload for image:', imageUrl);

    // Fetch the image from the URL
    console.log('Fetching image from URL...');
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    
    const blob = await response.blob();
    console.log('Image fetched successfully, size:', blob.size);

    // Generate a unique filename
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substring(7);
    const filename = `generated-images/${timestamp}-${randomId}.png`;
    console.log('Generated filename:', filename);

    // Upload to Supabase Storage with retry
    console.log('Uploading to Supabase...');
    const { data, error } = await retryUpload(filename, blob, {
      contentType: 'image/png',
      cacheControl: '3600',
      upsert: false
    });

    if (error) {
      console.error('All upload attempts failed:', error);
      throw error;
    }

    console.log('Upload successful:', data);

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filename);

    console.log('Generated public URL:', publicUrl);
    return publicUrl;
  } catch (error) {
    console.error('Error in uploadImageToSupabase:', error);
    throw error;
  }
} 