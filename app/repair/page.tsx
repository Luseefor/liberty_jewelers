import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Clock, Award, Shield } from "lucide-react";
import Link from "next/link";

export default function RepairPage() {
  const repairServices = [
    {
      title: "Ring Resizing",
      description: "Professional resizing for all ring styles and metals",
      price: "Starting at $45",
      icon: Award
    },
    {
      title: "Stone Replacement",
      description: "Replace lost or damaged gemstones with matching quality",
      price: "Starting at $75",
      icon: Shield
    },
    {
      title: "Chain Repair",
      description: "Fix broken chains and clasps for necklaces and bracelets",
      price: "Starting at $35",
      icon: Wrench
    },
    {
      title: "Cleaning & Polish",
      description: "Professional cleaning and polishing to restore brilliance",
      price: "Starting at $25",
      icon: Clock
    }
  ];

  return (
    <PageLayout 
      title="Jewelry Repair Services" 
      description="Expert restoration and repair services for your precious jewelry"
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-12 text-center">
          <Wrench className="w-20 h-20 mx-auto mb-8 text-blue-600" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Expert Jewelry Repair
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our master jewelers bring decades of experience to restore your precious pieces to their original beauty. From simple repairs to complex restorations, we handle every piece with care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Get Free Estimate
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="bg-white/20 dark:bg-black/20 backdrop-blur-sm">
              Schedule Repair
            </Button>
          </div>
        </div>

        {/* Repair Services */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Repair Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {service.price}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Process & Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Repair Process</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Assessment</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">We examine your piece and provide detailed estimate</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Approval</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">You approve the work and pricing before we begin</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Repair</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Expert restoration using traditional techniques</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">4</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Quality Check</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Final inspection and professional cleaning</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Our Guarantees</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Quality Guarantee</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">All repairs backed by our 1-year warranty</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Timely Service</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Most repairs completed within 7-10 business days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Expert Craftsmanship</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Over 30 years of jewelry repair experience</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Wrench className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Free Estimates</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">No charge for assessment and quote</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}