'use client';

import { useEffect } from 'react';

interface StockChartProps {
  symbol?: string;
  interval?: string;
}

export function StockChart({ 
  symbol = 'NASDAQ:AAPL',
  interval = '1D'
}: StockChartProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          "autosize": true,
          "symbol": symbol,
          "interval": interval,
          "timezone": "exchange",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "container_id": "tradingview-stock-chart",
          "studies": [
            "RSI@tv-basicstudies",
            "MASimple@tv-basicstudies",
            "MACD@tv-basicstudies"
          ]
        });
      }
    };

    const container = document.getElementById('tradingview-stock-chart');
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }

    return () => {
      const container = document.getElementById('tradingview-stock-chart');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [symbol, interval]);

  return (
    <div id="tradingview-stock-chart" className="w-full h-[600px]" />
  );
} 