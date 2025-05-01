import React from 'react';
import { Users, Home, School, Smile } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const impactStats = [
    {
      icon: <Users className="w-10 h-10 text-brand-blue" />,
      number: "10,000+",
      label: "People Clothed",
      description: "Providing dignity and comfort to those in need"
    },
    {
      icon: <Home className="w-10 h-10 text-brand-teal" />,
      number: "25+",
      label: "Communities Served",
      description: "Reaching remote and underserved areas"
    },
    {
      icon: <School className="w-10 h-10 text-brand-purple" />,
      number: "15+",
      label: "School Programs",
      description: "Supporting education through proper attire"
    },
    {
      icon: <Smile className="w-10 h-10 text-brand-orange" />,
      number: "5,000+",
      label: "Children Supported",
      description: "Giving children confidence through clothing"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Making a Difference Together</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Through your generous donations, we've been able to create lasting change in communities across the Philippines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800">{stat.number}</h3>
              <h4 className="text-lg font-semibold mb-2 text-gray-700">{stat.label}</h4>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-blue to-brand-teal rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Commitment to Sustainability</h3>
              <p className="text-white/90 mb-6">
                We're not just providing clothing—we're creating a sustainable cycle that reduces waste and maximizes the life of each garment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">85%</div>
                  <div className="text-white/80 text-sm">Recycled Materials</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">12K</div>
                  <div className="text-white/80 text-sm">Kg Waste Reduced</div>
                </div>
              </div>
            </div>
            <div className="bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80')" }}>
              <div className="w-full h-full bg-brand-blue/30 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
