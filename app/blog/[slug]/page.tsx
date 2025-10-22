import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllBlogPosts, getBlogPostBySlug, BlogPost } from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'

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
    title: `${post.fields.title} | Market-IA Blog`,
    description: post.fields.excerpt || '',
    openGraph: {
      title: post.fields.title,
      description: post.fields.excerpt || '',
      images: post.fields.coverImage
        ? [`https:${post.fields.coverImage.fields.file.url}`]
        : [],
    },
  }
}

/**
 * Génère les chemins statiques pour tous les articles
 * Désactivé pour l'instant - sera activé après configuration Contentful
 */
// export async function generateStaticParams() {
//   const posts = await getAllBlogPosts()
//   return posts.map((post) => ({
//     slug: post.fields.slug,
//   }))
// }

// Rendu dynamique pour l'instant
export const dynamic = 'force-dynamic'

/**
 * Options de rendu pour le contenu Rich Text de Contentful
 */
const renderOptions = {
  renderNode: {
    // Paragraphes
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-6 text-light/80 leading-relaxed text-lg">{children}</p>
    ),
    // Titres
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-3xl font-display font-bold text-light mt-12 mb-6">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-2xl font-display font-bold text-light mt-10 mb-4">{children}</h3>
    ),
    // Listes
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="mb-6 space-y-2 list-disc list-inside text-light/80">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="mb-6 space-y-2 list-decimal list-inside text-light/80">{children}</ol>
    ),
    // Citations
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5 rounded-r-lg">
        <div className="text-light/90 italic">{children}</div>
      </blockquote>
    ),
    // Images intégrées
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, title } = node.data.target.fields
      return (
        <div className="my-8 rounded-xl overflow-hidden">
          <Image
            src={`https:${file.url}`}
            alt={title || ''}
            width={file.details.image.width}
            height={file.details.image.height}
            className="w-full h-auto"
          />
        </div>
      )
    },
    // Liens
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary-light underline transition-colors"
      >
        {children}
      </a>
    ),
  },
}

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
        {post.fields.coverImage && (
          <div className="absolute inset-0">
            <Image
              src={`https:${post.fields.coverImage.fields.file.url}`}
              alt={post.fields.coverImage.fields.title || post.fields.title}
              fill
              className="object-cover opacity-20"
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

            {/* Catégorie */}
            {post.fields.category && (
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full mb-6">
                {post.fields.category}
              </span>
            )}

            {/* Titre */}
            <h1 className="text-4xl md:text-6xl font-display font-bold text-light mb-6">
              {post.fields.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-light/60">
              {post.fields.author && (
                <div className="flex items-center gap-2">
                  <User size={20} />
                  <span>{post.fields.author}</span>
                </div>
              )}
              {post.fields.publishDate && (
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
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
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Image principale (si pas déjà en hero) */}
            {post.fields.coverImage && (
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-light/10">
                <Image
                  src={`https:${post.fields.coverImage.fields.file.url}`}
                  alt={post.fields.coverImage.fields.title || post.fields.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Contenu Rich Text */}
            <div className="prose prose-invert prose-lg max-w-none">
              {documentToReactComponents(post.fields.content, renderOptions)}
            </div>

            {/* Tags */}
            {post.fields.tags && post.fields.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-light/10">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag className="text-primary" size={20} />
                  {post.fields.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-surface border border-light/10 rounded-full text-sm text-light/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

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
