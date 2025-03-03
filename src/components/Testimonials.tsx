
import React from 'react';
import Section from '@/components/ui/Section';
import { cn } from '@/lib/utils';
import { Star, Play } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
  rating: number;
  delay?: string;
  videoUrl?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author, 
  role, 
  image,
  rating,
  delay = '',
  videoUrl
}) => {
  return (
    <div className={cn(
      "glass-panel p-6 hover-lift relative", 
      delay && `animate-scale-in ${delay}`
    )}>
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "h-4 w-4", 
              i < rating ? "text-accent fill-accent" : "text-muted-foreground"
            )} 
          />
        ))}
      </div>
      
      {videoUrl ? (
        <div className="mb-6 aspect-video overflow-hidden">
          <iframe 
            src={videoUrl} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full object-cover"
            title={`Review by ${author}`}
          ></iframe>
        </div>
      ) : (
        <blockquote className="mb-6 text-base italic font-light">{quote}</blockquote>
      )}
      
      <div className="flex items-center">
        <div className="w-12 h-12 overflow-hidden mr-4">
          <img 
            src={image} 
            alt={author} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="font-medium uppercase tracking-wider text-sm">{author}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Pluria crafted the most responsive, tonally rich guitar I've ever played. The attention to detail is unmatched.",
      author: "Alex Rivera",
      role: "Professional Guitarist",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      rating: 5,
      delay: "animation-delay-100",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual review video
    },
    {
      quote: "The custom guitar Pluria built for me has become an extension of my musical voice. Worth every penny.",
      author: "Sarah Chen",
      role: "Recording Artist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      rating: 5,
      delay: "animation-delay-200",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw" // Replace with actual review video
    },
    {
      quote: "From design to delivery, the entire process was collaborative and resulted in exactly the instrument I had envisioned.",
      author: "Michael Gerson",
      role: "Studio Musician",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      rating: 5,
      delay: "animation-delay-300",
    },
  ];

  return (
    <Section id="testimonials" className="bg-muted/20">
      <div className="text-center section-title animate-fade-in">
        <span className="tag bg-primary/5 text-primary tracking-widest">TESTIMONIALS</span>
        <h2 className="mt-6 mb-6 text-3xl">WHAT OUR CLIENTS SAY</h2>
        <p className="section-subtitle mx-auto max-w-2xl">
          Discover why professional musicians and passionate players choose Pluria 
          for their custom guitar needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
