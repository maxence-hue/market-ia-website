import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import SanityImage from './SanityImage'
import type { BlogPost } from '@/lib/sanity.queries'

/**
 * Carte d'article de blog
 * Affiche un aperçu d'un article avec image, titre, résumé, etc.
 */

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group block h-full"
    >
      <article className="h-full bg-dark-surface rounded-xl border border-light/10 overflow-hidden
                        hover:border-primary/50 transition-all hover:scale-105 hover:shadow-glow">
        {/* Image */}
        {post.imageHero && (
          <div className="relative aspect-video overflow-hidden">
            <SanityImage
              image={post.imageHero}
              alt={post.titre}
              width={600}
              height={400}
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}

        {/* Contenu */}
        <div className="p-6">
          {/* Catégories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 mb-3 flex-wrap">
              {post.categories.slice(0, 2).map((category, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Titre */}
          <h2 className="text-xl font-display font-bold text-light mb-3 
                       group-hover:text-primary transition-colors line-clamp-2">
            {post.titre}
          </h2>

          {/* Résumé */}
          {post.resume && (
            <p className="text-light/70 mb-4 line-clamp-3">
              {post.resume}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-light/50">
            {post.auteur && (
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>{post.auteur}</span>
              </div>
            )}
            {post.datePublication && (
              <div className="flex items-center gap-1">
                <Calendar size={16} />
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
      </article>
    </Link>
  )
}
