import SubcategoryPage from "@/components/subcategory-page";
import { Crown, Star, Gem } from "lucide-react";

export default function StatementNecklacesPage() {
  const features = [
    {
      icon: Crown,
      title: "Bold Designs",
      description: "Eye-catching pieces that serve as the focal point of any ensemble"
    },
    {
      icon: Gem,
      title: "Luxury Materials",
      description: "Featuring large gemstones, pearls, and intricate metalwork for maximum impact"
    },
    {
      icon: Star,
      title: "Special Occasions",
      description: "Perfect for galas, weddings, and other events where you want to make an impression"
    }
  ];

  return (
    <SubcategoryPage
      title="Statement Necklaces"
      description="Bold necklaces that make a striking statement and elevate any outfit"
      icon={Crown}
      parentCategory="All Necklaces"
      parentLink="/necklaces"
      customDesignLink="/custom/necklaces"
      features={features}
      gradientFrom="from-emerald-50"
      gradientTo="to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20"
      iconColor="text-emerald-600"
      accentColor="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
    />
  );
}