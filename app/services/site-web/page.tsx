'use client'

import { Globe, Check, Sparkles, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function SiteWebPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Création de sites web
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Sites Web <span className="gradient-text">Professionnels</span>
          </h1>

          <p className="text-xl text-light/70 mb-8">
            Des sites modernes, rapides et optimisés pour convertir vos visiteurs en clients. Design personnalisé, SEO optimisé et performances maximales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all glow">
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#tarifs" className="inline-flex items-center gap-2 glass hover:border-primary/60 px-8 py-4 rounded-xl font-semibold transition-all">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="container mx-auto px-4 mb-24">
        <div className="card-glass p-12 text-center max-w-2xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-primary mb-4">À PARTIR DE</div>
          <div className="text-6xl md:text-7xl font-display font-bold gradient-text mb-4">490€</div>
          <div className="text-light/70 mb-8">Site vitrine complet</div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all glow">
            Demander un devis gratuit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Fonctionnalités incluses */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Tout ce dont vous avez <span className="gradient-text">besoin</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'Design 100% personnalisé et moderne',
            'Optimisation SEO avancée',
            'Responsive sur tous les appareils',
            'Temps de chargement ultra-rapide',
            'Formulaires de contact intégrés',
            'Hébergement premium inclus',
            'SSL et sécurité garantis',
            'Analytics et suivi des performances',
            'Maintenance et mises à jour',
            'Formation à la gestion du site',
            'Support prioritaire 24/7',
            'Conformité RGPD',
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
          Notre <span className="gradient-text">processus</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: '01',
              title: 'Analyse',
              description: 'Nous analysons vos besoins, votre audience et vos objectifs business pour créer la stratégie parfaite.',
              icon: Target,
            },
            {
              step: '02',
              title: 'Design',
              description: 'Création de maquettes modernes et intuitives qui reflètent votre identité de marque.',
              icon: Sparkles,
            },
            {
              step: '03',
              title: 'Développement',
              description: 'Développement avec les technologies les plus performantes pour un site rapide et sécurisé.',
              icon: Zap,
            },
            {
              step: '04',
              title: 'Lancement',
              description: 'Mise en ligne, formation et accompagnement pour assurer votre succès.',
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
          Ils nous font <span className="gradient-text">confiance</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Sophie Durand',
              role: 'E-commerce Mode',
              quote: 'Market-IA a transformé notre présence en ligne. Le site est magnifique, rapide et nos ventes ont explosé.',
              result: '+250% de conversions',
            },
            {
              name: 'Marc Lefebvre',
              role: 'Coach Professionnel',
              quote: 'Un site professionnel qui me représente parfaitement. Je suis maintenant 1er sur Google pour mes mots-clés.',
              result: '1er sur Google en 6 semaines',
            },
            {
              name: 'Julie Martin',
              role: 'Consultante RH',
              quote: 'Investissement rentabilisé dès le premier mois. Je reçois maintenant des demandes qualifiées chaque semaine.',
              result: '40 leads qualifiés/mois',
            },
          ].map((testimonial, index) => (
            <div key={index} className="card-glass p-8">
              <div className="text-4xl mb-4">⭐</div>
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
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Prêt à lancer votre <span className="gradient-text">site web</span> ?
          </h2>
          <p className="text-xl text-light/70 mb-8">
            Obtenez un devis gratuit et personnalisé en moins de 24h
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all glow">
            Demander un devis gratuit
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}
