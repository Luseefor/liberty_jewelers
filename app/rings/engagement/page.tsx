import SubcategoryPage from "@/components/subcategory-page";
import { Heart, Diamond, Sparkles } from "lucide-react";

export default function EngagementRingsPage() {
  const features = [
    {
      icon: Diamond,
      title: "Certified Diamonds",
      description: "All our diamonds come with GIA or similar certification for quality assurance and authenticity"
    },
    {
      icon: Heart,
      title: "Love Guarantee",
      description: "30-day return policy because we want you to be completely in love with your ring"
    },
    {
      icon: Sparkles,
      title: "Free Resizing",
      description: "Complimentary ring resizing within 60 days of purchase for the perfect fit"
    }
  ];

  return (
    <SubcategoryPage
      title="Engagement Rings"
      description="Celebrate your love story with our stunning collection of engagement rings"
      icon={Heart}
      parentCategory="All Rings"
      parentLink="/rings"
      customDesignLink="/custom/engagement-rings"
      features={features}
      gradientFrom="from-pink-50"
      gradientTo="to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
      iconColor="text-pink-600"
      accentColor="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
    />
  );
}