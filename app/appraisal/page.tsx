import PageLayout from "@/components/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, FileText, Shield, Clock, CheckCircle, DollarSign } from "lucide-react";
import Link from "next/link";

export default function AppraisalPage() {
  const appraisalTypes = [
    {
      title: "Insurance Appraisal",
      description: "Detailed valuation for insurance coverage purposes",
      price: "Starting at $150",
      icon: Shield
    },
    {
      title: "Estate Appraisal",
      description: "Professional evaluation for estate planning and probate",
      price: "Starting at $175",
      icon: FileText
    },
    {
      title: "Resale Appraisal",
      description: "Market value assessment for selling or trading",
      price: "Starting at $125",
      icon: DollarSign
    },
    {
      title: "Damage Assessment",
      description: "Evaluation of damaged jewelry for insurance claims",
      price: "Starting at $100",
      icon: CheckCircle
    }
  ];

  const appraisalProcess = [
    {
      step: "1",
      title: "Schedule Appointment",
      description: "Book your appraisal with our certified gemologist"
    },
    {
      step: "2",
      title: "Examination",
      description: "Thorough inspection using professional tools and techniques"
    },
    {
      step: "3",
      title: "Documentation",
      description: "Detailed written report with photographs and specifications"
    },
    {
      step: "4",
      title: "Delivery",
      description: "Receive certified appraisal document within 48 hours"
    }
  ];

  return (
    <PageLayout 
      title="Jewelry Appraisal Services" 
      description="Professional jewelry appraisals by certified gemologists"
    >
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-3xl p-12 text-center">
          <Award className="w-20 h-20 mx-auto mb-8 text-indigo-600" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Certified Jewelry Appraisals
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our certified gemologists provide accurate, professional appraisals for insurance, estate planning, and resale purposes. Every appraisal meets industry standards and is accepted by major insurance companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Appraisal
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="bg-white/20 dark:bg-black/20 backdrop-blur-sm">
              Call (410) 365-2187
            </Button>
          </div>
        </div>

        {/* Appraisal Types */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Appraisal Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appraisalTypes.map((appraisal, index) => {
              const IconComponent = appraisal.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {appraisal.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {appraisal.description}
                    </p>
                    <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                      {appraisal.price}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Process */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Appraisal Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appraisalProcess.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-full mb-6 relative group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Professional Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Certified Gemologist</h4>
              <p className="text-gray-600 dark:text-gray-400">GIA Graduate Gemologist with 20+ years experience</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Insurance Accepted</h4>
              <p className="text-gray-600 dark:text-gray-400">Appraisals accepted by all major insurance companies</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Detailed Reports</h4>
              <p className="text-gray-600 dark:text-gray-400">Comprehensive documentation with high-resolution photos</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <Card className="border-0 shadow-lg max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How long does an appraisal take?</h4>
                <p className="text-gray-600 dark:text-gray-400">Most appraisals are completed within 30-45 minutes, with the written report delivered within 48 hours.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Do I need an appointment?</h4>
                <p className="text-gray-600 dark:text-gray-400">Yes, we recommend scheduling an appointment to ensure our certified gemologist is available and can give your pieces proper attention.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What should I bring?</h4>
                <p className="text-gray-600 dark:text-gray-400">Bring your jewelry pieces and any existing documentation such as previous appraisals, certificates, or purchase receipts.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How often should I update my appraisal?</h4>
                <p className="text-gray-600 dark:text-gray-400">We recommend updating insurance appraisals every 3-5 years to reflect current market values.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}