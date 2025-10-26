import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'
import { getBlogPostBySlug, getAllBlogPostSlugs } from '@/lib/sanity.queries'
import SanityImage from '@/components/sanity/SanityImage'
import PortableText from '@/components/sanity/PortableText'

/**
 * Génère les métadonnées pour chaque article
 */
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: post.seo?.metaTitle || `${post.titre} | Market-IA Blog`,
    description: post.seo?.metaDescription || post.resume,
    openGraph: {
      title: post.seo?.metaTitle || post.titre,
      description: post.seo?.metaDescription || post.resume,
      images: post.imageHero ? [{ url: post.imageHero.asset._ref }] : [],
    },
  }
}

/**
 * Génère les chemins statiques pour tous les articles
 * Désactivé temporairement - sera activé après configuration Sanity
 */
// export async function generateStaticParams() {
//   const slugs = await getAllBlogPostSlugs()
//   return slugs.map((slug) => ({
//     slug: slug,
//   }))
// }

// Rendu dynamique pour l'instant
export const dynamic = 'force-dynamic'

/**
 * Page d'article de blog individuel
 */
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero avec image de couverture */}
      <section className="relative py-20 overflow-hidden">
        {/* Image de fond */}
        {post.imageHero && (
          <div className="absolute inset-0">
            <SanityImage
              image={post.imageHero}
              alt={post.titre}
              width={1920}
              height={1080}
              className="object-cover opacity-20 w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/80 to-dark" />
          </div>
        )}

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Bouton retour */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-light/60 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Retour au blog
            </Link>

            {/* Catégories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex gap-2 mb-6 flex-wrap">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            {/* Titre */}
            <h1 className="text-4xl md:text-6xl font-display font-bold text-light mb-6">
              {post.titre}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-light/60">
              {post.auteur && (
                <div className="flex items-center gap-2">
                  <User size={20} />
                  <span>{post.auteur}</span>
                </div>
              )}
              {post.datePublication && (
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span>
                    {new Date(post.datePublication).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Image principale */}
            {post.imageHero && (
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-light/10">
                <SanityImage
                  image={post.imageHero}
                  alt={post.titre}
                  width={1200}
                  height={675}
                  className="object-cover w-full h-full"
                />
              </div>
            )}

            {/* Contenu Rich Text */}
            <PortableText value={post.contenu} />

            {/* CTA */}
            <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl text-center">
              <h3 className="text-2xl font-display font-bold text-light mb-4">
                Vous avez un projet ?
              </h3>
              <p className="text-light/70 mb-6">
                Discutons ensemble de vos besoins et trouvons la meilleure solution
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light 
                         text-white rounded-lg transition-colors font-semibold"
              >
                Nous contacter
                <ArrowLeft size={20} className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Revalidation toutes les heures
export const revalidate = 3600
