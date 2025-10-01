import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialize Stripe at runtime (server-side)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
if (!stripeSecretKey) {
  throw new Error('Stripe secret key not configured. Payment processing will not work.')
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-08-27.basil', // matches the Stripe TypeScript type
})
export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'usd', items, customerInfo } = await request.json()

    // Validate required fields
    if (!amount || amount < 50) {
      return NextResponse.json(
        { error: 'Amount must be at least $0.50' },
        { status: 400 }
      )
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Items are required for payment' },
        { status: 400 }
      )
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // must be integer
      currency: currency.toLowerCase(),
      description: `Liberty Gold & Diamonds - ${items.length} item(s)`,
      metadata: {
        items: JSON.stringify(items.map((item: { id: string; name: string; price: number; quantity: number }) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        }))),
        customer_email: customerInfo?.email || '',
        customer_name: customerInfo?.name || '',
        store: 'Liberty Gold & Diamonds'
      },
      automatic_payment_methods: { enabled: true },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    })
  } catch (error) {
    console.error('Payment intent creation error:', error)

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const paymentIntentId = searchParams.get('payment_intent_id')

    if (!paymentIntentId) {
      return NextResponse.json(
        { error: 'Payment intent ID is required' },
        { status: 400 }
      )
    }

    // Retrieve payment intent
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)

    return NextResponse.json({
      id: paymentIntent.id,
      status: paymentIntent.status,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      metadata: paymentIntent.metadata
    })
  } catch (error) {
    console.error('Payment intent retrieval error:', error)

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to retrieve payment intent' },
      { status: 500 }
    )
  }
}
