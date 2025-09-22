import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Watch, Crown, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function WatchesPage() {
  const watchCategories = [
    {
      title: "Luxury Watches",
      description: "Premium timepieces from renowned Swiss and international brands",
      icon: Crown,
      link: "/watches/luxury",
      color: "text-amber-600"
    },
    {
      title: "Sports Watches",
      description: "Durable and functional watches for active lifestyles",
      icon: Zap,
      link: "/watches/sports",
      color: "text-blue-600"
    },
    {
      title: "Classic Watches",
      description: "Timeless designs that never go out of style",
      icon: Watch,
      link: "/watches/classic",
      color: "text-gray-600"
    },
    {
      title: "Smart Watches",
      description: "Modern technology meets elegant design",
      icon: Target,
      link: "/watches/smart",
      color: "text-purple-600"
    }
  ];

  return (
    <PageLayout 
      title="Watches Collection" 
      description="Discover our curated collection of luxury watches and timepieces"
    >
      <div className="space-y-16">
        {/* Watch Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {watchCategories.map((category, index) => {
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
        <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 rounded-3xl p-12 text-center">
          <Watch className="w-20 h-20 mx-auto mb-8 text-slate-600" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We&apos;re curating an exceptional collection of timepieces from the world&apos;s finest watchmakers. From luxury Swiss movements to innovative smart watches, each piece will represent the pinnacle of horological excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/20 dark:bg-black/20 backdrop-blur-sm border-white/30 dark:border-gray-600/30">
              Notify Me When Available
            </Button>
            <Link href="/consultation">
              <Button size="lg" className="bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Watch Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Crown className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Authentic Timepieces</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">All watches come with manufacturer warranty and authenticity certification</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Expert Service</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Professional watch servicing and repair by certified technicians</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Watch className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Lifetime Support</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Ongoing support and maintenance for your investment timepiece</p>
            </CardContent>
          </Card>
        </div>

        {/* Brand Partners */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Authorized Dealer
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            We are proud to be authorized dealers for prestigious watch brands including:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
            <span>Rolex</span>
            <span>•</span>
            <span>Omega</span>
            <span>•</span>
            <span>TAG Heuer</span>
            <span>•</span>
            <span>Breitling</span>
            <span>•</span>
            <span>Cartier</span>
            <span>•</span>
            <span>And More</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}