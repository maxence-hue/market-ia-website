import BlogCard from '@/components/BlogCard'
import { Search } from 'lucide-react'

// Mock data - will be replaced by CMS
const blogPosts = [
  {
    slug: 'abonnement-vs-projet',
    title: 'Site web en abonnement vs projet unique : quel modèle choisir ?',
    excerpt: 'Découvrez pourquoi de plus en plus d\'entreprises choisissent le modèle d\'abonnement pour leur site web plutôt qu\'un investissement initial lourd.',
    date: '2025-10-15',
    author: 'Maxence Alehause',
    category: 'Business',
    cover_image: '/images/blog/subscription-vs-project.jpg',
  },
  {
    slug: 'automatisation-marketing',
    title: '5 automatisations marketing qui font gagner 20h/semaine',
    excerpt: 'Le temps, c\'est de l\'argent. Découvrez les automatisations marketing essentielles pour libérer du temps et scaler votre business.',
    date: '2025-10-10',
    author: 'Maxence Alehause',
    category: 'Automatisation',
    cover_image: '/images/blog/marketing-automation.jpg',
  },
  {
    slug: 'diagnostic-automatisation',
    title: 'Comment identifier les processus à automatiser dans votre entreprise',
    excerpt: 'Notre méthode de diagnostic en 4 étapes pour transformer vos processus manuels en automatisations rentables.',
    date: '2025-10-05',
    author: 'Maxence Alehause',
    category: 'IA',
    cover_image: '/images/blog/automation-diagnostic.jpg',
  },
]

const categories = ['Tous', 'IA', 'Marketing', 'Automatisation', 'Business', 'Tutoriel']

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Notre <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-light/70 max-w-2xl mx-auto">
            Conseils, guides et actualités sur l&apos;IA, l&apos;automatisation et le développement web
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light/40" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-12 pr-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
              />
            </div>

            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg border border-white/10 text-light/70 hover:border-primary hover:text-primary transition-all"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="card-glass p-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Restez informé
          </h2>
          <p className="text-light/70 mb-8 max-w-2xl mx-auto">
            Recevez nos derniers articles et conseils directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
            />
            <button className="btn-primary whitespace-nowrap">
              S&apos;inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
