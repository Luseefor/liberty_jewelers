import SubcategoryPage from "@/components/subcategory-page";
import { Sparkles, Circle, Star } from "lucide-react";

export default function HoopEarringsPage() {
  const features = [
    {
      icon: Circle,
      title: "Multiple Sizes",
      description: "From small huggie hoops to large statement hoops in various diameters"
    },
    {
      icon: Sparkles,
      title: "Decorative Options",
      description: "Plain, textured, diamond-set, and gemstone-adorned designs available"
    },
    {
      icon: Star,
      title: "Comfortable Fit",
      description: "Lightweight designs with smooth hinges for all-day comfortable wearing"
    }
  ];

  return (
    <SubcategoryPage
      title="Hoop Earrings"
      description="Classic hoops in various sizes and styles for versatile elegance"
      icon={Sparkles}
      parentCategory="All Earrings"
      parentLink="/earrings"
      customDesignLink="/custom"
      features={features}
      gradientFrom="from-amber-50"
      gradientTo="to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20"
      iconColor="text-amber-600"
      accentColor="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
    />
  );
}