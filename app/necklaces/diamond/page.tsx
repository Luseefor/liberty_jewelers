import SubcategoryPage from "@/components/subcategory-page";
import { Diamond, Sparkles, Crown, Star } from "lucide-react";

export default function DiamondNecklacesPage() {
  return (
    <SubcategoryPage
      title="Diamond Necklaces"
      description="Exquisite diamond necklaces featuring brilliant cuts, elegant settings, and timeless designs that capture and reflect light beautifully."
      icon={Diamond}
      parentCategory="Necklaces"
      parentLink="/necklaces"
      customDesignLink="/custom/necklaces"
      features={[
        {
          icon: Sparkles,
          title: "Brilliant Cut Diamonds",
          description: "Premium quality diamonds with exceptional clarity and brilliance"
        },
        {
          icon: Crown,
          title: "Luxury Settings",
          description: "Elegant 18K gold and platinum settings designed for durability"
        },
        {
          icon: Star,
          title: "Timeless Design",
          description: "Classic styles that never go out of fashion"
        }
      ]}
      gradientFrom="from-blue-50"
      gradientTo="to-indigo-50"
      iconColor="text-blue-600"
      accentColor="text-blue-600"
    />
  );
}