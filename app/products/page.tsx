'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  ShoppingCart, 
  Filter, 
  Grid3X3, 
  List,
  X,
  Search,
  Gem
} from 'lucide-react'
import { Product, ProductCategory } from '@/lib/types'

interface ProductFilters {
  category?: ProductCategory
  priceMin?: number
  priceMax?: number
  inStock?: boolean
  onSale?: boolean
  materials?: string[]
  gemstones?: string[]
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<ProductFilters>({})
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  
  // Available filter options
  const categories: { value: ProductCategory; label: string }[] = [
    { value: 'rings', label: 'Rings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'bracelets', label: 'Bracelets' },
    { value: 'watches', label: 'Watches' },
    { value: 'custom', label: 'Custom' }
  ]



  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      
      if (searchQuery) params.append('search', searchQuery)
      if (filters.category) params.append('category', filters.category)
      if (filters.inStock !== undefined) params.append('inStock', String(filters.inStock))
      
      const response = await fetch(`/api/products?${params.toString()}`)
      const data = await response.json()
      
      if (data.success) {
        let filteredProducts = data.data

        // Apply client-side filters
        if (filters.onSale) {
          filteredProducts = filteredProducts.filter((p: Product) => p.salePrice)
        }
        if (filters.priceMin) {
          filteredProducts = filteredProducts.filter((p: Product) => p.price >= filters.priceMin!)
        }
        if (filters.priceMax) {
          filteredProducts = filteredProducts.filter((p: Product) => p.price <= filters.priceMax!)
        }

        // Apply sorting
        switch (sortBy) {
          case 'price-asc':
            filteredProducts.sort((a: Product, b: Product) => a.price - b.price)
            break
          case 'price-desc':
            filteredProducts.sort((a: Product, b: Product) => b.price - a.price)
            break
          case 'name':
            filteredProducts.sort((a: Product, b: Product) => a.name.localeCompare(b.name))
            break
          default:
            // Keep default order (featured first)
            break
        }

        setProducts(filteredProducts)
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    }
    setLoading(false)
  }, [filters, searchQuery, sortBy])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleFilterChange = (key: keyof ProductFilters, value: string | boolean | number | undefined) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const clearFilters = () => {
    setFilters({})
    setSearchQuery('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-amber-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Fine Jewelry Collection
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Discover our exquisite selection of luxury jewelry pieces
              </p>
            </div>
            
            {/* Search */}
            <div className="relative lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jewelry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white dark:bg-gray-800"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                {Object.keys(filters).length > 0 && (
                  <Badge className="ml-2 bg-amber-100 text-amber-800">
                    {Object.keys(filters).length}
                  </Badge>
                )}
              </Button>
              
              {Object.keys(filters).length > 0 && (
                <Button variant="ghost" onClick={clearFilters} size="sm">
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>

              <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-amber-100 text-amber-600' : 'text-gray-600'}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-amber-100 text-amber-600' : 'text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                {products.length} products
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-64 flex-shrink-0">
              <Card className="sticky top-8">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Category</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={!filters.category}
                          onChange={() => handleFilterChange('category', undefined)}
                          className="mr-2"
                        />
                        All Categories
                      </label>
                      {categories.map((category) => (
                        <label key={category.value} className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            checked={filters.category === category.value}
                            onChange={() => handleFilterChange('category', category.value)}
                            className="mr-2"
                          />
                          {category.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Price Range</h3>
                    <div className="space-y-2">
                      <div className="flex space-x-2">
                        <input
                          type="number"
                          placeholder="Min"
                          value={filters.priceMin || ''}
                          onChange={(e) => handleFilterChange('priceMin', e.target.value ? parseInt(e.target.value) : undefined)}
                          className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          value={filters.priceMax || ''}
                          onChange={(e) => handleFilterChange('priceMax', e.target.value ? parseInt(e.target.value) : undefined)}
                          className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Availability</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.inStock === true}
                          onChange={(e) => handleFilterChange('inStock', e.target.checked ? true : undefined)}
                          className="mr-2"
                        />
                        In Stock Only
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.onSale === true}
                          onChange={(e) => handleFilterChange('onSale', e.target.checked ? true : undefined)}
                          className="mr-2"
                        />
                        On Sale
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {loading ? (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 dark:bg-gray-700 aspect-square rounded-2xl mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-16">
                <Gem className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No products found</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {products.map((product) => (
                  <Card key={product.id} className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white dark:bg-gray-900">
                    <Link href={`/products/${product.id}`}>
                      <div className={`relative ${viewMode === 'grid' ? 'aspect-square' : 'h-64 md:w-64 md:flex-shrink-0'} overflow-hidden`}>
                        {product.images.length > 0 ? (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                            <Gem className="w-16 h-16 text-amber-600" />
                          </div>
                        )}
                        {product.salePrice && (
                          <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                            Sale
                          </Badge>
                        )}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="p-2 bg-white/90 text-gray-600 hover:text-red-500 rounded-full shadow-md">
                            <Heart className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </Link>
                    
                    <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <Link href={`/products/${product.id}`}>
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 transition-colors line-clamp-2">
                              {product.name}
                            </h3>
                            {product.inStock ? (
                              <Badge className="bg-green-100 text-green-800 text-xs">
                                In Stock
                              </Badge>
                            ) : (
                              <Badge className="bg-gray-100 text-gray-800 text-xs">
                                Out of Stock
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {product.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1">
                            {product.materials.slice(0, 2).map((material) => (
                              <Badge key={material} variant="secondary" className="text-xs">
                                {material}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between pt-2">
                            <div>
                              {product.salePrice ? (
                                <div className="flex items-center space-x-2">
                                  <span className="text-lg font-bold text-red-600">
                                    ${product.salePrice.toLocaleString()}
                                  </span>
                                  <span className="text-sm text-gray-500 line-through">
                                    ${product.price.toLocaleString()}
                                  </span>
                                </div>
                              ) : (
                                <span className="text-lg font-bold text-gray-900 dark:text-white">
                                  ${product.price.toLocaleString()}
                                </span>
                              )}
                            </div>
                            
                            <Button 
                              size="sm" 
                              className="bg-amber-600 hover:bg-amber-700 text-white"
                              disabled={!product.inStock}
                            >
                              <ShoppingCart className="h-4 w-4 mr-1" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}