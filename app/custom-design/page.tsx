import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Crown, Heart, Star, Users, Clock, Diamond, Gem, Camera } from "lucide-react";
import Link from "next/link";

export default function CustomDesignPage() {
  const designServices = [
    {
      title: "Engagement Rings",
      description: "Create the perfect symbol of your love with a one-of-a-kind engagement ring",
      icon: Heart,
      startingPrice: "$2,500",
      timeline: "4-6 weeks",
      features: ["3D design rendering", "Stone selection", "Setting customization", "Lifetime warranty"]
    },
    {
      title: "Wedding Bands",
      description: "Design matching or complementary bands that tell your unique story",
      icon: Crown,
      startingPrice: "$800",
      timeline: "3-4 weeks", 
      features: ["Matching design", "Engraving options", "Metal selection", "Comfort fit"]
    },
    {
      title: "Family Heirlooms", 
      description: "Transform existing pieces or create new family treasures to pass down",
      icon: Gem,
      startingPrice: "$1,200",
      timeline: "5-8 weeks",
      features: ["Stone resetting", "Metal restoration", "Design evolution", "Historical preservation"]
    },
    {
      title: "Statement Pieces",
      description: "Bold, unique jewelry that reflects your personal style and personality",
      icon: Star,
      startingPrice: "$1,500",
      timeline: "4-7 weeks",
      features: ["Artistic design", "Premium materials", "Exclusive creation", "Personal consultation"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Meet with our design experts to discuss your vision, preferences, budget, and timeline",
      duration: "60-90 minutes"
    },
    {
      step: "2",
      title: "Design Development", 
      description: "Our designers create sketches and 3D renderings based on your specifications",
      duration: "1-2 weeks"
    },
    {
      step: "3",
      title: "Material Selection",
      description: "Choose your precious metals, gemstones, and finishing details",
      duration: "1 week"
    },
    {
      step: "4",
      title: "Approval & Production",
      description: "Final approval of design before our master craftsmen begin creation",
      duration: "3-6 weeks"
    },
    {
      step: "5",
      title: "Quality Check & Delivery",
      description: "Thorough inspection, professional photography, and presentation",
      duration: "1 week"
    }
  ];

  const gallery = [
    {
      title: "Vintage-Inspired Engagement Ring",
      description: "Art Deco design with modern twist",
      category: "Engagement Ring"
    },
    {
      title: "Custom Family Crest Pendant", 
      description: "Hand-engraved gold with family diamonds",
      category: "Pendant"
    },
    {
      title: "Matching Wedding Set",
      description: "Coordinated rings with unique patterns",
      category: "Wedding Bands"
    },
    {
      title: "Statement Cocktail Ring",
      description: "Bold design with center emerald",
      category: "Fashion Ring"
    },
    {
      title: "Modern Tennis Bracelet",
      description: "Contemporary take on classic style",
      category: "Bracelet"
    },
    {
      title: "Custom Birthstone Necklace",
      description: "Family birthstones in artistic arrangement", 
      category: "Necklace"
    }
  ];

  return (
    <PageLayout title="Custom Design Services" description="Create unique, one-of-a-kind jewelry pieces that reflect your personal style and story">
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <Palette className="w-16 h-16 mx-auto mb-6 text-amber-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Custom Design Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Bring your jewelry dreams to life with our bespoke design services. 
            From concept to creation, we craft unique pieces that tell your story.
          </p>
          <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white text-lg px-8 py-3">
            Start Your Custom Design
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designServices.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900 dark:to-yellow-900 p-3 rounded-lg">
                    <service.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Starting at</div>
                    <div className="text-lg font-bold text-amber-600">{service.startingPrice}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Timeline</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">{service.timeline}</div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <Star className="w-3 h-3 text-amber-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Design Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We follow a collaborative, transparent process to ensure your custom piece exceeds expectations
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {step.description}
                  </p>
                  <div className="flex items-center text-sm text-amber-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Gallery */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Custom Design Portfolio</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore some of our recent custom creations and get inspired for your own unique piece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={`/api/placeholder/400/300`} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Our Custom Design</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Diamond className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Expert Craftsmanship</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Over 35 years of jewelry making experience with master craftsmen
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Personal Consultation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                One-on-one guidance throughout the entire design process
              </p>
            </div>
            <div className="text-center">
              <Crown className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Lifetime Warranty</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Complete warranty coverage and lifetime maintenance support
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-0 shadow-xl">
            <CardContent className="p-8">
              <Palette className="w-12 h-12 mx-auto mb-6 text-amber-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Create Your Dream Piece?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Schedule a complimentary consultation to discuss your custom design project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation">
                  <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                    Schedule Consultation
                  </Button>
                </Link>
                <Button variant="outline">
                  View Design Process
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}