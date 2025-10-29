'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Zap, Star, Globe, Rocket, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { WebsiteIllustration } from './illustrations/WebsiteIllustration'
import { AutomationIllustration } from './illustrations/AutomationIllustration'
import { FormationIllustration } from './illustrations/FormationIllustration'
import { SaasIllustration } from './illustrations/SaasIllustration'
import { LandingPageIllustration } from './illustrations/LandingPageIllustration'

interface Offer {
  id: string
  icon: typeof GraduationCap
  title: string
  description: string
  startingPrice: string
  benefits: string[]
  references: { name: string; result: string }[]
  servicePage: string
  illustration: React.ReactNode
}

const offers: Offer[] = [
  {
    id: 'formations',
    icon: GraduationCap,
    title: 'Formations IA & Digital',
    description: 'Devenez autonome avec l\'IA. Formations pratiques pour maîtriser les outils IA.',
    startingPrice: '290',
    benefits: [
      'Formation 100% pratique avec cas réels',
      'Accès à vie aux contenus',
      'Support personnalisé',
      'Certificat de réussite',
      'Templates prêts à l\'emploi',
    ],
    references: [
      { name: 'Marie L., Entrepreneure', result: 'Site créé en 1 semaine' },
      { name: 'David C., Consultant', result: '5 automatisations déployées' },
      { name: 'Emma P., Marketing', result: 'Productivité x3' },
    ],
    servicePage: '/services/formations',
    illustration: <FormationIllustration />,
  },
  {
    id: 'automatisations',
    icon: Zap,
    title: 'Automatisations IA',
    description: 'Workflows IA intelligents qui automatisent vos tâches.',
    startingPrice: '390',
    benefits: [
      'Workflows sur-mesure (Make, Zapier)',
      'Connexion de tous vos outils',
      'Automatisation marketing & vente',
      'Support client avec IA',
      'Démo en temps réel',
    ],
    references: [
      { name: 'Thomas B., Agence', result: '15h/semaine économisées' },
      { name: 'Laura K., SaaS', result: '80% tâches automatisées' },
      { name: 'David M., E-commerce', result: 'ROI 400%' },
    ],
    servicePage: '/services/automatisations-ia',
    illustration: <AutomationIllustration />,
  },
  {
    id: 'saas',
    icon: Star,
    title: 'SaaS Personnalisé',
    description: 'Votre propre SaaS sur mesure hébergé en Europe avec IA intégrée.',
    startingPrice: 'Sur devis',
    benefits: [
      'Architecture scalable (RGPD)',
      'Interface moderne et intuitive',
      'IA intégrée (GPT, Mistral)',
      'Hébergement Europe (OVH)',
      'Maintenance continue',
    ],
    references: [
      { name: 'StartupX', result: '1000+ utilisateurs' },
      { name: 'EntrepriseY', result: '+50% productivité' },
      { name: 'AgenceZ', result: 'Levée de fonds' },
    ],
    servicePage: '/services/saas-personnalise',
    illustration: <SaasIllustration />,
  },
  {
    id: 'site-web',
    icon: Globe,
    title: 'Sites Web Personnalisés',
    description: 'Sites web sur-mesure qui convertissent vos visiteurs en clients.',
    startingPrice: '99',
    benefits: [
      'Design 100% personnalisé',
      'Optimisation SEO',
      'Responsive tous appareils',
      'Chargement ultra-rapide',
      'Dès 99€/mois',
    ],
    references: [
      { name: 'Sophie D., E-commerce', result: '+250% conversions' },
      { name: 'Marc L., Coach', result: '1er sur Google' },
      { name: 'Julie M., Consultante', result: '40 leads/mois' },
    ],
    servicePage: '/services/site-internet',
    illustration: <WebsiteIllustration />,
  },
  {
    id: 'landing-page',
    icon: Rocket,
    title: 'Landing Page IA',
    description: 'Page conçue pour convertir, livrée en 72h.',
    startingPrice: '199',
    benefits: [
      'Conception IA optimale',
      'Design responsive',
      'Optimisation conversion',
      'Livrée en 72h',
      'Intégrations CRM',
    ],
    references: [
      { name: 'StartupY', result: '+37% leads' },
      { name: 'AgenceX', result: 'Conversion x2' },
      { name: 'E-commerceZ', result: '150 leads/mois' },
    ],
    servicePage: '/services/landing-page-ia',
    illustration: <LandingPageIllustration />,
  },
]

export function OffersTabSection() {
  const [selectedOffer, setSelectedOffer] = useState<string>(offers[0].id)
  
  const currentOffer = offers.find(o => o.id === selectedOffer) || offers[0]
  const Icon = currentOffer.icon

  return (
    <section id="offres" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Nos <span className="gradient-text">Offres</span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            Des solutions complètes pour propulser votre business
          </p>
        </div>

        {/* Tabs Menu */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto">
          {offers.map((offer) => {
            const OfferIcon = offer.icon
            const isActive = selectedOffer === offer.id
            
            return (
              <button
                key={offer.id}
                onClick={() => setSelectedOffer(offer.id)}
                className={`
                  group relative px-4 py-3 md:px-6 md:py-4 rounded-xl font-semibold
                  transition-all duration-300 flex items-center gap-2 md:gap-3
                  ${isActive 
                    ? 'bg-primary text-white shadow-glow scale-105' 
                    : 'bg-dark-surface/50 text-light/70 hover:bg-dark-surface hover:text-light border border-light/10'
                  }
                `}
              >
                <OfferIcon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'text-white' : 'text-primary'}`} />
                <span className="text-sm md:text-base whitespace-nowrap">{offer.title}</span>
              </button>
            )
          })}
        </div>

        {/* Offer Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedOffer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Content */}
              <div className="order-2 lg:order-1">
                {/* Price Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-xl border-2 border-primary mb-6">
                  <div className="p-2 bg-primary rounded-lg">
                    <Icon className="text-white w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <div className="text-light/60 text-xs font-medium uppercase">À partir de</div>
                    <div className="text-2xl md:text-3xl font-bold text-light">
                      {currentOffer.startingPrice === 'Sur devis' ? currentOffer.startingPrice : `${currentOffer.startingPrice}€`}
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-light">
                  {currentOffer.title}
                </h3>
                <p className="text-lg md:text-xl text-light/70 mb-8">
                  {currentOffer.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {currentOffer.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-light/80 text-sm md:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  href={currentOffer.servicePage}
                  className="inline-flex items-center gap-2 btn-primary text-lg px-6 py-3 md:px-8 md:py-4"
                >
                  En savoir plus
                  <ArrowRight className="w-5 h-5" />
                </Link>

                {/* References */}
                <div className="mt-8 pt-8 border-t border-light/10">
                  <p className="text-sm font-semibold text-light/60 mb-4">Résultats clients :</p>
                  <div className="space-y-3">
                    {currentOffer.references.map((ref, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-light/70">
                          <span className="font-semibold">{ref.name}</span> — {ref.result}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Illustration */}
              <div className="order-1 lg:order-2 flex items-center justify-center">
                <div className="w-full max-w-xl lg:max-w-2xl">
                  {currentOffer.illustration}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
