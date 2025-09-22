import SubcategoryPage from "@/components/subcategory-page";
import { Diamond, Star, Shield } from "lucide-react";

export default function StudEarringsPage() {
  const features = [
    {
      icon: Diamond,
      title: "Classic Elegance",
      description: "Timeless designs that complement any outfit from casual to formal"
    },
    {
      icon: Shield,
      title: "Secure Backs",
      description: "Premium butterfly backs and screw-backs for secure and comfortable wear"
    },
    {
      icon: Star,
      title: "Size Variety",
      description: "Available in multiple sizes from delicate 2mm to statement 8mm studs"
    }
  ];

  return (
    <SubcategoryPage
      title="Stud Earrings"
      description="Timeless and versatile studs for everyday elegance"
      icon={Diamond}
      parentCategory="All Earrings"
      parentLink="/earrings"
      customDesignLink="/custom"
      features={features}
      gradientFrom="from-blue-50"
      gradientTo="to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
      iconColor="text-blue-600"
      accentColor="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
    />
  );
}