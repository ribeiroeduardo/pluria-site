
import React, { useState } from 'react';
import Section from '@/components/ui/Section';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Info, X, Play } from 'lucide-react';

interface GuitarItem {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  category: string;
  videoUrl?: string;
}

const Portfolio = () => {
  const [selectedGuitar, setSelectedGuitar] = useState<GuitarItem | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const guitars: GuitarItem[] = [
    {
      id: 1,
      title: "The Sonora",
      description: "Semi-hollow electric with figured maple top",
      details: "Handcrafted semi-hollow body with flamed maple top, mahogany back, and ebony fretboard. Features custom wound pickups and premium hardware for versatile tones.",
      image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=1470&auto=format&fit=crop",
      category: "electric",
    },
    {
      id: 2,
      title: "The Cascade",
      description: "Acoustic dreadnought with Adirondack spruce",
      details: "Dreadnought acoustic featuring Adirondack spruce top, rosewood back and sides, and hand-carved bracing for powerful projection and balanced tone. Bone nut and saddle.",
      image: "https://images.unsplash.com/photo-1588449668365-d15e397f6787?q=80&w=1471&auto=format&fit=crop",
      category: "acoustic",
    },
    {
      id: 3,
      title: "The Solaris Performer",
      description: "Michael Torres playing live with his custom Solaris",
      details: "Watch professional guitarist Michael Torres performing with his custom Solaris model at the Blue Note Jazz Club. Features our proprietary pickups for exceptional clarity and sustain.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1470&auto=format&fit=crop",
      category: "electric",
      videoUrl: "https://www.youtube.com/embed/6hzrDeceEKc" // Replace with actual client performance video
    },
    {
      id: 4,
      title: "The Meridian",
      description: "Classical nylon with Madagascar rosewood",
      details: "Classical guitar featuring European spruce top and rare Madagascar rosewood back and sides. Traditional hand-tied construction with elevated fingerboard for superior playability.",
      image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=1470&auto=format&fit=crop",
      category: "classical",
    },
    {
      id: 5,
      title: "The Orion",
      description: "Multi-scale electric with exotic woods",
      details: "7-string multi-scale electric guitar with wenge neck, buckeye burl top, and stainless steel frets. Advanced electronics offer unprecedented tonal flexibility.",
      image: "https://images.unsplash.com/photo-1595069906974-f8ae7ffc3e7a?q=80&w=1587&auto=format&fit=crop",
      category: "electric",
    },
    {
      id: 6,
      title: "The Alpine Live Session",
      description: "Emma Johnson performing with her Alpine acoustic",
      details: "Watch folk artist Emma Johnson perform an unplugged session with her Grand Auditorium Alpine. Features rare Alpine spruce top and flamed maple back and sides with our advanced bracing system.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop",
      category: "acoustic",
      videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso" // Replace with actual client performance video
    },
  ];

  const filters = [
    { id: 'all', label: 'All Guitars' },
    { id: 'electric', label: 'Electric' },
    { id: 'acoustic', label: 'Acoustic' },
    { id: 'classical', label: 'Classical' },
    { id: 'video', label: 'Performance Videos' },
  ];

  const filteredGuitars = activeFilter === 'all' 
    ? guitars 
    : activeFilter === 'video'
    ? guitars.filter(guitar => guitar.videoUrl)
    : guitars.filter(guitar => guitar.category === activeFilter);

  return (
    <Section id="portfolio">
      <div className="text-center section-title animate-fade-in">
        <span className="tag bg-primary/10 text-primary">Portfolio</span>
        <h2 className="mt-4 mb-4">Our Handcrafted Instruments</h2>
        <p className="section-subtitle mx-auto">
          Explore our gallery of custom-built guitars, each one a unique creation 
          tailored to the specific needs and vision of its owner.
        </p>
      </div>

      <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter.id)}
            className="min-w-max"
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {filteredGuitars.map((guitar) => (
          <div 
            key={guitar.id}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer hover-lift"
            onClick={() => setSelectedGuitar(guitar)}
          >
            <img 
              src={guitar.image} 
              alt={guitar.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {guitar.videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/30 rounded-full p-3 backdrop-blur-sm">
                  <Play className="h-8 w-8 text-white" fill="white" />
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
              <h3 className="text-white font-medium text-xl">{guitar.title}</h3>
              <p className="text-white/80 text-sm">{guitar.description}</p>
              <button className="mt-2 text-white/90 text-sm flex items-center">
                {guitar.videoUrl ? 'Watch Performance' : 'View Details'} <Info className="ml-1 h-3 w-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedGuitar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl glass-panel rounded-lg overflow-hidden animate-scale-in">
            <button 
              onClick={() => setSelectedGuitar(null)}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full z-10"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              {selectedGuitar.videoUrl ? (
                <div className="relative aspect-video md:aspect-auto">
                  <iframe 
                    src={selectedGuitar.videoUrl} 
                    title={selectedGuitar.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="relative aspect-square md:aspect-auto">
                  <img 
                    src={selectedGuitar.image} 
                    alt={selectedGuitar.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-medium mb-2">{selectedGuitar.title}</h3>
                <p className="text-muted-foreground mb-4">{selectedGuitar.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium uppercase tracking-wider mb-2">Specifications</h4>
                  <p className="text-sm">{selectedGuitar.details}</p>
                </div>
                <Button className="w-full sm:w-auto bg-primary">Request Similar Design</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Portfolio;
