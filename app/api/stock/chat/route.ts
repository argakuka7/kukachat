import { StockAIHandler } from '@/lib/ai/stock-ai'

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()
  return StockAIHandler(messages)
} 