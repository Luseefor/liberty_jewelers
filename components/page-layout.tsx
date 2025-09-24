import { Button } from "@/components/ui/button";
import { Crown, Search, Heart, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme-toggle";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header - Same as homepage */}
      <header className="sticky top-0 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/70 border-gray-200/50 dark:border-gray-800/50" style={{zIndex: 999998}}>
        <div className="border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-600 text-white flex size-8 items-center justify-center rounded-lg shadow-lg">
                  <Crown className="size-5" />
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
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-black py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
              </h1>
              {description && (
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Page Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>
      </main>

      {/* Footer - Same as homepage */}
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
                Creating timeless jewelry pieces that celebrate life's most precious moments since 1985.
              </p>
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
                <p className="text-gray-600 dark:text-gray-400">123 Main Street<br />New York, NY 10001</p>
                <p className="text-gray-600 dark:text-gray-400">(410) 365-2187</p>
                <p className="text-gray-600 dark:text-gray-400">info@libertygolddiamonds.com</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Payment Options</h3>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-400">💳 All Major Credit Cards</p>
                <p className="text-gray-600 dark:text-gray-400">💵 Cash Payments</p>
                <p className="text-gray-600 dark:text-gray-400">📅 Acima Financing Available</p>
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
          </div>
        </div>
      </footer>
    </div>
  );
}