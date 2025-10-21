import Link from 'next/link'
import { Check, ArrowLeft, Rocket } from 'lucide-react'

export default function GrowthPlusPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/abonnements" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
          <ArrowLeft className="w-5 h-5" />
          Retour aux abonnements
        </Link>

        <div className="card-glass p-12">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-10 h-10 text-primary" />
            <h1 className="text-5xl font-display font-bold">
              Abonnement <span className="gradient-text">Growth+</span>
            </h1>
          </div>
          <p className="text-xl text-light/70 mb-8">
            Acquisition & optimisation continue de la croissance
          </p>

          <div className="mb-8 pb-8 border-b border-white/10">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold gradient-text">499€</span>
              <span className="text-light/70">/mois</span>
            </div>
            <div className="text-light/60">
              Frais d&apos;activation : 790€ (offerts si paiement annuel)
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">Ce qui est inclus</h2>
          <ul className="space-y-4 mb-12">
            {[
              'Tout des forfaits E-commerce ou Business, PLUS :',
              'Stratégie de contenu : 2 articles de blog optimisés SEO par mois',
              'AB testing trimestriel sur landing pages et CTA',
              'Optimisation continue des conversions (CRO)',
              'Call stratégique mensuel de 30 minutes avec expert',
              'Rapport détaillé mensuel + recommandations personnalisées',
              '90 minutes par mois de modifications et ajustements',
              'Support premium avec SLA de 24h maximum',
              'Accès prioritaire aux nouvelles fonctionnalités',
              'Analyse concurrentielle semestrielle',
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
              'Entreprises en phase de croissance',
              'E-commerces ambitieux',
              'SaaS et startups tech',
              'Marques qui veulent scaler',
              'Agences avec besoins complexes',
              'Entreprises data-driven',
            ].map((item, index) => (
              <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                🚀 {item}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">Votre partenaire de croissance</h2>
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-12">
            <p className="text-light/90 mb-6">
              Avec Growth+, vous n&apos;avez pas qu&apos;un site : vous avez une équipe dédiée à votre croissance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">📊 Data-driven</h4>
                <p className="text-sm text-light/70">
                  Décisions basées sur l&apos;analyse de vos métriques réelles
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">🎯 Optimisation continue</h4>
                <p className="text-sm text-light/70">
                  Tests A/B mensuels pour améliorer vos conversions
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">✍️ Contenu SEO</h4>
                <p className="text-sm text-light/70">
                  Articles stratégiques pour attirer du trafic qualifié
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">🤝 Accompagnement</h4>
                <p className="text-sm text-light/70">
                  Call mensuel pour aligner stratégie et exécution
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">ROI Attendu</h2>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-12">
            <p className="text-light/90 mb-4">
              Nos clients Growth+ observent en moyenne après 6 mois :
            </p>
            <ul className="space-y-2 text-light/80">
              <li>📈 +150% de trafic organique (SEO)</li>
              <li>💰 +40% de taux de conversion</li>
              <li>🎯 -60% du coût d&apos;acquisition client</li>
              <li>⏱️ ROI positif dès le 4e mois en moyenne</li>
            </ul>
          </div>

          <h2 className="text-2xl font-display font-bold mb-6">Économies</h2>
          <div className="space-y-3 mb-12">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              💰 <strong>Paiement annuel :</strong> 4990€ → 4491€/an (-10%) + frais d&apos;activation offerts
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              💰 <strong>Engagement 24 mois :</strong> 8982€ au total (-15%)
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary flex-1 text-center">
              Accélérer ma croissance
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
