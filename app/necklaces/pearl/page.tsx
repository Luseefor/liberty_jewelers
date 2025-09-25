import SubcategoryPage from "@/components/subcategory-page";
import { Circle, Sparkles, Crown, Star } from "lucide-react";

export default function PearlNecklacesPage() {
  return (
    <SubcategoryPage
      title="Pearl Necklaces"
      description="Elegant pearl necklaces featuring lustrous freshwater and saltwater pearls in classic and contemporary designs."
      icon={Circle}
      parentCategory="Necklaces"
      parentLink="/necklaces"
      customDesignLink="/custom/necklaces"
      features={[
        {
          icon: Sparkles,
          title: "Lustrous Pearls",
          description: "Premium freshwater and saltwater pearls with natural shine"
        },
        {
          icon: Crown,
          title: "Classic Elegance",
          description: "Timeless designs suitable for any formal or special occasion"
        },
        {
          icon: Star,
          title: "Quality Stringing",
          description: "Hand-knotted silk thread for security and longevity"
        }
      ]}
      gradientFrom="from-pink-50"
      gradientTo="to-rose-50"
      iconColor="text-pink-600"
      accentColor="text-pink-600"
    />
  );
}