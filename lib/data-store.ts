import { Product, Order, Collection } from './types'

// In-memory data store (replace with real database in production)
let products: Product[] = [
  {
    id: '1',
    name: 'Classic Diamond Solitaire Ring',
    description: 'Timeless elegance with a brilliant 1-carat diamond set in 18k white gold. Perfect for engagements or special occasions.',
    price: 4500,
    category: 'rings',
    subcategory: 'engagement',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    materials: ['18k White Gold'],
    gemstones: ['Diamond'],
    specifications: {
      size: '6',
      weight: '4.2g',
      carats: 1.0,
      clarity: 'VS1',
      color: 'G',
      cut: 'Round Brilliant'
    },
    inStock: true,
    quantity: 8,
    featured: true,
    tags: ['engagement', 'classic', 'diamond', 'bestseller'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Vintage Rose Gold Pearl Necklace',
    description: 'Exquisite cultured pearls strung on rose gold chain. A perfect blend of vintage charm and modern sophistication.',
    price: 1200,
    category: 'necklaces',
    subcategory: 'pearl',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506629905607-0d3917d9b8ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    materials: ['14k Rose Gold', 'Cultured Pearls'],
    gemstones: ['Pearl'],
    specifications: {
      length: '18 inches',
      weight: '15.8g'
    },
    inStock: true,
    quantity: 15,
    featured: true,
    tags: ['vintage', 'pearl', 'elegant', 'formal'],
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01')
  },
  {
    id: '3',
    name: 'Sapphire Drop Earrings',
    description: 'Stunning blue sapphires surrounded by diamonds in white gold setting. These earrings add elegance to any outfit.',
    price: 2800,
    category: 'earrings',
    subcategory: 'drop',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    materials: ['18k White Gold'],
    gemstones: ['Sapphire', 'Diamond'],
    specifications: {
      weight: '6.4g',
      length: '1.5 inches'
    },
    inStock: true,
    quantity: 6,
    featured: false,
    tags: ['sapphire', 'formal', 'luxury', 'blue'],
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10')
  },
  {
    id: '4',
    name: 'Tennis Bracelet with Diamonds',
    description: 'Classic tennis bracelet featuring 50 brilliant-cut diamonds totaling 5 carats. Set in premium platinum.',
    price: 8500,
    salePrice: 7200,
    category: 'bracelets',
    subcategory: 'tennis',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588444645023-aa719d46e405?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    materials: ['Platinum'],
    gemstones: ['Diamond'],
    specifications: {
      length: '7 inches',
      weight: '18.2g',
      carats: 5.0
    },
    inStock: true,
    quantity: 3,
    featured: true,
    tags: ['tennis', 'luxury', 'sale', 'platinum'],
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15')
  },
  {
    id: '5',
    name: 'Luxury Swiss Chronograph Watch',
    description: 'Precision timepiece with Swiss movement, sapphire crystal, and stainless steel case. Water resistant to 100m.',
    price: 3200,
    category: 'watches',
    subcategory: 'luxury',
    images: [
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    materials: ['Stainless Steel', 'Sapphire Crystal', 'Leather'],
    gemstones: [],
    specifications: {
      width: '42mm',
      thickness: '12mm',
      weight: '180g'
    },
    inStock: true,
    quantity: 4,
    featured: false,
    tags: ['luxury', 'swiss', 'chronograph', 'water-resistant'],
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20')
  }
]

let orders: Order[] = []
let collections: Collection[] = [
  {
    id: '1',
    name: 'Engagement Collection',
    slug: 'engagement-collection',
    description: 'Our finest selection of engagement rings and wedding jewelry',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: ['1'],
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    name: 'Vintage Luxury',
    slug: 'vintage-luxury',
    description: 'Timeless pieces with vintage-inspired designs',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: ['2', '3'],
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

// Counter for generating IDs
let productCounter = products.length + 1
let orderCounter = 1
let collectionCounter = collections.length + 1

// Product data operations
export const productStore = {
  // Get all products with optional filtering and pagination
  getAll: (filters?: Partial<Product>, pagination?: { page: number; limit: number }) => {
    let filtered = [...products]

    // Apply filters
    if (filters) {
      if (filters.category) {
        filtered = filtered.filter(p => p.category === filters.category)
      }
      if (filters.inStock !== undefined) {
        filtered = filtered.filter(p => p.inStock === filters.inStock)
      }
      if (filters.featured !== undefined) {
        filtered = filtered.filter(p => p.featured === filters.featured)
      }
    }

    // Apply pagination
    if (pagination) {
      const start = (pagination.page - 1) * pagination.limit
      const end = start + pagination.limit
      return {
        products: filtered.slice(start, end),
        total: filtered.length,
        page: pagination.page,
        totalPages: Math.ceil(filtered.length / pagination.limit)
      }
    }

    return { products: filtered, total: filtered.length }
  },

  // Get product by ID
  getById: (id: string) => {
    return products.find(p => p.id === id)
  },

  // Create new product
  create: (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: productCounter.toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    products.push(newProduct)
    productCounter++
    return newProduct
  },

  // Update product
  update: (id: string, updates: Partial<Product>) => {
    const index = products.findIndex(p => p.id === id)
    if (index !== -1) {
      products[index] = {
        ...products[index],
        ...updates,
        updatedAt: new Date()
      }
      return products[index]
    }
    return null
  },

  // Delete product
  delete: (id: string) => {
    const index = products.findIndex(p => p.id === id)
    if (index !== -1) {
      const deleted = products.splice(index, 1)[0]
      return deleted
    }
    return null
  },

  // Search products
  search: (query: string) => {
    const lowercaseQuery = query.toLowerCase()
    return products.filter(p => 
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      p.materials.some(material => material.toLowerCase().includes(lowercaseQuery)) ||
      p.gemstones.some(gemstone => gemstone.toLowerCase().includes(lowercaseQuery))
    )
  }
}

// Order data operations
export const orderStore = {
  // Get all orders
  getAll: () => orders,

  // Get order by ID
  getById: (id: string) => {
    return orders.find(o => o.id === id)
  },

  // Create new order
  create: (orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newOrder: Order = {
      ...orderData,
      id: orderCounter.toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    orders.push(newOrder)
    orderCounter++
    return newOrder
  },

  // Update order
  update: (id: string, updates: Partial<Order>) => {
    const index = orders.findIndex(o => o.id === id)
    if (index !== -1) {
      orders[index] = {
        ...orders[index],
        ...updates,
        updatedAt: new Date()
      }
      return orders[index]
    }
    return null
  },

  // Get orders by user
  getByUser: (userId: string) => {
    return orders.filter(o => o.userId === userId)
  }
}

// Collection data operations
export const collectionStore = {
  // Get all collections
  getAll: () => collections,

  // Get collection by ID
  getById: (id: string) => {
    return collections.find(c => c.id === id)
  },

  // Get collection by slug
  getBySlug: (slug: string) => {
    return collections.find(c => c.slug === slug)
  },

  // Create new collection
  create: (collectionData: Omit<Collection, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newCollection: Collection = {
      ...collectionData,
      id: collectionCounter.toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    collections.push(newCollection)
    collectionCounter++
    return newCollection
  },

  // Update collection
  update: (id: string, updates: Partial<Collection>) => {
    const index = collections.findIndex(c => c.id === id)
    if (index !== -1) {
      collections[index] = {
        ...collections[index],
        ...updates,
        updatedAt: new Date()
      }
      return collections[index]
    }
    return null
  },

  // Get products in a collection
  getProducts: (collectionId: string) => {
    const collection = collections.find(c => c.id === collectionId)
    if (!collection) return []
    
    return products.filter(p => collection.products.includes(p.id))
  }
}