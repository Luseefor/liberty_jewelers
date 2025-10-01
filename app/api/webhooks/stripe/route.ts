import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'

// Initialize Stripe
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

if (!stripeSecretKey || stripeSecretKey === 'sk_test_YOUR_ACTUAL_STRIPE_SECRET_KEY_HERE') {
  console.warn('Stripe webhook secret key not configured.')
}

const stripe = stripeSecretKey && stripeSecretKey !== 'sk_test_YOUR_ACTUAL_STRIPE_SECRET_KEY_HERE'
  ? new Stripe(stripeSecretKey, { apiVersion: '2025-08-27.basil' })
  : null

export async function POST(request: NextRequest) {
  // Check if Stripe is properly configured
  if (!stripe || !endpointSecret || endpointSecret === 'whsec_YOUR_WEBHOOK_SECRET_HERE') {
    return NextResponse.json(
      { error: 'Webhook processing is not configured. Please contact support.' },
      { status: 503 }
    )
  }

  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    )
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log('Payment succeeded:', paymentIntent.id)
        
        // Here you would typically:
        // 1. Update your database with the successful payment
        // 2. Send confirmation emails
        // 3. Update inventory
        // 4. Create order records
        
        await handleSuccessfulPayment(paymentIntent)
        break

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent
        console.log('Payment failed:', failedPayment.id)
        
        await handleFailedPayment(failedPayment)
        break

      case 'customer.created':
        const customer = event.data.object as Stripe.Customer
        console.log('Customer created:', customer.id)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handleSuccessfulPayment(paymentIntent: Stripe.PaymentIntent) {
  try {
    const { metadata } = paymentIntent
    
    console.log('Processing successful payment:', {
      id: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      customer_email: metadata.customer_email,
      customer_name: metadata.customer_name,
      items: metadata.items ? JSON.parse(metadata.items) : []
    })
    
    // TODO: Implement your business logic here
    // - Save order to database
    // - Send confirmation email
    // - Update inventory
    // - Create customer record if new
    
    // Example: Send confirmation email (you'd implement this)
    // await sendOrderConfirmationEmail({
    //   email: metadata.customer_email,
    //   name: metadata.customer_name,
    //   paymentIntentId: paymentIntent.id,
    //   items: JSON.parse(metadata.items || '[]'),
    //   total: paymentIntent.amount
    // })
    
  } catch (error) {
    console.error('Error handling successful payment:', error)
    throw error
  }
}

async function handleFailedPayment(paymentIntent: Stripe.PaymentIntent) {
  try {
    console.log('Processing failed payment:', {
      id: paymentIntent.id,
      last_payment_error: paymentIntent.last_payment_error
    })
    
    // TODO: Implement your business logic here
    // - Log failed payment attempt
    // - Send notification to customer about failed payment
    // - Implement retry logic if needed
    
  } catch (error) {
    console.error('Error handling failed payment:', error)
    throw error
  }
}