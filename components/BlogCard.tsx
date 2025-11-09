import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime?: string
  author: string
  category: string
  cover_image?: string
}

const categoryColors: Record<string, string> = {
  'IA': 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  'Web': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Marketing': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'Automatisation': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Tutoriels': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Business': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const categoryColor = categoryColors[post.category] || 'bg-primary/20 text-primary border-primary/30'

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="card-glass overflow-hidden h-full hover:border-primary/50 transition-all duration-300 group">
        {/* Image */}
        <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
          {post.cover_image ? (
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
            </div>
          )}
          
          {/* Badge catégorie sur l'image */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColor} backdrop-blur-sm`}>
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          {/* Date et temps de lecture */}
          <div className="flex items-center gap-4 text-sm text-light/60 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time>{post.date}</time>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>

          {/* Titre */}
          <h3 className="text-xl font-display font-bold text-light mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Extrait */}
          <p className="text-light/70 mb-4 line-clamp-3">{post.excerpt}</p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-sm text-light/60">Par {post.author}</span>

            <div className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
              Lire l&apos;article
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
