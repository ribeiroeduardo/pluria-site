
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-secondary/50" />
      <div className="absolute inset-0 -z-10 opacity-5 bg-subtle-texture" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 animate-fade-in">
            <div className="mb-6">
              <span className="tag bg-accent/10 text-accent">Handcrafted Excellence</span>
            </div>
            
            <h1 className="mb-6 text-balance">
              Crafted Excellence: <br />
              <span className="relative">
                Custom Guitars 
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent"></span>
              </span> <br />
              Designed for Your Unique Sound
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg text-balance">
              Handcrafted with rare woods and premium components, 
              tailored to your vision for an instrument as unique as your sound.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-md group">
                Start Your Custom Design
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-primary/20 hover:border-primary/40">
                View Our Portfolio
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 aspect-[4/3] animate-float shadow-2xl rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=1470&auto=format&fit=crop" 
                alt="Handcrafted custom guitar" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 -z-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 -z-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
