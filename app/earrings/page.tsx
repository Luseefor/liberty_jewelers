import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Diamond, Star, Crown } from "lucide-react";
import Link from "next/link";

export default function EarringsPage() {
  const earringCategories = [
    {
      title: "Stud Earrings",
      description: "Timeless and versatile studs for everyday elegance",
      icon: Diamond,
      link: "/earrings/studs",
      color: "text-blue-600"
    },
    {
      title: "Hoop Earrings",
      description: "Classic hoops in various sizes and styles",
      icon: Sparkles,
      link: "/earrings/hoops",
      color: "text-amber-600"
    },
    {
      title: "Drop Earrings",
      description: "Graceful drop earrings that add movement and style",
      icon: Star,
      link: "/earrings/drop",
      color: "text-purple-600"
    },
    {
      title: "Chandelier Earrings",
      description: "Dramatic chandelier earrings for special occasions",
      icon: Crown,
      link: "/earrings/chandelier",
      color: "text-emerald-600"
    }
  ];

  return (
    <PageLayout 
      title="Earrings Collection" 
      description="Discover our exquisite collection of earrings, from classic studs to statement chandeliers"
    >
      <div className="space-y-16">
        {/* Earring Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {earringCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className={`mx-auto w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <Link href={category.link}>
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                          Explore Collection
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-12 text-center">
          <Sparkles className="w-20 h-20 mx-auto mb-8 text-blue-600" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We&apos;re curating an exceptional collection of earrings that will frame your face beautifully. From delicate everyday pieces to show-stopping statement earrings for special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/20 dark:bg-black/20 backdrop-blur-sm border-white/30 dark:border-gray-600/30">
              Notify Me When Available
            </Button>
            <Link href="/custom">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Design Custom Earrings
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Hypoallergenic</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">All our earrings use hypoallergenic metals and posts for sensitive ears</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Diamond className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Secure Settings</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Premium clasps and settings ensure your earrings stay secure all day</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Crown className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Versatile Styles</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">From subtle everyday pieces to dramatic statement earrings for any occasion</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}