'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Package, 
  DollarSign, 
  BarChart3,
  Settings,
  Search,
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
  const [showImportModal, setShowImportModal] = useState(false)
  const [csvFile, setCsvFile] = useState<File | null>(null)
  const [isImporting, setIsImporting] = useState(false)

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

  const handleExportData = () => {
    // Convert jewelry data to CSV
    const csvData = jewelry.map(item => ({
      name: item.name,
      category: item.category,
      subcategory: item.subcategory,
      price: item.price,
      salePrice: item.salePrice || '',
      quantity: item.quantity,
      inStock: item.inStock,
      description: item.description,
      materials: item.materials.join(';'),
      gemstones: item.gemstones?.join(';') || '',
      size: item.size || '',
      weight: item.weight || ''
    }))

    // Create CSV content
    const headers = Object.keys(csvData[0] || {})
    const csvContent = [
      headers.join(','),
      ...csvData.map(row => headers.map(header => `"${row[header as keyof typeof row] || ''}"`).join(','))
    ].join('\n')

    // Download CSV file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `jewelry_inventory_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleImportCSV = async () => {
    if (!csvFile) return

    setIsImporting(true)
    try {
      const text = await csvFile.text()
      const lines = text.split('\n')
      const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim())
      
      const newItems: JewelryItem[] = []
      
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim()
        if (!line) continue
        
        const values = line.split(',').map(v => v.replace(/"/g, '').trim())
        const item: JewelryItem = {
          id: `imported_${Date.now()}_${i}`,
          name: values[headers.indexOf('name')] || '',
          category: (values[headers.indexOf('category')] as JewelryItem['category']) || 'rings',
          subcategory: values[headers.indexOf('subcategory')] || '',
          price: parseFloat(values[headers.indexOf('price')] || '0'),
          salePrice: values[headers.indexOf('salePrice')] ? parseFloat(values[headers.indexOf('salePrice')]) : undefined,
          inStock: values[headers.indexOf('inStock')] === 'true',
          quantity: parseInt(values[headers.indexOf('quantity')] || '0'),
          description: values[headers.indexOf('description')] || '',
          images: [],
          materials: values[headers.indexOf('materials')]?.split(';').filter(Boolean) || [],
          gemstones: values[headers.indexOf('gemstones')]?.split(';').filter(Boolean) || [],
          size: values[headers.indexOf('size')] || '',
          weight: values[headers.indexOf('weight')] || '',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        
        if (item.name) {
          newItems.push(item)
        }
      }
      
      setJewelry(prev => [...prev, ...newItems])
      setShowImportModal(false)
      setCsvFile(null)
      alert(`Successfully imported ${newItems.length} items!`)
    } catch (error) {
      console.error('Import error:', error)
      alert('Error importing CSV. Please check the file format.')
    } finally {
      setIsImporting(false)
    }
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
            <Button variant="outline" onClick={() => setShowImportModal(true)}>
              <Upload className="h-4 w-4 mr-2" />
              Import CSV
            </Button>
            <Button variant="outline" onClick={handleExportData}>
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Link href="/admin/settings">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Store Settings
              </Button>
            </Link>
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

        {/* Import Modal */}
        {showImportModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">Import Jewelry CSV</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="csvFile">Select CSV File</Label>
                  <input
                    id="csvFile"
                    type="file"
                    accept=".csv"
                    onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
                    className="w-full px-3 py-2 border rounded-md mt-1"
                  />
                </div>
                
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-2">CSV Format Required:</p>
                  <p className="text-xs">name,category,subcategory,price,quantity,description,materials,gemstones</p>
                  <p className="text-xs mt-1">Materials and gemstones should be separated by semicolons (;)</p>
                  <a 
                    href="/sample_jewelry_import.csv" 
                    download
                    className="text-amber-600 hover:text-amber-700 text-xs underline mt-2 inline-block"
                  >
                    Download Sample CSV Template
                  </a>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={handleImportCSV} 
                    disabled={!csvFile || isImporting}
                    className="flex-1 bg-amber-600 hover:bg-amber-700"
                  >
                    {isImporting ? 'Importing...' : 'Import'}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setShowImportModal(false)
                      setCsvFile(null)
                    }}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}