import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: StepProps) => (
  <div className="relative flex flex-col items-start">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl font-bold text-white">
      {number}
    </div>
    <h3 className="mb-3 text-xl font-bold">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      title: "Design",
      description: "Use our Online Builder to explore customization options and select features that match your preferences. Create your unique instrument design with ease."
    },
    {
      title: "Order Submission",
      description: "After all specifications are decided, save your Design and submit your order. Our team will carefully review your order to ensure everything is accurate. We'll contact you promptly if any clarifications are needed."
    },
    {
      title: "Construction",
      description: "Once your order is confirmed, the construction of your instrument will begin. Throughout the build process and upon completion, we conduct thorough inspections to ensure your instrument meets our high standards."
    },
    {
      title: "Shipping",
      description: "You'll receive an email notification once your instrument is ready to ship. If you paid a deposit, the remaining balance will need to be settled before we dispatch your order."
    }
  ];

  return (
    <section className="bg-secondary/5 py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">How It Works</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 