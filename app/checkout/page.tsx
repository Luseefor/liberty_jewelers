'use client'

import { useState } from 'react'
import StripeCheckout from '@/components/stripe-checkout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { JewelryPaymentItem } from '@/lib/stripe'

// Sample jewelry items for demonstration
const sampleItems: JewelryPaymentItem[] = [
  {
    id: '1',
    name: 'Diamond Engagement Ring',
    price: 250000, // $2,500.00 in cents
    quantity: 1,
    category: 'rings',
    image: '/images/ring1.jpg'
  },
  {
    id: '2', 
    name: 'Pearl Necklace',
    price: 85000, // $850.00 in cents
    quantity: 1,
    category: 'necklaces',
    image: '/images/necklace1.jpg'
  }
]

export default function CheckoutPage() {
  const [showCheckout, setShowCheckout] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [paymentIntentId, setPaymentIntentId] = useState('')

  const handlePaymentSuccess = (intentId: string) => {
    setPaymentIntentId(intentId)
    setPaymentComplete(true)
    console.log('Payment successful! Intent ID:', intentId)
  }

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error)
    alert(`Payment failed: ${error}`)
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <ShoppingCart className="h-6 w-6 text-green-600" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    Thank You for Your Purchase!
                  </h1>
                  <p className="text-gray-600">
                    Your order has been successfully processed and you will receive a confirmation email shortly.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Payment ID: <span className="font-mono">{paymentIntentId}</span>
                    </p>
                  </div>
                  <div className="flex gap-4 justify-center pt-4">
                    <Link href="/">
                      <Button variant="outline">Continue Shopping</Button>
                    </Link>
                    <Button 
                      onClick={() => {
                        setPaymentComplete(false)
                        setShowCheckout(false)
                      }}
                    >
                      New Order
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Store
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
            <p className="text-gray-600">Secure payment for Liberty Gold & Diamonds</p>
          </div>
        </div>

        {!showCheckout ? (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Demo Checkout
                </CardTitle>
                <CardDescription>
                  This is a demonstration of the payment system with sample jewelry items
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Sample Items:</h3>
                  {sampleItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">Category: {item.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          ${(item.price / 100).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-amber-600">
                      ${(sampleItems.reduce((total, item) => total + (item.price * item.quantity), 0) / 100).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-800 mb-2">Payment Methods Accepted:</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• All major credit and debit cards</li>
                    <li>• Visa, MasterCard, American Express</li>
                    <li>• Secure payment processing by Stripe</li>
                    <li>• SSL encrypted transactions</li>
                  </ul>
                </div>

                <Button 
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  size="lg"
                >
                  Proceed to Payment
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <StripeCheckout
            items={sampleItems}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
          />
        )}
      </div>
    </div>
  )
}