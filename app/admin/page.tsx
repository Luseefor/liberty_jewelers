'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Package, 
  DollarSign, 
  Users, 
  BarChart3,
  Settings,
  Search,
  Filter,
  Upload,
  Download,
  LogOut,
  Shield
} from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import { redirect, useRouter } from 'next/navigation'
import Link from 'next/link'
import { isEmailAdmin } from '@/lib/admin'

// Mock jewelry data structure
interface JewelryItem {
  id: string
  name: string
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'watches'
  subcategory: string
  price: number
  salePrice?: number
  inStock: boolean
  quantity: number
  description: string
  images: string[]
  materials: string[]
  gemstones?: string[]
  size?: string
  weight?: string
  createdAt: Date
  updatedAt: Date
}

// Mock data
const mockJewelry: JewelryItem[] = [
  {
    id: '1',
    name: 'Diamond Engagement Ring',
    category: 'rings',
    subcategory: 'engagement',
    price: 2500,
    salePrice: 2000,
    inStock: true,
    quantity: 5,
    description: 'Beautiful 1ct diamond engagement ring in 14k white gold',
    images: ['/images/ring1.jpg'],
    materials: ['14k White Gold'],
    gemstones: ['Diamond'],
    size: '6',
    weight: '3.2g',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '2',
    name: 'Pearl Necklace',
    category: 'necklaces',
    subcategory: 'pearls',
    price: 850,
    inStock: true,
    quantity: 12,
    description: 'Elegant freshwater pearl necklace',
    images: ['/images/necklace1.jpg'],
    materials: ['Sterling Silver'],
    gemstones: ['Freshwater Pearls'],
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10')
  }
]

export default function AdminDashboard() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [jewelry, setJewelry] = useState<JewelryItem[]>(mockJewelry)
  const [isAdminVerified, setIsAdminVerified] = useState(false)

  useEffect(() => {
    // Check admin verification
    const adminVerified = sessionStorage.getItem('admin_verified')
    const timestamp = sessionStorage.getItem('admin_timestamp')
    
    if (adminVerified && timestamp) {
      // Check if session is still valid (24 hours)
      const now = Date.now()
      const sessionTime = parseInt(timestamp)
      const maxAge = 24 * 60 * 60 * 1000 // 24 hours
      
      if (now - sessionTime < maxAge) {
        setIsAdminVerified(true)
      } else {
        // Session expired
        sessionStorage.removeItem('admin_verified')
        sessionStorage.removeItem('admin_timestamp')
        router.push('/admin/login')
      }
    } else {
      router.push('/admin/login')
    }
  }, [router])

  // Check if user is admin by email
  const userEmail = user?.emailAddresses?.[0]?.emailAddress
  const isAuthorizedEmail = userEmail ? isEmailAdmin(userEmail) : false

  if (isLoaded && !user) {
    redirect('/login?redirect_url=' + encodeURIComponent('/admin'))
  }

  if (isLoaded && !isAuthorizedEmail) {
    redirect('/admin/login')
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin_verified')
    sessionStorage.removeItem('admin_timestamp')
    router.push('/')
  }

  const stats = {
    totalItems: jewelry.length,
    inStock: jewelry.filter(item => item.inStock).length,
    lowStock: jewelry.filter(item => item.quantity < 5).length,
    totalValue: jewelry.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  const filteredJewelry = jewelry.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleDeleteItem = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      setJewelry(prev => prev.filter(item => item.id !== id))
    }
  }

  if (!isLoaded || !isAdminVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Logout */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your jewelry inventory and store settings</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              <span>{userEmail}</span>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Items</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalItems}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Stock</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.inStock}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
              <Package className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{stats.lowStock}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalValue.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/admin/add">
              <Button className="bg-amber-600 hover:bg-amber-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New Item
              </Button>
            </Link>
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Import CSV
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Store Settings
            </Button>
          </div>
        </div>

        {/* Inventory Management */}
        <Card>
          <CardHeader>
            <CardTitle>Jewelry Inventory</CardTitle>
            <CardDescription>Manage your jewelry collection</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search jewelry..."
                    className="pl-8 pr-4 py-2 w-full border rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <select
                className="px-3 py-2 border rounded-md"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="rings">Rings</option>
                <option value="necklaces">Necklaces</option>
                <option value="earrings">Earrings</option>
                <option value="bracelets">Bracelets</option>
                <option value="watches">Watches</option>
              </select>
            </div>

            {/* Items Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Item</th>
                    <th className="text-left py-3 px-4">Category</th>
                    <th className="text-left py-3 px-4">Price</th>
                    <th className="text-left py-3 px-4">Stock</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJewelry.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.subcategory}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4 capitalize">{item.category}</td>
                      <td className="py-3 px-4">
                        <div>
                          ${item.price.toLocaleString()}
                          {item.salePrice && (
                            <div className="text-sm text-red-600">
                              Sale: ${item.salePrice.toLocaleString()}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`${item.quantity < 5 ? 'text-orange-600' : 'text-gray-900'}`}>
                          {item.quantity}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant={item.inStock ? 'default' : 'destructive'}>
                          {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Link href={`/admin/edit/${item.id}`}>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleDeleteItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}