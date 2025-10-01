import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Truck, Award, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Heart, Sparkles, ShoppingBag, Crown, Diamond, Watch, Search, ChevronDown, CreditCard, DollarSign, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme-toggle";



export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Top Navigation */}
      <header className="sticky top-0 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/70 border-gray-200/50 dark:border-gray-800/50" style={{zIndex: 999998}}>
        {/* Main Header */}
        <div className="border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex size-10 items-center justify-center rounded-lg shadow-lg overflow-hidden bg-white">
                  <Image 
                    src="/favicon.ico" 
                    alt="Liberty Gold & Diamonds Logo" 
                    width={40} 
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-700 bg-clip-text text-transparent">
                  Liberty Gold & Diamonds
                </span>
              </Link>

              {/* Search Bar */}
              <div className="hidden md:flex flex-1 max-w-md mx-8">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search jewelry..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center space-x-4">
                <Link href="/wishlist">
                  <Button variant="ghost" size="sm" className="hidden sm:flex">
                    <Heart className="h-4 w-4 mr-2" />
                    <span className="sr-only">Wishlist</span>
                  </Button>
                </Link>
                <Link href="/cart">
                  <Button variant="ghost" size="sm">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    <span className="sr-only">Cart</span>
                  </Button>
                </Link>
                
                {/* Theme Toggle */}
                <ThemeToggle />
                
                {/* Clerk Auth */}
                <SignedOut>
                  <Link href="/login">
                    <Button variant="outline" size="sm">
                      Sign In
                    </Button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <div className="relative" style={{ zIndex: 9999999 }}>
                    <UserButton 
                      afterSignOutUrl="/" 
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8",
                          userButtonPopoverCard: "z-[9999999] !important",
                          userButtonPopover: "z-[9999999] !important",
                          popoverCard: "z-[9999999] !important",
                          modalBackdrop: "z-[9999999] !important",
                          modal: "z-[9999999] !important"
                        }
                      }}
                    />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Subtopics */}
        <div className="border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex h-12 items-center space-x-4 lg:space-x-8" style={{overflow: 'visible'}}>
              {/* All Collections Dropdown */}
              <div className="relative group">
                <Link href="/collections" className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap">
                  <Sparkles className="h-4 w-4" />
                  <span>All Collections</span>
                  <ChevronDown className="h-3 w-3 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible transition-all duration-200" style={{zIndex: 999999, position: 'absolute'}}>
                  <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                  <div className="p-2">
                    <Link href="/collections/new-arrivals" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      New Arrivals
                    </Link>
                    <Link href="/collections/best-sellers" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Best Sellers
                    </Link>
                    <Link href="/collections/featured" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Featured
                    </Link>
                    <Link href="/collections/limited-edition" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Limited Edition
                    </Link>
                  </div>
                </div>
              </div>
              {/* Rings Dropdown */}
              <div className="relative group">
                <Link href="/rings" className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap">
                  <Diamond className="h-4 w-4" />
                  <span>Rings</span>
                  <ChevronDown className="h-3 w-3 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible transition-all duration-200 z-[99999]">
                  <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                  <div className="p-2">
                    <Link href="/rings/engagement" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Engagement Rings
                    </Link>
                    <Link href="/rings/wedding" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Wedding Bands
                    </Link>
                    <Link href="/rings/fashion" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Fashion Rings
                    </Link>
                    <Link href="/rings/vintage" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Vintage Rings
                    </Link>
                  </div>
                </div>
              </div>
              {/* Necklaces Dropdown */}
              <div className="relative group">
                <Link href="/necklaces" className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap">
                  <Star className="h-4 w-4" />
                  <span>Necklaces</span>
                  <ChevronDown className="h-3 w-3 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible transition-all duration-200 z-[99999]">
                  <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                  <div className="p-2">
                    <Link href="/necklaces/pendants" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Pendants
                    </Link>
                    <Link href="/necklaces/chains" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Chains
                    </Link>
                    <Link href="/necklaces/chokers" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Chokers
                    </Link>
                    <Link href="/necklaces/statement" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Statement Pieces
                    </Link>
                  </div>
                </div>
              </div>
              {/* Earrings Dropdown */}
              <div className="relative group">
                <Link href="/earrings" className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap">
                  <Sparkles className="h-4 w-4" />
                  <span>Earrings</span>
                  <ChevronDown className="h-3 w-3 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible transition-all duration-200 z-[99999]">
                  <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                  <div className="p-2">
                    <Link href="/earrings/studs" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Stud Earrings
                    </Link>
                    <Link href="/earrings/hoops" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Hoop Earrings
                    </Link>
                    <Link href="/earrings/drop" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Drop Earrings
                    </Link>
                    <Link href="/earrings/chandelier" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Chandelier Earrings
                    </Link>
                  </div>
                </div>
              </div>
              {/* Bracelets Dropdown */}
              <div className="relative group">
                <Link href="/bracelets" className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap">
                  <Heart className="h-4 w-4" />
                  <span>Bracelets</span>
                  <ChevronDown className="h-3 w-3 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible transition-all duration-200 z-[99999]">
                  <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                  <div className="p-2">
                    <Link href="/bracelets/tennis" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Tennis Bracelets
                    </Link>
                    <Link href="/bracelets/charm" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Charm Bracelets
                    </Link>
                    <Link href="/bracelets/bangles" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Bangles
                    </Link>
                    <Link href="/bracelets/cuff" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Cuff Bracelets
                    </Link>
                  </div>
                </div>
              </div>
              {/* Watches Dropdown */}
              <div className="relative group">
                <Link href="/watches" className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap">
                  <Watch className="h-4 w-4" />
                  <span>Watches</span>
                  <ChevronDown className="h-3 w-3 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible transition-all duration-200 z-[99999]">
                  <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                  <div className="p-2">
                    <Link href="/watches/luxury" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Luxury Watches
                    </Link>
                    <Link href="/watches/sports" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Sports Watches
                    </Link>
                    <Link href="/watches/classic" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Classic Watches
                    </Link>
                    <Link href="/watches/smart" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Smart Watches
                    </Link>
                  </div>
                </div>
              </div>
              {/* Custom Design Dropdown */}
              <div className="relative group">
                <Link href="/custom" className="flex items-center space-x-1 text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors whitespace-nowrap">
                  <Crown className="h-4 w-4" />
                  <span>Custom Design</span>
                  <ChevronDown className="h-3 w-3 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible transition-all duration-200" style={{zIndex: 999999, position: 'absolute'}}>
                  <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                  <div className="p-2">
                    <Link href="/custom/engagement-rings" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Custom Engagement Rings
                    </Link>
                    <Link href="/custom/wedding-bands" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Custom Wedding Bands
                    </Link>
                    <Link href="/custom/necklaces" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Custom Necklaces
                    </Link>
                    <Link href="/custom/consultation" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors">
                      Design Consultation
                    </Link>
                  </div>
                </div>
              </div>
              {/* Sale Dropdown */}
              <div className="relative group">
                <Link href="/sale" className="flex items-center space-x-1 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors whitespace-nowrap">
                  <Award className="h-4 w-4" />
                  <span>Sale</span>
                  <ChevronDown className="h-3 w-3 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible transition-all duration-200 z-[99999]">
                  <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                  <div className="p-2">
                    <Link href="/sale/clearance" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 dark:hover:text-red-400 rounded-md transition-colors">
                      Clearance Items
                    </Link>
                    <Link href="/sale/seasonal" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 dark:hover:text-red-400 rounded-md transition-colors">
                      Seasonal Sale
                    </Link>
                    <Link href="/sale/last-chance" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 dark:hover:text-red-400 rounded-md transition-colors">
                      Last Chance
                    </Link>
                    <Link href="/sale/outlet" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 dark:hover:text-red-400 rounded-md transition-colors">
                      Outlet Items
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white overflow-hidden">
          <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-lg"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                    Exquisite Jewelry
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-yellow-500">
                      Timeless Elegance
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Discover our curated collection of fine jewelry, from stunning engagement rings to custom masterpieces.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                    Shop Collections
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200 bg-transparent">
                    Custom Design
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/hero-jewelry.jpg" 
                    alt="Exquisite Liberty Gold & Diamonds Jewelry Collection" 
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Shop by Category
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our stunning collection of fine jewelry, carefully curated for every special moment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Engagement Rings</p>
                      <p className="text-2xl font-bold text-pink-600">250+</p>
                      <p className="text-xs text-gray-500">Starting at $1,299</p>
                    </div>
                    <Heart className="h-8 w-8 text-pink-600 group-hover:scale-110 transition-transform" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Necklaces</p>
                      <p className="text-2xl font-bold text-blue-600">180+</p>
                      <p className="text-xs text-gray-500">Starting at $599</p>
                    </div>
                    <Sparkles className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Watches</p>
                      <p className="text-2xl font-bold text-purple-600">120+</p>
                      <p className="text-xs text-gray-500">Starting at $899</p>
                    </div>
                    <Watch className="h-8 w-8 text-purple-600 group-hover:scale-110 transition-transform" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Custom Pieces</p>
                      <p className="text-2xl font-bold text-amber-600">50+</p>
                      <p className="text-xs text-gray-500">Starting at $2,499</p>
                    </div>
                    <Crown className="h-8 w-8 text-amber-600 group-hover:scale-110 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
                <p className="text-gray-600">All our jewelry comes with comprehensive lifetime warranty coverage</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                <p className="text-gray-600">Complimentary shipping on all orders over $500 worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
                <p className="text-gray-600">Each piece is meticulously crafted by our master jewelers</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-600 text-white flex size-8 items-center justify-center rounded-lg">
                  <Crown className="size-5" />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">Liberty Gold & Diamonds</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Creating timeless jewelry pieces that celebrate life&apos;s most precious moments.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-amber-500 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-amber-500 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-amber-500 cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Collections</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><Link href="/rings" className="hover:text-amber-500">Engagement Rings</Link></li>
                <li><Link href="/necklaces" className="hover:text-amber-500">Necklaces</Link></li>
                <li><Link href="/earrings" className="hover:text-amber-500">Earrings</Link></li>
                <li><Link href="/bracelets" className="hover:text-amber-500">Bracelets</Link></li>
                <li><Link href="/watches" className="hover:text-amber-500">Watches</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Services</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><Link href="/custom" className="hover:text-amber-500">Custom Design</Link></li>
                <li><Link href="/repair" className="hover:text-amber-500">Jewelry Repair</Link></li>
                <li><Link href="/appraisal" className="hover:text-amber-500">Appraisal Services</Link></li>
                <li><Link href="/consultation" className="hover:text-amber-500">Personal Consultation</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-600 dark:text-gray-400">MONDAWMIN MALL<br />2401 Liberty Heights Ave<br />1st Floor - SPACE #5534<br />Baltimore, MD 21215</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-600 dark:text-gray-400">(410) 365-2187</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-600 dark:text-gray-400">info@libertygolddiamonds.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Payment Options</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-600 dark:text-gray-400">All Major Credit Cards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-600 dark:text-gray-400">Cash Payments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-600 dark:text-gray-400">Acima Financing Available</span>
                </div>
                <Link href="/payment-options" className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 text-sm font-medium inline-block mt-2">
                  View All Payment Options →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 dark:border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 Liberty Gold & Diamonds. All rights reserved.
            </p>
            <div className="mt-2">
              <Link 
                href="/admin/login" 
                className="text-xs text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}