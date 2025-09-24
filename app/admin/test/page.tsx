'use client'

import { useUser } from '@clerk/nextjs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { isEmailAdmin } from '@/lib/admin'

export default function AdminTestPage() {
  const { user, isLoaded } = useUser()
  
  if (!isLoaded) {
    return <div>Loading...</div>
  }

  const userEmail = user?.emailAddresses?.[0]?.emailAddress
  const isAuthorized = userEmail ? isEmailAdmin(userEmail) : false

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin Auth Debug</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <strong>User Loaded:</strong> {isLoaded ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>User Object:</strong> {user ? 'Present' : 'Missing'}
          </div>
          <div>
            <strong>User Email:</strong> {userEmail || 'Not found'}
          </div>
          <div>
            <strong>Email Authorized:</strong> {isAuthorized ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>User Full Name:</strong> {user?.fullName || 'Not available'}
          </div>
          <div>
            <strong>All Email Addresses:</strong>
            <pre className="text-xs mt-1 bg-gray-100 p-2 rounded">
              {JSON.stringify(user?.emailAddresses?.map(e => e.emailAddress), null, 2)}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}