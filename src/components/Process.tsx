
import React from 'react';
import Section from '@/components/ui/Section';
import { cn } from '@/lib/utils';
import { MessageSquare, PencilRuler, Hammer, Truck } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  isLast?: boolean;
  delay?: string;
}

const Step: React.FC<StepProps> = ({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  isLast = false,
  delay = '',
}) => {
  return (
    <div className={cn(
      "relative flex flex-col md:flex-row gap-6 items-start",
      delay && `animate-fade-in ${delay}`
    )}>
      {/* Step Number */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-medium z-10">
        {number}
      </div>
      
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute top-12 left-6 h-full w-0.5 bg-primary/20 -z-0 hidden md:block"></div>
      )}
      
      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="md:ml-6">
          <div className="mb-4 p-2 rounded-full w-12 h-12 flex items-center justify-center bg-accent/10">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: "Consultation & Design",
      description: "We begin with an in-depth consultation to understand your unique needs, playing style, and aesthetic preferences to create your perfect instrument.",
      delay: "animation-delay-100",
    },
    {
      number: 2,
      icon: PencilRuler,
      title: "Material Selection",
      description: "Select from our curated collection of rare tonewoods, hardware, and electronics to craft an instrument with the perfect sound and look.",
      delay: "animation-delay-200",
    },
    {
      number: 3,
      icon: Hammer,
      title: "Expert Craftsmanship",
      description: "Our master luthiers meticulously handcraft each element of your guitar, combining traditional techniques with modern precision.",
      delay: "animation-delay-300",
    },
    {
      number: 4,
      icon: Truck,
      title: "Delivery & Support",
      description: "Your completed guitar undergoes rigorous quality testing before being carefully packaged and delivered to your doorstep with lifetime support.",
      delay: "animation-delay-400",
      isLast: true,
    },
  ];

  return (
    <Section id="process">
      <div className="text-center section-title animate-fade-in">
        <span className="tag bg-primary/10 text-primary">Our Process</span>
        <h2 className="mt-4 mb-4">How We Create Your Dream Guitar</h2>
        <p className="section-subtitle mx-auto">
          From concept to creation, we guide you through each step of our meticulous process
          to ensure your guitar exceeds your expectations.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <Step 
            key={index} 
            {...step} 
            isLast={index === steps.length - 1} 
          />
        ))}
      </div>
    </Section>
  );
};

export default Process;
