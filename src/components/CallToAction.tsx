
import React from 'react';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <Section className="bg-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-subtle-texture" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/10 blur-3xl -z-10" />
      
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-balance">
          Ready to Create Your Dream Guitar?
        </h2>
        
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto text-balance">
          Start your journey to owning a custom-built instrument that's perfectly matched 
          to your playing style, sound preferences, and aesthetic vision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-white text-primary hover:bg-white/90 px-6 py-6 text-base rounded-md group"
            size="lg"
          >
            Start Your Custom Design
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/40"
            size="lg"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CallToAction;
