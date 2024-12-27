import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'resize-y overflow-y-auto max-h-[80vh]',
        className,
      )}
      style={{
        minHeight: '80px',
        maxHeight: '80vh',
        height: 'auto',
      }}
      ref={(element) => {
        if (element && ref) {
          if (typeof ref === 'function') {
            ref(element);
          } else {
            ref.current = element;
          }
        }
        
        // Reset height after submit
        if (element && props.value === '') {
          element.style.height = 'auto';
        }
      }}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
