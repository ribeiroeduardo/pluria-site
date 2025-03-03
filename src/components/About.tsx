
import React from 'react';
import Section from '@/components/ui/Section';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative z-10 rounded-lg overflow-hidden animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=1470&auto=format&fit=crop" 
              alt="Luthier working on a custom guitar" 
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent rounded-lg -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-lg -z-10"></div>
        </div>
        
        <div className="animate-fade-in animation-delay-200">
          <span className="tag bg-primary/10 text-primary mb-6 inline-block">About Pluria</span>
          
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Crafting Excellence, <br />One Guitar at a Time
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Founded in 2005 by master luthier David Martinez, Pluria emerged from a passion
            for creating instruments that inspire musicians to reach new creative heights.
            What began as a small workshop has evolved into a renowned custom guitar atelier,
            while maintaining our commitment to handcrafted excellence.
          </p>
          
          <p className="text-muted-foreground mb-6">
            Every Pluria guitar represents the perfect marriage of traditional craftsmanship
            and innovative design. We source the finest tonewoods from sustainable suppliers,
            and each instrument is meticulously crafted by our team of skilled luthiers who
            share a dedication to creating guitars of exceptional quality.
          </p>
          
          <p className="text-muted-foreground mb-8">
            Our commitment extends beyond the workshop—we build lasting relationships with
            our clients, providing lifetime support for every instrument we create.
          </p>
          
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Learn More About Our Story
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default About;
