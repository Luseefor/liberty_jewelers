'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product } from '@/lib/types'

interface CartItem {
  product: Product
  quantity: number
  customizations?: Record<string, string>
}

interface CartState {
  items: CartItem[]
  total: number
}

interface CartActions {
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }

const initialState: CartState = {
  items: [],
  total: 0
}

function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => {
    const price = item.product.salePrice || item.product.price
    return sum + (price * item.quantity)
  }, 0)
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      const { product, quantity } = action.payload
      const existingItemIndex = state.items.findIndex(item => item.product.id === product.id)
      
      let newItems: CartItem[]
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        const updatedItems = [...state.items, { product, quantity, customizations: {} }]
        newItems = updatedItems
      }
      
      return {
        items: newItems,
        total: calculateTotal(newItems)
      }

    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.product.id !== action.payload)
      return {
        items: filteredItems,
        total: calculateTotal(filteredItems)
      }

    case 'UPDATE_QUANTITY':
      const updatedItems = state.items.map(item =>
        item.product.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0)
      
      return {
        items: updatedItems,
        total: calculateTotal(updatedItems)
      }

    case 'CLEAR_CART':
      return initialState

    default:
      return state
  }
}

const CartContext = createContext<CartState | undefined>(undefined)
const CartActionsContext = createContext<CartActions | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const actions: CartActions = {
    addItem: (product: Product, quantity = 1) => {
      dispatch({ type: 'ADD_ITEM', payload: { product, quantity } })
    },
    removeItem: (productId: string) => {
      dispatch({ type: 'REMOVE_ITEM', payload: productId })
    },
    updateQuantity: (productId: string, quantity: number) => {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } })
    },
    clearCart: () => {
      dispatch({ type: 'CLEAR_CART' })
    }
  }

  return (
    <CartContext.Provider value={state}>
      <CartActionsContext.Provider value={actions}>
        {children}
      </CartActionsContext.Provider>
    </CartContext.Provider>
  )
}

export function useCart(): CartState {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export function useCartActions(): CartActions {
  const context = useContext(CartActionsContext)
  if (context === undefined) {
    throw new Error('useCartActions must be used within a CartProvider')
  }
  return context
}
