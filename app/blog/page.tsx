import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts, BlogPost } from '@/lib/contentful'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Market-IA',
  description: 'Découvrez nos articles sur l\'IA, l\'automatisation et le développement web',
}

/**
 * Page listant tous les articles de blog depuis Contentful
 * Utilise getStaticProps pour la génération statique
 */
export default async function BlogPage() {
  // Récupération des articles depuis Contentful
  let posts: BlogPost[] = []
  
  try {
    posts = await getAllBlogPosts()
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error)
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
                  Les articles seront bientôt disponibles. Configurez Contentful pour commencer à publier.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                           text-white rounded-lg transition-colors font-semibold"
                >
                  Retour à l&apos;accueil
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ) : (
            // Grille d'articles
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post) => (
                <Link
                  key={post.sys.id}
                  href={`/blog/${post.fields.slug}`}
                  className="group"
                >
                  <article className="h-full bg-dark-surface rounded-xl border border-light/10 overflow-hidden
                                    hover:border-primary/50 transition-all hover:scale-105">
                    {/* Image */}
                    {post.fields.coverImage && (
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={`https:${post.fields.coverImage.fields.file.url}`}
                          alt={post.fields.coverImage.fields.title || post.fields.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Contenu */}
                    <div className="p-6">
                      {/* Catégorie */}
                      {post.fields.category && (
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mb-3">
                          {post.fields.category}
                        </span>
                      )}

                      {/* Titre */}
                      <h2 className="text-xl font-display font-bold text-light mb-3 group-hover:text-primary transition-colors">
                        {post.fields.title}
                      </h2>

                      {/* Extrait */}
                      {post.fields.excerpt && (
                        <p className="text-light/70 mb-4 line-clamp-3">
                          {post.fields.excerpt}
                        </p>
                      )}

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-light/50">
                        {post.fields.author && (
                          <div className="flex items-center gap-1">
                            <User size={16} />
                            <span>{post.fields.author}</span>
                          </div>
                        )}
                        {post.fields.publishDate && (
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>
                              {new Date(post.fields.publishDate).toLocaleDateString('fr-FR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
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
