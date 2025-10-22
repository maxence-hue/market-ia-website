import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check, Star, ArrowRight, Clock, Zap } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface SubscriptionPlan {
  id: string
  name: string
  monthlyPrice: number
  setupFee: number
  popular: boolean
  timeIncluded: string
  sla: string
  features: string[]
}

interface Service {
  id: string
  title: string
  slug: string
  icon: string
  excerpt: string
  image: string
  imageAlt: string
  content: string
  features: string[]
  subscriptionPlans: SubscriptionPlan[]
  order: number
  active: boolean
}

async function getService(slug: string): Promise<Service | null> {
  try {
    const fs = require('fs').promises
    const path = require('path')
    const filePath = path.join(process.cwd(), 'content/services/services.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(fileContent)
    
    const service = data.services?.find((s: Service) => s.slug === slug && s.active)
    return service || null
  } catch (error) {
    return null
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await getService(params.slug)
  
  if (!service) {
    return {
      title: 'Service non trouvé'
    }
  }

  return {
    title: `${service.title} | Market-IA`,
    description: service.excerpt,
    openGraph: {
      title: service.title,
      description: service.excerpt,
      images: service.image ? [service.image] : [],
    }
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug)

  if (!service) {
    notFound()
  }

  // Récupérer l'icône dynamiquement
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Package

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-2xl mb-6">
              <IconComponent className="text-primary" size={40} />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold text-light mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
              {service.excerpt}
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light 
                       text-white rounded-lg transition-colors font-semibold text-lg"
            >
              Démarrer un projet
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Image principale */}
      {service.image && (
        <section className="py-12 bg-dark-surface">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-light/10">
                <Image
                  src={service.image}
                  alt={service.imageAlt || service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Description détaillée */}
      {service.content && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-light/80 whitespace-pre-line leading-relaxed">
                  {service.content}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fonctionnalités générales */}
      {service.features && service.features.length > 0 && service.features[0] !== '' && (
        <section className="py-20 bg-dark-surface">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-12 text-center">
                Ce qui est inclus
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.filter(f => f).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-dark rounded-lg border border-light/10
                             hover:border-primary/50 transition-all group"
                  >
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Check className="text-primary" size={20} />
                    </div>
                    <p className="text-light/80 flex-1">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Plans d'abonnement */}
      {service.subscriptionPlans && service.subscriptionPlans.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-4">
                  Choisissez votre plan d&apos;abonnement
                </h2>
                <p className="text-light/70 text-lg">
                  Des formules flexibles adaptées à vos besoins
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.subscriptionPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative p-8 rounded-2xl border-2 transition-all hover:scale-105 ${
                      plan.popular
                        ? 'border-primary bg-dark-surface shadow-xl shadow-primary/20'
                        : 'border-light/10 bg-dark-surface hover:border-primary/50'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white 
                                    rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star size={14} fill="currentColor" />
                        Populaire
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-display font-bold text-light mb-2">
                        {plan.name}
                      </h3>
                      
                      <div className="flex items-baseline justify-center gap-2 mb-4">
                        <span className="text-5xl font-bold text-primary">
                          {plan.monthlyPrice}€
                        </span>
                        <span className="text-light/60">/mois</span>
                      </div>

                      {plan.setupFee > 0 && (
                        <p className="text-light/60 text-sm">
                          + {plan.setupFee}€ de frais d&apos;activation
                        </p>
                      )}
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-light/80">
                        <Clock size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{plan.timeIncluded} de développement incluses/mois</span>
                      </div>
                      <div className="flex items-center gap-3 text-light/80">
                        <Zap size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm">Réponse sous {plan.sla}</span>
                      </div>
                    </div>

                    <div className="border-t border-light/10 pt-6 mb-8">
                      <ul className="space-y-3">
                        {plan.features.filter(f => f).map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-light/80 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className={`block w-full py-3 rounded-lg text-center font-semibold transition-all ${
                        plan.popular
                          ? 'bg-primary hover:bg-primary-light text-white'
                          : 'bg-light/10 hover:bg-light/20 text-light'
                      }`}
                    >
                      Choisir ce plan
                    </Link>
                  </div>
                ))}
              </div>

              <p className="text-center text-light/60 mt-8 text-sm">
                Sans engagement • Annulation à tout moment • Facturé mensuellement
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-light/80 text-lg mb-8">
              Discutons ensemble de vos besoins et trouvons la meilleure solution pour votre entreprise.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light 
                       text-white rounded-lg transition-colors font-semibold text-lg"
            >
              Demander un devis gratuit
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
