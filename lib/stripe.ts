/**
 * Stripe payment processing utilities
 * Handles Stripe configuration and payment methods
 */

import { loadStripe, Stripe } from '@stripe/stripe-js'

// Initialize Stripe
let stripePromise: Promise<Stripe | null>

export const getStripe = () => {
  if (!stripePromise) {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    if (!publishableKey) {
      throw new Error('Missing Stripe publishable key')
    }
    stripePromise = loadStripe(publishableKey)
  }
  return stripePromise
}

// Payment method types
export interface PaymentInfo {
  amount: number // Amount in cents
  currency: string
  description: string
  metadata?: Record<string, string>
}

// Jewelry item interface for payments
export interface JewelryPaymentItem {
  id: string
  name: string
  price: number
  quantity: number
  category: string
  image?: string
}

// Calculate total amount for jewelry items
export function calculateTotal(items: JewelryPaymentItem[]): number {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity)
  }, 0)
}

// Format price for display
export function formatPrice(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount / 100) // Convert cents to dollars
}

// Validate payment amount
export function validatePaymentAmount(amount: number): boolean {
  // Stripe requires minimum $0.50 USD
  return amount >= 50
}