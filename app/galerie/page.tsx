import { Metadata } from 'next'
import { getAllGalleryItems } from '@/lib/sanity.queries'
import SanityImage from '@/components/sanity/SanityImage'

export const metadata: Metadata = {
  title: 'Galerie | Market-IA',
  description: 'Découvrez notre galerie d\'images et nos réalisations',
}

/**
 * Page galerie d'images depuis Sanity
 */
export default async function GalleriePage() {
  // Récupération des galeries depuis Sanity
  const galleries = await getAllGalleryItems()

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
          {galleries.length === 0 ? (
            // Message si aucune image
            <div className="max-w-2xl mx-auto text-center">
              <div className="p-12 bg-dark-surface rounded-2xl border border-light/10">
                <h2 className="text-2xl font-display font-bold text-light mb-4">
                  Aucune image pour le moment
                </h2>
                <p className="text-light/60 mb-6">
                  Les images seront bientôt disponibles. Créez votre première galerie dans Sanity Studio.
                </p>
                <a
                  href="/admin"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                           text-white rounded-lg transition-colors font-semibold"
                >
                  Ouvrir Sanity Studio
                </a>
              </div>
            </div>
          ) : (
            // Grille d'images (Masonry style)
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto">
              {galleries.map((gallery) => (
                <div key={gallery._id} className="break-inside-avoid mb-6">
                  <div className="bg-dark-surface rounded-xl border border-light/10 overflow-hidden
                                hover:border-primary/50 transition-all group">
                    {/* Images de la galerie */}
                    {gallery.images && gallery.images.length > 0 && (
                      <div className="relative">
                        <SanityImage
                          image={gallery.images[0]}
                          alt={gallery.titre}
                          width={800}
                          height={600}
                          className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {/* Badge si plusieurs images */}
                        {gallery.images.length > 1 && (
                          <div className="absolute top-4 right-4 px-3 py-1 bg-dark/80 backdrop-blur-sm 
                                        rounded-full text-sm text-light">
                            +{gallery.images.length - 1}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Infos */}
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-light mb-2">
                        {gallery.titre}
                      </h3>
                      {gallery.description && (
                        <p className="text-light/70 text-sm">
                          {gallery.description}
                        </p>
                      )}
                      {gallery.categorie && (
                        <span className="inline-block mt-3 px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                          {gallery.categorie}
                        </span>
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

// Rendu dynamique pour l'instant (avant configuration Sanity)
export const dynamic = 'force-dynamic'
