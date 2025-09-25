import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Bell, Shield, Mail, Eye, Globe, Moon, Sun, Palette } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export default function AccountPreferencesPage() {
  const notifications = [
    { id: 'email_promotions', label: 'Email promotions and offers', enabled: true },
    { id: 'order_updates', label: 'Order status updates', enabled: true },
    { id: 'new_arrivals', label: 'New arrival notifications', enabled: false },
    { id: 'price_drops', label: 'Price drop alerts on wishlist items', enabled: true },
    { id: 'newsletter', label: 'Monthly jewelry care newsletter', enabled: true },
  ];

  const privacy = [
    { id: 'profile_visibility', label: 'Make my profile visible to other customers', enabled: false },
    { id: 'purchase_history', label: 'Allow purchase history for recommendations', enabled: true },
    { id: 'marketing_analytics', label: 'Marketing and analytics tracking', enabled: true },
  ];

  return (
    <PageLayout title="Account Preferences" description="Manage your notification preferences, privacy settings, and account customization">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <Settings className="w-12 h-12 mx-auto mb-4 text-amber-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Account Preferences</h1>
          <p className="text-gray-600 dark:text-gray-400">Customize your Liberty Gold & Diamonds experience</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Notification Preferences */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Bell className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Notification Preferences</h2>
              </div>
              
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <div>
                      <label htmlFor={notification.id} className="text-gray-900 dark:text-white font-medium cursor-pointer">
                        {notification.label}
                      </label>
                    </div>
                    <div>
                      <input 
                        type="checkbox" 
                        id={notification.id}
                        defaultChecked={notification.enabled}
                        className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 focus:ring-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Privacy Settings</h2>
              </div>
              
              <div className="space-y-4">
                {privacy.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <div>
                      <label htmlFor={setting.id} className="text-gray-900 dark:text-white font-medium cursor-pointer">
                        {setting.label}
                      </label>
                    </div>
                    <div>
                      <input 
                        type="checkbox" 
                        id={setting.id}
                        defaultChecked={setting.enabled}
                        className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 focus:ring-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Display Preferences */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Palette className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Display Preferences</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-3">
                    Theme Preference
                  </label>
                  <div className="flex space-x-4">
                    <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                      <Sun className="w-4 h-4 mr-2" />
                      Light
                    </button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                      <Moon className="w-4 h-4 mr-2" />
                      Dark
                    </button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                      <Globe className="w-4 h-4 mr-2" />
                      System
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-3">
                    Currency Display
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="CAD">CAD (C$)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-3">
                    Items Per Page
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <option value="12">12 items</option>
                    <option value="24">24 items</option>
                    <option value="36">36 items</option>
                    <option value="48">48 items</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Communication Preferences */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Communication Preferences</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="contact_method" value="email" defaultChecked className="mr-3 text-amber-600" />
                      <span className="text-gray-900 dark:text-gray-300">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="contact_method" value="phone" className="mr-3 text-amber-600" />
                      <span className="text-gray-900 dark:text-gray-300">Phone</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="contact_method" value="text" className="mr-3 text-amber-600" />
                      <span className="text-gray-900 dark:text-gray-300">Text Message</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-3">
                    Best Time to Contact
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-center pt-6">
            <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-8 py-3">
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}