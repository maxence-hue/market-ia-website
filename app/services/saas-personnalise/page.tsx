import Link from 'next/link'
import { Code, ArrowRight } from 'lucide-react'

export default function SaaSPersonnalisePage() {
  const process = [
    {
      step: 1,
      title: 'Atelier découverte',
      duration: '2h',
      description: 'Compréhension de vos besoins, workflows, pain points',
    },
    {
      step: 2,
      title: 'Proposition technique',
      duration: '3-5 jours',
      description: 'Architecture, stack tech, devis détaillé, roadmap',
    },
    {
      step: 3,
      title: 'Développement MVP',
      duration: '4-8 semaines',
      description: 'Fonctionnalités core, tests utilisateurs, itérations',
    },
    {
      step: 4,
      title: 'Déploiement & Formation',
      duration: '1 semaine',
      description: 'Mise en production, formation équipe, documentation',
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <Code className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            SaaS <span className="gradient-text">Personnalisé</span>
          </h1>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            Transformez votre processus métier en logiciel professionnel sur mesure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="card-glass p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Exemples de SaaS</h2>
            <ul className="space-y-4">
              {[
                'Outil de gestion de devis & facturation',
                'Plateforme de réservation métier spécifique',
                'CRM vertical (immo, santé, éducation...)',
                'Outil de génération de documents automatisés',
                'Dashboard de pilotage métier temps réel',
              ].map((example, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary">💡</span>
                  <span className="text-light/90">{example}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-glass p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Stack Technique</h2>
            <ul className="space-y-3 text-light/80">
              <li>⚛️ <strong>Next.js / React</strong> - Interface moderne</li>
              <li>🔧 <strong>Node.js / Python</strong> - Backend robuste</li>
              <li>🗄️ <strong>Supabase / PostgreSQL</strong> - Base de données</li>
              <li>💳 <strong>Stripe</strong> - Paiements intégrés</li>
              <li>🤖 <strong>OpenAI API</strong> - IA intégrée</li>
              <li>☁️ <strong>Vercel/AWS</strong> - Hébergement scalable</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Notre <span className="gradient-text">Processus</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((phase) => (
              <div key={phase.step} className="card-glass p-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">{phase.step}</span>
                </div>
                <h3 className="font-display font-bold mb-1">{phase.title}</h3>
                <div className="text-xs text-primary mb-3">{phase.duration}</div>
                <p className="text-light/70 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-glass p-12 mb-16">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">Tarification</h2>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-light/70 mb-2">À partir de</div>
              <div className="text-5xl font-bold gradient-text mb-4">5 000€</div>
              <div className="text-light/60">Sur devis selon la complexité</div>
            </div>

            <div className="space-y-3 mb-8">
              <h3 className="font-bold text-light mb-4">Ce qui est inclus :</h3>
              {[
                'Conception & architecture complète',
                'Développement sur mesure',
                'Tests & QA approfondis',
                'Déploiement sécurisé en production',
                '3 mois de maintenance inclus',
                'Formation complète des utilisateurs',
                'Documentation technique',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-light/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <h4 className="font-bold text-light mb-2">Maintenance continue</h4>
              <p className="text-light/70 text-sm">
                À partir de 290€/mois après la période incluse
              </p>
            </div>
          </div>
        </div>

        <div className="card-glass p-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Un projet SaaS en tête ?
          </h2>
          <p className="text-light/70 mb-8 max-w-2xl mx-auto">
            Discutons de votre vision et créons ensemble votre logiciel métier sur mesure
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Discuter de mon projet
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
