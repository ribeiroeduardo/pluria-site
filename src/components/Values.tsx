import React from 'react';

interface ValueCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const ValueCard = ({ title, subtitle, imageSrc }: ValueCardProps) => (
  <div className="flex flex-col items-center">
    <div className="mb-6 h-64 w-full overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <h3 className="mb-3 text-2xl font-bold">{title}</h3>
    <p className="text-center text-muted-foreground">{subtitle}</p>
  </div>
);

const Values = () => {
  const values = [
    {
      title: "Craftsmanship Excellence",
      subtitle: "Craftsmanship is more than just a process – it's our passion. Building guitars that not only look beautiful and sound exceptional, but also feel amazing to play.",
      imageSrc: "/images/craftsmanship.jpg"
    },
    {
      title: "Exceptionally Unique",
      subtitle: "With our Online Builder, you have dozens of possible combinations of woods, parts and finishes. We help you design and build a guitar that's exceptionally unique.",
      imageSrc: "/images/unique.jpg"
    },
    {
      title: "Finest Materials",
      subtitle: "From the hand-selected tonewoods to the best parts, every single component available in the Online Builder is chosen for its quality and durability.",
      imageSrc: "/images/materials.jpg"
    }
  ];

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values; 