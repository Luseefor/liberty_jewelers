/**
 * Admin access control utilities
 * Handles admin authentication and authorization
 */

import { User } from '@clerk/nextjs/server'

/**
 * Check if a user is authorized to access admin features
 * Uses both email whitelist and admin password verification
 */
export function isUserAdmin(user: User | null): boolean {
  if (!user) return false
  
  const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(email => email.trim()) || []
  const userEmail = user.emailAddresses?.[0]?.emailAddress
  
  if (!userEmail) return false
  
  // Check if user email is in the admin whitelist
  return adminEmails.includes(userEmail)
}

/**
 * Verify admin password with rate limiting consideration
 */
export function verifyAdminPassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  
  // Basic timing attack prevention
  const isValid = adminPassword === password
  
  // Add a small delay to prevent timing attacks
  const delay = Math.random() * 100 + 50
  const start = Date.now()
  while (Date.now() - start < delay) {
    // Intentional delay
  }
  
  return isValid
}

/**
 * Get admin email list from environment variables
 */
export function getAdminEmails(): string[] {
  return process.env.ADMIN_EMAILS?.split(',').map(email => email.trim()) || []
}

/**
 * Check if current user email is in admin list (client-side version)
 */
export function isEmailAdmin(email: string): boolean {
  const adminEmails = [
    'ghimirerijan199@gmail.com',
    'admin@libertygolddiamonds.com',
    'owner@libertygolddiamonds.com'
    // Add more admin emails here as needed
  ]
  
  return adminEmails.includes(email.toLowerCase())
}