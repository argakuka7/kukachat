'use client';

import { Button } from '@/components/ui/button';
import {
  TrendingUpIcon,
  ImageIcon,
  MessagesSquareIcon,
  PencilRulerIcon,
  ChevronDownIcon,
  WrenchIcon,
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ToolItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  action: () => void;
  path?: string;
}

export function SidebarTools() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const navigateToTool = (path: string) => {
    router.push(path);
  };

  const tools: ToolItem[] = [
    {
      name: 'Stock Bot',
      icon: <TrendingUpIcon className="w-4 h-4" />,
      description: 'AI-powered stock trading assistant',
      path: '/stock',
      action: () => navigateToTool('/stock'),
    },
    {
      name: 'Image Generator',
      icon: <ImageIcon className="w-4 h-4" />,
      description: 'Generate images from text',
      action: () => console.log('Image Generator clicked'),
    },
    {
      name: 'Writing Assistant',
      icon: <PencilRulerIcon className="w-4 h-4" />,
      description: 'Help with writing and editing',
      action: () => console.log('Writing Assistant clicked'),
    },
    {
      name: 'AI Chat',
      icon: <MessagesSquareIcon className="w-4 h-4" />,
      description: 'Chat with AI assistant',
      path: '/',
      action: () => navigateToTool('/'),
    },
  ];

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="px-2 py-2"
    >
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <WrenchIcon className="h-5 w-5" />
          <h2 className="text-lg font-semibold tracking-tight">Tools</h2>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDownIcon
              className="h-4 w-4 transition-transform duration-200"
              style={{
                transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
              }}
            />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-1 mt-2">
        {tools.map((tool) => (
          <Button
            key={tool.name}
            variant="ghost"
            className="w-full justify-start gap-2 transition-colors"
            onClick={tool.action}
          >
            {tool.icon}
            <span>{tool.name}</span>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
} 