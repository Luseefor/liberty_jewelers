import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Palette, Users, Clock, Diamond, Heart } from "lucide-react";
import Link from "next/link";

export default function CustomDesignPage() {
  const designProcess = [
    {
      step: "1",
      title: "Consultation",
      description: "Meet with our design experts to discuss your vision, preferences, and budget",
      icon: Users
    },
    {
      step: "2",
      title: "Design Creation",
      description: "Our designers create detailed sketches and 3D renderings of your custom piece",
      icon: Palette
    },
    {
      step: "3",
      title: "Approval & Crafting",
      description: "Once approved, our master jewelers handcraft your unique piece with precision",
      icon: Crown
    },
    {
      step: "4",
      title: "Delivery",
      description: "Your finished custom jewelry is delivered with certification and warranty",
      icon: Heart
    }
  ];

  const customOptions = [
    {
      title: "Engagement Rings",
      description: "Create the perfect symbol of your love story",
      link: "/custom/engagement-rings",
      color: "text-pink-600"
    },
    {
      title: "Wedding Bands",
      description: "Design matching bands that represent your unity",
      link: "/custom/wedding-bands",
      color: "text-amber-600"
    },
    {
      title: "Custom Necklaces",
      description: "Personalized necklaces for any special occasion",
      link: "/custom/necklaces",
      color: "text-purple-600"
    },
    {
      title: "Family Heirlooms",
      description: "Transform inherited pieces into modern treasures",
      link: "/custom/heirlooms",
      color: "text-emerald-600"
    }
  ];

  return (
    <PageLayout 
      title="Custom Design" 
      description="Create one-of-a-kind jewelry pieces that tell your unique story"
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-12 text-center">
          <Crown className="w-20 h-20 mx-auto mb-8 text-amber-600" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Bring Your Vision to Life
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our custom design service transforms your dreams into stunning reality. From engagement rings to family heirlooms, we create pieces as unique as the moments they celebrate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Consultation
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="bg-white/20 dark:bg-black/20 backdrop-blur-sm">
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Design Process */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Design Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-full mb-6 relative group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Custom Options */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Can We Create?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className={`mx-auto w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center ${option.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Diamond className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {option.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {option.description}
                      </p>
                      <Link href={option.link}>
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing & Timeline */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Timeline</h4>
              <p className="text-gray-600 dark:text-gray-400">Most custom pieces completed within 4-6 weeks</p>
            </div>
            <div className="text-center">
              <Diamond className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Pricing</h4>
              <p className="text-gray-600 dark:text-gray-400">Custom designs starting from $2,500</p>
            </div>
            <div className="text-center">
              <Crown className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Warranty</h4>
              <p className="text-gray-600 dark:text-gray-400">Lifetime warranty on all custom pieces</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}