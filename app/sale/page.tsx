import PageLayout from '@/components/page-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Percent, Clock, Star, Zap, Tag, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function SalePage() {
  const saleCategories = [
    {
      title: "Clearance Sale",
      description: "Up to 70% off select jewelry pieces",
      icon: <Percent className="h-8 w-8" />,
      href: "/sale/clearance",
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    },
    {
      title: "Seasonal Sale",
      description: "Limited-time offers on seasonal collections",
      icon: <Sparkles className="h-8 w-8" />,
      href: "/sale/seasonal",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "Last Chance",
      description: "Final markdowns on discontinued items",
      icon: <Clock className="h-8 w-8" />,
      href: "/sale/last-chance",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      title: "Outlet Store",
      description: "Overstock and display pieces at great prices",
      icon: <Tag className="h-8 w-8" />,
      href: "/sale/outlet",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ]

  const currentDeals = [
    {
      title: "Diamond Ring Sale",
      description: "Save up to 40% on engagement rings",
      originalPrice: "$2,999",
      salePrice: "$1,799",
      savings: "40% OFF"
    },
    {
      title: "Tennis Bracelet Special",
      description: "Premium tennis bracelets marked down",
      originalPrice: "$1,299",
      salePrice: "$899",
      savings: "31% OFF"
    },
    {
      title: "Pearl Necklace Collection",
      description: "Elegant pearl pieces on sale",
      originalPrice: "$899",
      salePrice: "$649",
      savings: "28% OFF"
    }
  ]

  return (
    <PageLayout title="Sale & Special Offers">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-red-950/20 dark:via-rose-950/20 dark:to-pink-950/20">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-red-100 dark:bg-red-900/20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23dc2626' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            <span>Limited Time Offers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
            Sale Event
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover exceptional savings on our finest jewelry collection. From engagement rings to luxury watches, find your perfect piece at unbeatable prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Star className="h-5 w-5 mr-2" />
              Shop Best Deals
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
              View All Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Sale Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sale Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our different sale sections to find the best deals on your favorite jewelry pieces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleCategories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto p-3 rounded-full ${category.bgColor} ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Current Deals */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Deals
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don&apos;t miss out on these incredible limited-time offers on our most popular pieces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentDeals.map((deal, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-semibold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {deal.title}
                    </CardTitle>
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-1 rounded-full text-xs font-bold">
                      {deal.savings}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {deal.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 dark:text-gray-400 line-through text-sm">
                        {deal.originalPrice}
                      </span>
                      <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {deal.salePrice}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don&apos;t Miss Out on These Amazing Deals
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Our sale events are limited time only. Sign up for notifications to be the first to know about new sales and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              Get Sale Alerts
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Browse All Products
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}