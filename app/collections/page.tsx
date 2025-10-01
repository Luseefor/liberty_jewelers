import PageLayout from "@/components/page-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Award, Crown, Heart, Diamond } from "lucide-react";
import Link from "next/link";

export default function CollectionsPage() {
  const collections = [
    {
      title: "New Arrivals",
      description: "Latest additions to our jewelry collection",
      icon: Sparkles,
      link: "/collections/new-arrivals",
      color: "text-blue-600",
      gradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      title: "Best Sellers",
      description: "Our most popular and loved pieces",
      icon: Star,
      link: "/collections/best-sellers",
      color: "text-amber-600",
      gradient: "from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20"
    },
    {
      title: "Featured Collection",
      description: "Curated selection of exceptional pieces",
      icon: Award,
      link: "/collections/featured",
      color: "text-purple-600",
      gradient: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20"
    },
    {
      title: "Limited Edition",
      description: "Exclusive designs in limited quantities",
      icon: Crown,
      link: "/collections/limited-edition",
      color: "text-emerald-600",
      gradient: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20"
    },
    {
      title: "Bridal Collection",
      description: "Perfect pieces for your special day",
      icon: Heart,
      link: "/collections/bridal",
      color: "text-pink-600",
      gradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
    },
    {
      title: "Diamond Collection",
      description: "Stunning pieces featuring premium diamonds",
      icon: Diamond,
      link: "/collections/diamonds",
      color: "text-gray-600",
      gradient: "from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20"
    }
  ];

  return (
    <PageLayout 
      title="Collections" 
      description="Explore our curated jewelry collections featuring the finest craftsmanship"
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-12 text-center">
          <Sparkles className="w-20 h-20 mx-auto mb-8 text-amber-600" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Discover Our Collections
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Each collection tells a unique story through carefully selected pieces that embody elegance, craftsmanship, and timeless beauty. Find the perfect piece that speaks to your style.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => {
            const IconComponent = collection.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden">
                <div className={`bg-gradient-to-br ${collection.gradient} p-8`}>
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-full mb-6 ${collection.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {collection.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {collection.description}
                    </p>
                    <Link href={collection.link}>
                      <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                        Explore Collection
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Categories Quick Links */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Shop by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Link href="/rings">
              <Button variant="outline" className="w-full h-16 text-lg">Rings</Button>
            </Link>
            <Link href="/necklaces">
              <Button variant="outline" className="w-full h-16 text-lg">Necklaces</Button>
            </Link>
            <Link href="/earrings">
              <Button variant="outline" className="w-full h-16 text-lg">Earrings</Button>
            </Link>
            <Link href="/bracelets">
              <Button variant="outline" className="w-full h-16 text-lg">Bracelets</Button>
            </Link>
            <Link href="/watches">
              <Button variant="outline" className="w-full h-16 text-lg">Watches</Button>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Our custom design service can bring your unique vision to life. Work with our expert designers to create a one-of-a-kind piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/custom">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                Custom Design
              </Button>
            </Link>
            <Link href="/consultation">
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}