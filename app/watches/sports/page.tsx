import SubcategoryPage from '@/components/subcategory-page'
import { Zap, Shield, Timer, Target } from 'lucide-react'

export default function SportsWatchesPage() {
  const features = [
    {
      icon: Zap,
      title: "Performance Features",
      description: "Advanced timing functions, chronographs, and sports-specific complications."
    },
    {
      icon: Shield,
      title: "Durability",
      description: "Built to withstand extreme conditions with water resistance and shock protection."
    },
    {
      icon: Timer,
      title: "Precision Timing",
      description: "Accurate timekeeping for athletes and sports enthusiasts."
    },
    {
      icon: Target,
      title: "Sport-Specific",
      description: "Specialized features for diving, racing, aviation, and other sports."
    }
  ]

  return (
    <SubcategoryPage
      title="Sports Watches"
      description="High-performance timepieces designed for active lifestyles. Our sports watches combine rugged durability with precision timing for athletes and outdoor enthusiasts."
      icon={Zap}
      parentCategory="Watches"
      parentLink="/watches"
      features={features}
      gradientFrom="from-blue-600"
      gradientTo="to-cyan-600"
      iconColor="text-blue-600 dark:text-blue-400"
      accentColor="text-blue-600 dark:text-blue-400"
    />
  )
}