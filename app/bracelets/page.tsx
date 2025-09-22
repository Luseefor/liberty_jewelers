import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Crown, Circle, Zap } from "lucide-react";
import Link from "next/link";

export default function BraceletsPage() {
  const braceletCategories = [
    {
      title: "Tennis Bracelets",
      description: "Classic diamond tennis bracelets for elegant sophistication",
      icon: Crown,
      link: "/bracelets/tennis",
      color: "text-blue-600"
    },
    {
      title: "Charm Bracelets",
      description: "Personalized charm bracelets that tell your unique story",
      icon: Heart,
      link: "/bracelets/charm",
      color: "text-pink-600"
    },
    {
      title: "Bangles",
      description: "Sleek and sophisticated bangle bracelets in various metals",
      icon: Circle,
      link: "/bracelets/bangles",
      color: "text-amber-600"
    },
    {
      title: "Cuff Bracelets",
      description: "Bold statement cuff bracelets for modern elegance",
      icon: Zap,
      link: "/bracelets/cuff",
      color: "text-purple-600"
    }
  ];

  return (
    <PageLayout 
      title="Bracelets Collection" 
      description="Discover our exquisite collection of bracelets, from delicate tennis bracelets to bold cuffs"
    >
      <div className="space-y-16">
        {/* Bracelet Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {braceletCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className={`mx-auto w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <Link href={category.link}>
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
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
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-3xl p-12 text-center">
          <Heart className="w-20 h-20 mx-auto mb-8 text-rose-600" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We&apos;re curating an exceptional collection of bracelets that will gracefully adorn your wrists. From everyday elegance to special occasion glamour, each piece will be selected for its beauty and craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/20 dark:bg-black/20 backdrop-blur-sm border-white/30 dark:border-gray-600/30">
              Notify Me When Available
            </Button>
            <Link href="/custom">
              <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Design Custom Bracelet
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Perfect Fit</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Adjustable and custom sizing options ensure the perfect comfortable fit</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Crown className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Premium Materials</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Crafted with 14k and 18k gold, sterling silver, and genuine gemstones</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Versatile Styles</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">From delicate everyday pieces to bold statement bracelets</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}