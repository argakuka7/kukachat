'use client';

import { useEffect } from 'react';

export function MarketOverview() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "dark",
      "dateRange": "1D",
      "showChart": true,
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": true,
      "showSymbolLogo": true,
      "width": "100%",
      "height": "100%",
      "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
      "plotLineColorFalling": "rgba(41, 98, 255, 1)",
      "gridLineColor": "rgba(42, 46, 57, 0)",
      "scaleFontColor": "rgba(134, 137, 147, 1)",
      "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
      "tabs": [
        {
          "title": "Indices",
          "symbols": [
            {
              "s": "FOREXCOM:SPXUSD",
              "d": "S&P 500"
            },
            {
              "s": "FOREXCOM:NSXUSD",
              "d": "US 100"
            },
            {
              "s": "FOREXCOM:DJI",
              "d": "Dow 30"
            }
          ],
          "originalTitle": "Indices"
        },
        {
          "title": "Crypto",
          "symbols": [
            {
              "s": "BINANCE:BTCUSDT",
              "d": "Bitcoin"
            },
            {
              "s": "BINANCE:ETHUSDT",
              "d": "Ethereum"
            }
          ],
          "originalTitle": "Crypto"
        }
      ]
    });

    const container = document.getElementById('tradingview-market-overview');
    if (container) {
      const widget = document.createElement('div');
      widget.className = 'tradingview-widget-container h-full w-full';
      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'tradingview-widget-container__widget h-full w-full';
      widget.appendChild(widgetDiv);
      widget.appendChild(script);
      container.appendChild(widget);
    }

    return () => {
      const container = document.getElementById('tradingview-market-overview');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="tradingview-market-overview" className="w-full h-[600px] min-h-[400px] relative">
      <div className="absolute inset-0 overflow-y-auto">
        <div className="h-full w-full" />
      </div>
    </div>
  );
} 