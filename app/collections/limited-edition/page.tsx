import SubcategoryPage from '@/components/subcategory-page'
import { Gem, Clock, Sparkles, Crown } from 'lucide-react'

export default function LimitedEditionPage() {
  const features = [
    {
      icon: Gem,
      title: "Exclusive Pieces",
      description: "Unique jewelry items available in very limited quantities worldwide."
    },
    {
      icon: Clock,
      title: "Time-Limited",
      description: "Special collections available for a limited time only."
    },
    {
      icon: Sparkles,
      title: "Rare Materials",
      description: "Featuring rare gemstones and precious metals not found elsewhere."
    },
    {
      icon: Crown,
      title: "Collector's Items",
      description: "Investment-worthy pieces perfect for discerning collectors."
    }
  ]

  return (
    <SubcategoryPage
      title="Limited Edition"
      description="Exclusive limited edition jewelry pieces that offer unparalleled rarity and prestige. These unique items are perfect for collectors and those seeking truly distinctive pieces."
      icon={Gem}
      parentCategory="Collections"
      parentLink="/collections"
      features={features}
      gradientFrom="from-rose-600"
      gradientTo="to-pink-600"
      iconColor="text-rose-600 dark:text-rose-400"
      accentColor="text-rose-600 dark:text-rose-400"
    />
  )
}