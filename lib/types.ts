export type ProductCategory = 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'watches' | 'custom'

export interface Product {
  id: string
  name: string
  category: ProductCategory
  subcategory: string
  price: number
  salePrice?: number
  inStock: boolean
  quantity: number
  description: string
  images: string[]
  materials: string[]
  gemstones?: string[]
  size?: string
  weight?: string
  createdAt: Date
  updatedAt: Date
}

export type JewelryItem = Product

export interface ProductFilters {
  category?: ProductCategory
  priceMin?: number
  priceMax?: number
  inStock?: boolean
  onSale?: boolean
  materials?: string[]
  gemstones?: string[]
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}
