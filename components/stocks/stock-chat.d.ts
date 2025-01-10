declare module 'components/stocks/stock-chat' {
  import { FC } from 'react'
  
  interface StockChatProps {
    symbol: string
    interval?: string
    timezone?: string
    theme?: 'light' | 'dark'
    style?: string
    locale?: string
    toolbar_bg?: string
    enable_publishing?: boolean
    hide_side_toolbar?: boolean
    allow_symbol_change?: boolean
    save_image?: boolean
    details?: boolean
    hotlist?: boolean
    calendar?: boolean
    show_popup_button?: boolean
    popup_width?: string
    popup_height?: string
  }
  
  export const StockChat: FC<StockChatProps>
}
