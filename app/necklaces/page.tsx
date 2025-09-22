import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Sparkles, Crown } from "lucide-react";
import Link from "next/link";

export default function NecklacesPage() {
  const necklaceCategories = [
    {
      title: "Pendants",
      description: "Beautiful pendant necklaces for every occasion",
      icon: Heart,
      link: "/necklaces/pendants",
      color: "text-pink-600"
    },
    {
      title: "Chains",
      description: "Classic and contemporary chain necklaces",
      icon: Star,
      link: "/necklaces/chains",
      color: "text-amber-600"
    },
    {
      title: "Chokers",
      description: "Elegant chokers for a sophisticated look",
      icon: Sparkles,
      link: "/necklaces/chokers",
      color: "text-purple-600"
    },
    {
      title: "Statement Pieces",
      description: "Bold necklaces that make a statement",
      icon: Crown,
      link: "/necklaces/statement",
      color: "text-emerald-600"
    }
  ];

  return (
    <PageLayout 
      title="Necklaces Collection" 
      description="Discover our exquisite collection of necklaces, from delicate pendants to statement pieces"
    >
      <div className="space-y-12">
        {/* Necklace Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {necklaceCategories.map((category, index) => {
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
            We&apos;re currently curating our necklace collection. Each category will feature stunning pieces that enhance your natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Notify Me When Available
            </Button>
            <Link href="/custom/necklaces">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                Design Custom Necklace
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-amber-100 dark:bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Versatile Lengths</h3>
            <p className="text-gray-600 dark:text-gray-400">From chokers to opera length, find the perfect fit for any neckline</p>
          </div>
          
          <div className="text-center">
            <div className="bg-amber-100 dark:bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Layering Options</h3>
            <p className="text-gray-600 dark:text-gray-400">Mix and match our necklaces for the perfect layered look</p>
          </div>
          
          <div className="text-center">
            <div className="bg-amber-100 dark:bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Premium Materials</h3>
            <p className="text-gray-600 dark:text-gray-400">Crafted with fine metals and genuine gemstones</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}