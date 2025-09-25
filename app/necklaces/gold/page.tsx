import SubcategoryPage from "@/components/subcategory-page";
import { Coins, Sparkles, Crown, Star } from "lucide-react";

export default function GoldNecklacesPage() {
  return (
    <SubcategoryPage
      title="Gold Necklaces"
      description="Beautiful gold necklaces in 14K and 18K yellow, white, and rose gold featuring chains, charms, and statement pieces."
      icon={Coins}
      parentCategory="Necklaces"
      parentLink="/necklaces"
      customDesignLink="/custom/necklaces"
      features={[
        {
          icon: Sparkles,
          title: "Premium Gold",
          description: "14K and 18K gold in yellow, white, and rose variations"
        },
        {
          icon: Crown,
          title: "Versatile Styles",
          description: "From delicate chains to bold statement pieces"
        },
        {
          icon: Star,
          title: "Expert Craftsmanship",
          description: "Hand-finished pieces with attention to every detail"
        }
      ]}
      gradientFrom="from-amber-50"
      gradientTo="to-yellow-50"
      iconColor="text-amber-600"
      accentColor="text-amber-600"
    />
  );
}