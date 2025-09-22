import SubcategoryPage from '@/components/subcategory-page'
import { TrendingUp, Heart, Star, Award } from 'lucide-react'

export default function BestSellersPage() {
  const features = [
    {
      icon: TrendingUp,
      title: "Popular Choices",
      description: "Our most sought-after pieces loved by customers worldwide."
    },
    {
      icon: Heart,
      title: "Customer Favorites",
      description: "Highly rated jewelry pieces with exceptional customer reviews."
    },
    {
      icon: Star,
      title: "Proven Quality",
      description: "Time-tested designs that consistently exceed expectations."
    },
    {
      icon: Award,
      title: "Award Winners",
      description: "Recognition for outstanding design and craftsmanship excellence."
    }
  ]

  return (
    <SubcategoryPage
      title="Best Sellers"
      description="Our most popular jewelry pieces that customers love and return to time and again. These best-selling items represent the perfect blend of style, quality, and value."
      icon={TrendingUp}
      parentCategory="Collections"
      parentLink="/collections"
      features={features}
      gradientFrom="from-orange-600"
      gradientTo="to-red-600"
      iconColor="text-orange-600 dark:text-orange-400"
      accentColor="text-orange-600 dark:text-orange-400"
    />
  )
}