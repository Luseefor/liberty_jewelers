import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Crown, Heart, Star, ShoppingBag, Mail, Users } from "lucide-react";
import Link from "next/link";

export default function GiftCardsPage() {
  const giftCardAmounts = [
    { amount: 100, popular: false },
    { amount: 250, popular: true },
    { amount: 500, popular: false },
    { amount: 1000, popular: false },
  ];

  const features = [
    {
      icon: Gift,
      title: "Perfect for Any Occasion",
      description: "Birthdays, anniversaries, graduations, and celebrations"
    },
    {
      icon: Crown,
      title: "Premium Jewelry Selection",
      description: "Access to our entire collection of fine jewelry"
    },
    {
      icon: Heart,
      title: "No Expiration Date",
      description: "Our gift cards never expire, ensuring lasting value"
    },
    {
      icon: Star,
      title: "Personal Service",
      description: "Recipient gets our full consultation and design services"
    }
  ];

  const occasions = [
    {
      title: "Engagement & Wedding",
      description: "Let them choose their perfect ring or wedding jewelry",
      image: "/api/placeholder/300/200",
      suggestedAmount: "$1,000+"
    },
    {
      title: "Birthday & Anniversary",
      description: "Celebrate special milestones with lasting beauty",
      image: "/api/placeholder/300/200", 
      suggestedAmount: "$250-$500"
    },
    {
      title: "Graduation",
      description: "Mark achievements with timeless jewelry pieces",
      image: "/api/placeholder/300/200",
      suggestedAmount: "$100-$250"
    },
    {
      title: "Holiday Gifts",
      description: "Give the gift of choice during special seasons",
      image: "/api/placeholder/300/200",
      suggestedAmount: "$250-$1,000"
    }
  ];

  return (
    <PageLayout title="Gift Cards" description="Give the perfect gift - let them choose their own treasured jewelry piece">
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <Gift className="w-16 h-16 mx-auto mb-6 text-amber-600" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Jewelry Gift Cards
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Give the gift of choice with Liberty Gold & Diamonds gift cards. 
            Perfect when you want to give something special but want them to choose their perfect piece.
          </p>
        </div>

        {/* Gift Card Selection */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Choose Amount</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Select from our popular amounts or enter a custom value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {giftCardAmounts.map((card, index) => (
              <Card key={index} className={`border-2 transition-all cursor-pointer hover:shadow-lg ${
                card.popular 
                  ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-amber-300'
              }`}>
                <CardContent className="p-6 text-center relative">
                  {card.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    ${card.amount}
                  </div>
                  <Button 
                    className={card.popular 
                      ? "w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white"
                      : "w-full"
                    }
                    variant={card.popular ? "default" : "outline"}
                  >
                    Select ${card.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Amount */}
          <Card className="border-2 border-dashed border-gray-300 dark:border-gray-600">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Custom Amount</h3>
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">$</span>
                <input 
                  type="number" 
                  placeholder="Enter amount"
                  min="25"
                  className="w-32 px-3 py-2 text-xl font-bold text-center border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Minimum $25</p>
              <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                Purchase Custom Amount
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Occasions */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Perfect for Every Occasion</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our gift cards make meaningful presents for life's special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {occasions.map((occasion, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <img 
                    src={occasion.image} 
                    alt={occasion.title}
                    className="w-full md:w-1/3 h-32 md:h-auto object-cover"
                  />
                  <CardContent className="p-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {occasion.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {occasion.description}
                    </p>
                    <div className="text-sm font-medium text-amber-600 mb-3">
                      Suggested: {occasion.suggestedAmount}
                    </div>
                    <Button size="sm" variant="outline">
                      Choose This Amount
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Purchase Online</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Select your amount and purchase securely online
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Receive Instantly</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Digital gift card delivered by email immediately
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Redeem Anytime</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Use online or in-store with no expiration date
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-0 shadow-xl bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950">
            <CardContent className="p-8">
              <Users className="w-12 h-12 mx-auto mb-6 text-amber-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Questions About Gift Cards?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our team is here to help you choose the perfect gift card amount and answer any questions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
                <Button variant="outline">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Browse Jewelry
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}