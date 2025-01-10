declare module 'components/stocks/stock-chat' {
  import { FC } from 'react'
  import { Message } from 'ai'
  
  interface StockChatProps {
    initialMessages: Message[]
  }
  
  export const StockChat: FC<StockChatProps>
}
