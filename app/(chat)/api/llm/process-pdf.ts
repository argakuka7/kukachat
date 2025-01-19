import { NextResponse } from 'next/server';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Fetch the PDF content
    const pdfResponse = await fetch(url);
    if (!pdfResponse.ok) {
      throw new Error('Failed to fetch PDF');
    }
    
    const pdfBuffer = await pdfResponse.arrayBuffer();

    // Process PDF with Google AI using a supported model
    const result = await generateText({
      model: google('gemini-2.0-flash-exp'),
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Please analyze this PDF document and provide a detailed summary of its contents.',
            },
            {
              type: 'file',
              data: Buffer.from(pdfBuffer),
              mimeType: 'application/pdf',
            },
          ],
        },
      ],
    });

    return NextResponse.json({ data: result.text });
  } catch (error) {
    console.error('Error processing PDF with LLM:', error);
    return NextResponse.json(
      { error: 'Failed to process PDF with LLM' },
      { status: 500 },
    );
  }
} 