import PageLayout from '@/components/page-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { User, MapPin, Edit, Shield, CreditCard } from 'lucide-react'

export default function AccountPage() {
  return (
    <PageLayout title="My Account - Liberty Gold & Diamonds">
      {/* Account Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Account
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Manage your account settings and preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile Information */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Full Name</label>
                  <p className="text-gray-900 dark:text-white">John Doe</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
                  <p className="text-gray-900 dark:text-white">john.doe@example.com</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Phone</label>
                  <p className="text-gray-900 dark:text-white">+1 (555) 123-4567</p>
                </div>
                <Button className="w-full mt-4">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Address Information */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Shipping Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-900 dark:text-white">123 Main Street</p>
                  <p className="text-gray-900 dark:text-white">New York, NY 10001</p>
                  <p className="text-gray-900 dark:text-white">United States</p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Edit className="h-4 w-4 mr-2" />
                  Update Address
                </Button>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Password</label>
                  <p className="text-gray-900 dark:text-white">••••••••</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Two-Factor Authentication</label>
                  <p className="text-gray-900 dark:text-white">Disabled</p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Shield className="h-4 w-4 mr-2" />
                  Security Settings
                </Button>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Payment Methods</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <p className="text-gray-900 dark:text-white font-medium">•••• •••• •••• 1234</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Expires 12/25</p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Manage Payment Methods
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}