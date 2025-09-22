import PageLayout from '@/components/page-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, Calendar, Gift, Snowflake, Sun, Heart } from 'lucide-react'

export default function SeasonalSalePage() {
  const features = [
    {
      icon: Calendar,
      title: "Seasonal Collections",
      description: "Special offers on jewelry pieces perfect for the current season and holidays."
    },
    {
      icon: Gift,
      title: "Holiday Specials",
      description: "Exclusive discounts on gift-worthy pieces for special occasions and celebrations."
    },
    {
      icon: Snowflake,
      title: "Winter Collection",
      description: "Elegant pieces featuring winter themes and cool-toned gemstones."
    },
    {
      icon: Sun,
      title: "Summer Styles",
      description: "Bright and vibrant jewelry perfect for warm weather and vacation vibes."
    }
  ]

  return (
    <PageLayout title="Seasonal Sale - Liberty Jewelers">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Limited Time Offers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Seasonal Sale
          </h1>
          
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Limited-time offers on seasonal collections. Discover jewelry pieces perfect for the current season, holidays, and special occasions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Shop Seasonal Deals
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View All Collections
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Seasonal Collections
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our seasonal jewelry collections with special offers throughout the year.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <Gift className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Seasonal Collection Coming Soon
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're curating a beautiful selection of seasonal jewelry with special holiday pricing. Be the first to know when our seasonal sale launches!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Heart className="h-5 w-5 mr-2" />
                Get Notified
              </Button>
              <Button size="lg" variant="outline">
                Browse Current Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}