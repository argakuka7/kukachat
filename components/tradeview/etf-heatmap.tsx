'use client';

import { useEffect } from 'react';

export function ETFHeatmap() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "exchanges": [],
      "dataSource": "ETFs",
      "grouping": "sector",
      "blockSize": "market_cap_basic",
      "blockColor": "change",
      "locale": "en",
      "symbolUrl": "",
      "colorTheme": "dark",
      "hasTopBar": false,
      "isTransparent": true,
      "width": "100%",
      "height": "100%",
      "etf": true,
      "showChangePercent": true,
      "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
      "plotLineColorFalling": "rgba(255, 0, 0, 1)",
      "gridLineColor": "rgba(42, 46, 57, 0)",
      "scaleFontColor": "rgba(134, 137, 147, 1)",
    });

    const container = document.getElementById('tradingview-etf-heatmap');
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
      const container = document.getElementById('tradingview-etf-heatmap');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="tradingview-etf-heatmap" className="w-full h-[500px] min-h-[400px] overflow-auto sm:h-[600px] lg:h-[700px]" />
  );
} 