import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-teal">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-lg text-white/90 mb-8">
            Join our newsletter to receive updates on our impact, upcoming donation drives, and ways to get involved.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 mb-8">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white"
              required
            />
            <Button 
              type="submit" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue"
              rightIcon={<Send className="w-4 h-4" />}
            >
              Subscribe
            </Button>
          </form>
          
          <div className="text-white/80 text-sm">
            We respect your privacy. Unsubscribe at any time.
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
              <a 
                key={social} 
                href={`#${social}`} 
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-white/80 rounded-sm"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
