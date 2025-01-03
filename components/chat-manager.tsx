'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface Chat {
  id: string
  title: string
  createdAt: Date
  folderId?: string
  userId: string
  visibility: 'private' | 'public'
}

interface ChatFolder {
  id: string
  name: string
  userId: string
  createdAt: Date
}

interface ChatManagerProps {
  folderId: string
  folderName: string
  onAssignChats: (chatIds: string[]) => void
}

export function ChatManager({ folderId, folderName, onAssignChats }: ChatManagerProps) {
  const [selectedChats, setSelectedChats] = useState<string[]>([])
  
  // Example chat data - in a real app this would come from your backend
  const availableChats: Chat[] = [
    { id: '1', title: 'Chat about React' },
    { id: '2', title: 'Next.js Discussion' },
    { id: '3', title: 'UI Design Tips' },
    { id: '4', title: 'Database Schema' },
  ]

  const handleSelect = (chatId: string) => {
    setSelectedChats(current => 
      current.includes(chatId)
        ? current.filter(id => id !== chatId)
        : [...current, chatId]
    )
  }

  const handleAssign = () => {
    onAssignChats(selectedChats)
    setSelectedChats([])
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Manage Chats
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Chats to {folderName}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="space-y-2">
            {availableChats.map((chat) => (
              <div key={chat.id} className="flex items-center space-x-2">
                <Checkbox
                  id={chat.id}
                  checked={selectedChats.includes(chat.id)}
                  onCheckedChange={() => handleSelect(chat.id)}
                />
                <label
                  htmlFor={chat.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {chat.title}
                </label>
              </div>
            ))}
          </div>
          <Button onClick={handleAssign} className="w-full">
            Add Selected Chats
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

