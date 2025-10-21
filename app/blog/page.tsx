'use client'

import BlogCard from '@/components/BlogCard'
import { Search, Sparkles, Calendar, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

// Article featured
const featuredPost = {
  slug: 'ia-business-2025',
  title: 'Comment l\'IA transforme le business en 2025',
  excerpt: 'Découvrez les dernières tendances et comment votre entreprise peut tirer profit de l\'intelligence artificielle pour automatiser vos processus et multiplier votre productivité.',
  date: '15 jan 2025',
  readTime: '5 min',
  author: 'Sophie Martin',
  category: 'IA',
  cover_image: '/images/blog/ai-chip.jpg',
}

// Articles de blog
const blogPosts = [
  {
    slug: 'site-web-convertit',
    title: '10 principes pour un site web qui convertit',
    excerpt: 'Les clés pour créer un site web performant qui transforme vos visiteurs en clients fidèles. Design, UX, vitesse et SEO appliqués simplement.',
    date: '12 jan 2025',
    readTime: '7 min',
    author: 'Maxence Alehause',
    category: 'Web',
    cover_image: '/images/blog/web-design.jpg',
  },
  {
    slug: 'automatisation-marketing',
    title: 'Automatiser votre marketing avec l\'IA',
    excerpt: 'Gagnez jusqu\'\u00e0 20h par semaine en automatisant vos tâches marketing répétitives. Guide complet des meilleurs outils et stratégies d\'automatisation.',
    date: '10 jan 2025',
    readTime: '8 min',
    author: 'Marie Dubois',
    category: 'Automatisation',
    cover_image: '/images/blog/automation.jpg',
  },
  {
    slug: 'content-marketing-leads',
    title: 'Stratégies de content marketing qui génèrent des leads',
    excerpt: 'Comment créer du contenu qui attire et engage votre audience cible. Techniques éprouvées pour transformer vos articles en machine à leads.',
    date: '8 jan 2025',
    readTime: '8 min',
    author: 'Thomas Laurent',
    category: 'Marketing',
    cover_image: '/images/blog/marketing.jpg',
  },
  {
    slug: 'chatgpt-entreprise',
    title: 'Guide complet : ChatGPT pour votre entreprise',
    excerpt: 'Apprenez à utiliser ChatGPT efficacement dans votre activité quotidienne. 50+ prompts et cas d\'usage pour booster votre productivité.',
    date: '5 jan 2025',
    readTime: '10 min',
    author: 'Sophie Martin',
    category: 'Tutoriels',
    cover_image: '/images/blog/chatgpt.jpg',
  },
  {
    slug: 'seo-2025-nouvelles-regles',
    title: 'SEO en 2025 : Les nouvelles règles du jeu',
    excerpt: 'Optimisez votre référencement avec les dernières techniques Google. L\'impact de l\'IA sur le SEO et comment l\'utiliser à votre avantage.',
    date: '3 jan 2025',
    readTime: '9 min',
    author: 'Marc Lefebvre',
    category: 'Web',
    cover_image: '/images/blog/seo.jpg',
  },
]

const categories = ['Tous', 'IA', 'Web', 'Marketing', 'Automatisation', 'Tutoriels']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen">
      {/* Hero Section - Design Figma */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-stars opacity-30" />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-light">Blog & Ressources</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Restez à la pointe de <span className="gradient-text">l&apos;IA</span>
            </h1>

            <p className="text-xl text-light/70 mb-12 max-w-3xl mx-auto">
              Conseils pratiques, tutoriels détaillés et insights exclusifs sur l&apos;IA, le web et le digital pour transformer votre business
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-light/40" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 glass border-white/10 rounded-2xl focus:border-primary focus:outline-none text-light text-lg"
              />
            </div>

            {/* Filtres catégories */}
            <div className="flex gap-3 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-glow'
                      : 'glass border border-white/10 text-light/70 hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Featured */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 card-glass p-8 hover:border-primary/50 transition-all group">
                {/* Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-24 h-24 text-primary/30" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-light/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-light/80 text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-light/60">Par {featuredPost.author}</span>
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Lire l&apos;article
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Grille d'articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
                Ne ratez aucun article
              </h2>
              <p className="text-light/70 mb-8 text-lg">
                Recevez nos derniers articles, tutoriels et conseils exclusifs directement dans votre boîte mail. 1 email par semaine, 0 spam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 px-6 py-4 glass border-white/10 rounded-xl focus:border-primary focus:outline-none text-light"
                />
                <button className="btn-primary whitespace-nowrap px-8 py-4">
                  S&apos;abonner
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
