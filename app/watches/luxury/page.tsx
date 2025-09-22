import SubcategoryPage from '@/components/subcategory-page'
import { Crown, Diamond, Star, Shield } from 'lucide-react'

export default function LuxuryWatchesPage() {
  const features = [
    {
      icon: Crown,
      title: "Premium Brands",
      description: "Featuring the world's most prestigious luxury watch manufacturers."
    },
    {
      icon: Diamond,
      title: "Exquisite Materials",
      description: "Crafted with precious metals, diamonds, and the finest complications."
    },
    {
      icon: Star,
      title: "Investment Quality",
      description: "Luxury timepieces that hold and appreciate in value over time."
    },
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "Every luxury watch comes with certificates of authenticity and warranty."
    }
  ]

  return (
    <SubcategoryPage
      title="Luxury Watches"
      description="Discover our exclusive collection of luxury timepieces from the world's most prestigious brands. Each watch represents the pinnacle of horological excellence and craftsmanship."
      icon={Crown}
      parentCategory="Watches"
      parentLink="/watches"
      features={features}
      gradientFrom="from-yellow-600"
      gradientTo="to-amber-600"
      iconColor="text-yellow-600 dark:text-yellow-400"
      accentColor="text-yellow-600 dark:text-yellow-400"
    />
  )
}