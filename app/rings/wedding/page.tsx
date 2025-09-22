import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Heart, Infinity } from "lucide-react";
import Link from "next/link";

export default function WeddingBandsPage() {
  return (
    <PageLayout 
      title="Wedding Bands" 
      description="Symbol of eternal love and commitment with our wedding band collection"
    >
      <div className="space-y-12">
        {/* Coming Soon Section */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl p-8 text-center">
          <Crown className="w-16 h-16 mx-auto mb-6 text-amber-600" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Wedding Bands Coming Soon
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            We&apos;re creating a collection of wedding bands that represent the eternal bond of marriage. From classic gold bands to modern designs with diamonds, each piece will symbolize your commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Get Notified
            </Button>
            <Link href="/custom/wedding-bands">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                Design Custom Band
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-amber-100 dark:bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Infinity className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Eternal Quality</h3>
            <p className="text-gray-600 dark:text-gray-400">Crafted to last a lifetime with premium metals and construction</p>
          </div>
          
          <div className="text-center">
            <div className="bg-amber-100 dark:bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Matching Sets</h3>
            <p className="text-gray-600 dark:text-gray-400">Perfect his and hers matching wedding band sets available</p>
          </div>
          
          <div className="text-center">
            <div className="bg-amber-100 dark:bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Custom Engraving</h3>
            <p className="text-gray-600 dark:text-gray-400">Personalize your bands with custom engraving services</p>
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