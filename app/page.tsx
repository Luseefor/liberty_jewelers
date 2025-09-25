'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/theme-toggle'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { 
  Search, 
  User, 
  Heart, 
  ShoppingCart, 
  ChevronDown,
  Gem,
  Award,
  Shield,
  Truck,
  Sparkles,
  Crown,
  Watch,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react'
import { Product, Collection } from '@/lib/types'

export default function LuxuryHomepage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [collections, setCollections] = useState<Collection[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch featured products and collections
    Promise.all([
      fetch('/api/products?featured=true&limit=6').then(res => res.json()),
      fetch('/api/collections').then(res => res.json())
    ])
    .then(([productsRes, collectionsRes]) => {
      if (productsRes.success) setFeaturedProducts(productsRes.data)
      if (collectionsRes.success) setCollections(collectionsRes.data)
      setLoading(false)
    })
    .catch(error => {
      console.error('Error loading data:', error)
      setLoading(false)
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-amber-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-amber-100/50 dark:border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative size-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-1 shadow-lg">
                <Image 
                  src="/liberty-logo.png" 
                  alt="Liberty Gold & Diamonds" 
                  width={44} 
                  height={44}
                  className="rounded-lg object-contain bg-white"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                  Liberty Gold & Diamonds
                </div>
                <div className="text-xs text-amber-600/70 font-medium tracking-wider uppercase">
                  Fine Jewelry Since 1985
                </div>
              </div>
            </Link>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <Link href="/rings" className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
                  <Gem className="h-4 w-4" />
                  <span>Rings</span>
                  <ChevronDown className="h-3 w-3" />
                </Link>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-amber-100 dark:border-gray-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-3 space-y-1">
                    <Link href="/rings/engagement" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      Engagement Rings
                    </Link>
                    <Link href="/rings/wedding" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      Wedding Bands
                    </Link>
                    <Link href="/rings/fashion" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      Fashion Rings
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/necklaces" className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
                <Sparkles className="h-4 w-4" />
                <span>Necklaces</span>
              </Link>

              <Link href="/earrings" className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
                <Heart className="h-4 w-4" />
                <span>Earrings</span>
              </Link>

              <Link href="/bracelets" className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
                <Award className="h-4 w-4" />
                <span>Bracelets</span>
              </Link>

              <Link href="/watches" className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors">
                <Watch className="h-4 w-4" />
                <span>Watches</span>
              </Link>

              <Link href="/custom" className="flex items-center space-x-1 text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 transition-colors">
                <Crown className="h-4 w-4" />
                <span>Custom</span>
              </Link>
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-64 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50 dark:bg-gray-800"
                />
              </div>
              
              <Link href="/wishlist" className="p-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 transition-colors">
                <Heart className="h-5 w-5" />
              </Link>
              
              <Link href="/cart" className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>

              <div className="flex items-center space-x-2">
                <SignedOut>
                  <SignInButton>
                    <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300">
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-amber-400/5"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                  ✨ New Collection Available
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">Timeless</span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                    Elegance
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                  Discover our curated collection of exquisite fine jewelry, crafted with passion and precision for life's most precious moments.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="mr-2">Shop Collection</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300">
                  <Crown className="h-4 w-4 mr-2" />
                  Custom Design
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Unique Pieces</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">40+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">5★</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Customer Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-amber-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-700 dark:to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600 dark:text-gray-300">
                      <Gem className="w-16 h-16 mx-auto mb-4 text-amber-600" />
                      <p className="font-medium text-lg">Featured Jewelry</p>
                      <p className="text-sm opacity-70">Your store showcase image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Handpicked pieces that embody luxury, craftsmanship, and timeless beauty
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 dark:bg-gray-700 aspect-square rounded-2xl mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white dark:bg-gray-900">
                  <div className="relative aspect-square overflow-hidden">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Button size="sm" className="w-full bg-white text-gray-900 hover:bg-amber-50">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="space-y-1">
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
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                            <Heart className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                View All Products
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Shop by Collection
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Curated collections for every occasion and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link key={collection.id} href={`/collections/${collection.slug}`}>
                <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    {collection.image ? (
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                        <Crown className="w-12 h-12 text-amber-600" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
                        <p className="text-sm opacity-90">{collection.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Lifetime Warranty</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Every piece comes with our comprehensive lifetime warranty, ensuring your jewelry remains as beautiful as the day you bought it.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Free Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Complimentary insured shipping on all orders over $500, with express delivery options available worldwide.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Master Craftsmanship</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Each piece is meticulously crafted by our master jewelers using the finest materials and time-honored techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="size-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-1">
                  <Image 
                    src="/liberty-logo.png" 
                    alt="Liberty Gold & Diamonds" 
                    width={32} 
                    height={32}
                    className="rounded-md object-contain bg-white"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg text-amber-400">
                    Liberty Gold & Diamonds
                  </div>
                  <div className="text-xs text-gray-400">
                    Fine Jewelry Since 1985
                  </div>
                </div>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                Creating timeless moments with exquisite jewelry crafted for life's most precious occasions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-amber-400">Collections</h3>
              <div className="space-y-2">
                <Link href="/rings" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">Engagement Rings</Link>
                <Link href="/necklaces" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">Necklaces</Link>
                <Link href="/earrings" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">Earrings</Link>
                <Link href="/bracelets" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">Bracelets</Link>
                <Link href="/watches" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">Watches</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-amber-400">Services</h3>
              <div className="space-y-2">
                <Link href="/custom" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">Custom Design</Link>
                <Link href="/appraisal" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">Jewelry Appraisal</Link>
                <Link href="/repair" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">Repair Services</Link>
                <Link href="/consultation" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">Consultation</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-amber-400">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span className="text-gray-300 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-amber-400" />
                  <span className="text-gray-300 text-sm">info@libertyjewelers.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span className="text-gray-300 text-sm">123 Luxury Ave, Diamond District</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Liberty Gold & Diamonds. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}