// Types for the jewelry store application

export interface Product {
  id: string
  name: string
  description: string
  price: number
  salePrice?: number
  category: ProductCategory
  subcategory: string
  images: string[]
  materials: string[]
  gemstones: string[]
  specifications: ProductSpecifications
  inStock: boolean
  quantity: number
  featured: boolean
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export interface ProductSpecifications {
  size?: string
  weight?: string
  carats?: number
  clarity?: string
  color?: string
  cut?: string
  metal?: string
  length?: string
  width?: string
  thickness?: string
}

export type ProductCategory = 
  | 'rings'
  | 'necklaces'
  | 'earrings'
  | 'bracelets'
  | 'watches'
  | 'custom'

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
  subcategories: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
}

export interface CartItem {
  productId: string
  quantity: number
  customizations?: Record<string, string>
}

export interface Cart {
  id: string
  userId?: string
  items: CartItem[]
  createdAt: Date
  updatedAt: Date
}

export interface Order {
  id: string
  userId?: string
  customerInfo: CustomerInfo
  items: OrderItem[]
  subtotal: number
  tax: number
  shipping: number
  total: number
  status: OrderStatus
  paymentStatus: PaymentStatus
  shippingMethod: string
  trackingNumber?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  productId: string
  product: Product
  quantity: number
  price: number
  customizations?: Record<string, string>
}

export interface CustomerInfo {
  email: string
  firstName: string
  lastName: string
  phone?: string
  shippingAddress: Address
  billingAddress?: Address
}

export interface Address {
  street: string
  street2?: string
  city: string
  state: string
  zipCode: string
  country: string
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export type PaymentStatus = 
  | 'pending'
  | 'paid'
  | 'failed'
  | 'refunded'

export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  image: string
  products: string[] // Product IDs
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  productId: string
  userId?: string
  customerName: string
  rating: number
  title: string
  comment: string
  verified: boolean
  createdAt: Date
}

export interface Wishlist {
  id: string
  userId: string
  productIds: string[]
  createdAt: Date
  updatedAt: Date
}

export interface SearchFilters {
  category?: ProductCategory
  subcategory?: string
  priceMin?: number
  priceMax?: number
  materials?: string[]
  gemstones?: string[]
  inStock?: boolean
  featured?: boolean
  tags?: string[]
}

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: 'name' | 'price' | 'createdAt' | 'popularity'
  sortOrder?: 'asc' | 'desc'
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}