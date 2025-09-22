import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Sparkles, Gem } from "lucide-react";
import Link from "next/link";

export default function FashionRingsPage() {
  return (
    <PageLayout 
      title="Fashion Rings" 
      description="Express your unique style with our fashion ring collection"
    >
      <div className="space-y-12">
        {/* Coming Soon Section */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-8 text-center">
          <Star className="w-16 h-16 mx-auto mb-6 text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Fashion Rings Coming Soon
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            We&apos;re curating a collection of fashion rings that let you express your individual style. From statement pieces to delicate stackable rings, discover pieces that complement your personality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Get Notified
            </Button>
            <Link href="/custom">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white">
                Design Custom Ring
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Trendy Designs</h3>
            <p className="text-gray-600 dark:text-gray-400">Stay on-trend with our contemporary and fashion-forward designs</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gem className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Gemstone Variety</h3>
            <p className="text-gray-600 dark:text-gray-400">Choose from diamonds, sapphires, emeralds, and other precious stones</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Stackable Options</h3>
            <p className="text-gray-600 dark:text-gray-400">Mix and match with our stackable ring collection for versatile looks</p>
          </div>
        </div>

        {/* Back to Rings */}
        <div className="text-center">
          <Link href="/rings">
            <Button variant="outline" size="lg">
              ← Back to All Rings
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}