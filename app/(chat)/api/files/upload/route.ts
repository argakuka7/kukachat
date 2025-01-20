import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { auth } from '@/app/(auth)/auth';

// Use Blob instead of File since File is not available in Node.js environment
const FileSchema = z.object({
  file: z
    .instanceof(Blob)
    .refine((file) => {
      // Get file type, handle CSV files specifically
      const type = file.type || '';
      const isCSV = type === 'text/csv' || (type === 'application/octet-stream' && file instanceof File && file.name.endsWith('.csv'));
      const isPDF = type === 'application/pdf';
      
      // Increase size limit for PDFs to 10MB, keep 5MB for others
      const maxSize = isPDF ? 10 * 1024 * 1024 : 5 * 1024 * 1024;
      return file.size <= maxSize;
    }, {
      message: 'File size should be less than 5MB for most files or 10MB for PDFs',
    })
    .refine((file) => {
      const type = file.type || '';
      const isCSV = type === 'text/csv' || (type === 'application/octet-stream' && file instanceof File && file.name.endsWith('.csv'));
      return ['image/jpeg', 'image/png', 'application/pdf'].includes(type) || isCSV;
    }, {
      message: 'File type should be JPEG, PNG, PDF, or CSV',
    }),
});

export async function POST(request: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (request.body === null) {
    return new Response('Request body is empty', { status: 400 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const validatedFile = FileSchema.safeParse({ file });

    if (!validatedFile.success) {
      const errorMessage = validatedFile.error.errors
        .map((error) => error.message)
        .join(', ');

      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    // Handle CSV files specifically
    const contentType = file.type || (file.name.endsWith('.csv') ? 'text/csv' : 'application/octet-stream');
    const fileBuffer = await file.arrayBuffer();

    try {
      const data = await put(file.name, fileBuffer, {
        access: 'public',
        contentType: contentType,
      });

      return NextResponse.json({
        url: data.url,
        pathname: file.name,
        contentType: contentType,
      });
    } catch (error) {
      console.error('Upload error:', error);
      return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
  } catch (error) {
    console.error('Request processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}
