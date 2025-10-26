'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items?: FAQItem[]
}

const defaultItems: FAQItem[] = [
  {
    question: "Comment fonctionne l'abonnement ?",
    answer: "Vous payez un montant mensuel fixe et nous nous occupons de tout : création, hébergement, maintenance et mises à jour de votre site."
  },
  {
    question: "Puis-je annuler à tout moment ?",
    answer: "Oui, vous pouvez annuler votre abonnement à tout moment sans frais supplémentaires. Votre site restera en ligne jusqu'à la fin de votre période payée."
  },
  {
    question: "Combien de temps pour créer mon site ?",
    answer: "En moyenne, votre site est en ligne sous 7 à 14 jours après validation de la maquette et réception de vos contenus."
  }
]

export function FAQ({ items = defaultItems }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="my-12">
      <h3 className="text-3xl font-display font-bold mb-8 text-center">
        Questions Fréquentes
      </h3>
      <div className="space-y-4 max-w-3xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-dark-surface border-2 border-primary/30 rounded-xl overflow-hidden hover:border-primary transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="font-semibold text-light text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-primary transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-light/80 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
