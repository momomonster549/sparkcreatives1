import React from 'react';
import { ArrowRight, Heart, Gift, Users } from 'lucide-react';
import { Button } from '../ui/Button';

const CallToAction: React.FC = () => {
  const actions = [
    {
      icon: <Gift className="w-10 h-10 text-white" />,
      title: "Donate Clothing",
      description: "Contribute gently used clothing to help those in need.",
      buttonText: "Start Donating",
      color: "bg-brand-blue"
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Volunteer With Us",
      description: "Join our team to sort, pack, and distribute donations.",
      buttonText: "Join Our Team",
      color: "bg-brand-teal"
    },
    {
      icon: <Heart className="w-10 h-10 text-white" />,
      title: "Become a Partner",
      description: "Organizations can partner with us for greater impact.",
      buttonText: "Partner With Us",
      color: "bg-brand-purple"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            There are many ways to get involved and help us create positive change in communities across the Philippines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className={`${action.color} p-6 text-center`}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  {action.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
                <p className="text-white/90 mb-6">{action.description}</p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {action.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Corporate Social Responsibility</h3>
              <p className="text-gray-700 mb-6">
                Partner with us for your CSR initiatives. We offer customized programs for companies looking to make a meaningful impact while engaging employees.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Branded donation drives",
                  "Employee volunteer opportunities",
                  "Impact reporting and documentation",
                  "Community engagement events"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="primary"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Learn About Corporate Partnerships
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-blue/10 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" 
                alt="Corporate team volunteering" 
                className="relative z-10 rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
