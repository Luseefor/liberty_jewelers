import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, CreditCard, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import PageLayout from '@/components/page-layout'

export default function CheckoutPage() {
  return (
    <PageLayout 
      title="Checkout" 
      description="Complete your jewelry purchase"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Secure Checkout</h1>
            <p className="text-gray-600 dark:text-gray-400">Complete your purchase safely and securely</p>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-full mb-4 mx-auto">
                <CreditCard className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <CardTitle className="text-2xl">Online Checkout Coming Soon</CardTitle>
              <CardDescription className="text-base">
                We&apos;re currently setting up our secure online payment system to serve you better
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">
                  How to Complete Your Purchase:
                </h3>
                <div className="space-y-3 text-amber-800 dark:text-amber-200">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Call Us Directly</p>
                      <p className="text-sm">Speak with our jewelry experts for personalized service</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email Your Inquiry</p>
                      <p className="text-sm">Send us details about the pieces you&apos;re interested in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border border-amber-200 dark:border-amber-800">
                  <CardContent className="p-4 text-center">
                    <Phone className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                    <p className="font-medium mb-1">Call Now</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Speak directly with our team
                    </p>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-amber-200 dark:border-amber-800">
                  <CardContent className="p-4 text-center">
                    <Mail className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                    <p className="font-medium mb-1">Email Inquiry</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Get detailed information
                    </p>
                    <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our secure online checkout will be available soon. Thank you for your patience!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  )
}