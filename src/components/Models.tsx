import React from 'react';
import { Button } from '@/components/ui/button';

interface ModelCardProps {
  name: string;
  imageSrc: string;
  comingSoon?: boolean;
  onlineBuilderUrl?: string;
}

const ModelCard = ({ name, imageSrc, comingSoon, onlineBuilderUrl }: ModelCardProps) => (
  <div className="group relative overflow-hidden rounded-lg">
    <div className="aspect-[4/3] w-full">
      <img
        src={imageSrc}
        alt={`${name} model`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-6">
      <div className="w-full">
        <h3 className="mb-4 text-3xl font-bold text-white">{name}</h3>
        <Button
          className="w-full"
          variant={comingSoon ? "secondary" : "default"}
          disabled={comingSoon}
          onClick={() => {
            if (onlineBuilderUrl) {
              window.location.href = onlineBuilderUrl;
            }
          }}
        >
          {comingSoon ? "Coming Soon" : "Design in Online Builder"}
        </Button>
      </div>
    </div>
  </div>
);

const Models = () => {
  const models = [
    {
      name: "Omni",
      imageSrc: "/images/model_omni.jpg",
      onlineBuilderUrl: "/builder"
    },
    {
      name: "Nemesis",
      imageSrc: "/images/model_nemesis.jpg",
      comingSoon: true
    }
  ];

  return (
    <section className="bg-secondary/5 py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">Models</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {models.map((model, index) => (
            <ModelCard key={index} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models; 