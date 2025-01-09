'use client';

import { useEffect } from 'react';

interface StockFinancialsProps {
  symbol?: string;
}

export function StockFinancials({ symbol = 'NASDAQ:AAPL' }: StockFinancialsProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": symbol,
      "colorTheme": "dark",
      "isTransparent": true,
      "largeChartUrl": "",
      "displayMode": "regular",
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "tabs": [
        "Overview",
        "Income Statement",
        "Balance Sheet",
        "Cash Flow",
        "Dividends",
        "Earnings",
        "Margins"
      ]
    });

    const container = document.getElementById('tradingview-stock-financials');
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
      const container = document.getElementById('tradingview-stock-financials');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [symbol]);

  return (
    <div id="tradingview-stock-financials" className="w-full h-[600px]" />
  );
} 