'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Registration error:', error);
    toast.error('Something went wrong. Please try again.');
  }, [error]);

  return null;
} 