import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/bg-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Custom guitars for collectors and artists
          </h1>
          <p className="text-xl text-white/90 md:text-2xl">
            Handcrafted excellence for discerning musicians
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
