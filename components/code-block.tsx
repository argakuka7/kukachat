'use client';

import { useCallback, useState } from 'react';
import { CodeIcon, LoaderIcon, PlayIcon, PythonIcon } from './icons';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  language?: string;
}

export function CodeBlock({
  node,
  inline,
  className,
  children,
  language,
  ...props
}: CodeBlockProps) {
  const [output, setOutput] = useState<string | null>(null);
  const [pyodide, setPyodide] = useState<any>(null);
  const isPython = language === 'python';
  const codeContent = String(children || '').replace(/\n$/, '');
  const [tab, setTab] = useState<'code' | 'run'>('code');

  if (!inline) {
    return (
      <>
        {tab === 'code' && (
          <pre
            {...props}
            className={cn(
              'text-sm w-full overflow-x-auto dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl dark:text-zinc-50 text-zinc-900',
              className
            )}
          >
            <code className="whitespace-pre-wrap break-words">{children}</code>
          </pre>
        )}

        {tab === 'run' && output && (
          <pre className="text-sm w-full overflow-x-auto bg-zinc-800 dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-700 border-t-0 rounded-b-xl text-zinc-50">
            <code>{output}</code>
          </pre>
        )}
      </>
    );
  }
  
  return (
    <code
      className={cn(
        'text-sm bg-zinc-100 dark:bg-zinc-800 py-0.5 px-1 rounded-md',
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
