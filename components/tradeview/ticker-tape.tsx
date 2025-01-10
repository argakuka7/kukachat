'use client';

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

declare global {
  interface Window {
    TradingView: any
  }
}

interface TickerTapeProps {
  className?: string
}

export function TickerTape({ className }: TickerTapeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadWidget = async () => {
      try {
        if (!containerRef.current) return

        // Clear container
        containerRef.current.innerHTML = ''

        // Create widget container
        const widgetContainer = document.createElement('div')
        widgetContainer.className = 'tradingview-widget-container__widget'
        containerRef.current.appendChild(widgetContainer)

        // Load TradingView script if not already loaded
        if (!window.TradingView) {
          const script = document.createElement('script')
          script.type = 'text/javascript'
          script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
          script.async = true
          script.onload = () => {
            setIsLoading(false)
          }
          script.onerror = () => {
            setError('Failed to load TradingView widget')
            setIsLoading(false)
          }

          // Add widget configuration
          const config = {
            symbols: [
              {
                proName: "FOREXCOM:SPXUSD",
                title: "S&P 500"
              },
              {
                proName: "FOREXCOM:NSXUSD",
                title: "US 100"
              },
              {
                proName: "FX_IDC:EURUSD",
                title: "EUR/USD"
              },
              {
                description: "BTC/USD",
                proName: "BITSTAMP:BTCUSD"
              }
            ],
            showSymbolLogo: true,
            colorTheme: "dark",
            isTransparent: false,
            displayMode: "adaptive",
            locale: "en"
          }

          script.innerHTML = JSON.stringify(config)
          widgetContainer.appendChild(script)
        } else {
          setIsLoading(false)
        }
      } catch (err) {
        setError('Error initializing widget')
        setIsLoading(false)
      }
    }

    loadWidget()

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  if (error) {
    return (
      <div className="p-4 text-red-500 bg-red-100 rounded">
        {error}
      </div>
    )
  }

  return (
    <div className={cn("tradingview-widget-container", className)}>
      {isLoading && (
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}
      <div ref={containerRef} />
    </div>
  )
} 