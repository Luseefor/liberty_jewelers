'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Save, 
  ArrowLeft, 
  X,
  Plus
} from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import { redirect, useRouter } from 'next/navigation'
import Link from 'next/link'
import { isEmailAdmin } from '@/lib/admin'

interface JewelryFormData {
  name: string
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'watches' | ''
  subcategory: string
  price: string
  salePrice: string
  quantity: string
  description: string
  materials: string[]
  gemstones: string[]
  size: string
  weight: string
  images: File[]
}

const initialFormData: JewelryFormData = {
  name: '',
  category: '',
  subcategory: '',
  price: '',
  salePrice: '',
  quantity: '',
  description: '',
  materials: [],
  gemstones: [],
  size: '',
  weight: '',
  images: []
}

const categories = [
  { value: 'rings', label: 'Rings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'bracelets', label: 'Bracelets' },
  { value: 'watches', label: 'Watches' }
]

const subcategoriesByCategory = {
  rings: ['engagement', 'wedding', 'fashion', 'vintage', 'men'],
  necklaces: ['chains', 'pendants', 'pearls', 'statement', 'vintage'],
  earrings: ['studs', 'hoops', 'drops', 'chandeliers', 'huggies'],
  bracelets: ['tennis', 'charm', 'bangles', 'chain', 'cuff'],
  watches: ['luxury', 'fashion', 'sport', 'vintage', 'smart']
}

const commonMaterials = [
  '14k Gold', '18k Gold', '24k Gold', 'White Gold', 'Rose Gold',
  'Sterling Silver', 'Platinum', 'Titanium', 'Stainless Steel'
]

const commonGemstones = [
  'Diamond', 'Ruby', 'Sapphire', 'Emerald', 'Pearl', 'Amethyst',
  'Topaz', 'Garnet', 'Opal', 'Turquoise', 'Citrine', 'Aquamarine'
]

export default function AddJewelryPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [formData, setFormData] = useState<JewelryFormData>(initialFormData)
  const [newMaterial, setNewMaterial] = useState('')
  const [newGemstone, setNewGemstone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Check if user is admin by email and has valid session
  const userEmail = user?.emailAddresses?.[0]?.emailAddress
  const isAuthorizedEmail = userEmail ? isEmailAdmin(userEmail) : false

  if (isLoaded && !user) {
    redirect('/login?redirect_url=' + encodeURIComponent('/admin/add'))
  }

  if (isLoaded && !isAuthorizedEmail) {
    redirect('/admin/login')
  }

  // Check admin session
  useEffect(() => {
    const adminVerified = sessionStorage.getItem('admin_verified')
    if (!adminVerified) {
      router.push('/admin/login')
    }
  }, [router])

  const handleInputChange = (field: keyof JewelryFormData, value: string | string[] | File[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addMaterial = (material: string) => {
    if (material && !formData.materials.includes(material)) {
      setFormData(prev => ({
        ...prev,
        materials: [...prev.materials, material]
      }))
    }
  }

  const removeMaterial = (material: string) => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.filter(m => m !== material)
    }))
  }

  const addGemstone = (gemstone: string) => {
    if (gemstone && !formData.gemstones.includes(gemstone)) {
      setFormData(prev => ({
        ...prev,
        gemstones: [...prev.gemstones, gemstone]
      }))
    }
  }

  const removeGemstone = (gemstone: string) => {
    setFormData(prev => ({
      ...prev,
      gemstones: prev.gemstones.filter(g => g !== gemstone)
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...Array.from(e.target.files!)]
      }))
    }
  }

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, you would send this data to your API
      console.log('Submitting jewelry data:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert('Jewelry item added successfully!')
      router.push('/admin')
    } catch (error) {
      console.error('Error adding jewelry:', error)
      alert('Error adding jewelry item. Please try again.')
    } finally {
      setIsSubmitting(false)
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
            <h1 className="text-4xl font-bold text-gray-900">Add New Jewelry</h1>
            <p className="text-gray-600">Add a new item to your jewelry inventory</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Enter the basic details of the jewelry item</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Item Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="e.g., Diamond Engagement Ring"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <select
                        id="category"
                        className="w-full px-3 py-2 border rounded-md"
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map(cat => (
                          <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="subcategory">Subcategory</Label>
                      <select
                        id="subcategory"
                        className="w-full px-3 py-2 border rounded-md"
                        value={formData.subcategory}
                        onChange={(e) => handleInputChange('subcategory', e.target.value)}
                        disabled={!formData.category}
                      >
                        <option value="">Select Subcategory</option>
                        {formData.category && subcategoriesByCategory[formData.category]?.map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('description', e.target.value)}
                      placeholder="Detailed description of the jewelry item..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Pricing and Inventory */}
              <Card>
                <CardHeader>
                  <CardTitle>Pricing & Inventory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="price">Price ($) *</Label>
                      <Input
                        id="price"
                        type="number"
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                        placeholder="0.00"
                        step="0.01"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="salePrice">Sale Price ($)</Label>
                      <Input
                        id="salePrice"
                        type="number"
                        value={formData.salePrice}
                        onChange={(e) => handleInputChange('salePrice', e.target.value)}
                        placeholder="0.00"
                        step="0.01"
                      />
                    </div>

                    <div>
                      <Label htmlFor="quantity">Quantity *</Label>
                      <Input
                        id="quantity"
                        type="number"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        placeholder="0"
                        min="0"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Materials and Gemstones */}
              <Card>
                <CardHeader>
                  <CardTitle>Materials & Gemstones</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Materials */}
                  <div>
                    <Label>Materials</Label>
                    <div className="flex gap-2 mb-2">
                      <Input
                        value={newMaterial}
                        onChange={(e) => setNewMaterial(e.target.value)}
                        placeholder="Add custom material"
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          addMaterial(newMaterial)
                          setNewMaterial('')
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {commonMaterials.map(material => (
                        <Button
                          key={material}
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => addMaterial(material)}
                          disabled={formData.materials.includes(material)}
                        >
                          {material}
                        </Button>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.materials.map(material => (
                        <Badge key={material} variant="secondary" className="flex items-center gap-1">
                          {material}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => removeMaterial(material)}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Gemstones */}
                  <div>
                    <Label>Gemstones</Label>
                    <div className="flex gap-2 mb-2">
                      <Input
                        value={newGemstone}
                        onChange={(e) => setNewGemstone(e.target.value)}
                        placeholder="Add custom gemstone"
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          addGemstone(newGemstone)
                          setNewGemstone('')
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {commonGemstones.map(gemstone => (
                        <Button
                          key={gemstone}
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => addGemstone(gemstone)}
                          disabled={formData.gemstones.includes(gemstone)}
                        >
                          {gemstone}
                        </Button>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.gemstones.map(gemstone => (
                        <Badge key={gemstone} variant="secondary" className="flex items-center gap-1">
                          {gemstone}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => removeGemstone(gemstone)}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Physical Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Physical Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="size">Size</Label>
                    <Input
                      id="size"
                      value={formData.size}
                      onChange={(e) => handleInputChange('size', e.target.value)}
                      placeholder="e.g., 6, Medium, 18 inches"
                    />
                  </div>

                  <div>
                    <Label htmlFor="weight">Weight</Label>
                    <Input
                      id="weight"
                      value={formData.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      placeholder="e.g., 3.2g, 0.5oz"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Images */}
              <Card>
                <CardHeader>
                  <CardTitle>Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="images">Upload Images</Label>
                      <Input
                        id="images"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </div>

                    {formData.images.length > 0 && (
                      <div className="space-y-2">
                        <Label>Selected Images:</Label>
                        {formData.images.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border rounded">
                            <span className="text-sm truncate">{file.name}</span>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeImage(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-amber-600 hover:bg-amber-700"
                disabled={isSubmitting}
              >
                <Save className="h-4 w-4 mr-2" />
                {isSubmitting ? 'Adding Item...' : 'Add Jewelry Item'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}