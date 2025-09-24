import PageLayout from '@/components/page-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Percent, Clock, Star, AlertTriangle, Sparkles } from 'lucide-react'

export default function ClearancePage() {
  const features = [
    {
      icon: Percent,
      title: "Up to 70% Off",
      description: "Massive savings on selected jewelry pieces from our premium collection."
    },
    {
      icon: Clock,
      title: "Limited Time",
      description: "These incredible deals won't last long. Shop now before they're gone forever."
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description: "All clearance items maintain our high standards and come with full warranty."
    },
    {
      icon: AlertTriangle,
      title: "Final Sale",
      description: "All clearance items are final sale. Returns and exchanges not available."
    }
  ]

  return (
    <PageLayout title="Clearance Sale - Liberty Gold & Diamonds">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-red-600 via-rose-600 to-orange-600">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Final Markdowns</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Clearance Sale
          </h1>
          
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Discover incredible savings on our finest jewelry pieces. From engagement rings to luxury watches, find exceptional quality at unbeatable clearance prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              Shop Clearance Deals
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View All Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Clearance Benefits
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Take advantage of these final markdowns on premium jewelry pieces while supplies last.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mx-auto w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-red-600 dark:text-red-400" />
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
            <Percent className="h-16 w-16 text-red-600 dark:text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Clearance Items Coming Soon
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're preparing an amazing selection of clearance jewelry with savings up to 70% off. Sign up to be notified when the clearance sale begins!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Get Notified
              </Button>
              <Button size="lg" variant="outline">
                Browse Other Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}