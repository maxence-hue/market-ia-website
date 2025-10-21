'use client'

import { Users, Check, Sparkles, ArrowRight, Handshake, TrendingUp, Award, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function MarqueBlanchePage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Programme partenaires
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Services en <span className="gradient-text">Marque Blanche</span>
          </h1>

          <p className="text-xl text-light/70 mb-8">
            Vous êtes une agence ou un revendeur ? Proposez nos services à vos clients sous votre propre marque et développez votre offre sans investissement technique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all glow">
              Devenir partenaire
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#avantages" className="inline-flex items-center gap-2 glass hover:border-primary/60 px-8 py-4 rounded-xl font-semibold transition-all">
              Voir les avantages
            </Link>
          </div>
        </div>
      </section>

      {/* Commission */}
      <section id="avantages" className="container mx-auto px-4 mb-24">
        <div className="card-glass p-12 text-center max-w-2xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-primary mb-4">MARGES ATTRACTIVES</div>
          <div className="text-6xl md:text-7xl font-display font-bold gradient-text mb-4">30-40%</div>
          <div className="text-light/70 mb-8">Commission sur chaque vente</div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all glow">
            Devenir partenaire
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Avantages */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Pourquoi devenir <span className="gradient-text">partenaire</span> ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'Revendez tous nos services sous votre marque',
            'Marges attractives (30-40%)',
            'Support technique dédié pour vos clients',
            'Plateforme de gestion partenaire',
            'Matériel marketing personnalisé',
            'Formation complète à nos services',
            'Accès prioritaire aux nouvelles offres',
            'Dashboard de suivi des ventes',
            'Facturation directe à vos clients',
            'Accompagnement commercial',
            'Pas de minimum de ventes',
            'Contrat flexible sans engagement',
          ].map((feature, index) => (
            <div key={index} className="glass p-6 flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-light">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Processus */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Comment <span className="gradient-text">devenir partenaire</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: '01',
              title: 'Candidature',
              description: 'Remplissez le formulaire de candidature. Nous étudions votre profil et votre activité actuelle.',
              icon: Briefcase,
            },
            {
              step: '02',
              title: 'Onboarding',
              description: 'Formation complète à nos services, outils et processus. Accès à la plateforme partenaire.',
              icon: Sparkles,
            },
            {
              step: '03',
              title: 'Personnalisation',
              description: 'Configuration de votre marque, création de vos supports marketing personnalisés.',
              icon: Award,
            },
            {
              step: '04',
              title: 'Lancement',
              description: 'Commencez à vendre ! Support dédié pour vous accompagner dans vos premières ventes.',
              icon: TrendingUp,
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="card-glass p-8 text-center">
                <div className="text-5xl font-display font-bold gradient-text mb-4">{item.step}</div>
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-light/70">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Témoignages */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Nos <span className="gradient-text">partenaires</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Agence Digital+',
              role: 'Agence Web',
              quote: 'Grâce au programme marque blanche, nous avons ajouté l\'IA et l\'automatisation à notre offre sans embaucher. +40% de CA.',
              result: '+40% de CA',
            },
            {
              name: 'Consultant Pro',
              role: 'Consultant Indépendant',
              quote: 'Je propose maintenant des sites web et automatisations à mes clients. Les marges sont excellentes et le support technique impeccable.',
              result: '15K€/mois additionnel',
            },
            {
              name: 'Studio Créatif',
              role: 'Studio de Design',
              quote: 'Nous nous concentrons sur le design, Market-IA gère le développement. Partenariat parfait pour nos clients.',
              result: '20+ projets ensemble',
            },
          ].map((testimonial, index) => (
            <div key={index} className="card-glass p-8">
              <div className="text-4xl mb-4">🤝</div>
              <p className="text-light/80 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-primary mb-1">{testimonial.result}</div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-light/60">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4">
        <div className="card-glass p-12 text-center max-w-4xl mx-auto">
          <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Prêt à devenir <span className="gradient-text">partenaire</span> ?
          </h2>
          <p className="text-xl text-light/70 mb-8">
            Rejoignez notre réseau de partenaires et développez votre activité
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all glow">
            Devenir partenaire
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}
