import Link from 'next/link'
import { Bot, Zap, ArrowRight } from 'lucide-react'
import DevisForm from '@/components/DevisForm'

const automationExamples = [
  {
    title: 'Agent IA Support Client',
    price: 'Sur devis',
    description: 'Chatbot intelligent qui répond 24/7, comprend le contexte et escalade si nécessaire',
    features: ['Réponses instantanées', 'Apprentissage continu', 'Intégration multicanal', 'Escalade humaine'],
  },
  {
    title: 'Automatisation CRM',
    price: 'Sur devis',
    description: 'Pipeline complet : Leads → CRM → Email → Calendrier → Facturation',
    features: ['Capture automatique', 'Enrichissement des données', 'Séquences email', 'Synchronisation multi-outils'],
  },
  {
    title: 'Pipeline de Prospection',
    price: 'Sur devis',
    description: 'Scraping LinkedIn → Enrichissement → Email personnalisé IA → Suivi',
    features: ['Ciblage précis', 'Personnalisation IA', 'Suivi automatique', 'Reporting détaillé'],
  },
  {
    title: 'Gestion Réseaux Sociaux',
    price: 'Sur devis',
    description: 'Génération contenu IA → Programmation → Engagement automatique',
    features: ['Création de contenu', 'Planification intelligente', 'Réponses automatiques', 'Analytics intégré'],
  },
]

const tools = [
  { name: 'Make (Integromat)', icon: '🔗' },
  { name: 'Zapier', icon: '⚡' },
  { name: 'n8n', icon: '🔄' },
  { name: 'OpenAI API', icon: '🤖' },
  { name: 'Anthropic Claude', icon: '🧠' },
  { name: 'Airtable/Notion', icon: '📊' },
  { name: 'Google Workspace', icon: '📧' },
]

export default function AutomatisationsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <Bot className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Automatisations & <span className="gradient-text">Agents IA</span>
          </h1>
          <p className="text-xl text-light/70 max-w-3xl mx-auto mb-8">
            Gagnez 20h/semaine. Automatisez vos processus répétitifs avec l&apos;intelligence artificielle.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30">
            <Zap className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">Diagnostic gratuit offert</span>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Notre <span className="gradient-text">Processus</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Diagnostic',
                duration: '1 jour',
                price: 'Offert',
                description: 'Rapport d\'opportunités + roadmap priorisée',
              },
              {
                step: '2',
                title: 'Proposition',
                duration: '2-3 jours',
                price: 'Sur devis',
                description: 'Architecture technique + estimation détaillée',
              },
              {
                step: '3',
                title: 'Implémentation',
                duration: '1-4 semaines',
                price: 'Sur devis',
                description: 'Développement + tests + formation + déploiement',
              },
            ].map((phase, index) => (
              <div key={index} className="card-glass p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{phase.step}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{phase.title}</h3>
                <div className="text-sm text-light/60 mb-1">{phase.duration}</div>
                <div className="text-primary font-semibold mb-4">{phase.price}</div>
                <p className="text-light/70 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Exemples d&apos;<span className="gradient-text">Automatisations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationExamples.map((example, index) => (
              <div key={index} className="card-glass p-8">
                <h3 className="text-2xl font-display font-bold mb-2">{example.title}</h3>
                <div className="text-primary font-semibold mb-4">{example.price}</div>
                <p className="text-light/70 mb-6">{example.description}</p>
                <div className="space-y-2">
                  {example.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-light/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Outils & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="card-glass p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{tool.icon}</div>
                  <div className="text-sm text-light/70">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Pourquoi <span className="gradient-text">Automatiser</span> ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⏰', title: 'Gain de temps', desc: '20h/semaine en moyenne' },
              { icon: '💰', title: 'Économies', desc: 'ROI dès le 3e mois' },
              { icon: '🎯', title: 'Zéro erreur', desc: 'Exécution parfaite 24/7' },
              { icon: '📈', title: 'Scalabilité', desc: 'Croissance sans embauche' },
            ].map((benefit, index) => (
              <div key={index} className="card-glass p-6 text-center">
                <div className="text-5xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-light mb-2">{benefit.title}</h3>
                <p className="text-light/70 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">
              Demandez votre <span className="gradient-text">diagnostic gratuit</span>
            </h2>
            <p className="text-light/70 mb-6">
              Nous analysons vos processus actuels et identifions les opportunités d&apos;automatisation les plus rentables.
            </p>
            <div className="card-glass p-6 mb-6">
              <h3 className="font-bold text-light mb-3">Ce que vous recevrez :</h3>
              <ul className="space-y-2 text-light/80 text-sm">
                <li>✅ Audit complet de vos processus</li>
                <li>✅ Roadmap priorisée par ROI</li>
                <li>✅ Estimation temps/budget</li>
                <li>✅ Recommandations d&apos;outils</li>
                <li>✅ Quick wins identifiés</li>
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-400 text-sm">
                💡 <strong>100% gratuit, sans engagement</strong> - Même si vous ne passez pas à l&apos;implémentation, vous repartez avec un plan concret.
              </p>
            </div>
          </div>

          <div className="card-glass p-8">
            <DevisForm />
          </div>
        </div>
      </div>
    </div>
  )
}
