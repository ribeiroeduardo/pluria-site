import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to build a custom guitar?",
      answer: "The build time for a custom guitar typically ranges from 4-6 months. This timeline allows us to ensure every detail is perfect and the instrument meets our high standards of quality."
    },
    {
      question: "What payment options are available?",
      answer: "We accept major credit cards, bank transfers, and PayPal. A 50% deposit is required to begin construction, with the remaining balance due before shipping."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. International shipping costs vary by location and are calculated at checkout. All instruments are carefully packaged to ensure safe delivery."
    },
    {
      question: "What warranty do you offer?",
      answer: "All our guitars come with a lifetime warranty against manufacturing defects. This covers any issues related to craftsmanship or materials under normal use conditions."
    },
    {
      question: "Can I customize every aspect of the guitar?",
      answer: "Yes, through our Online Builder you can customize virtually every aspect of your instrument, from wood selection to hardware choices and finish options."
    }
  ];

  return (
    <section className="py-24" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">Frequently Asked Questions</h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 