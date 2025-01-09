'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    TradingView?: any;
  }
}

export function TickerTape() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "US 100"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        },
        {
          "description": "BTC/USD",
          "proName": "BINANCE:BTCUSDT"
        }
      ],
      "showSymbolLogo": true,
      "colorTheme": "dark",
      "isTransparent": true,
      "displayMode": "adaptive",
      "locale": "en"
    });

    const container = document.getElementById('tradingview-ticker');
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
      const container = document.getElementById('tradingview-ticker');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="tradingview-ticker" className="w-full h-[40px]" />
  );
} 