'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, Search, Filter } from 'lucide-react'
import Image from 'next/image'

interface Article {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  category: string
  author: string
  published: boolean
  tags: string[]
}

export default function BlogListPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  useEffect(() => {
    loadArticles()
  }, [])

  const loadArticles = async () => {
    try {
      const res = await fetch('/api/blog')
      if (res.ok) {
        const data = await res.json()
        setArticles(data.articles)
      }
    } catch (error) {
      console.error('Error loading articles:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteArticle = async (slug: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) return

    try {
      const res = await fetch(`/api/blog/${slug}`, { method: 'DELETE' })
      if (res.ok) {
        setArticles(articles.filter(a => a.slug !== slug))
        alert('Article supprimé avec succès')
      }
    } catch (error) {
      alert('Erreur lors de la suppression')
    }
  }

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  const categories = ['all', ...Array.from(new Set(articles.map(a => a.category)))]

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="text-light">Chargement...</div>
      </div>
    )
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-light mb-2">
            Articles de Blog
          </h1>
          <p className="text-light/60">
            Gérez vos articles de blog
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                   text-white rounded-lg transition-colors font-semibold"
        >
          <Plus size={20} />
          Nouvel article
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-dark-surface p-4 rounded-lg border border-light/10 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-light/40" size={20} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un article..."
              className="w-full pl-10 pr-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                       focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-light/40" size={20} />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                       focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'Toutes les catégories' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-dark-surface p-4 rounded-lg border border-light/10">
          <p className="text-light/60 text-sm mb-1">Total</p>
          <p className="text-2xl font-bold text-light">{articles.length}</p>
        </div>
        <div className="bg-dark-surface p-4 rounded-lg border border-light/10">
          <p className="text-light/60 text-sm mb-1">Publiés</p>
          <p className="text-2xl font-bold text-green-400">
            {articles.filter(a => a.published).length}
          </p>
        </div>
        <div className="bg-dark-surface p-4 rounded-lg border border-light/10">
          <p className="text-light/60 text-sm mb-1">Brouillons</p>
          <p className="text-2xl font-bold text-yellow-400">
            {articles.filter(a => !a.published).length}
          </p>
        </div>
        <div className="bg-dark-surface p-4 rounded-lg border border-light/10">
          <p className="text-light/60 text-sm mb-1">Catégories</p>
          <p className="text-2xl font-bold text-primary">
            {categories.length - 1}
          </p>
        </div>
      </div>

      {/* Articles List */}
      {filteredArticles.length === 0 ? (
        <div className="bg-dark-surface p-12 rounded-lg border border-light/10 text-center">
          <p className="text-light/60 mb-4">Aucun article trouvé</p>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                     text-white rounded-lg transition-colors font-semibold"
          >
            <Plus size={20} />
            Créer le premier article
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredArticles.map((article) => (
            <div
              key={article.slug}
              className="bg-dark-surface p-6 rounded-lg border border-light/10 hover:border-primary/50 transition-all"
            >
              <div className="flex gap-6">
                {/* Image */}
                {article.coverImage && (
                  <div className="relative w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-display font-bold text-light mb-1">
                        {article.title}
                      </h3>
                      <p className="text-light/60 text-sm mb-2">{article.excerpt}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        article.published
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {article.published ? 'Publié' : 'Brouillon'}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-light/60 mb-4">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    <span>•</span>
                    <span>{article.author}</span>
                  </div>

                  {article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      href={`/blog/${article.slug}`}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 border border-light/10 text-light 
                               rounded-lg hover:bg-light/5 transition-colors text-sm"
                    >
                      <Eye size={16} />
                      Voir
                    </Link>
                    <Link
                      href={`/admin/blog/${article.slug}`}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary 
                               rounded-lg hover:bg-primary/30 transition-colors text-sm font-semibold"
                    >
                      <Edit size={16} />
                      Éditer
                    </Link>
                    <button
                      onClick={() => deleteArticle(article.slug)}
                      className="flex items-center gap-2 px-4 py-2 border border-red-500/20 text-red-400 
                               rounded-lg hover:bg-red-500/10 transition-colors text-sm"
                    >
                      <Trash2 size={16} />
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
