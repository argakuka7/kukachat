import { createClient } from '@supabase/supabase-js';

// Initialize Supabase clients
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

// Client for public operations
export const supabase = createClient(supabaseUrl, supabaseKey);

// Admin client for operations that need elevated privileges
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

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
      // Use admin client for uploads
      const { data, error } = await supabaseAdmin.storage
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
    
    // Validate service role key
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('SUPABASE_SERVICE_ROLE_KEY is not configured');
    }

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const blob = await response.blob();
    const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const options = {
      cacheControl: '3600',
      upsert: false
    };

    const { data, error } = await retryUpload(filename, blob, options);
    
    if (error) {
      console.error('Error in uploadImageToSupabase:', error);
      throw error;
    }

    if (!data?.path) {
      throw new Error('Upload successful but no path returned');
    }

    const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${data.path}`;
    console.log('Successfully uploaded image to:', publicUrl);
    
    return publicUrl;
  } catch (error) {
    console.error('Error in uploadImageToSupabase:', error);
    throw error;
  }
} 