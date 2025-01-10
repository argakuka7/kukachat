'use client'

import { nanoid } from 'nanoid'
import { type Message } from 'ai'
import { TickerTape } from '@/components/tradeview/ticker-tape'
import { StockChat } from '@/components/stocks/stock-chat'

export default function StockPage() {
  const initialMessages: Message[] = [
    {
      id: nanoid(),
      role: 'assistant',
      content: 'Hello! I am your AI Stock Trading Assistant. I can help you with:\n\n' +
        '• Stock Charts and Price Analysis\n' +
        '• Market Overview and Heatmaps\n' +
        '• Stock Screening and Discovery\n' +
        '• Financial Data and News\n' +
        '• ETF Analysis\n\n' +
        'What would you like to know about?'
    }
  ]

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-1 overflow-hidden">
        <StockChat initialMessages={initialMessages} />
      </div>
    </div>
  )
}
