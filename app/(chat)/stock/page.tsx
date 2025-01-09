'use client'

import { Chat } from '@/components/chat'
import { Card } from '@/components/ui/card'
import { LineChart, TrendingUp, DollarSign } from 'lucide-react'
import { nanoid } from 'nanoid'
import { type Message } from 'ai'
import { type VisibilityType } from '@/components/visibility-selector'
import { useChat } from 'ai/react'
import { TickerTape } from '@/components/tradeview/ticker-tape'
import { MarketOverview } from '@/components/tradeview/market-overview'
import { StockChart } from '@/components/tradeview/stock-chart'
import { MarketHeatmap } from '@/components/tradeview/market-heatmap'
import { StockScreener } from '@/components/tradeview/stock-screener'
import { StockNews } from '@/components/tradeview/stock-news'
import { ETFHeatmap } from '@/components/tradeview/etf-heatmap'
import { MarketTrending } from '@/components/tradeview/market-trending'
import { StockFinancials } from '@/components/tradeview/stock-financials'
import { StockPrice } from '@/components/tradeview/stock-price'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function StockPage() {
  const id = nanoid()
  const defaultSymbol = 'NASDAQ:AAPL'

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/stock/chat',
    id,
    initialMessages: [
      {
        id: nanoid(),
        role: 'assistant',
        content: 'Hello! I am your AI Stock Trading Assistant. I can help you with market analysis, portfolio management, and trading strategies. How can I assist you today?'
      }
    ]
  })

  return (
    <div className="flex flex-col h-full">
      <TickerTape />
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Stock Trading Assistant</h1>
          </div>
        </div>

        <Tabs defaultValue="chart" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="chart">Chart Analysis</TabsTrigger>
            <TabsTrigger value="market">Market Overview</TabsTrigger>
            <TabsTrigger value="screener">Stock Screener</TabsTrigger>
            <TabsTrigger value="etf">ETF Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chart" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 space-y-4">
                <Card className="p-4">
                  <StockPrice symbol={defaultSymbol} />
                </Card>
                <Card className="p-4">
                  <StockChart symbol={defaultSymbol} />
                </Card>
              </div>
              <div className="lg:col-span-1 space-y-4">
                <Card className="p-4">
                  <StockFinancials symbol={defaultSymbol} />
                </Card>
                <Card className="p-4">
                  <StockNews symbol={defaultSymbol} />
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="market" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="p-4 h-[400px]">
                <MarketOverview />
              </Card>
              <Card className="p-4 h-[400px]">
                <MarketHeatmap />
              </Card>
              <Card className="p-4 h-[400px]">
                <MarketTrending />
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="screener" className="space-y-4">
            <Card className="p-4">
              <StockScreener />
            </Card>
          </TabsContent>

          <TabsContent value="etf" className="space-y-4">
            <Card className="p-4">
              <ETFHeatmap />
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="flex-1">
          <div className="h-full flex flex-col">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Chat with Stock AI</h2>
            </div>
            <div className="flex-1 p-6">
              <Chat 
                id={id}
                initialMessages={messages}
                selectedModelId="gpt-4"
                selectedVisibilityType="private"
                isReadonly={false}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
