'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import type { Chat } from '@/lib/db/schema'

interface ChatHistoryProps {
  chats: Chat[]
}

export function ChatHistory({ chats }: ChatHistoryProps) {
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredChats = chats.filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 space-y-4">
        <div className="relative">
          <Input
            placeholder="Search chats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent"
          >
            <div className="flex-1">
              <div className="font-medium">{chat.title}</div>
              <div className="text-sm text-muted-foreground">
                {new Date(chat.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 