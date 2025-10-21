import Link from 'next/link'
import { Check, ArrowLeft, ShoppingCart } from 'lucide-react'

export default function EcommercePage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/abonnements" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
          <ArrowLeft className="w-5 h-5" />
          Retour aux abonnements
        </Link>

        <div className="card-glass p-12">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="w-10 h-10 text-primary" />
            <h1 className="text-5xl font-display font-bold">
              Abonnement <span className="gradient-text">E-commerce</span>
            </h1>
          </div>
          <p className="text-xl text-light/70 mb-8">
            Vendre en ligne sans prise de tête
          </p>

          <div className="mb-8 pb-8 border-b border-white/10">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold gradient-text">289€</span>
              <span className="text-light/70">/mois</span>
            </div>
            <div className="text-light/60">
              Frais d&apos;activation : 590€ (offerts si paiement annuel)
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">Ce qui est inclus</h2>
          <ul className="space-y-4 mb-12">
            {[
              'Boutique Shopify ou Webflow E-commerce (jusqu\'à 100 produits)',
              'Paiement sécurisé intégré (Stripe et/ou PayPal)',
              'Gestion complète des taxes et modes de livraison',
              'Emails transactionnels configurés (confirmations, suivi)',
              'Formation personnalisée 1h : gérer votre boutique en autonomie',
              'Optimisation SEO des fiches produits',
              '60 minutes par mois de modifications',
              'Support e-commerce dédié – SLA 24-48h',
              'Sauvegardes quotidiennes automatiques',
              'Tableau de bord des ventes en temps réel',
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
              'Boutiques locales qui digitalisent',
              'Créateurs et artisans',
              'Marques de mode/cosmétiques',
              'Producteurs locaux',
              'Revendeurs multimarques',
              'Dropshipping structuré',
            ].map((item, index) => (
              <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                🛒 {item}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">Plateformes supportées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-dark-lighter rounded-lg p-6">
              <h3 className="font-bold text-light mb-2">Shopify</h3>
              <p className="text-sm text-light/70">
                Solution tout-en-un, facile à gérer, extensions nombreuses, paiements intégrés
              </p>
            </div>
            <div className="bg-dark-lighter rounded-lg p-6">
              <h3 className="font-bold text-light mb-2">Webflow E-commerce</h3>
              <p className="text-sm text-light/70">
                Design 100% custom, rapidité exceptionnelle, contrôle total du design
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">Ce qui n&apos;est PAS inclus</h2>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-12">
            <ul className="space-y-2 text-light/80 text-sm">
              <li>❌ Les frais de transaction (Shopify/Stripe : ~2-3%)</li>
              <li>❌ Les photos produits professionnelles</li>
              <li>❌ La rédaction des descriptions (mais optimisation SEO incluse)</li>
              <li>❌ Ajout de produits au-delà de 100 (voir add-on disponible)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">Économies</h2>
          <div className="space-y-3 mb-12">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              💰 <strong>Paiement annuel :</strong> 2890€ → 2601€/an (-10%) + frais d&apos;activation offerts
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              💰 <strong>Engagement 24 mois :</strong> 5202€ au total (-15%)
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary flex-1 text-center">
              Lancer ma boutique
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
