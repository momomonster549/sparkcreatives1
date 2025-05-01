import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("/src/assets/hero-background-enhanced.jpg")',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 backdrop-blur-sm"></div>
      </div>
      
      {/* Enhanced Animated Shapes with Improved Colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-teal/20 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-brand-purple/20 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Clothing That <span className="gradient-text">Empowers</span> Communities
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join us in our mission to provide quality clothing to underserved communities in the Philippines, 
            making a lasting impact one donation at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="gradient" 
              size="lg"
              className="btn-shine"
            >
              Donate Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {[
              { number: '10K+', label: 'Donations', icon: '/src/assets/icons/donation-icon.svg' },
              { number: '25+', label: 'Communities', icon: '/src/assets/icons/community-icon.svg' },
              { number: '5K+', label: 'Lives Impacted', icon: '/src/assets/icons/impact-icon.svg' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex items-center">
                <img src={stat.icon} alt="" className="w-10 h-10 mr-3" />
                <div>
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse-soft"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
