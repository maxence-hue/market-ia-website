import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check, ArrowRight, Clock, HelpCircle } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface FAQ {
  question: string
  answer: string
}

interface ProgramDay {
  day: string
  content: string
}

interface Service {
  id: string
  title: string
  slug: string
  icon: string
  price: string
  excerpt: string
  image: string
  imageAlt: string
  content: string
  features: string[]
  options?: string[]
  process?: string
  timeline?: string
  results: string
  faq: FAQ[]
  ctaText: string
  ctaLink: string
  // Formation specific
  program?: ProgramDay[]
  boarding?: string
  public?: string
  financing?: string
  modalities?: string
  // SaaS specific
  examples?: string[]
  integrations?: string
  deliverables?: string
  security?: string
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
            
            <h1 className="text-5xl md:text-6xl font-display font-bold text-light mb-4">
              {service.title}
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              {service.price}
            </p>
            
            <p className="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
              {service.excerpt}
            </p>

            <Link
              href={service.ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light 
                       text-white rounded-lg transition-colors font-semibold text-lg"
            >
              {service.ctaText}
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
                <div className="text-light/80 whitespace-pre-line leading-relaxed text-lg">
                  {service.content}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fonctionnalités principales */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 bg-dark-surface">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-12 text-center">
                Ce que vous obtenez
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-dark rounded-lg border border-light/10
                             hover:border-primary/50 transition-all group"
                  >
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors flex-shrink-0">
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

      {/* Programme (Formation uniquement) */}
      {service.program && service.program.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-12 text-center">
                Parcours 3 jours
              </h2>
              
              <div className="space-y-6">
                {service.program.map((day, index) => (
                  <div
                    key={index}
                    className="bg-dark-surface p-8 rounded-lg border border-light/10"
                  >
                    <h3 className="text-xl font-display font-bold text-primary mb-3">
                      {day.day}
                    </h3>
                    <p className="text-light/80 text-lg">{day.content}</p>
                  </div>
                ))}
              </div>

              {service.boarding && (
                <div className="mt-8 bg-primary/10 border border-primary/30 p-8 rounded-lg">
                  <h3 className="text-xl font-display font-bold text-light mb-3 flex items-center gap-2">
                    <Clock className="text-primary" size={24} />
                    Module Boarding — 4 h (390 €)
                  </h3>
                  <p className="text-light/80 text-lg">{service.boarding}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Exemples (SaaS uniquement) */}
      {service.examples && service.examples.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-12 text-center">
                Exemples d&apos;agents & flux
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {service.examples.map((example, index) => (
                  <div
                    key={index}
                    className="bg-dark-surface p-6 rounded-lg border border-light/10"
                  >
                    <p className="text-light/80">{example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Options disponibles */}
      {service.options && service.options.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-12 text-center">
                Options disponibles
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.options.map((option, index) => (
                  <div
                    key={index}
                    className="bg-dark-surface p-4 rounded-lg border border-light/10 text-center"
                  >
                    <p className="text-light/80">{option}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Processus & Timeline */}
      {(service.process || service.timeline) && (
        <section className="py-20 bg-dark-surface">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-12 text-center">
                Processus de réalisation
              </h2>
              
              {service.process && (
                <div className="bg-dark p-8 rounded-lg border border-light/10 mb-6">
                  <p className="text-light/80 text-lg text-center">{service.process}</p>
                </div>
              )}

              {service.timeline && (
                <div className="flex items-center justify-center gap-3 text-primary">
                  <Clock size={24} />
                  <p className="text-lg font-semibold">{service.timeline}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Informations complémentaires (Formation & SaaS) */}
      {(service.public || service.financing || service.modalities || service.integrations || service.security) && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              {service.public && (
                <div className="bg-dark-surface p-8 rounded-lg border border-light/10">
                  <h3 className="text-xl font-display font-bold text-light mb-3">Public & prérequis</h3>
                  <p className="text-light/80">{service.public}</p>
                </div>
              )}

              {service.financing && (
                <div className="bg-primary/10 border border-primary/30 p-8 rounded-lg">
                  <h3 className="text-xl font-display font-bold text-light mb-3">Financement</h3>
                  <p className="text-light/80">{service.financing}</p>
                </div>
              )}

              {service.modalities && (
                <div className="bg-dark-surface p-8 rounded-lg border border-light/10">
                  <h3 className="text-xl font-display font-bold text-light mb-3">Modalités</h3>
                  <p className="text-light/80">{service.modalities}</p>
                </div>
              )}

              {service.integrations && (
                <div className="bg-dark-surface p-8 rounded-lg border border-light/10">
                  <h3 className="text-xl font-display font-bold text-light mb-3">Intégrations</h3>
                  <p className="text-light/80">{service.integrations}</p>
                </div>
              )}

              {service.deliverables && (
                <div className="bg-dark-surface p-8 rounded-lg border border-light/10">
                  <h3 className="text-xl font-display font-bold text-light mb-3">Livrables</h3>
                  <p className="text-light/80">{service.deliverables}</p>
                </div>
              )}

              {service.security && (
                <div className="bg-dark-surface p-8 rounded-lg border border-light/10">
                  <h3 className="text-xl font-display font-bold text-light mb-3">Hébergement & sécurité</h3>
                  <p className="text-light/80">{service.security}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Résultats attendus */}
      {service.results && (
        <section className="py-20 bg-dark-surface">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-6">
                Résultats attendus
              </h2>
              <p className="text-xl text-light/80">{service.results}</p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-12 text-center">
                Questions fréquentes
              </h2>
              
              <div className="space-y-4">
                {service.faq.map((item, index) => (
                  <div
                    key={index}
                    className="bg-dark-surface p-6 rounded-lg border border-light/10"
                  >
                    <div className="flex items-start gap-4">
                      <HelpCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-light mb-2">{item.question}</h3>
                        <p className="text-light/70">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-6">
              Prêt à démarrer ?
            </h2>
            <p className="text-light/80 text-lg mb-8">
              Discutons ensemble de vos besoins et trouvons la meilleure solution pour votre entreprise.
            </p>
            <Link
              href={service.ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light 
                       text-white rounded-lg transition-colors font-semibold text-lg"
            >
              {service.ctaText}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
