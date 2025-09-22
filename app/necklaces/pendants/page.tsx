import SubcategoryPage from "@/components/subcategory-page";
import { Heart, Star, Gem } from "lucide-react";

export default function PendantsPage() {
  const features = [
    {
      icon: Heart,
      title: "Meaningful Symbols",
      description: "Choose from hearts, crosses, initials, and other meaningful symbols that tell your story"
    },
    {
      icon: Star,
      title: "Versatile Chains",
      description: "Available with various chain lengths and styles to complement any neckline"
    },
    {
      icon: Gem,
      title: "Premium Gemstones",
      description: "Featuring diamonds, pearls, and precious gemstones for added elegance"
    }
  ];

  return (
    <SubcategoryPage
      title="Pendant Necklaces"
      description="Beautiful pendant necklaces for every occasion and personal style"
      icon={Heart}
      parentCategory="All Necklaces"
      parentLink="/necklaces"
      customDesignLink="/custom/necklaces"
      features={features}
      gradientFrom="from-pink-50"
      gradientTo="to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
      iconColor="text-pink-600"
      accentColor="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
    />
  );
}