import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Our Mission", url: "#mission" },
        { label: "Our Team", url: "#team" },
        { label: "Our Impact", url: "#impact" },
        { label: "Careers", url: "#careers" },
        { label: "Contact Us", url: "#contact" }
      ]
    },
    {
      title: "Get Involved",
      links: [
        { label: "Donate Clothing", url: "#donate" },
        { label: "Volunteer", url: "#volunteer" },
        { label: "Corporate Partners", url: "#partners" },
        { label: "Fundraise", url: "#fundraise" },
        { label: "Events", url: "#events" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", url: "#blog" },
        { label: "FAQs", url: "#faqs" },
        { label: "Donation Guidelines", url: "#guidelines" },
        { label: "Impact Reports", url: "#reports" },
        { label: "Media Kit", url: "#media" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center mr-3">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">SparkCreatives</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering communities through clothing donations, creating dignity and opportunity for underserved populations across the Philippines.
            </p>
            <div className="flex space-x-4 mb-6">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href={`#${social}`} 
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-blue transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/80 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SparkCreatives Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
