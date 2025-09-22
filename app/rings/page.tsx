import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Diamond, Heart, Crown, Star } from "lucide-react";
import Link from "next/link";

export default function RingsPage() {
  const ringCategories = [
    {
      title: "Engagement Rings",
      description: "Celebrate your love with our stunning engagement ring collection",
      icon: Heart,
      link: "/rings/engagement",
      color: "text-pink-600"
    },
    {
      title: "Wedding Bands",
      description: "Symbol of eternal commitment and timeless elegance",
      icon: Crown,
      link: "/rings/wedding",
      color: "text-amber-600"
    },
    {
      title: "Fashion Rings",
      description: "Express your unique style with our fashion ring collection",
      icon: Star,
      link: "/rings/fashion",
      color: "text-purple-600"
    },
    {
      title: "Vintage Rings",
      description: "Timeless pieces with classic charm and character",
      icon: Diamond,
      link: "/rings/vintage",
      color: "text-emerald-600"
    }
  ];

  return (
    <PageLayout 
      title="Rings Collection" 
      description="Discover our exquisite collection of rings, from engagement rings to fashion statements"
    >
      <div className="space-y-12">
        {/* Ring Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ringCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className={`mx-auto w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center ${category.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {category.description}
                      </p>
                      <Link href={category.link}>
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                          Explore Collection
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            We&apos;re currently curating our rings collection. Each category will feature carefully selected pieces that embody craftsmanship and elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Notify Me When Available
            </Button>
            <Link href="/custom">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                Design Custom Ring
              </Button>
            </Link>
          </div>
        </div>

        {/* Ring Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-amber-100 dark:bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Diamond className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Premium Quality</h3>
            <p className="text-gray-600 dark:text-gray-400">Every ring is crafted with the finest materials and attention to detail</p>
          </div>
          
          <div className="text-center">
            <div className="bg-amber-100 dark:bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Expert Craftsmanship</h3>
            <p className="text-gray-600 dark:text-gray-400">Our master jewelers bring decades of experience to every piece</p>
          </div>
          
          <div className="text-center">
            <div className="bg-amber-100 dark:bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Lifetime Warranty</h3>
            <p className="text-gray-600 dark:text-gray-400">Your investment is protected with our comprehensive warranty</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}