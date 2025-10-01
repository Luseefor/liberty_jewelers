import PageLayout from '@/components/page-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, AlertTriangle, Zap, Timer, Sparkles } from 'lucide-react'

export default function LastChancePage() {
  const features = [
    {
      icon: Clock,
      title: "Final Hours",
      description: "These items are in their last chance phase. Once they're gone, they're gone forever."
    },
    {
      icon: AlertTriangle,
      title: "Deep Discounts",
      description: "Maximum savings on discontinued and final inventory pieces."
    },
    {
      icon: Zap,
      title: "Act Fast",
      description: "Limited quantities available. Don't miss out on these incredible final deals."
    },
    {
      icon: Timer,
      title: "Time-Sensitive",
      description: "Deals expire soon. These prices won't be available anywhere else."
    }
  ]

  return (
    <PageLayout title="Last Chance Sale - Liberty Gold & Diamonds">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            background: 'radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Final Markdowns</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Last Chance
          </h1>
          
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Final markdowns on discontinued items. These are your last chance to own these beautiful pieces at incredible prices before they&apos;re gone forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              Shop Last Chance
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
              Why Act Now
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These are truly final opportunities to purchase these discontinued jewelry pieces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-orange-600 dark:text-orange-400" />
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

      {/* Urgency Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="p-8 rounded-2xl bg-orange-50 dark:bg-orange-900/20 backdrop-blur-sm border border-orange-200 dark:border-orange-700">
            <AlertTriangle className="h-16 w-16 text-orange-600 dark:text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Last Chance Items Coming Soon
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re identifying final inventory pieces for maximum savings. These will be true last chance opportunities with no restocks available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <Timer className="h-5 w-5 mr-2" />
                Get Urgent Alerts
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