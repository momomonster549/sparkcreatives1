import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "The clothing donations we received have made such a difference for our community. Children now have proper uniforms for school, and adults have appropriate attire for job interviews.",
      author: "Maria Santos",
      role: "Community Leader, Cebu",
      avatar: "https://randomuser.me/api/portraits/women/17.jpg",
      rating: 5
    },
    {
      quote: "SparkCreatives doesn't just drop off clothes and leave. They build relationships with our community and understand our specific needs. It's a true partnership.",
      author: "Juan Reyes",
      role: "School Principal, Davao",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      quote: "As a donor, I appreciate how transparent SparkCreatives is about where my donations go. I've even received updates showing the impact of my contributions.",
      author: "Sophia Lim",
      role: "Regular Donor, Manila",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Voices of Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the communities we serve and the donors who make our work possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80" 
                alt="Community gathering" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Our Community Partners</h3>
              <p className="text-gray-700 mb-6">
                We work closely with local organizations, schools, and community leaders to ensure our donations reach those who need them most. Our partnerships are built on trust, respect, and a shared commitment to creating lasting change.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4'].map((partner, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-medium">{partner}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
