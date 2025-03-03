
import React from 'react';
import Section from '@/components/ui/Section';
import { cn } from '@/lib/utils';
import { LucideIcon, Feather, Gem, Shapes, Settings } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon: Icon, delay = '' }) => {
  return (
    <div className={cn(
      "glass-panel p-6 rounded-lg hover-lift", 
      delay && `animate-scale-in ${delay}`
    )}>
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-accent/10 mb-4">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Gem,
      title: "Premium Materials",
      description: "Rare woods and globally sourced premium components create instruments with exceptional tone and sustainability.",
      delay: "animation-delay-100",
    },
    {
      icon: Shapes,
      title: "Original Designs",
      description: "Proprietary designs that balance innovation with ergonomics for a playing experience that feels as good as it sounds.",
      delay: "animation-delay-200",
    },
    {
      icon: Settings,
      title: "Full Customization",
      description: "Every aspect of your guitar can be customized, from wood selection and finish to hardware and electronics.",
      delay: "animation-delay-300",
    },
    {
      icon: Feather,
      title: "Lightweight Construction",
      description: "Innovative building techniques result in lightweight instruments that are comfortable to play for extended periods.",
      delay: "animation-delay-400",
    },
  ];

  return (
    <Section id="features" className="bg-secondary/50">
      <div className="text-center section-title animate-fade-in">
        <span className="tag bg-primary/10 text-primary">What Makes Us Unique</span>
        <h2 className="mt-4 mb-4">Uncompromising Quality</h2>
        <p className="section-subtitle mx-auto">
          We combine traditional craftsmanship with modern innovation to create 
          guitars that are as visually stunning as they are sonically impressive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>

      <div className="mt-16 mx-auto max-w-4xl overflow-hidden rounded-lg animate-fade-in animation-delay-500">
        <img 
          src="https://images.unsplash.com/photo-1515850031371-8230418d8aed?q=80&w=1470&auto=format&fit=crop" 
          alt="Guitar detail craftsmanship" 
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      </div>
    </Section>
  );
};

export default Features;
