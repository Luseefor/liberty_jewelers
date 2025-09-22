import SubcategoryPage from '@/components/subcategory-page'
import { Heart, Sparkles, Star, Users } from 'lucide-react'

export default function CustomEngagementRingsPage() {
  const features = [
    {
      icon: Heart,
      title: "Personalized Design",
      description: "Create a one-of-a-kind engagement ring that perfectly captures your love story."
    },
    {
      icon: Sparkles,
      title: "Premium Materials",
      description: "Choose from the finest diamonds, gemstones, and precious metals for your custom ring."
    },
    {
      icon: Star,
      title: "Expert Craftsmanship",
      description: "Our master jewelers bring decades of experience to every custom engagement ring."
    },
    {
      icon: Users,
      title: "Personal Consultation",
      description: "Work one-on-one with our designers to bring your vision to life."
    }
  ]

  return (
    <SubcategoryPage
      title="Custom Engagement Rings"
      description="Create the perfect symbol of your love with a custom-designed engagement ring. Our expert jewelers work with you to design a unique piece that tells your story."
      icon={Heart}
      parentCategory="Custom Design"
      parentLink="/custom"
      customDesignLink="/custom/consultation"
      features={features}
      gradientFrom="from-pink-600"
      gradientTo="to-rose-600"
      iconColor="text-pink-600 dark:text-pink-400"
      accentColor="text-pink-600 dark:text-pink-400"
    />
  )
}