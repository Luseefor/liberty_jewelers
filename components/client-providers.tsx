'use client'

import { ReactNode } from 'react'
import { CartProvider } from '@/lib/cart-context'

interface ClientProvidersProps {
  children: ReactNode
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
}