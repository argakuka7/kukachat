import Link from 'next/link';
import React, { memo, useMemo, useState, Children, isValidElement } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from './code-block';

// Define component props types
type MarkdownComponentProps = {
  node?: any;
  children?: React.ReactNode;
  className?: string;
  inline?: boolean;
  href?: string;
  [key: string]: any;
};

const components: Partial<Components> = {
  code: ({ node, inline, className, children, ...props }: MarkdownComponentProps) => {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : undefined;
    
    if (inline) {
      return <code className={className} {...props}>{children}</code>;
    }
    
    return (
      <CodeBlock
        node={node}
        className={className}
        language={language}
        {...props}
      >
        {String(children || '').replace(/\n$/, '')}
      </CodeBlock>
    );
  },
  p: ({ node, children, ...props }: MarkdownComponentProps) => {
    const childrenArray = Children.toArray(children);
    // Check if paragraph contains only a code block
    if (childrenArray.length === 1 && isValidElement(childrenArray[0]) && 
        (childrenArray[0].type === CodeBlock || childrenArray[0].type === 'pre')) {
      return <>{children}</>;
    }
    return <p className="mb-4" {...props}>{children}</p>;
  },
  pre: ({ children }: MarkdownComponentProps) => {
    // Render pre tags directly without wrapping to avoid nesting issues
    return <>{children}</>;
  },
  ol: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <ol className="list-decimal list-outside ml-4" {...props}>
        {children}
      </ol>
    );
  },
  ul: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <ul className="list-disc list-outside ml-4" {...props}>
        {children}
      </ul>
    );
  },
  li: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <li className="py-1" {...props}>
        {children}
      </li>
    );
  },
  strong: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <span className="font-semibold" {...props}>
        {children}
      </span>
    );
  },
  a: ({ children, href, ...props }: MarkdownComponentProps) => {
    return (
      <Link
        href={href || '#'}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </Link>
    );
  },
  h1: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <h1 className="text-3xl font-semibold mt-6 mb-2" {...props}>
        {children}
      </h1>
    );
  },
  h2: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <h2 className="text-2xl font-semibold mt-6 mb-2" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <h3 className="text-xl font-semibold mt-6 mb-2" {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <h4 className="text-lg font-semibold mt-6 mb-2" {...props}>
        {children}
      </h4>
    );
  },
  h5: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <h5 className="text-base font-semibold mt-6 mb-2" {...props}>
        {children}
      </h5>
    );
  },
  h6: ({ children, ...props }: MarkdownComponentProps) => {
    return (
      <h6 className="text-sm font-semibold mt-6 mb-2" {...props}>
        {children}
      </h6>
    );
  }
};

const remarkPlugins = [remarkGfm];

const NonMemoizedMarkdown = ({ children }: { children: string }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown remarkPlugins={remarkPlugins} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
};

export const Markdown = memo(
  NonMemoizedMarkdown,
  (prevProps, nextProps) => prevProps.children === nextProps.children,
);
