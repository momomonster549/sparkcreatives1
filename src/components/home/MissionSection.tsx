import React from 'react';
import { Heart, Globe, Users } from 'lucide-react';

const MissionSection: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-brand-blue" />,
      title: "Compassion",
      description: "We believe in treating everyone with dignity and respect, recognizing the inherent worth of each individual."
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-teal" />,
      title: "Sustainability",
      description: "Our approach focuses on creating lasting change through environmentally responsible practices."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-purple" />,
      title: "Community",
      description: "We build strong relationships with local communities to ensure our work meets their specific needs."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Empowering Communities Through Clothing</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              At SparkCreatives, we believe that quality clothing is not just a basic need—it's a pathway to dignity, confidence, and opportunity. Our mission is to bridge the gap between excess and need by collecting and distributing clothing to underserved communities across the Philippines.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Through our network of donors, volunteers, and community partners, we're creating a sustainable cycle of giving that transforms lives while reducing textile waste.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-blue/10 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-teal/10 rounded-lg"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80" 
                  alt="Children receiving clothing donations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-b53601010376?auto=format&fit=crop&q=80" 
                  alt="Volunteers sorting donations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80" 
                  alt="Community gathering" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80" 
                  alt="Child with new clothes" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
