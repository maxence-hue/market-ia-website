import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  cover_image?: string
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="card-glass overflow-hidden h-full hover:shadow-glow transition-all duration-300 group">
        {post.cover_image && (
          <div className="aspect-video bg-dark-lighter overflow-hidden">
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-light/60 mb-3">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time>{new Date(post.date).toLocaleDateString('fr-FR')}</time>
            </div>
          </div>

          <h3 className="text-xl font-display font-bold text-light mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          <p className="text-light/70 mb-4 line-clamp-3">{post.excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-light/60">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>

            <div className="flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
              Lire plus
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
