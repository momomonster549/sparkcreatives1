import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { 
      label: "About", 
      url: "#about",
      hasDropdown: true,
      dropdownItems: [
        { label: "Our Mission", url: "#mission" },
        { label: "Our Team", url: "#team" },
        { label: "Our Impact", url: "#impact" }
      ]
    },
    { 
      label: "Get Involved", 
      url: "#involved",
      hasDropdown: true,
      dropdownItems: [
        { label: "Donate Clothing", url: "#donate" },
        { label: "Volunteer", url: "#volunteer" },
        { label: "Corporate Partners", url: "#partners" }
      ]
    },
    { label: "Communities", url: "#communities" },
    { label: "Blog", url: "#blog" },
    { label: "Contact", url: "#contact" }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <div className={`w-10 h-10 rounded-full ${isScrolled ? 'bg-brand-blue' : 'bg-white/90'} flex items-center justify-center mr-3`}>
              <Heart className={`w-5 h-5 ${isScrolled ? 'text-white' : 'text-brand-blue'}`} />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              SparkCreatives
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a 
                  href={item.url} 
                  className={`flex items-center ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-brand-blue transition-colors`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </a>
                
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                    {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                      <a 
                        key={dropdownIndex} 
                        href={dropdownItem.url} 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-blue"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              variant="primary" 
              size="md"
              className={isScrolled ? '' : 'bg-white text-brand-blue hover:bg-white/90'}
            >
              Donate Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.url} 
                  className="text-xl font-medium text-gray-800 hover:text-brand-blue block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
                
                {item.hasDropdown && (
                  <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                    {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        <a 
                          href={dropdownItem.url} 
                          className="text-gray-600 hover:text-brand-blue block py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            
            <li className="pt-4">
              <Button 
                variant="primary" 
                size="lg"
                fullWidth
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
