'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  ShoppingCart, 
  ArrowLeft, 
  Star,
  Check,
  Shield,
  Truck,
  RotateCcw,
  Gem,
  Ruler,
  Weight,
  Palette,
  Sparkles,
  Plus,
  Minus
} from 'lucide-react'
import { Product } from '@/lib/types'

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id as string)
    }
  }, [params.id])

  const fetchProduct = async (id: string) => {
    try {
      const response = await fetch(`/api/products/${id}`)
      const data = await response.json()
      
      if (data.success) {
        setProduct(data.data)
      } else {
        console.error('Product not found')
      }
    } catch (error) {
      console.error('Error fetching product:', error)
    }
    setLoading(false)
  }

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log('Added to cart:', { productId: product?.id, quantity })
  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    // TODO: Implement wishlist functionality
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-amber-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-amber-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Gem className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Product Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/products">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const discountPercent = product.salePrice 
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-amber-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-amber-600 transition-colors">Products</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category}`} className="hover:text-amber-600 transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl">
              {product.images.length > 0 ? (
                <Image
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <Gem className="w-24 h-24 text-amber-600" />
                </div>
              )}
              {product.salePrice && (
                <Badge className="absolute top-6 left-6 bg-red-500 text-white text-sm px-3 py-1">
                  {discountPercent}% OFF
                </Badge>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index 
                        ? 'border-amber-500 shadow-lg' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-amber-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Title and Price */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  {product.name}
                </h1>
                <button
                  onClick={handleToggleWishlist}
                  className={`p-3 rounded-full transition-all ${
                    isWishlisted 
                      ? 'bg-red-100 text-red-600 dark:bg-red-900/20' 
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-800 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">(24 reviews)</span>
                </div>
                {product.inStock ? (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    <Check className="h-3 w-3 mr-1" />
                    In Stock
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                    Out of Stock
                  </Badge>
                )}
              </div>

              <div className="space-y-2">
                {product.salePrice ? (
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-red-600">
                      ${product.salePrice.toLocaleString()}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      ${product.price.toLocaleString()}
                    </span>
                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900/20">
                      Save ${(product.price - product.salePrice).toLocaleString()}
                    </Badge>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price.toLocaleString()}
                  </span>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Price includes taxes and fees
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Description</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    value && (
                      <div key={key} className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-amber-600">
                          {key === 'weight' && <Weight className="h-4 w-4" />}
                          {key === 'size' && <Ruler className="h-4 w-4" />}
                          {(key === 'carats' || key === 'clarity' || key === 'color' || key === 'cut') && <Sparkles className="h-4 w-4" />}
                          {key === 'metal' && <Palette className="h-4 w-4" />}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{value}</div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Materials & Gemstones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.materials.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Materials</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material) => (
                      <Badge key={material} variant="secondary" className="text-sm">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {product.gemstones.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Gemstones</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.gemstones.map((gemstone) => (
                      <Badge key={gemstone} className="bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400 text-sm">
                        {gemstone}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Quantity</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))}
                      className="p-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${((product.salePrice || product.price) * quantity).toLocaleString()}
                  </div>
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                size="lg"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl">
                <Shield className="h-6 w-6 text-amber-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Lifetime Warranty</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Full coverage</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl">
                <Truck className="h-6 w-6 text-amber-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Free Shipping</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Orders over $500</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl">
                <RotateCcw className="h-6 w-6 text-amber-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">30-Day Returns</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Easy returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}