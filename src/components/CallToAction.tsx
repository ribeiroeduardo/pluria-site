
import React from 'react';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <Section className="bg-black text-white relative overflow-hidden">
      {/* Decorative elements - simplified */}
      <div className="absolute inset-0 -z-10 opacity-5 bg-subtle-texture" />
      
      <div className="max-w-3xl mx-auto text-center animate-fade-in py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-medium mb-10 text-balance tracking-wide">
          READY TO CREATE YOUR DREAM GUITAR
        </h2>
        
        <p className="text-lg text-white mb-12 max-w-2xl mx-auto text-balance">
          Start your journey to owning a custom-built instrument that's perfectly matched 
          to your playing style and aesthetic vision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            className="bg-white text-black hover:bg-white/90 px-8 py-6 text-sm rounded-none uppercase tracking-wider group"
            size="lg"
          >
            Start Custom Design
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:border-white px-8 py-6 rounded-none uppercase tracking-wider text-sm"
            size="lg"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CallToAction;
