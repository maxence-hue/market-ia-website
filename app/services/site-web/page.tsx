import Link from 'next/link'
import { Globe, ArrowRight } from 'lucide-react'

export default function SiteWebPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Sites Web <span className="gradient-text">Professionnels</span>
          </h1>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            Des sites modernes, rapides et optimisés pour convertir vos visiteurs en clients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Notre approche</h2>
            <div className="space-y-4">
              {[
                {
                  title: '1. Analyse de vos besoins',
                  description: 'Nous comprenons votre activité, vos objectifs et votre audience',
                },
                {
                  title: '2. Design sur mesure',
                  description: 'Interface moderne et intuitive qui reflète votre identité',
                },
                {
                  title: '3. Développement optimisé',
                  description: 'Technologies modernes pour un site rapide et sécurisé',
                },
                {
                  title: '4. Lancement & Support',
                  description: 'Formation et accompagnement continu après la mise en ligne',
                },
              ].map((step, index) => (
                <div key={index} className="card-glass p-6">
                  <h3 className="font-bold text-light mb-2">{step.title}</h3>
                  <p className="text-light/70 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Technologies utilisées</h2>
            <div className="card-glass p-8 mb-6">
              <ul className="space-y-3 text-light/80">
                <li>🚀 <strong>Next.js / React</strong> - Applications web ultra-rapides</li>
                <li>⚡ <strong>Webflow</strong> - Sites vitrines élégants et faciles à gérer</li>
                <li>🛒 <strong>Shopify</strong> - E-commerce puissant et évolutif</li>
                <li>🎨 <strong>TailwindCSS</strong> - Design moderne et responsive</li>
                <li>☁️ <strong>Netlify / Vercel</strong> - Hébergement premium ultra-rapide</li>
                <li>📊 <strong>Analytics intégré</strong> - Suivez vos performances</li>
              </ul>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <h3 className="font-bold text-light mb-3">Garanties incluses</h3>
              <ul className="space-y-2 text-sm text-light/80">
                <li>✅ PageSpeed score &gt; 90</li>
                <li>✅ 100% responsive</li>
                <li>✅ SEO optimisé</li>
                <li>✅ RGPD conforme</li>
                <li>✅ SSL sécurisé</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Nos formules d&apos;abonnement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Essentiel', price: '99€', desc: 'Site vitrine 1-5 pages' },
              { name: 'Business', price: '179€', desc: 'Blog + Prise de RDV', popular: true },
              { name: 'E-commerce', price: '289€', desc: 'Boutique en ligne complète' },
              { name: 'Growth+', price: '499€', desc: 'Optimisation continue' },
            ].map((plan, index) => (
              <div key={index} className={`card-glass p-6 ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="text-xs text-primary font-semibold mb-2">⭐ POPULAIRE</div>
                )}
                <h3 className="font-display font-bold text-xl mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold gradient-text mb-2">{plan.price}</div>
                <p className="text-light/70 text-sm mb-4">{plan.desc}</p>
                <Link href="/abonnements" className="text-primary text-sm font-semibold hover:underline">
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="card-glass p-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Prêt à créer votre site web ?
          </h2>
          <p className="text-light/70 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et trouvons la solution parfaite pour votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/abonnements" className="btn-secondary">
              Voir les abonnements
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
