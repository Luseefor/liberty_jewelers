import { NextRequest, NextResponse } from 'next/server'
import { orderStore } from '@/lib/data-store'
import { Order, ApiResponse } from '@/lib/types'

// GET /api/orders - Get all orders (admin) or user orders
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    
    let orders
    if (userId) {
      orders = orderStore.getByUser(userId)
    } else {
      // Admin - get all orders
      orders = orderStore.getAll()
    }

    const response: ApiResponse<Order[]> = {
      success: true,
      data: orders
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}

// POST /api/orders - Create new order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.customerInfo || !body.items || body.items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: customerInfo, items' },
        { status: 400 }
      )
    }

    // Create order
    const orderData = {
      userId: body.userId,
      customerInfo: body.customerInfo,
      items: body.items,
      subtotal: body.subtotal || 0,
      tax: body.tax || 0,
      shipping: body.shipping || 0,
      total: body.total || 0,
      status: 'pending' as const,
      paymentStatus: 'pending' as const,
      shippingMethod: body.shippingMethod || 'standard',
      notes: body.notes
    }

    const newOrder = orderStore.create(orderData)

    const response: ApiResponse<Order> = {
      success: true,
      data: newOrder,
      message: 'Order created successfully'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    )
  }
}