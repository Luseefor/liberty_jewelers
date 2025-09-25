import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Heart, Star, Crown, Camera, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function CustomHeirloomsPage() {
  const services = [
    {
      title: "Heirloom Restoration",
      description: "Breathe new life into treasured family pieces with expert restoration services",
      icon: Clock,
      features: ["Professional cleaning", "Stone re-setting", "Metal refinishing", "Structural repairs"]
    },
    {
      title: "Heirloom Redesign",
      description: "Transform inherited jewelry into modern pieces while preserving sentimental value",
      icon: Heart,
      features: ["Contemporary styling", "Stone reuse", "Metal melting & recasting", "Custom design"]
    },
    {
      title: "Heirloom Appraisal",
      description: "Professional valuation and documentation of your family treasures",
      icon: Shield,
      features: ["Certified gemologist evaluation", "Insurance documentation", "Historical research", "Care instructions"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation & Assessment",
      description: "Bring in your heirloom piece for a detailed evaluation and discussion of your vision"
    },
    {
      step: "2", 
      title: "Design & Planning",
      description: "Our experts create detailed plans preserving the piece's heritage while meeting your needs"
    },
    {
      step: "3",
      title: "Careful Restoration",
      description: "Master craftsmen work with precision to restore or redesign your treasured piece"
    },
    {
      step: "4",
      title: "Quality Assurance",
      description: "Thorough inspection and documentation ensure the highest quality results"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "They transformed my grandmother's ring into a beautiful modern necklace. The craftsmanship is incredible and the sentimental value remains intact.",
      rating: 5
    },
    {
      name: "Michael R.", 
      text: "The restoration of my father's watch exceeded all expectations. It looks brand new but still feels like the piece I remember from my childhood.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      text: "Professional, caring, and incredibly skilled. They understood the emotional value and treated my family heirloom with the utmost respect.",
      rating: 5
    }
  ];

  return (
    <PageLayout title="Heirloom Services" description="Professional restoration, redesign, and appraisal services for your treasured family jewelry">
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <Crown className="w-16 h-16 mx-auto mb-6 text-amber-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Heirloom Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Preserve and transform your family's precious jewelry legacy with our expert heirloom services. 
            We honor the past while creating pieces for the future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <service.icon className="w-12 h-12 mx-auto mb-6 text-amber-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
                      <Star className="w-3 h-3 text-amber-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We follow a careful, respectful process to ensure your heirloom receives the attention it deserves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Before & After Gallery */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Transformation Gallery</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            See how we've helped families restore and redesign their treasured pieces
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={`/api/placeholder/400/300`} 
                    alt={`Restoration ${item}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Vintage Ring Restoration
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Complete restoration with stone re-setting and band refinishing
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Client Stories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hear from families who trusted us with their precious heirlooms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-0 shadow-xl">
            <CardContent className="p-8">
              <Users className="w-12 h-12 mx-auto mb-6 text-amber-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Restore Your Heirloom?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Schedule a consultation with our heirloom specialists to discuss your precious piece
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation">
                  <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                    Schedule Consultation
                  </Button>
                </Link>
                <Button variant="outline">
                  View More Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}