"use client";

import { faq } from "@/content/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="container-section">
      <div className="mb-8">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <p className="section-subtitle">Tire suas dúvidas rapidamente</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faq.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left">{f.pergunta}</AccordionTrigger>
            <AccordionContent className="text-neutralB">{f.resposta}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
