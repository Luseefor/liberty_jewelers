import PageLayout from "@/components/page-layout";

import { Button } from "@/components/ui/button";
import { Diamond, Clock, Crown } from "lucide-react";
import Link from "next/link";

export default function VintageRingsPage() {
  return (
    <PageLayout 
      title="Vintage Rings" 
      description="Timeless pieces with classic charm and historical character"
    >
      <div className="space-y-12">
        {/* Coming Soon Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 text-center">
          <Diamond className="w-16 h-16 mx-auto mb-6 text-emerald-600" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Vintage Rings Coming Soon
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            We&apos;re sourcing authentic vintage rings and creating vintage-inspired pieces that capture the elegance of bygone eras. Each piece tells a story of timeless beauty and craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Get Notified
            </Button>
            <Link href="/custom">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                Create Vintage-Inspired Ring
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-emerald-100 dark:bg-emerald-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Authentic Pieces</h3>
            <p className="text-gray-600 dark:text-gray-400">Genuine vintage rings from different historical periods with authentication</p>
          </div>
          
          <div className="text-center">
            <div className="bg-emerald-100 dark:bg-emerald-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Vintage-Inspired</h3>
            <p className="text-gray-600 dark:text-gray-400">Modern rings designed with vintage aesthetics and traditional techniques</p>
          </div>
          
          <div className="text-center">
            <div className="bg-emerald-100 dark:bg-emerald-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Diamond className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Restoration Services</h3>
            <p className="text-gray-600 dark:text-gray-400">Expert restoration services for family heirloom rings</p>
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