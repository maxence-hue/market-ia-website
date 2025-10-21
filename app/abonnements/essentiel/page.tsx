import Link from 'next/link'
import { Check, ArrowLeft } from 'lucide-react'

export default function EssentielPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/abonnements" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
          <ArrowLeft className="w-5 h-5" />
          Retour aux abonnements
        </Link>

        <div className="card-glass p-12">
          <h1 className="text-5xl font-display font-bold mb-4">
            Abonnement <span className="gradient-text">Essentiel</span>
          </h1>
          <p className="text-xl text-light/70 mb-8">
            Pour indépendants et TPE qui veulent être trouvés en ligne
          </p>

          <div className="mb-8 pb-8 border-b border-white/10">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold gradient-text">99€</span>
              <span className="text-light/70">/mois</span>
            </div>
            <div className="text-light/60">
              Frais d&apos;activation : 290€ (offerts si paiement annuel)
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">Ce qui est inclus</h2>
          <ul className="space-y-4 mb-12">
            {[
              'Site vitrine 1 à 5 pages sur Webflow',
              'Design professionnel basé sur un template premium customisé',
              '100% responsive : mobile, tablette, desktop',
              'Conformité RGPD complète + certificat SSL',
              'SEO technique de base (balises, sitemap, robots.txt)',
              'Sauvegardes automatiques hebdomadaires',
              '15 minutes par mois de petites modifications',
              'Support par email avec SLA de 72h',
              'Hébergement premium et maintenance inclus à vie',
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
              'Indépendants et freelances',
              'Artisans',
              'Professions libérales',
              'Petites boutiques locales',
              'Associations',
              'Startups en lancement',
            ].map((item, index) => (
              <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                ✨ {item}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">Économies</h2>
          <div className="space-y-3 mb-12">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              💰 <strong>Paiement annuel :</strong> 990€ → 891€/an (-10%) + frais d&apos;activation offerts
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              💰 <strong>Engagement 24 mois :</strong> 1782€ au total (-15%)
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
