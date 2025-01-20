import { NextResponse } from 'next/server';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

async function processCSV(buffer: ArrayBuffer): Promise<string> {
  try {
    // Convert buffer to string
    const text = new TextDecoder().decode(buffer);
    
    // Basic CSV parsing to get a preview of the structure
    const lines = text.split('\n');
    console.log('CSV Processing - Number of lines:', lines.length);
    
    const headers = lines[0];
    console.log('CSV Processing - Headers:', headers);
    
    const preview = lines.slice(1, Math.min(6, lines.length)).join('\n');
    return `CSV Headers: ${headers}\n\nPreview of first 5 rows:\n${preview}`;
  } catch (error) {
    console.error('Error processing CSV:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    console.log('Process File API - Started');
    const { url, type, filename } = await request.json();
    console.log('Process File API - Received:', { url, type, filename });

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Fetch the file content
    console.log('Process File API - Fetching file from URL');
    const fileResponse = await fetch(url);
    if (!fileResponse.ok) {
      console.error('Process File API - Failed to fetch file:', fileResponse.statusText);
      throw new Error('Failed to fetch file');
    }
    
    const fileBuffer = await fileResponse.arrayBuffer();
    console.log('Process File API - File fetched, size:', fileBuffer.byteLength);

    // Pre-process file based on type
    let fileContent = '';
    if (type === 'text/csv' || filename.endsWith('.csv')) {
      console.log('Process File API - Processing CSV file');
      fileContent = await processCSV(fileBuffer);
    }

    // Process with Google AI
    console.log('Process File API - Sending to Google AI');
    const result = await generateText({
      model: google('gemini-2.0-flash-exp'),
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: type === 'text/csv' || filename.endsWith('.csv') 
                ? 'Please analyze this CSV data and provide insights about its structure and content.' 
                : 'Please analyze this document and provide a detailed summary of its contents.',
            },
            {
              type: 'text',
              text: fileContent || 'File content could not be processed',
            },
          ],
        },
      ],
    });

    console.log('Process File API - Successfully processed with Google AI');
    return NextResponse.json({ data: result.text });
  } catch (error) {
    console.error('Error processing file with LLM:', error);
    return NextResponse.json(
      { error: 'Failed to process file with LLM' },
      { status: 500 },
    );
  }
} 