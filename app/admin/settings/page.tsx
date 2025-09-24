'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  ArrowLeft, 
  Save, 
  Store,
  Mail,
  Phone,
  MapPin,
  Clock,
  CreditCard,
  Shield,
  Palette,
  Settings as SettingsIcon
} from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import { redirect, useRouter } from 'next/navigation'
import Link from 'next/link'
import { isEmailAdmin } from '@/lib/admin'

interface StoreSettings {
  // Store Information
  storeName: string
  storeDescription: string
  storeEmail: string
  storePhone: string
  storeAddress: string
  
  // Business Hours
  mondayHours: string
  tuesdayHours: string
  wednesdayHours: string
  thursdayHours: string
  fridayHours: string
  saturdayHours: string
  sundayHours: string
  
  // Payment Settings
  acceptCash: boolean
  acceptCards: boolean
  acceptAcima: boolean
  
  // Theme Settings
  primaryColor: string
  accentColor: string
  
  // SEO Settings
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

const defaultSettings: StoreSettings = {
  storeName: 'Liberty Gold & Diamonds',
  storeDescription: 'Exquisite fine jewelry and custom designs since 1985',
  storeEmail: 'info@libertygolddiamonds.com',
  storePhone: '(555) 123-4567',
  storeAddress: '123 Main Street, Downtown, NY 10001',
  
  mondayHours: '9:00 AM - 6:00 PM',
  tuesdayHours: '9:00 AM - 6:00 PM',
  wednesdayHours: '9:00 AM - 6:00 PM',
  thursdayHours: '9:00 AM - 6:00 PM',
  fridayHours: '9:00 AM - 7:00 PM',
  saturdayHours: '10:00 AM - 6:00 PM',
  sundayHours: 'Closed',
  
  acceptCash: true,
  acceptCards: true,
  acceptAcima: true,
  
  primaryColor: '#d97706',
  accentColor: '#f59e0b',
  
  metaTitle: 'Liberty Gold & Diamonds | Exquisite Fine Jewelry & Custom Designs',
  metaDescription: 'Discover luxury jewelry at Liberty Gold & Diamonds. From engagement rings to custom pieces, we offer the finest diamonds, gold, and precious gemstones.',
  metaKeywords: 'jewelry, diamonds, engagement rings, custom jewelry, fine jewelry'
}

export default function AdminSettingsPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [settings, setSettings] = useState<StoreSettings>(defaultSettings)
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState<'store' | 'hours' | 'payment' | 'theme' | 'seo'>('store')

  // Check admin access
  const userEmail = user?.emailAddresses?.[0]?.emailAddress
  const isAuthorizedEmail = userEmail ? isEmailAdmin(userEmail) : false

  useEffect(() => {
    // Check admin session
    const adminVerified = sessionStorage.getItem('admin_verified')
    if (!adminVerified) {
      router.push('/admin/login')
      return
    }

    // Load settings from localStorage or API
    const savedSettings = localStorage.getItem('storeSettings')
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }
  }, [router])

  if (isLoaded && !user) {
    redirect('/login?redirect_url=' + encodeURIComponent('/admin/settings'))
  }

  if (isLoaded && !isAuthorizedEmail) {
    redirect('/admin/login')
  }

  const handleInputChange = (field: keyof StoreSettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      // Save to localStorage (in a real app, save to database)
      localStorage.setItem('storeSettings', JSON.stringify(settings))
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert('Settings saved successfully!')
    } catch (error) {
      console.error('Error saving settings:', error)
      alert('Error saving settings. Please try again.')
    } finally {
      setIsSaving(false)
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Store Settings</h1>
            <p className="text-gray-600">Manage your store configuration and preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Settings Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <button
                  onClick={() => setActiveTab('store')}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 ${
                    activeTab === 'store' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <Store className="h-4 w-4" />
                  Store Info
                </button>
                
                <button
                  onClick={() => setActiveTab('hours')}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 ${
                    activeTab === 'hours' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <Clock className="h-4 w-4" />
                  Business Hours
                </button>
                
                <button
                  onClick={() => setActiveTab('payment')}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 ${
                    activeTab === 'payment' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <CreditCard className="h-4 w-4" />
                  Payment Options
                </button>
                
                <button
                  onClick={() => setActiveTab('theme')}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 ${
                    activeTab === 'theme' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <Palette className="h-4 w-4" />
                  Theme & Colors
                </button>
                
                <button
                  onClick={() => setActiveTab('seo')}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 ${
                    activeTab === 'seo' ? 'bg-amber-100 text-amber-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <SettingsIcon className="h-4 w-4" />
                  SEO Settings
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>
                  {activeTab === 'store' && 'Store Information'}
                  {activeTab === 'hours' && 'Business Hours'}
                  {activeTab === 'payment' && 'Payment Options'}
                  {activeTab === 'theme' && 'Theme & Colors'}
                  {activeTab === 'seo' && 'SEO Settings'}
                </CardTitle>
                <CardDescription>
                  {activeTab === 'store' && 'Update your store\'s basic information and contact details'}
                  {activeTab === 'hours' && 'Set your business hours for each day of the week'}
                  {activeTab === 'payment' && 'Configure accepted payment methods'}
                  {activeTab === 'theme' && 'Customize your store\'s appearance'}
                  {activeTab === 'seo' && 'Optimize your store for search engines'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Store Information Tab */}
                {activeTab === 'store' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="storeName">Store Name</Label>
                      <Input
                        id="storeName"
                        value={settings.storeName}
                        onChange={(e) => handleInputChange('storeName', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="storeDescription">Store Description</Label>
                      <Textarea
                        id="storeDescription"
                        value={settings.storeDescription}
                        onChange={(e) => handleInputChange('storeDescription', e.target.value)}
                        rows={3}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="storeEmail">Store Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="storeEmail"
                            type="email"
                            className="pl-10"
                            value={settings.storeEmail}
                            onChange={(e) => handleInputChange('storeEmail', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="storePhone">Store Phone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="storePhone"
                            type="tel"
                            className="pl-10"
                            value={settings.storePhone}
                            onChange={(e) => handleInputChange('storePhone', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="storeAddress">Store Address</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="storeAddress"
                          className="pl-10"
                          value={settings.storeAddress}
                          onChange={(e) => handleInputChange('storeAddress', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Business Hours Tab */}
                {activeTab === 'hours' && (
                  <div className="space-y-4">
                    {[
                      { key: 'mondayHours', label: 'Monday' },
                      { key: 'tuesdayHours', label: 'Tuesday' },
                      { key: 'wednesdayHours', label: 'Wednesday' },
                      { key: 'thursdayHours', label: 'Thursday' },
                      { key: 'fridayHours', label: 'Friday' },
                      { key: 'saturdayHours', label: 'Saturday' },
                      { key: 'sundayHours', label: 'Sunday' }
                    ].map(({ key, label }) => (
                      <div key={key} className="flex items-center gap-4">
                        <div className="w-24">
                          <Label>{label}</Label>
                        </div>
                        <div className="flex-1">
                          <Input
                            value={settings[key as keyof StoreSettings] as string}
                            onChange={(e) => handleInputChange(key as keyof StoreSettings, e.target.value)}
                            placeholder="e.g., 9:00 AM - 6:00 PM or Closed"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Payment Options Tab */}
                {activeTab === 'payment' && (
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="acceptCash"
                          checked={settings.acceptCash}
                          onChange={(e) => handleInputChange('acceptCash', e.target.checked)}
                          className="rounded border-gray-300"
                        />
                        <Label htmlFor="acceptCash">Accept Cash Payments</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="acceptCards"
                          checked={settings.acceptCards}
                          onChange={(e) => handleInputChange('acceptCards', e.target.checked)}
                          className="rounded border-gray-300"
                        />
                        <Label htmlFor="acceptCards">Accept Credit/Debit Cards</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="acceptAcima"
                          checked={settings.acceptAcima}
                          onChange={(e) => handleInputChange('acceptAcima', e.target.checked)}
                          className="rounded border-gray-300"
                        />
                        <Label htmlFor="acceptAcima">Accept Acima Financing</Label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Theme Tab */}
                {activeTab === 'theme' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="primaryColor">Primary Color</Label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            id="primaryColor"
                            value={settings.primaryColor}
                            onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                            className="w-12 h-10 rounded border"
                          />
                          <Input
                            value={settings.primaryColor}
                            onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                            placeholder="#d97706"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="accentColor">Accent Color</Label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            id="accentColor"
                            value={settings.accentColor}
                            onChange={(e) => handleInputChange('accentColor', e.target.value)}
                            className="w-12 h-10 rounded border"
                          />
                          <Input
                            value={settings.accentColor}
                            onChange={(e) => handleInputChange('accentColor', e.target.value)}
                            placeholder="#f59e0b"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SEO Tab */}
                {activeTab === 'seo' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="metaTitle">Meta Title</Label>
                      <Input
                        id="metaTitle"
                        value={settings.metaTitle}
                        onChange={(e) => handleInputChange('metaTitle', e.target.value)}
                        placeholder="Page title for search engines"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="metaDescription">Meta Description</Label>
                      <Textarea
                        id="metaDescription"
                        value={settings.metaDescription}
                        onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                        placeholder="Description for search engine results"
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="metaKeywords">Meta Keywords</Label>
                      <Input
                        id="metaKeywords"
                        value={settings.metaKeywords}
                        onChange={(e) => handleInputChange('metaKeywords', e.target.value)}
                        placeholder="Comma-separated keywords"
                      />
                    </div>
                  </div>
                )}

                {/* Save Button */}
                <div className="pt-6 border-t">
                  <Button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {isSaving ? 'Saving...' : 'Save Settings'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}