import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowLeft, Heart } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  return (
    <PageLayout 
      title="Shopping Cart" 
      description="Review your selected jewelry pieces"
    >
      <div className="space-y-8">
        {/* Empty Cart State */}
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-full mb-8">
            <ShoppingBag className="w-12 h-12 text-amber-600 dark:text-amber-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Start your jewelry journey by browsing our exquisite collections. Every piece is carefully crafted to celebrate life&apos;s special moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                Continue Shopping
              </Button>
            </Link>
            <Link href="/wishlist">
              <Button variant="outline" size="lg">
                <Heart className="w-4 h-4 mr-2" />
                View Wishlist
              </Button>
            </Link>
          </div>
        </div>

        {/* Cart Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg mb-4">
                <ShoppingBag className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Secure Checkout</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Your payment information is protected with bank-level security</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Free Shipping</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Complimentary shipping on all orders over $500</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg mb-4">
                <ArrowLeft className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Easy Returns</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">30-day return policy for your peace of mind</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}