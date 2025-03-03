import React from 'react';

const About = () => {
  return (
    <section className="py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <img
              src="/images/founder.jpg"
              alt="Pluria founder with guitar"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-8 text-4xl font-bold">About</h2>
            <p className="text-lg text-muted-foreground">
              At Pluria, we craft guitars that are both beautiful and functional. 
              Our exceptional instruments feature original designs, exotic woods, 
              and diverse finishes, giving each guitar a unique personality. 
              These aren't just standout pieces for collectors—they're playable works of art.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
