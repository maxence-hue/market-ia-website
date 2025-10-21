import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const services = [
  {
    title: 'Abonnements Site Web',
    starting_price: 99,
    excerpt: 'Site professionnel tout-inclus : création, hébergement, maintenance. Sans engagement technique.',
    icon: '🌐',
    href: '/abonnements',
  },
  {
    title: 'Automatisations IA',
    excerpt: 'Gagnez 20h/semaine. Automatisez vos processus répétitifs avec l\'intelligence artificielle.',
    icon: '🤖',
    href: '/services/automatisations',
  },
  {
    title: 'SaaS Personnalisé',
    starting_price: 5000,
    excerpt: 'Votre logiciel métier sur mesure. De l\'idée au déploiement, nous construisons votre solution.',
    icon: '⚡',
    href: '/services/saas-personnalise',
  },
]

const benefits = [
  'Mise en ligne en 10 jours ouvrés ou 1 mois offert',
  'Score PageSpeed > 90 garanti',
  'Support dédié avec SLA',
  'Conformité RGPD incluse',
  'Évolutions illimitées selon votre forfait',
  'Hébergement premium Netlify/Vercel',
]

const testimonials = [
  {
    name: 'Sophie Martin',
    company: 'Atelier Bien-Être',
    quote: 'En 3 mois, mon site génère 40% de mes nouveaux clients. Le système de prise de RDV automatique me fait gagner 10h/semaine.',
    avatar: '👩‍💼',
  },
  {
    name: 'Thomas Dubois',
    company: 'TD Conseil',
    quote: 'L\'abonnement Business est parfait. Je paie moins cher qu\'avant pour la maintenance, et j\'ai des évolutions incluses chaque mois.',
    avatar: '👨‍💼',
  },
  {
    name: 'Marie Lambert',
    company: 'Boutique Éthique',
    quote: 'Ma boutique en ligne tourne sans problème. Support réactif, gestion simple. Je me concentre enfin sur mes produits.',
    avatar: '👩',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Nos <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-light/70 max-w-2xl mx-auto">
              De la simple vitrine au SaaS complexe, nous propulsons votre présence digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
              Pourquoi choisir <span className="gradient-text">Market-IA</span> ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 card-glass p-6">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-light/90">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/abonnements" className="btn-primary inline-flex items-center gap-2">
                Voir les abonnements
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Ils nous font <span className="gradient-text">confiance</span>
            </h2>
            <p className="text-xl text-light/70">
              Des clients satisfaits qui développent leur activité avec nous
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-glass p-8">
                <div className="text-5xl mb-4">{testimonial.avatar}</div>
                <p className="text-light/80 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <div className="font-semibold text-light">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="card-glass p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Prêt à démarrer ?
            </h2>
            <p className="text-xl text-light/70 mb-8">
              Discutons de votre projet et trouvons la solution parfaite pour vous
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Demander un devis gratuit
              </Link>
              <Link href="/abonnements" className="btn-secondary">
                Explorer les abonnements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
