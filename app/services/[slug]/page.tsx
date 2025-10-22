import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check, ArrowRight, Clock, HelpCircle, Sparkles } from 'lucide-react'
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
  program?: ProgramDay[]
  boarding?: string
  public?: string
  financing?: string
  modalities?: string
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
      {/* Hero Section - Style page d'accueil */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background avec gradient animé */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-dark to-secondary/30" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge avec icône */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-8">
              <IconComponent className="text-primary" size={24} />
              <span className="text-primary font-semibold">{service.price}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="gradient-text">{service.title}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-light/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              {service.excerpt}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={service.ctaLink}
                className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg 
                         font-semibold text-lg transition-all hover:scale-105 hover:shadow-glow flex items-center gap-2"
              >
                {service.ctaText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#details"
                className="px-8 py-4 bg-white/5 border border-white/10 text-light rounded-lg 
                         font-semibold text-lg transition-all hover:bg-white/10"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Description avec image - Style moderne */}
      <section id="details" className="py-20 bg-dark-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              {service.image && (
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-light/10">
                    <Image
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Contenu */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                  <Sparkles className="text-primary" size={16} />
                  <span className="text-primary text-sm font-semibold">Ce qui vous attend</span>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <div className="text-light/80 whitespace-pre-line leading-relaxed text-lg">
                    {service.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités - Cards modernes */}
      {service.features && service.features.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  <span className="gradient-text">Ce que vous obtenez</span>
                </h2>
                <p className="text-light/60 text-lg">Tout ce dont vous avez besoin pour réussir</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-gradient-to-br from-dark-surface to-dark-surface/50 rounded-xl border border-light/10
                             hover:border-primary/50 transition-all hover:scale-105 hover:shadow-glow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                        <Check className="text-primary" size={20} />
                      </div>
                      <p className="text-light/80 flex-1 leading-relaxed">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Programme Formation - Timeline style */}
      {service.program && service.program.length > 0 && (
        <section className="py-20 bg-dark-surface">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  <span className="gradient-text">Programme de formation</span>
                </h2>
                <p className="text-light/60 text-lg">3 jours intensifs pour maîtriser l&apos;IA</p>
              </div>
              
              <div className="space-y-6">
                {service.program.map((day, index) => (
                  <div
                    key={index}
                    className="relative pl-12 pb-8 border-l-2 border-primary/30 last:border-0 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="bg-dark p-6 rounded-xl border border-light/10">
                      <h3 className="text-xl font-display font-bold text-primary mb-3">
                        {day.day}
                      </h3>
                      <p className="text-light/80 text-lg leading-relaxed">{day.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {service.boarding && (
                <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl">
                  <div className="flex items-start gap-4">
                    <Clock className="text-primary flex-shrink-0 mt-1" size={32} />
                    <div>
                      <h3 className="text-2xl font-display font-bold text-light mb-3">
                        Module Boarding — 4 h (390 €)
                      </h3>
                      <p className="text-light/80 text-lg leading-relaxed">{service.boarding}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Exemples SaaS - Grid moderne */}
      {service.examples && service.examples.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  <span className="gradient-text">Exemples d&apos;agents & flux</span>
                </h2>
                <p className="text-light/60 text-lg">Automatisations prêtes à l&apos;emploi</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {service.examples.map((example, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-dark-surface to-dark-surface/50 rounded-xl border border-light/10
                             hover:border-primary/50 transition-all"
                  >
                    <p className="text-light/80 leading-relaxed">{example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Options - Pills style */}
      {service.options && service.options.length > 0 && (
        <section className="py-20 bg-dark-surface">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  <span className="gradient-text">Options disponibles</span>
                </h2>
                <p className="text-light/60 text-lg">Personnalisez votre solution</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {service.options.map((option, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 
                             rounded-full text-light/90 hover:scale-105 transition-transform cursor-default"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Processus - Card avec timeline */}
      {(service.process || service.timeline) && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  <span className="gradient-text">Comment ça marche</span>
                </h2>
              </div>
              
              {service.process && (
                <div className="p-8 bg-gradient-to-br from-dark-surface to-dark-surface/50 rounded-2xl border border-light/10 mb-6">
                  <p className="text-light/80 text-lg text-center leading-relaxed">{service.process}</p>
                </div>
              )}

              {service.timeline && (
                <div className="flex items-center justify-center gap-3 text-primary">
                  <Clock size={28} />
                  <p className="text-xl font-semibold">{service.timeline}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ - Accordéon style */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-20 bg-dark-surface">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  <span className="gradient-text">Questions fréquentes</span>
                </h2>
                <p className="text-light/60 text-lg">Tout ce que vous devez savoir</p>
              </div>
              
              <div className="space-y-4">
                {service.faq.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-dark rounded-xl border border-light/10 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0">
                        <HelpCircle className="text-primary" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-light mb-2">{item.question}</h3>
                        <p className="text-light/70 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Final - Style page d'accueil */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-dark to-secondary/30" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Prêt à démarrer ?</span>
            </h2>
            <p className="text-xl md:text-2xl text-light/80 mb-10 max-w-2xl mx-auto">
              Discutons ensemble de vos besoins et trouvons la meilleure solution pour votre entreprise.
            </p>
            <Link
              href={service.ctaLink}
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-primary-light 
                       text-white rounded-lg font-semibold text-xl transition-all hover:scale-105 hover:shadow-glow"
            >
              {service.ctaText}
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
