import PageLayout from '@/components/page-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tag, Package, Star, Shield, Sparkles } from 'lucide-react'

export default function OutletPage() {
  const features = [
    {
      icon: Tag,
      title: "Outlet Pricing",
      description: "Overstock and display pieces at significantly reduced outlet prices."
    },
    {
      icon: Package,
      title: "Display Models",
      description: "Floor models and demo pieces in excellent condition at great savings."
    },
    {
      icon: Star,
      title: "Quality Maintained",
      description: "All outlet items meet our quality standards and include warranties."
    },
    {
      icon: Shield,
      title: "Authentic Guarantee",
      description: "Every outlet piece is 100% authentic with certificates of authenticity."
    }
  ]

  return (
    <PageLayout title="Outlet Store - Liberty Gold & Diamonds">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            background: 'radial-gradient(circle at 40% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 70%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Outlet Deals</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Outlet Store
          </h1>
          
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Overstock and display pieces at great prices. Find authentic jewelry at outlet pricing without compromising on quality or warranty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Shop Outlet Deals
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Authenticity Promise
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Outlet Benefits
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Enjoy significant savings on authentic jewelry pieces without compromising quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-purple-600 dark:text-purple-400" />
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
            <Package className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Outlet Items Coming Soon
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're preparing a selection of overstock and display pieces for our outlet store. Get notified when these outlet deals become available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Tag className="h-5 w-5 mr-2" />
                Get Outlet Alerts
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