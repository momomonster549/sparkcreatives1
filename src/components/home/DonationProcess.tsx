import React from 'react';
import { ArrowRight, Gift, Truck, Heart, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const DonationProcess: React.FC = () => {
  const steps = [
    {
      icon: <Gift className="w-12 h-12 text-brand-blue" />,
      title: "Donate Clothing",
      description: "Select gently used clothing items you'd like to donate. All sizes and styles are welcome.",
      color: "bg-blue-50"
    },
    {
      icon: <Truck className="w-12 h-12 text-brand-teal" />,
      title: "We Collect",
      description: "Schedule a pickup or drop off your donations at one of our convenient collection points.",
      color: "bg-teal-50"
    },
    {
      icon: <Heart className="w-12 h-12 text-brand-orange" />,
      title: "Community Impact",
      description: "Your donations are distributed to communities in need, creating immediate positive impact.",
      color: "bg-orange-50"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-brand-green" />,
      title: "Track Your Impact",
      description: "Receive updates about how your donations have helped transform lives in communities.",
      color: "bg-green-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Your Donation Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes it easy to donate and create meaningful impact in communities across the Philippines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`p-6 flex flex-col items-center text-center ${step.color}`}>
                <div className="mb-4 p-3 rounded-full bg-white shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            variant="primary" 
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Start Your Donation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonationProcess;
