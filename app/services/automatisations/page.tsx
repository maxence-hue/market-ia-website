'use client'

import { Zap, Check, Sparkles, ArrowRight, Brain, Workflow, Bot, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AutomatisationsPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Automatisation intelligente
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Automatisations & <span className="gradient-text">Agents IA</span>
          </h1>

          <p className="text-xl text-light/70 mb-8">
            Gagnez jusqu&apos;à 20h par semaine en automatisant vos tâches répétitives. Agents IA, workflows intelligents et intégrations sur-mesure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all glow">
              Demander un diagnostic gratuit
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
          <div className="text-6xl md:text-7xl font-display font-bold gradient-text mb-4">790€</div>
          <div className="text-light/70 mb-8">Audit + 3 automatisations</div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all glow">
            Demander un diagnostic gratuit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Fonctionnalités incluses */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          Ce que nous <span className="gradient-text">automatisons</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'Audit complet de vos processus',
            'Identification des tâches automatisables',
            'Agents IA conversationnels',
            'Workflows intelligents (Make, Zapier, n8n)',
            'Intégrations API sur-mesure',
            'Automatisation CRM et prospection',
            'Génération de contenu IA',
            'Scraping et enrichissement de données',
            'Formation de votre équipe',
            'Documentation complète',
            'Support continu et optimisations',
            'ROI garanti sous 6 mois',
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
              title: 'Diagnostic',
              description: 'Analyse de vos processus actuels et identification des opportunités d\'automatisation les plus rentables.',
              icon: Brain,
            },
            {
              step: '02',
              title: 'Proposition',
              description: 'Architecture technique détaillée avec estimation du ROI et roadmap priorisée.',
              icon: Sparkles,
            },
            {
              step: '03',
              title: 'Développement',
              description: 'Mise en place des automatisations avec tests rigoureux et intégrations complètes.',
              icon: Workflow,
            },
            {
              step: '04',
              title: 'Formation',
              description: 'Formation de votre équipe et documentation pour une autonomie maximale.',
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
          Ils ont <span className="gradient-text">automatisé</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Thomas Bernard',
              role: 'Agence Marketing',
              quote: 'Les automatisations ont transformé notre agence. Nous avons récupéré 15h par semaine que nous consacrons maintenant à nos clients.',
              result: '15h/semaine économisées',
            },
            {
              name: 'Laura Keller',
              role: 'SaaS B2B',
              quote: 'Pipeline de prospection entièrement automatisé. Nous générons maintenant des leads qualifiés pendant que nous dormons.',
              result: '80% de tâches automatisées',
            },
            {
              name: 'David Martinez',
              role: 'E-commerce',
              quote: 'L\'automatisation de notre service client avec l\'IA a réduit notre temps de réponse de 24h à 2 minutes. ROI incroyable.',
              result: 'ROI de 400% en 6 mois',
            },
          ].map((testimonial, index) => (
            <div key={index} className="card-glass p-8">
              <div className="text-4xl mb-4">⚡</div>
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
          <Bot className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Prêt à <span className="gradient-text">automatiser</span> ?
          </h2>
          <p className="text-xl text-light/70 mb-8">
            Diagnostic gratuit pour identifier vos opportunités d&apos;automatisation
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all glow">
            Demander un diagnostic gratuit
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}
