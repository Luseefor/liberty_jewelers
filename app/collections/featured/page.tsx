import SubcategoryPage from '@/components/subcategory-page'
import { Star, Crown, Gem, Spotlight } from 'lucide-react'

export default function FeaturedPage() {
  const features = [
    {
      icon: Star,
      title: "Curated Selection",
      description: "Hand-picked pieces showcasing the finest craftsmanship and design."
    },
    {
      icon: Crown,
      title: "Premium Quality",
      description: "Our featured collection represents the pinnacle of jewelry excellence."
    },
    {
      icon: Gem,
      title: "Exceptional Stones",
      description: "Featuring the most beautiful and rare gemstones in our collection."
    },
    {
      icon: Spotlight,
      title: "Designer Highlights",
      description: "Spotlight pieces from renowned jewelry designers and artisans."
    }
  ]

  return (
    <SubcategoryPage
      title="Featured Collection"
      description="Our carefully curated featured collection showcases exceptional pieces that represent the best of Liberty Gold & Diamonds. These standout items embody superior craftsmanship and timeless elegance."
      icon={Star}
      parentCategory="Collections"
      parentLink="/collections"
      features={features}
      gradientFrom="from-violet-600"
      gradientTo="to-purple-600"
      iconColor="text-violet-600 dark:text-violet-400"
      accentColor="text-violet-600 dark:text-violet-400"
    />
  )
}