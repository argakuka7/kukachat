'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Folder, Plus, SlidersHorizontal, Filter } from 'lucide-react'

interface ChatFolder {
  id: string
  name: string
  chatCount: number
}

interface Chat {
  id: string
  title: string
  folderId?: string
}

export default function ChatFolders() {
  const [folders, setFolders] = useState<ChatFolder[]>([
    { id: '1', name: 'Flux', chatCount: 6 },
    { id: '2', name: 'macOS', chatCount: 1 },
    { id: '3', name: 'Vultr', chatCount: 5 },
    { id: '4', name: 'Experiment', chatCount: 3 },
  ])
  
  const [searchQuery, setSearchQuery] = useState('')
  const [newFolderName, setNewFolderName] = useState('')

  const filteredFolders = folders.filter(folder => 
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const addNewFolder = () => {
    if (newFolderName.trim()) {
      setFolders([...folders, {
        id: Date.now().toString(),
        name: newFolderName,
        chatCount: 0
      }])
      setNewFolderName('')
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Input
            placeholder="Search chats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-3 pr-10"
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Folder</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <Input
                placeholder="Folder name"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
              />
              <Button onClick={addNewFolder} className="w-full">
                Create Folder
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <Button variant="outline" size="icon">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-2">
        {filteredFolders.map((folder) => (
          <button
            key={folder.id}
            className="w-full flex items-center gap-3 p-4 rounded-lg hover:bg-gray-100 transition-colors text-left"
          >
            <Folder className="h-5 w-5 text-gray-500" />
            <div className="flex-1">
              <div className="font-medium">{folder.name}</div>
              <div className="text-sm text-gray-500">
                {folder.chatCount} chats
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

