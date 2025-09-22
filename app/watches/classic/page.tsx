import SubcategoryPage from '@/components/subcategory-page'
import { Clock, Gem, Star, History } from 'lucide-react'

export default function ClassicWatchesPage() {
  const features = [
    {
      icon: Clock,
      title: "Timeless Design",
      description: "Classic watch designs that never go out of style and suit any occasion."
    },
    {
      icon: Gem,
      title: "Quality Materials",
      description: "Crafted with premium materials including gold, silver, and fine leather."
    },
    {
      icon: Star,
      title: "Versatile Style",
      description: "Perfect for both formal and casual occasions with elegant aesthetics."
    },
    {
      icon: History,
      title: "Heritage Brands",
      description: "Featuring established watchmakers with decades of horological tradition."
    }
  ]

  return (
    <SubcategoryPage
      title="Classic Watches"
      description="Timeless elegance meets superior craftsmanship in our classic watch collection. These sophisticated timepieces embody traditional watchmaking excellence with enduring style."
      icon={Clock}
      parentCategory="Watches"
      parentLink="/watches"
      features={features}
      gradientFrom="from-gray-600"
      gradientTo="to-slate-600"
      iconColor="text-gray-600 dark:text-gray-400"
      accentColor="text-gray-600 dark:text-gray-400"
    />
  )
}