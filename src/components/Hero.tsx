
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements - simplified */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-secondary/30" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 animate-fade-in">
            <div className="mb-8">
              <span className="tag bg-accent/10 text-accent">HANDCRAFTED EXCELLENCE</span>
            </div>
            
            <h1 className="mb-10 text-balance tracking-wide">
              CUSTOM GUITARS 
              <span className="relative block mt-1">
                <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-accent"></span>
              </span>
              <span className="block mt-4">DESIGNED FOR YOU</span>
            </h1>
            
            <p className="text-lg text-white mb-12 max-w-lg text-balance">
              Handcrafted with rare woods and premium components, 
              tailored to your vision for an instrument as unique as your sound.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-white hover:bg-white/90 text-black px-8 py-6 rounded-none uppercase tracking-wider text-sm group">
                Start Your Design
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-white/40 hover:border-white px-8 py-6 rounded-none uppercase tracking-wider text-sm">
                View Portfolio
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 aspect-[4/3] animate-float shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=1470&auto=format&fit=crop" 
                alt="Handcrafted custom guitar" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Minimalist decorative elements */}
            <div className="absolute top-1/4 right-1/4 -z-10 w-64 h-64 bg-accent/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
