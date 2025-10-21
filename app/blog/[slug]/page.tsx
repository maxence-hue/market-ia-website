import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// Mock data - will be replaced by actual MDX loading
const blogPosts: Record<string, any> = {
  'abonnement-vs-projet': {
    title: 'Site web en abonnement vs projet unique : quel modèle choisir ?',
    date: '2025-10-15',
    author: 'Maxence Alehause',
    category: 'Business',
    content: `
      <p>Le modèle d'abonnement mensuel pour les sites web révolutionne l'accès aux technologies digitales...</p>
      <p>Cette page affichera le contenu complet de l'article depuis le fichier MDX.</p>
      <p><strong>Note:</strong> Pour charger dynamiquement les articles MDX, vous pouvez utiliser next-mdx-remote ou mdx-bundler.</p>
    `
  },
  'automatisation-marketing': {
    title: '5 automatisations marketing qui font gagner 20h/semaine',
    date: '2025-10-10',
    author: 'Maxence Alehause',
    category: 'Automatisation',
    content: `
      <p>Le temps, c'est de l'argent. En marketing, on passe souvent trop de temps sur des tâches répétitives...</p>
      <p>Cette page affichera le contenu complet de l'article depuis le fichier MDX.</p>
    `
  },
  'diagnostic-automatisation': {
    title: 'Comment identifier les processus à automatiser dans votre entreprise',
    date: '2025-10-05',
    author: 'Maxence Alehause',
    category: 'IA',
    content: `
      <p>Vous savez que l'automatisation peut vous faire gagner du temps. Mais par où commencer ?</p>
      <p>Cette page affichera le contenu complet de l'article depuis le fichier MDX.</p>
    `
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
          <ArrowLeft className="w-5 h-5" />
          Retour au blog
        </Link>

        <article>
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-light/60 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time>{new Date(post.date).toLocaleDateString('fr-FR')}</time>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {post.title}
            </h1>
          </header>

          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-display prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-light/80 prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-light prose-strong:font-semibold
              prose-ul:text-light/80 prose-ol:text-light/80
              prose-li:my-2
              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="card-glass p-8 text-center">
              <h3 className="text-2xl font-display font-bold mb-4">
                Cet article vous a été utile ?
              </h3>
              <p className="text-light/70 mb-6">
                Découvrez comment nous pouvons vous aider à développer votre activité
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Discutons de votre projet
                </Link>
                <Link href="/abonnements" className="btn-secondary">
                  Voir nos abonnements
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
