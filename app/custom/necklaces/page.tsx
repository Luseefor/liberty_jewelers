import SubcategoryPage from '@/components/subcategory-page'
import { Heart, Gem, Sparkles, Users } from 'lucide-react'

export default function CustomNecklacesPage() {
  const features = [
    {
      icon: Heart,
      title: "Personal Stories",
      description: "Design necklaces that tell your unique story with meaningful symbols and gemstones."
    },
    {
      icon: Gem,
      title: "Premium Gemstones",
      description: "Choose from our collection of precious and semi-precious gemstones."
    },
    {
      icon: Sparkles,
      title: "Artistic Design",
      description: "Our designers create beautiful, wearable art that's uniquely yours."
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description: "Work closely with our team to bring your necklace vision to life."
    }
  ]

  return (
    <SubcategoryPage
      title="Custom Necklaces"
      description="Create a custom necklace that reflects your personal style and story. From delicate pendants to statement pieces, our artisans craft unique necklaces tailored to your vision."
      icon={Heart}
      parentCategory="Custom Design"
      parentLink="/custom"
      customDesignLink="/custom/consultation"
      features={features}
      gradientFrom="from-purple-600"
      gradientTo="to-indigo-600"
      iconColor="text-purple-600 dark:text-purple-400"
      accentColor="text-purple-600 dark:text-purple-400"
    />
  )
}