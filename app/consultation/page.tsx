import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, MessageCircle, Video, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ConsultationPage() {
  const consultationTypes = [
    {
      title: "Custom Design Consultation",
      description: "Discuss your vision for a custom jewelry piece",
      duration: "60 minutes",
      price: "Complimentary",
      icon: Users
    },
    {
      title: "Jewelry Selection Consultation",
      description: "Get expert guidance choosing the perfect piece",
      duration: "30 minutes",
      price: "Complimentary",
      icon: MessageCircle
    },
    {
      title: "Virtual Consultation",
      description: "Meet with our experts via video call",
      duration: "45 minutes",
      price: "Complimentary",
      icon: Video
    },
    {
      title: "Appraisal Consultation",
      description: "Professional jewelry appraisal services",
      duration: "30 minutes",
      price: "Starting at $150",
      icon: CheckCircle
    }
  ];

  const consultationBenefits = [
    "Expert guidance from certified gemologists",
    "Personalized recommendations based on your style",
    "Education about gemstones, metals, and quality",
    "No-pressure environment to explore options",
    "Custom design sketches and 3D renderings",
    "Transparent pricing and timeline discussions"
  ];

  return (
    <PageLayout 
      title="Personal Consultation" 
      description="Get expert guidance from our certified jewelry specialists"
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-12 text-center">
          <Users className="w-20 h-20 mx-auto mb-8 text-emerald-600" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Expert Jewelry Consultation
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our certified gemologists and jewelry experts are here to guide you through every step of your jewelry journey. From selecting the perfect engagement ring to designing custom pieces, we provide personalized expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-white/20 dark:bg-black/20 backdrop-blur-sm">
              Call (410) 365-2187
            </Button>
          </div>
        </div>

        {/* Consultation Types */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Consultation Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultationTypes.map((consultation, index) => {
              const IconComponent = consultation.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {consultation.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {consultation.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {consultation.duration}
                      </p>
                      <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                        {consultation.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            What You&apos;ll Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultationBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <Card className="border-0 shadow-lg max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Schedule Your Consultation
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Consultation Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                  <option>Custom Design Consultation</option>
                  <option>Jewelry Selection Consultation</option>
                  <option>Virtual Consultation</option>
                  <option>Appraisal Consultation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="Describe what you&apos;re looking for..."
                ></textarea>
              </div>
              <Button size="lg" className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                Request Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}