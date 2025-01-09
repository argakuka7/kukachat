'use client';

import { useEffect } from 'react';

export function MarketHeatmap() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "exchanges": [
        "NASDAQ"
      ],
      "dataSource": "SPX500",
      "grouping": "sector",
      "blockSize": "market_cap_basic",
      "blockColor": "change",
      "locale": "en",
      "symbolUrl": "",
      "colorTheme": "dark",
      "hasTopBar": false,
      "isTransparent": true,
      "width": "100%",
      "height": "100%"
    });

    const container = document.getElementById('tradingview-market-heatmap');
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
      const container = document.getElementById('tradingview-market-heatmap');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="tradingview-market-heatmap" className="w-full h-[400px]" />
  );
} 