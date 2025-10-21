'use client'

import { Star, Check, Sparkles, ArrowRight, Code, Rocket, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function SaaSPersonnalisePage() {
  return (
    <div className="py-16">
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Logiciel sur-mesure</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            SaaS <span className="gradient-text">Personnalisé</span>
          </h1>
          <p className="text-xl text-light/70 mb-8">
            Transformez votre idée en logiciel métier performant. De la conception au déploiement, nous créons votre solution SaaS sur-mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all glow">
              Discuter de mon projet
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#tarifs" className="inline-flex items-center gap-2 glass hover:border-primary/60 px-8 py-4 rounded-xl font-semibold transition-all">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      <section id="tarifs" className="container mx-auto px-4 mb-24">
        <div className="card-glass p-12 text-center max-w-2xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-primary mb-4">À PARTIR DE</div>
          <div className="text-6xl md:text-7xl font-display font-bold gradient-text mb-4">5000€</div>
          <div className="text-light/70 mb-8">MVP complet + 3 mois maintenance</div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all glow">
            Discuter de mon projet
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Fonctionnalités <span className="gradient-text">incluses</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'Architecture scalable et sécurisée',
            'Interface utilisateur moderne et intuitive',
            'Intégrations avec vos outils existants',
            'API REST complète',
            'Authentification et gestion des rôles',
            'Paiements intégrés (Stripe)',
            'Dashboard analytics temps réel',
            'Déploiement cloud automatisé',
            'Tests automatiques (unité + intégration)',
            'Documentation technique complète',
            'Formation des utilisateurs',
            'Maintenance et évolutions continues',
          ].map((feature, index) => (
            <div key={index} className="glass p-6 flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-light">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Notre <span className="gradient-text">processus</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { step: '01', title: 'Découverte', description: 'Atelier de 2h pour comprendre vos besoins, workflows, pain points et définir la vision du produit.', icon: Sparkles },
            { step: '02', title: 'Conception', description: 'Architecture technique détaillée, maquettes UI/UX, stack technologique et roadmap priorisée.', icon: Code },
            { step: '03', title: 'Développement', description: 'Développement agile du MVP avec sprints de 2 semaines, tests utilisateurs et itérations.', icon: Rocket },
            { step: '04', title: 'Lancement', description: 'Déploiement en production, formation de votre équipe et documentation complète.', icon: TrendingUp },
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

      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Projets <span className="gradient-text">réalisés</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'StartupX', role: 'SaaS B2B', quote: 'Market-IA a transformé notre idée en un produit fonctionnel en 8 semaines. Nous avons dépassé les 1000 utilisateurs en 3 mois.', result: '1000+ utilisateurs' },
            { name: 'EntrepriseY', role: 'Industrie', quote: 'Le SaaS sur-mesure a automatisé notre processus de production. Gain de productivité de 50% et réduction des erreurs.', result: '+50% de productivité' },
            { name: 'AgenceZ', role: 'Services', quote: 'Grâce à notre plateforme SaaS, nous avons levé 500K€ et signé nos premiers clients entreprise.', result: 'Levée de fonds réussie' },
          ].map((testimonial, index) => (
            <div key={index} className="card-glass p-8">
              <div className="text-4xl mb-4">💎</div>
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

      <section className="container mx-auto px-4">
        <div className="card-glass p-12 text-center max-w-4xl mx-auto">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Prêt à créer votre <span className="gradient-text">SaaS</span> ?
          </h2>
          <p className="text-xl text-light/70 mb-8">
            Discutons de votre projet et obtenez un devis personnalisé
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all glow">
            Discuter de mon projet SaaS
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}
