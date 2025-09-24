import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminPassword } from '@/lib/admin'

// Simple in-memory rate limiting (for production, use Redis or database)
const attempts = new Map<string, { count: number; lastAttempt: number }>()
const MAX_ATTEMPTS = 5
const LOCKOUT_TIME = 15 * 60 * 1000 // 15 minutes

export async function POST(request: NextRequest) {
  try {
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    
    // Check rate limiting
    const now = Date.now()
    const userAttempts = attempts.get(clientIp)
    
    if (userAttempts) {
      if (userAttempts.count >= MAX_ATTEMPTS && now - userAttempts.lastAttempt < LOCKOUT_TIME) {
        return NextResponse.json(
          { error: 'Too many attempts. Please try again later.' },
          { status: 429 }
        )
      }
      
      if (now - userAttempts.lastAttempt > LOCKOUT_TIME) {
        // Reset attempts after lockout period
        attempts.delete(clientIp)
      }
    }

    const { password } = await request.json()

    if (!password || typeof password !== 'string') {
      return NextResponse.json(
        { error: 'Valid password is required' },
        { status: 400 }
      )
    }

    const isValid = verifyAdminPassword(password)

    if (isValid) {
      // Reset attempts on successful login
      attempts.delete(clientIp)
      return NextResponse.json({ success: true })
    } else {
      // Increment failed attempts
      const current = attempts.get(clientIp) || { count: 0, lastAttempt: 0 }
      attempts.set(clientIp, {
        count: current.count + 1,
        lastAttempt: now
      })
      
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Admin verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}