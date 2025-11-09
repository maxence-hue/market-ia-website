import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Je débute, est-ce pour moi ?",
    answer: "Oui, absolument ! Cet atelier est conçu pour être accessible aux débutants. Nous partons des bases et nous concentrons sur des cas concrets et pratiques. Aucune connaissance technique préalable n'est requise."
  },
  {
    question: "Puis-je me faire financer (OPCO) ?",
    answer: "Oui, si vous êtes professionnel. En tant qu'organisme certifié Qualiopi, cette formation est éligible aux financements OPCO. Nous vous guidons dans les démarches administratives pour faciliter votre prise en charge."
  },
  {
    question: "Que dois-je apporter ?",
    answer: "Apportez simplement votre ordinateur portable et vos cas d'usage concrets. Nous travaillerons directement sur vos problématiques réelles pour un apprentissage immédiatement applicable."
  },
  {
    question: "Attestation/justificatif ?",
    answer: "Oui, nous fournissons une attestation de formation à l'issue de l'atelier, ainsi qu'une facture détaillée pour vos démarches administratives ou de remboursement."
  },
  {
    question: "Et si je ne peux plus venir ?",
    answer: "Un report est possible selon nos conditions générales de vente. Contactez-nous dès que possible pour étudier les options disponibles. Consultez nos CGV pour plus de détails."
  }
];

export function FAQ() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm">FAQ</span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl">
            Questions fréquentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tout ce que vous devez savoir
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-border rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline text-left text-lg py-6">
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
