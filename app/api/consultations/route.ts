import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for consultation requests (in production, use a database)
let consultationRequests: Array<{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consultationType: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'scheduled' | 'completed';
}> = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Generate a simple ID
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    
    // Create the consultation request
    const consultationRequest = {
      id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      consultationType: data.consultationType,
      message: data.message,
      submittedAt: data.submittedAt || new Date().toISOString(),
      status: 'new' as const
    };
    
    // Store the request
    consultationRequests.push(consultationRequest);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Consultation request submitted successfully',
        id: id
      }, 
      { status: 201 }
    );
  } catch (error) {
    console.error('Error handling consultation request:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit consultation request' 
      }, 
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check if this is an admin request (you might want to add proper authentication)
    const url = new URL(request.url);
    const adminPassword = url.searchParams.get('adminPassword');
    
    // Simple admin authentication (in production, use proper auth)
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Return all consultation requests for admin
    return NextResponse.json({
      success: true,
      consultations: consultationRequests.sort((a, b) => 
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      )
    });
  } catch (error) {
    console.error('Error fetching consultations:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch consultations' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const adminPassword = url.searchParams.get('adminPassword');
    
    // Simple admin authentication
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const { id, status } = await request.json();
    
    // Find and update the consultation request
    const index = consultationRequests.findIndex(req => req.id === id);
    if (index === -1) {
      return NextResponse.json(
        { success: false, message: 'Consultation not found' },
        { status: 404 }
      );
    }
    
    consultationRequests[index].status = status;
    
    return NextResponse.json({
      success: true,
      message: 'Consultation status updated successfully',
      consultation: consultationRequests[index]
    });
  } catch (error) {
    console.error('Error updating consultation:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update consultation' },
      { status: 500 }
    );
  }
}