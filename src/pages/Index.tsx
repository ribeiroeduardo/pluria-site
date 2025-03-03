import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Values from '@/components/Values';
import HowItWorks from '@/components/HowItWorks';
import Videos from '@/components/Videos';
import Models from '@/components/Models';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { PhotosBlock } from '@/components/PhotosBlock';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Values />
        <HowItWorks />
        <Videos />
        <PhotosBlock />
        <Models />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
