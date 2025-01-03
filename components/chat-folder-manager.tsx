'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Folder, Search, Plus } from 'lucide-react'

interface ChatFolder {
  id: string
  name: string
  chatCount: number
}

export function ChatFolderManager() {
  const [folders, setFolders] = useState<ChatFolder[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [newFolderName, setNewFolderName] = useState('')

  const filteredFolders = folders.filter(folder => 
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      const newFolder: ChatFolder = {
        id: Date.now().toString(),
        name: newFolderName.trim(),
        chatCount: 0
      }
      setFolders([...folders, newFolder])
      setNewFolderName('')
    }
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Input
            placeholder="Search folders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
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
              <Button onClick={handleCreateFolder} className="w-full">
                Create Folder
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-2">
        {filteredFolders.map((folder) => (
          <div
            key={folder.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent"
          >
            <Folder className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <div className="font-medium">{folder.name}</div>
              <div className="text-sm text-muted-foreground">
                {folder.chatCount} chats
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 