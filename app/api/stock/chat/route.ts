import { StockAIHandler } from '@/lib/ai/stock-ai'

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    return await StockAIHandler(messages)
  } catch (error) {
    console.error('Error in stock chat:', error)
    return new Response(
      JSON.stringify({
        error: 'There was an error processing your request'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
} 