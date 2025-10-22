import { Metadata } from 'next'
import Image from 'next/image'
import { getAllGalleryImages, GalleryImage } from '@/lib/contentful'

export const metadata: Metadata = {
  title: 'Galerie | Market-IA',
  description: 'Découvrez notre galerie d\'images et nos réalisations',
}

/**
 * Page galerie d'images depuis Contentful
 */
export default async function GalleriePage() {
  // Récupération des images depuis Contentful
  let images: GalleryImage[] = []
  
  try {
    images = await getAllGalleryImages()
  } catch (error) {
    console.error('Erreur lors de la récupération des images:', error)
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Notre Galerie</span>
            </h1>
            <p className="text-xl text-light/80 max-w-2xl mx-auto">
              Découvrez nos réalisations et projets en images
            </p>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {images.length === 0 ? (
            // Message si aucune image
            <div className="max-w-2xl mx-auto text-center">
              <div className="p-12 bg-dark-surface rounded-2xl border border-light/10">
                <h2 className="text-2xl font-display font-bold text-light mb-4">
                  Aucune image pour le moment
                </h2>
                <p className="text-light/60">
                  Les images seront bientôt disponibles. Configurez Contentful pour commencer à publier.
                </p>
              </div>
            </div>
          ) : (
            // Grille d'images (Masonry style)
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto">
              {images.map((item) => (
                <div
                  key={item.sys.id}
                  className="break-inside-avoid mb-6 group"
                >
                  <div className="relative overflow-hidden rounded-xl border border-light/10 
                                hover:border-primary/50 transition-all bg-dark-surface">
                    {/* Image */}
                    <div className="relative aspect-auto">
                      <Image
                        src={`https:${item.fields.image.fields.file.url}`}
                        alt={item.fields.image.fields.title || item.fields.title}
                        width={800}
                        height={600}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Overlay avec titre et description */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                  flex flex-col justify-end p-6">
                      <h3 className="text-xl font-display font-bold text-light mb-2">
                        {item.fields.title}
                      </h3>
                      {item.fields.description && (
                        <p className="text-light/80 text-sm">
                          {item.fields.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

// Revalidation toutes les heures
export const revalidate = 3600
