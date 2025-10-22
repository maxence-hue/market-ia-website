import { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/sanity.queries'
import BlogCard from '@/components/sanity/BlogCard'

export const metadata: Metadata = {
  title: 'Blog | Market-IA',
  description: 'Découvrez nos articles sur l\'IA, l\'automatisation et le développement web',
}

/**
 * Page listant tous les articles de blog depuis Sanity
 */
export default async function BlogPage() {
  // Récupération des articles depuis Sanity
  const posts = await getAllBlogPosts()

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Notre Blog</span>
            </h1>
            <p className="text-xl text-light/80 max-w-2xl mx-auto">
              Découvrez nos articles sur l&apos;IA, l&apos;automatisation et les dernières tendances du web
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {posts.length === 0 ? (
            // Message si aucun article
            <div className="max-w-2xl mx-auto text-center">
              <div className="p-12 bg-dark-surface rounded-2xl border border-light/10">
                <h2 className="text-2xl font-display font-bold text-light mb-4">
                  Aucun article pour le moment
                </h2>
                <p className="text-light/60 mb-6">
                  Les articles seront bientôt disponibles. Créez votre premier article dans Sanity Studio.
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
            // Grille d'articles
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
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
