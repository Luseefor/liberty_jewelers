import { NextRequest, NextResponse } from 'next/server'
import { collectionStore } from '@/lib/data-store'
import { Collection, ApiResponse } from '@/lib/types'

// GET /api/collections - Get all collections
export async function GET() {
  try {
    const collections = collectionStore.getAll()

    const response: ApiResponse<Collection[]> = {
      success: true,
      data: collections
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching collections:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch collections' },
      { status: 500 }
    )
  }
}

// POST /api/collections - Create new collection (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.slug) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, slug' },
        { status: 400 }
      )
    }

    // Create collection
    const collectionData = {
      name: body.name,
      slug: body.slug,
      description: body.description || '',
      image: body.image || '',
      products: body.products || [],
      featured: body.featured === true
    }

    const newCollection = collectionStore.create(collectionData)

    const response: ApiResponse<Collection> = {
      success: true,
      data: newCollection,
      message: 'Collection created successfully'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Error creating collection:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create collection' },
      { status: 500 }
    )
  }
}