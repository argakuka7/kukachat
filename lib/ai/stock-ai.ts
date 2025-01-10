import { type Message } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'
import { streamText } from 'ai'
import { z } from 'zod'

// Initialize OpenAI client
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function StockAIHandler(messages: Message[]) {
  const systemPrompt = `You are a stock market AI assistant that helps users analyze stocks and market data. You MUST use the available tools to show information.

IMPORTANT: For ANY request about stocks or markets, you MUST use one of these tools:
1. For stock prices: use showStockPrice (e.g. "BBRI", "AAPL")
2. For stock charts: use showStockChart (can compare multiple stocks)
3. For stock news: use showStockNews
4. For financials: use showStockFinancials
5. For market overview: use showMarketOverview
6. For sector performance: use showMarketHeatmap
7. For trending stocks: use showTrendingStocks
8. For ETF analysis: use showETFHeatmap

ALWAYS respond with a tool call in this format:
{ "tool_call": { "type": "function", "function": { "name": "TOOL_NAME", "parameters": { ... } } } }

Examples:
User: "What's BBRI's price?"
Assistant: { "tool_call": { "type": "function", "function": { "name": "showStockPrice", "parameters": { "symbol": "BBRI" } } } }

User: "Compare BBRI and BBCA"
Assistant: { "tool_call": { "type": "function", "function": { "name": "showStockChart", "parameters": { "symbol": "BBRI", "comparisonSymbols": [{"symbol": "BBCA", "position": "SameScale"}] } } } }

User: "Show me market overview"
Assistant: { "tool_call": { "type": "function", "function": { "name": "showMarketOverview", "parameters": {} } } }

For cryptocurrency tickers, append "USD" (e.g., "BTCUSD", "DOGEUSD").
NEVER respond with just text. ALWAYS use a tool to show the requested information.`

  const result = streamText({
    model: openai('gpt-4'),
    system: systemPrompt,
    messages,
    tools: {
      showStockFinancials: {
        description: 'Shows the financials for a given stock',
        parameters: z.object({
          symbol: z.string().describe('Stock symbol (e.g. BBRI, AAPL)')
        }),
        execute: async ({ symbol }) => {
          return { symbol }
        }
      },
      showStockChart: {
        description: 'Shows a stock chart, optionally compare multiple stocks',
        parameters: z.object({
          symbol: z.string().describe('Primary stock symbol'),
          comparisonSymbols: z.array(z.object({
            symbol: z.string().describe('Comparison stock symbol'),
            position: z.enum(['SameScale', 'NewScale']).describe('How to position the comparison')
          })).optional().describe('Optional stocks to compare against')
        }),
        execute: async ({ symbol, comparisonSymbols }) => {
          return { symbol, comparisonSymbols }
        }
      },
      showStockPrice: {
        description: 'Shows real-time price of a stock',
        parameters: z.object({
          symbol: z.string().describe('Stock symbol (e.g. BBRI, AAPL)')
        }),
        execute: async ({ symbol }) => {
          return { symbol }
        }
      },
      showStockNews: {
        description: 'Shows latest news for a stock',
        parameters: z.object({
          symbol: z.string().describe('Stock symbol (e.g. BBRI, AAPL)')
        }),
        execute: async ({ symbol }) => {
          return { symbol }
        }
      },
      showMarketOverview: {
        description: 'Shows market performance overview',
        parameters: z.object({}),
        execute: async () => {
          return {}
        }
      },
      showMarketHeatmap: {
        description: 'Shows sector performance heatmap',
        parameters: z.object({}),
        execute: async () => {
          return {}
        }
      },
      showTrendingStocks: {
        description: 'Shows top gaining/losing stocks',
        parameters: z.object({
          type: z.enum(['gainers', 'losers', 'active']).describe('Type of trending stocks to show')
        }),
        execute: async ({ type }) => {
          return { type }
        }
      },
      showETFHeatmap: {
        description: 'Shows ETF sector performance',
        parameters: z.object({}),
        execute: async () => {
          return {}
        }
      }
    }
  })

  return result.toDataStreamResponse()
} 