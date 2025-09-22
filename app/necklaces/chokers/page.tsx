import SubcategoryPage from "@/components/subcategory-page";
import { Sparkles, Diamond, Heart } from "lucide-react";

export default function ChokersPage() {
  const features = [
    {
      icon: Sparkles,
      title: "Elegant Designs",
      description: "From minimalist bands to ornate pieces with diamonds and gemstones"
    },
    {
      icon: Diamond,
      title: "Adjustable Fit",
      description: "Many designs feature adjustable chains for the perfect comfortable fit"
    },
    {
      icon: Heart,
      title: "Day to Night",
      description: "Versatile pieces that transition seamlessly from casual to formal occasions"
    }
  ];

  return (
    <SubcategoryPage
      title="Choker Necklaces"
      description="Elegant chokers for a sophisticated and contemporary look"
      icon={Sparkles}
      parentCategory="All Necklaces"
      parentLink="/necklaces"
      customDesignLink="/custom/necklaces"
      features={features}
      gradientFrom="from-purple-50"
      gradientTo="to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20"
      iconColor="text-purple-600"
      accentColor="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
    />
  );
}