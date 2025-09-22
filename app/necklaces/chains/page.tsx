import SubcategoryPage from "@/components/subcategory-page";
import { Star, Link2, Crown } from "lucide-react";

export default function ChainsPage() {
  const features = [
    {
      icon: Link2,
      title: "Multiple Chain Types",
      description: "From delicate cable chains to bold curb chains in various metals and finishes"
    },
    {
      icon: Star,
      title: "Length Options",
      description: "Available in choker, princess, matinee, opera, and rope lengths for versatile styling"
    },
    {
      icon: Crown,
      title: "Precious Metals",
      description: "Crafted in 14k and 18k gold, sterling silver, and platinum for lasting beauty"
    }
  ];

  return (
    <SubcategoryPage
      title="Chain Necklaces"
      description="Classic and contemporary chain necklaces in various styles and metals"
      icon={Star}
      parentCategory="All Necklaces"
      parentLink="/necklaces"
      customDesignLink="/custom/necklaces"
      features={features}
      gradientFrom="from-amber-50"
      gradientTo="to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20"
      iconColor="text-amber-600"
      accentColor="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700"
    />
  );
}