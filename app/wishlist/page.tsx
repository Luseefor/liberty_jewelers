import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Star } from "lucide-react";
import Link from "next/link";

export default function WishlistPage() {
  return (
    <PageLayout 
      title="Wishlist" 
      description="Your saved jewelry pieces and favorites"
    >
      <div className="space-y-8">
        {/* Empty Wishlist State */}
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-50 dark:from-pink-900/20 dark:to-rose-800/20 rounded-full mb-8">
            <Heart className="w-12 h-12 text-pink-600 dark:text-pink-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Wishlist is Empty
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Save your favorite pieces to your wishlist for easy access later. Click the heart icon on any item to add it to your collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white">
                Discover Jewelry
              </Button>
            </Link>
            <Link href="/collections">
              <Button variant="outline" size="lg">
                <Star className="w-4 h-4 mr-2" />
                Browse Collections
              </Button>
            </Link>
          </div>
        </div>

        {/* Wishlist Benefits */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Why Use a Wishlist?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Save Favorites</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Keep track of pieces you love for future purchase</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg mb-4">
                <ShoppingBag className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Quick Shopping</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Easily move items from wishlist to cart when ready</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg mb-4">
                <Star className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Share & Gift</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Share your wishlist with loved ones for special occasions</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Start Building Your Dream Collection
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Explore our curated collections and save your favorite pieces
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/rings">
                <Button variant="outline" className="w-full">Rings</Button>
              </Link>
              <Link href="/necklaces">
                <Button variant="outline" className="w-full">Necklaces</Button>
              </Link>
              <Link href="/earrings">
                <Button variant="outline" className="w-full">Earrings</Button>
              </Link>
              <Link href="/bracelets">
                <Button variant="outline" className="w-full">Bracelets</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}