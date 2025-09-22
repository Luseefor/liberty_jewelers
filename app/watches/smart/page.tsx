import SubcategoryPage from '@/components/subcategory-page'
import { Smartphone, Wifi, Activity, Battery } from 'lucide-react'

export default function SmartWatchesPage() {
  const features = [
    {
      icon: Smartphone,
      title: "Smart Features",
      description: "Connected functionality with notifications, apps, and digital assistance."
    },
    {
      icon: Wifi,
      title: "Connectivity",
      description: "Bluetooth, WiFi, and cellular connectivity for seamless integration."
    },
    {
      icon: Activity,
      title: "Health Tracking",
      description: "Advanced health monitoring including heart rate, sleep, and fitness tracking."
    },
    {
      icon: Battery,
      title: "Long Battery Life",
      description: "Extended battery performance for all-day use and beyond."
    }
  ]

  return (
    <SubcategoryPage
      title="Smart Watches"
      description="Cutting-edge smartwatches that blend traditional timepiece elegance with modern technology. Stay connected and track your health with these innovative wearable devices."
      icon={Smartphone}
      parentCategory="Watches"
      parentLink="/watches"
      features={features}
      gradientFrom="from-emerald-600"
      gradientTo="to-teal-600"
      iconColor="text-emerald-600 dark:text-emerald-400"
      accentColor="text-emerald-600 dark:text-emerald-400"
    />
  )
}