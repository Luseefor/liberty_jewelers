import SubcategoryPage from '@/components/subcategory-page'
import { Sparkles, Calendar, Star, Zap } from 'lucide-react'

export default function NewArrivalsPage() {
  const features = [
    {
      icon: Sparkles,
      title: "Latest Designs",
      description: "The newest jewelry pieces featuring cutting-edge styles and trends."
    },
    {
      icon: Calendar,
      title: "Fresh Collections",
      description: "Recently added pieces from our featured designers and premium brands."
    },
    {
      icon: Star,
      title: "First Access",
      description: "Be among the first to discover and own these exclusive new arrivals."
    },
    {
      icon: Zap,
      title: "Limited Availability",
      description: "New pieces in limited quantities - secure yours before they're gone."
    }
  ]

  return (
    <SubcategoryPage
      title="New Arrivals"
      description="Discover the latest additions to our jewelry collection. From contemporary designs to classic pieces with modern twists, explore what's new at Liberty Jewelers."
      icon={Sparkles}
      parentCategory="Collections"
      parentLink="/collections"
      features={features}
      gradientFrom="from-green-600"
      gradientTo="to-emerald-600"
      iconColor="text-green-600 dark:text-green-400"
      accentColor="text-green-600 dark:text-green-400"
    />
  )
}