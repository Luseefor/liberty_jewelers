import PageLayout from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SubcategoryPageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  parentCategory: string;
  parentLink: string;
  customDesignLink?: string;
  features: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
  accentColor: string;
}

export default function SubcategoryPage({
  title,
  description,
  icon: IconComponent,
  parentCategory,
  parentLink,
  customDesignLink,
  features,
  gradientFrom,
  gradientTo,
  iconColor,
  accentColor
}: SubcategoryPageProps) {
  return (
    <PageLayout title={title} description={description}>
      <div className="space-y-16">
        {/* Hero Section */}
        <div className={`relative bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-3xl p-12 text-center overflow-hidden`}>
          <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className={`inline-flex items-center justify-center w-24 h-24 ${iconColor.replace('text-', 'bg-').replace('-600', '-100')} dark:${iconColor.replace('text-', 'bg-').replace('-600', '-900/20')} rounded-full mb-8`}>
              <IconComponent className={`w-12 h-12 ${iconColor}`} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {title} Coming Soon
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We&apos;re meticulously curating our {title.toLowerCase()} collection. Each piece will exemplify exceptional craftsmanship, timeless design, and unparalleled quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/20 dark:bg-black/20 backdrop-blur-sm border-white/30 dark:border-gray-600/30 text-gray-900 dark:text-white hover:bg-white/30 dark:hover:bg-black/30"
              >
                Get Notified When Available
              </Button>
              {customDesignLink && (
                <Link href={customDesignLink}>
                  <Button 
                    size="lg" 
                    className={`${accentColor} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    Design Custom Piece
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FeatureIcon className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in {title}?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Join our mailing list to be the first to know when our {title.toLowerCase()} collection becomes available, and receive exclusive previews and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Join Mailing List
            </Button>
            <Link href="/consultation">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link href={parentLink}>
            <Button variant="outline" size="lg" className="px-8">
              ← Back to {parentCategory}
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}