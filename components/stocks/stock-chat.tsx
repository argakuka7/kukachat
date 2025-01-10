'use client';

import { useChat } from 'ai/react';
import { nanoid } from 'nanoid';
import { Message } from 'ai';
import { useEffect, useRef, useState, useMemo } from 'react';
import { StockChart } from '@/components/tradeview/stock-chart';
import { StockPrice } from '@/components/tradeview/stock-price';
import { StockNews } from '@/components/tradeview/stock-news';
import { StockFinancials } from '@/components/tradeview/stock-financials';
import { MarketOverview } from '@/components/tradeview/market-overview';
import { MarketHeatmap } from '@/components/tradeview/market-heatmap';
import { MarketTrending } from '@/components/tradeview/market-trending';
import { ETFHeatmap } from '@/components/tradeview/etf-heatmap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TickerTape } from '@/components/tradeview/ticker-tape';

interface StockChatProps {
  initialMessages: Message[]
}

interface ToolCall {
  id: string
  name: string
  parameters: any
}

export function useStockChat(initialMessages: Message[] = []) {
  return useChat({
    api: '/api/stock/chat',
    initialMessages: [
      {
        id: nanoid(),
        role: 'system',
        content: `You are a stock market expert AI assistant. You MUST use tools to show information.
For ANY request about stocks or markets, use the appropriate tool to display data.
NEVER respond with just text - ALWAYS use a tool call to show the information.`
      },
      ...initialMessages
    ]
  });
}

export function StockChat({ initialMessages }: StockChatProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput } = useStockChat(initialMessages)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [toolCalls, setToolCalls] = useState<ToolCall[]>([])
  const processedMessages = useRef(new Set<string>())

  // Process tool calls from messages
  useEffect(() => {
    const processMessage = (message: Message) => {
      if (processedMessages.current.has(message.id)) return null
      
      if (message.role === 'assistant' && message.content) {
        try {
          // Clean up the content first
          const cleanContent = message.content.replace(/\n/g, ' ').trim()
          
          // Try to extract JSON object
          const jsonMatch = cleanContent.match(/\{[^]*\}/g)
          if (jsonMatch) {
            const jsonStr = jsonMatch[0]
            const parsed = JSON.parse(jsonStr)
            
            if (parsed.tool_call?.function) {
              return {
                id: message.id,
                name: parsed.tool_call.function.name,
                parameters: parsed.tool_call.function.parameters
              }
            }
          }
        } catch (e) {
          console.warn('Error parsing message:', message.content)
        }
      }
      return null
    }

    const newToolCalls = messages
      .map(processMessage)
      .filter((tool): tool is ToolCall => tool !== null)

    if (newToolCalls.length > 0) {
      newToolCalls.forEach(tool => {
        processedMessages.current.add(tool.id)
      })
      setToolCalls(prev => [...prev, ...newToolCalls])
    }
  }, [messages])

  // Memoize tool components to prevent unnecessary re-renders
  const toolComponents = useMemo(() => {
    return toolCalls.map((tool) => {
      const key = `${tool.name}-${tool.id}`
      const component = (() => {
        switch (tool.name) {
          case 'showStockChart':
            return (
              <div key={key} className="h-[400px]">
                <StockChart {...tool.parameters} />
              </div>
            )
          case 'showStockPrice':
            return (
              <div key={key} className="h-[120px]">
                <StockPrice {...tool.parameters} />
              </div>
            )
          case 'showStockNews':
            return (
              <div key={key} className="h-[400px]">
                <StockNews {...tool.parameters} />
              </div>
            )
          case 'showStockFinancials':
            return (
              <div key={key} className="h-[400px]">
                <StockFinancials {...tool.parameters} />
              </div>
            )
          case 'showMarketOverview':
            return (
              <div key={key} className="h-[400px]">
                <MarketOverview />
              </div>
            )
          case 'showMarketHeatmap':
            return (
              <div key={key} className="h-[400px]">
                <MarketHeatmap />
              </div>
            )
          case 'showTrendingStocks':
            return (
              <div key={key} className="h-[400px]">
                <MarketTrending {...tool.parameters} />
              </div>
            )
          case 'showETFHeatmap':
            return (
              <div key={key} className="h-[400px]">
                <ETFHeatmap />
              </div>
            )
          default:
            console.warn('Unknown tool:', tool.name)
            return null
        }
      })()

      if (!component) return null

      return (
        <Card key={key} className="overflow-hidden bg-background border-none shadow-none">
          {component}
        </Card>
      )
    })
  }, [toolCalls])

  // Auto-scroll to bottom
  useEffect(() => {
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    return () => clearTimeout(timer)
  }, [messages, toolComponents])

  // Handle quick action
  const handleQuickAction = (action: string) => {
    setInput(action)
    const fakeEvent = { preventDefault: () => {} } as React.FormEvent
    handleSubmit(fakeEvent)
  }

  // Quick action buttons
  const quickActions = [
    { label: 'Market Overview', action: 'Show market overview' },
    { label: 'Top Gainers', action: 'Show top gaining stocks' },
    { label: 'Market Heatmap', action: 'Show market heatmap' },
    { label: 'BBRI Price', action: 'Show BBRI price' },
    { label: 'BBCA Price', action: 'Show BBCA price' }
  ]

  // Filter out system messages
  const visibleMessages = messages.filter(message => message.role !== 'system')

  return (
    <div className="flex flex-col h-full">
      {/* Ticker Tape */}
      <div className="border-b border-border">
        <TickerTape />
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2 p-2 border-b border-border">
        {quickActions.map(({ label, action }) => (
          <Button
            key={label}
            variant="ghost"
            size="sm"
            onClick={() => handleQuickAction(action)}
            disabled={isLoading}
            className="h-7 text-xs font-normal"
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 p-4">
        {visibleMessages.map(message => (
          <div
            key={message.id}
            className={cn(
              'flex',
              message.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            <div
              className={cn(
                'max-w-[80%] rounded-lg p-3 text-sm',
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              {message.content}
            </div>
          </div>
        ))}
        
        {/* Tool Components */}
        {toolComponents.length > 0 && (
          <div className="space-y-4">
            {toolComponents}
          </div>
        )}
        
        {isLoading && (
          <div className="flex justify-center p-2">
            <div className="flex space-x-2">
              <div className="h-2 w-2 bg-muted-foreground/30 rounded-full animate-bounce"></div>
              <div className="h-2 w-2 bg-muted-foreground/30 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-2 w-2 bg-muted-foreground/30 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-4 border-t border-border">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about stocks (e.g., 'Show BBRI price' or 'Compare BBRI and BBCA')"
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading} size="sm">
            {isLoading ? 'Thinking...' : 'Send'}
          </Button>
        </form>
      </div>
    </div>
  )
}
