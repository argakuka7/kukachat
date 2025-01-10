declare module 'components/tradeview/ticker-tape' {
  import { FC } from 'react'
  
  interface TickerTapeProps {
    symbols?: Array<{
      proName: string
      title: string
    }>
    colorTheme?: 'light' | 'dark'
    isTransparent?: boolean
    showSymbolLogo?: boolean
    locale?: string
  }
  
  export const TickerTape: FC<TickerTapeProps>
}
