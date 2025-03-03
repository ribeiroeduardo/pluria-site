
import React from 'react';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative z-10 overflow-hidden animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=1470&auto=format&fit=crop" 
              alt="Luthier working on a custom guitar" 
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Minimalist border decoration */}
          <div className="absolute -bottom-4 -right-4 w-1/2 h-1/3 border border-white -z-10"></div>
        </div>
        
        <div className="animate-fade-in animation-delay-200">
          <span className="tag bg-white/10 text-white mb-8 inline-block">ABOUT PLURIA</span>
          
          <h2 className="text-3xl md:text-4xl font-medium mb-10 tracking-wide">
            CRAFTING EXCELLENCE
          </h2>
          
          <p className="text-white/90 mb-8 text-lg">
            Founded in 2005 by master luthier David Martinez, Pluria emerged from a passion
            for creating instruments that inspire musicians to reach new creative heights.
          </p>
          
          <p className="text-white/90 mb-8 text-lg">
            Every Pluria guitar represents the perfect marriage of traditional craftsmanship
            and innovative design. We source the finest tonewoods from sustainable suppliers,
            and each instrument is meticulously crafted by our team of skilled luthiers.
          </p>
          
          <p className="text-white/90 mb-12 text-lg">
            Our commitment extends beyond the workshop—we build lasting relationships with
            our clients, providing lifetime support for every instrument we create.
          </p>
          
          <Button className="bg-white hover:bg-white/90 text-black uppercase tracking-widest rounded-none px-8 py-6 text-sm">
            OUR STORY
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default About;
