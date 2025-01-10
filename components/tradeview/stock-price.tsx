'use client';

import { useEffect } from 'react';

interface StockPriceProps {
  symbol?: string;
}

export function StockPrice({ symbol = 'NASDAQ:AAPL' }: StockPriceProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": symbol,
      "width": "100%",
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "en",
      "largeChartUrl": "",
      "chartOnly": false,
      "showSymbolLogo": true,
      "showFloatingTooltip": true,
      "dateRange": "1D",
      "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
      "plotLineColorFalling": "rgba(255, 0, 0, 1)",
      "gridLineColor": "rgba(42, 46, 57, 0)",
      "scaleFontColor": "rgba(134, 137, 147, 1)",
      "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(255, 0, 0, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(255, 0, 0, 0)",
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
    });

    const container = document.getElementById('tradingview-stock-price');
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
      const container = document.getElementById('tradingview-stock-price');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [symbol]);

  return (
    <div id="tradingview-stock-price" className="w-full h-[150px] min-h-[120px] overflow-hidden sm:h-[180px] lg:h-[200px]" />
  );
} 