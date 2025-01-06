'use client'

import { startTransition } from 'react'

export function AuthForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    startTransition(async () => {
      // Form submission logic
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  )
} 