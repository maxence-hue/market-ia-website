import Link from 'next/link'
import { Check, ArrowLeft, Sparkles } from 'lucide-react'

export default function BusinessPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/abonnements" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
          <ArrowLeft className="w-5 h-5" />
          Retour aux abonnements
        </Link>

        <div className="card-glass p-12 ring-2 ring-primary">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">POPULAIRE</span>
          </div>

          <h1 className="text-5xl font-display font-bold mb-4">
            Abonnement <span className="gradient-text">Business</span>
          </h1>
          <p className="text-xl text-light/70 mb-8">
            Visibilité + prise de contact automatisée
          </p>

          <div className="mb-8 pb-8 border-b border-white/10">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold gradient-text">179€</span>
              <span className="text-light/70">/mois</span>
            </div>
            <div className="text-light/60">
              Frais d&apos;activation : 390€ (offerts si paiement annuel)
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">Ce qui est inclus</h2>
          <ul className="space-y-4 mb-12">
            {[
              'Tout du forfait Essentiel, PLUS :',
              'Blog / Actualités avec CMS intégré (Netlify CMS)',
              'Fiche Google Business optimisée et configurée',
              'Système de prise de RDV en ligne (Calendly/Zoho)',
              'Formulaires avancés avec emails automatiques',
              'Intégration CRM basique (Notion ou Airtable)',
              '45 minutes par mois de modifications',
              'Support prioritaire avec SLA de 48h',
              'Rapport mensuel de performances (trafic, conversions)',
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-light/90">{feature}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-display font-bold mb-6">Idéal pour</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              'Consultants et coaches',
              'Agences de services',
              'Cabinets médicaux/dentaires',
              'Agences immobilières',
              'Centres de bien-être',
              'Studios créatifs',
            ].map((item, index) => (
              <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                ✨ {item}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">Pourquoi c&apos;est le plus populaire ?</h2>
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-12">
            <p className="text-light/90 mb-4">
              Le forfait Business offre le meilleur rapport qualité-prix pour les entreprises qui veulent :
            </p>
            <ul className="space-y-2 text-light/80">
              <li>🎯 Générer des leads qualifiés 24/7</li>
              <li>📅 Automatiser la prise de rendez-vous</li>
              <li>📈 Suivre leurs performances mensuellement</li>
              <li>💼 Projeter une image professionnelle et crédible</li>
            </ul>
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">Économies</h2>
          <div className="space-y-3 mb-12">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              💰 <strong>Paiement annuel :</strong> 1790€ → 1611€/an (-10%) + frais d&apos;activation offerts
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              💰 <strong>Engagement 24 mois :</strong> 3222€ au total (-15%)
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary flex-1 text-center">
              Commander maintenant
            </Link>
            <Link href="/abonnements" className="btn-secondary flex-1 text-center">
              Comparer les offres
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
