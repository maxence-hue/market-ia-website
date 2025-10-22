import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check, ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
  ctaText: string
  ctaLink: string
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

      {/* Fonctionnalités */}
      {service.features && service.features.length > 0 && service.features[0] !== '' && (
        <section className="py-20 bg-dark-surface">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-12 text-center">
                Ce que nous proposons
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.filter(f => f).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-dark rounded-lg border border-light/10
                             hover:border-primary/50 transition-all group"
                  >
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors flex-shrink-0">
                      <Check className="text-primary" size={20} />
                    </div>
                    <p className="text-light/80 flex-1 text-lg">{feature}</p>
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
              Prêt à démarrer votre projet ?
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
