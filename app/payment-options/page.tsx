import PageLayout from '@/components/page-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CreditCard, DollarSign, Calendar, Shield, CheckCircle, Star, Phone } from 'lucide-react'
import Link from 'next/link'

export default function PaymentOptionsPage() {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Credit & Debit Cards",
      description: "We accept all major credit and debit cards",
      features: [
        "Visa, Mastercard, American Express",
        "Discover, JCB, Diners Club",
        "Secure processing with encryption",
        "Instant transaction confirmation"
      ],
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: DollarSign,
      title: "Cash Payments",
      description: "Traditional cash payments accepted in-store",
      features: [
        "Immediate payment processing",
        "No transaction fees",
        "Perfect for in-store purchases",
        "Receipt provided for all transactions"
      ],
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: Calendar,
      title: "Acima Financing",
      description: "Flexible lease-to-own financing options",
      features: [
        "No credit needed - lease to own",
        "Quick and easy approval process",
        "Flexible payment schedules",
        "90-day purchase option available"
      ],
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ]

  const securityFeatures = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "All payments are processed with bank-level security"
    },
    {
      icon: CheckCircle,
      title: "Fraud Protection",
      description: "Advanced fraud detection and prevention systems"
    },
    {
      icon: Star,
      title: "Trusted Processing",
      description: "Industry-leading payment processors and compliance"
    }
  ]

  return (
    <PageLayout title="Payment Options - Liberty Gold & Diamonds">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-green-950/20">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Payment Options
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We make it easy to purchase your perfect jewelry with multiple convenient and secure payment options.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="h-5 w-5 mr-2" />
              Contact for Details
            </Button>
            <Button size="lg" variant="outline">
              Browse Collections
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Payment Method
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer flexible payment options to make your jewelry purchase convenient and accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-8 w-8 ${method.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {method.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {method.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className={`h-4 w-4 ${method.color} flex-shrink-0`} />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Acima Financing Details */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-indigo-950/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Acima Financing Details
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Make your dream jewelry purchase today with flexible lease-to-own options
            </p>
          </div>
          
          <Card className="border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How It Works</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                      <span className="text-gray-600 dark:text-gray-300">Choose your jewelry and apply for Acima financing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                      <span className="text-gray-600 dark:text-gray-300">Get approved quickly with no credit needed</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                      <span className="text-gray-600 dark:text-gray-300">Take your jewelry home today</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                      <span className="text-gray-600 dark:text-gray-300">Make flexible payments to own it</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">No credit needed to apply</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">Quick approval process</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">90-day purchase option available</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">Flexible payment schedules</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  <strong>Apply Today:</strong> Visit our store or call us to learn more about Acima financing options and get pre-approved for your jewelry purchase.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Secure & Trusted
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your payment security is our top priority
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make Your Purchase?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit our store or contact us to learn more about our payment options and find the perfect financing solution for your jewelry purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/collections">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}