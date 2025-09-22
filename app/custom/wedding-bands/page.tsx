import SubcategoryPage from '@/components/subcategory-page'
import { CircleDot, Diamond, Infinity, Users } from 'lucide-react'

export default function CustomWeddingBandsPage() {
  const features = [
    {
      icon: CircleDot,
      title: "Matching Sets",
      description: "Design perfectly coordinated wedding bands for both partners."
    },
    {
      icon: Diamond,
      title: "Custom Engravings",
      description: "Add personal messages, dates, or symbols that hold special meaning."
    },
    {
      icon: Infinity,
      title: "Endless Options",
      description: "Choose from various metals, finishes, and design elements."
    },
    {
      icon: Users,
      title: "Couple Consultation",
      description: "Work together with our designers to create your perfect wedding bands."
    }
  ]

  return (
    <SubcategoryPage
      title="Custom Wedding Bands"
      description="Design wedding bands that symbolize your eternal bond. Our custom wedding bands are crafted to perfectly complement your engagement ring and reflect your unique style."
      icon={CircleDot}
      parentCategory="Custom Design"
      parentLink="/custom"
      customDesignLink="/custom/consultation"
      features={features}
      gradientFrom="from-amber-600"
      gradientTo="to-yellow-600"
      iconColor="text-amber-600 dark:text-amber-400"
      accentColor="text-amber-600 dark:text-amber-400"
    />
  )
}