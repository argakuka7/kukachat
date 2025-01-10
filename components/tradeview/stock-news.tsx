'use client';

import { useEffect } from 'react';

interface StockNewsProps {
  symbol?: string;
}

export function StockNews({ symbol = 'NASDAQ:AAPL' }: StockNewsProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "feedMode": "symbol",
      "symbol": symbol,
      "colorTheme": "dark",
      "isTransparent": true,
      "displayMode": "regular",
      "width": "100%",
      "height": "100%",
      "locale": "en"
    });

    const container = document.getElementById('tradingview-stock-news');
    if (container) {
      const widget = document.createElement('div');
      widget.className = 'tradingview-widget-container';
      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'tradingview-widget-container__widget';
      widget.appendChild(widgetDiv);
      widget.appendChild(script);
      container.appendChild(widget);
    }

    return () => {
      const container = document.getElementById('tradingview-stock-news');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [symbol]);

  return (
    <div id="tradingview-stock-news" className="w-full h-[500px] min-h-[400px] overflow-auto sm:h-[600px] lg:h-[700px]" />
  );
} 