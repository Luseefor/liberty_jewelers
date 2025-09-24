'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertCircle, Lock, Shield, User } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import { redirect, useRouter } from 'next/navigation'
import { isEmailAdmin } from '@/lib/admin'

export default function AdminLoginPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState('')

  // Redirect if not logged in to Clerk
  if (isLoaded && !user) {
    redirect('/login?redirect_url=' + encodeURIComponent('/admin/login'))
  }

  // Check if user email is authorized
  const userEmail = user?.emailAddresses?.[0]?.emailAddress
  const isAuthorizedEmail = userEmail ? isEmailAdmin(userEmail) : false

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    setError('')

    try {
      // Verify admin password
      const response = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        // Set admin session and redirect
        sessionStorage.setItem('admin_verified', 'true')
        sessionStorage.setItem('admin_timestamp', Date.now().toString())
        router.push('/admin')
      } else {
        setError('Invalid admin password. Please try again.')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsVerifying(false)
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
            <Shield className="h-6 w-6 text-amber-600" />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
          <CardDescription>
            Secure access to Liberty Gold & Diamonds admin panel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* User Info */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <User className="h-5 w-5 text-gray-600" />
            <div className="flex-1">
              <div className="font-medium text-sm">{user?.fullName || 'User'}</div>
              <div className="text-xs text-gray-600">{userEmail}</div>
              <div className="text-xs text-gray-500 mt-1">
                Auth Status: {isAuthorizedEmail ? '✅ Authorized' : '❌ Not Authorized'}
              </div>
            </div>
          </div>

          {/* Email Authorization Check */}
          {!isAuthorizedEmail ? (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <h3 className="font-medium text-red-800">Access Denied</h3>
              </div>
              <p className="text-sm text-red-700">
                Your email address is not authorized for admin access. Please contact the store owner.
              </p>
              <div className="mt-3 p-2 bg-red-100 rounded text-xs">
                <p className="text-red-600 font-medium">Your email: {userEmail}</p>
                <p className="text-red-600">Expected: ghimirerijan199@gmail.com</p>
                <p className="text-red-500 mt-1">
                  Make sure you're signed in with the correct Gmail account.
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Email Authorized - Show Password Form */}
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <h3 className="font-medium text-green-800">Email Authorized</h3>
                </div>
                <p className="text-sm text-green-700">
                  Your email is authorized. Please enter the admin password to continue.
                </p>
              </div>

              {/* Password Form */}
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Admin Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    required
                    className="mt-1"
                    disabled={isVerifying}
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <span className="text-sm text-red-700">{error}</span>
                    </div>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  disabled={isVerifying}
                >
                  {isVerifying ? 'Verifying...' : 'Access Admin Panel'}
                </Button>
              </form>
            </>
          )}

          {/* Help Text */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Need admin access? Contact the store owner to be added to the authorized user list.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}