import { NextRequest, NextResponse } from 'next/server'
import { productStore } from '@/lib/data-store'
import { Product, ApiResponse, PaginatedResponse } from '@/lib/types'

// GET /api/products - Get all products with filtering and pagination
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Extract filters
    const category = searchParams.get('category') as Product['category'] | null
    const subcategory = searchParams.get('subcategory')
    const inStock = searchParams.get('inStock')
    const featured = searchParams.get('featured')
    const search = searchParams.get('search')
    
    // Extract pagination
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    
    let result
    
    // Handle search
    if (search) {
      const searchResults = productStore.search(search)
      result = {
        products: searchResults.slice((page - 1) * limit, page * limit),
        total: searchResults.length,
        page,
        totalPages: Math.ceil(searchResults.length / limit)
      }
    } else {
      // Build filters object
      const filters: Partial<Product> = {}
      if (category) filters.category = category
      if (subcategory) filters.subcategory = subcategory
      if (inStock !== null) filters.inStock = inStock === 'true'
      if (featured !== null) filters.featured = featured === 'true'
      
      result = productStore.getAll(filters, { page, limit })
    }

    const response: PaginatedResponse<Product> = {
      success: true,
      data: result.products,
      pagination: {
        page: result.page || page,
        limit,
        total: result.total,
        totalPages: result.totalPages || Math.ceil(result.total / limit)
      }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

// POST /api/products - Create new product (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, price, category' },
        { status: 400 }
      )
    }

    // Create product
    const productData = {
      name: body.name,
      description: body.description || '',
      price: parseFloat(body.price),
      salePrice: body.salePrice ? parseFloat(body.salePrice) : undefined,
      category: body.category,
      subcategory: body.subcategory || '',
      images: body.images || [],
      materials: body.materials || [],
      gemstones: body.gemstones || [],
      specifications: body.specifications || {},
      inStock: body.inStock !== false, // default to true
      quantity: parseInt(body.quantity) || 0,
      featured: body.featured === true,
      tags: body.tags || []
    }

    const newProduct = productStore.create(productData)

    const response: ApiResponse<Product> = {
      success: true,
      data: newProduct,
      message: 'Product created successfully'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    )
  }
}