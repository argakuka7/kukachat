'use client';

import { useEffect } from 'react';

export function StockScreener() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": "100%",
      "defaultColumn": "overview",
      "defaultScreen": "most_capitalized",
      "market": "america",
      "showToolbar": true,
      "colorTheme": "dark",
      "locale": "en",
      "isTransparent": true,
      "screener_type": "crypto_mkt",
      "displayCurrency": "USD",
      "transparency": true,
      "watchlist": [
        "NASDAQ:AAPL",
        "NASDAQ:MSFT",
        "NASDAQ:GOOGL",
        "NASDAQ:AMZN",
        "NASDAQ:META",
        "NYSE:TSLA"
      ]
    });

    const container = document.getElementById('tradingview-stock-screener');
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
      const container = document.getElementById('tradingview-stock-screener');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="tradingview-stock-screener" className="w-full h-[600px]" />
  );
} 