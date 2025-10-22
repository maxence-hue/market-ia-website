'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Save, Eye, Loader2 } from 'lucide-react'
import Link from 'next/link'
import RichTextEditor from '@/components/admin/RichTextEditor'
import SEOFields from '@/components/admin/SEOFields'
import ImageUploader from '@/components/admin/ImageUploader'

export default function EditBlogPost() {
  const params = useParams()
  const router = useRouter()
  const isNew = params.slug === 'new'
  
  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [article, setArticle] = useState({
    title: '',
    slug: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    category: 'IA',
    tags: [] as string[],
    excerpt: '',
    coverImage: '',
    coverImageAlt: '',
    readTime: 5,
    published: false,
    content: '',
    seo: {
      metaTitle: '',
      metaDescription: '',
      metaKeywords: [] as string[],
      ogImage: '',
      canonicalUrl: '',
      noIndex: false,
      noFollow: false
    }
  })

  useEffect(() => {
    if (!isNew) {
      loadArticle()
    }
  }, [])

  const loadArticle = async () => {
    try {
      const res = await fetch(`/api/blog/${params.slug}`)
      if (res.ok) {
        const data = await res.json()
        setArticle(data.article)
      }
    } catch (error) {
      console.error('Error loading article:', error)
    } finally {
      setLoading(false)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const handleTitleChange = (title: string) => {
    setArticle({ ...article, title })
    if (isNew && !article.slug) {
      setArticle({ ...article, title, slug: generateSlug(title) })
    }
  }

  const saveArticle = async () => {
    if (!article.title || !article.slug) {
      alert('Le titre et le slug sont obligatoires')
      return
    }

    setSaving(true)
    try {
      const method = isNew ? 'POST' : 'PUT'
      const url = isNew ? '/api/blog' : `/api/blog/${params.slug}`

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          frontmatter: {
            title: article.title,
            slug: article.slug,
            author: article.author,
            date: article.date,
            category: article.category,
            tags: article.tags,
            excerpt: article.excerpt,
            coverImage: article.coverImage,
            coverImageAlt: article.coverImageAlt,
            readTime: article.readTime,
            published: article.published,
            seo: article.seo
          },
          content: article.content
        })
      })

      if (res.ok) {
        alert('Article sauvegardé avec succès !')
        if (isNew) {
          router.push(`/admin/blog/${article.slug}`)
        }
      } else {
        throw new Error('Erreur lors de la sauvegarde')
      }
    } catch (error) {
      alert('Erreur lors de la sauvegarde de l\'article')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={40} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <div className="bg-dark-surface border-b border-light/10 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/blog"
            className="p-2 hover:bg-light/5 rounded-lg transition-colors text-light"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-display font-bold text-light">
            {isNew ? 'Nouvel article' : 'Éditer l\'article'}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {!isNew && (
            <button
              onClick={() => window.open(`/blog/${article.slug}`, '_blank')}
              className="px-4 py-2 border border-light/10 text-light rounded-lg 
                       hover:bg-light/5 transition-colors flex items-center gap-2"
            >
              <Eye size={18} />
              Prévisualiser
            </button>
          )}
          <button
            onClick={saveArticle}
            disabled={saving}
            className="px-6 py-2 bg-primary hover:bg-primary-light text-white rounded-lg 
                     transition-colors flex items-center gap-2 disabled:opacity-50 font-semibold"
          >
            {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
            {saving ? 'Sauvegarde...' : 'Sauvegarder'}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Titre de l&apos;article *
              </label>
              <input
                type="text"
                value={article.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-4 py-3 bg-dark-surface border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none text-xl font-bold"
                placeholder="Titre accrocheur de votre article"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-light mb-2">
                URL (slug) *
              </label>
              <input
                type="text"
                value={article.slug}
                onChange={(e) => setArticle({ ...article, slug: generateSlug(e.target.value) })}
                className="w-full px-4 py-3 bg-dark-surface border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="mon-article-super-cool"
              />
              <p className="text-xs text-light/60 mt-1">
                URL: /blog/{article.slug}
              </p>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Extrait *
              </label>
              <textarea
                value={article.excerpt}
                onChange={(e) => setArticle({ ...article, excerpt: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-dark-surface border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                placeholder="Un court résumé de l'article (150-200 caractères)"
                maxLength={200}
              />
              <p className="text-xs text-light/60 mt-1">
                {article.excerpt.length}/200 caractères
              </p>
            </div>

            {/* Cover Image */}
            <ImageUploader
              value={article.coverImage}
              onChange={(url) => setArticle({ ...article, coverImage: url })}
              folder="blog"
              label="Image de couverture *"
              alt={article.coverImageAlt}
              onAltChange={(alt) => setArticle({ ...article, coverImageAlt: alt })}
            />

            {/* Content Editor */}
            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Contenu de l&apos;article *
              </label>
              <RichTextEditor
                content={article.content}
                onChange={(content) => setArticle({ ...article, content })}
              />
            </div>

            {/* SEO */}
            <SEOFields
              data={article.seo}
              onChange={(seo) => setArticle({ ...article, seo })}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish */}
            <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
              <h3 className="text-lg font-display font-bold text-light mb-4">
                Publication
              </h3>

              <div className="space-y-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={article.published}
                    onChange={(e) => setArticle({ ...article, published: e.target.checked })}
                    className="w-4 h-4 text-primary bg-dark border-light/20 rounded 
                             focus:ring-primary focus:ring-offset-dark"
                  />
                  <span className="text-light">Publier l&apos;article</span>
                </label>

                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Date de publication
                  </label>
                  <input
                    type="date"
                    value={article.date}
                    onChange={(e) => setArticle({ ...article, date: e.target.value })}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Auteur
                  </label>
                  <input
                    type="text"
                    value={article.author}
                    onChange={(e) => setArticle({ ...article, author: e.target.value })}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="Maxence Alehause"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Temps de lecture (minutes)
                  </label>
                  <input
                    type="number"
                    value={article.readTime}
                    onChange={(e) => setArticle({ ...article, readTime: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    min="1"
                  />
                </div>
              </div>
            </div>

            {/* Category & Tags */}
            <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
              <h3 className="text-lg font-display font-bold text-light mb-4">
                Catégorie & Tags
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Catégorie
                  </label>
                  <select
                    value={article.category}
                    onChange={(e) => setArticle({ ...article, category: e.target.value })}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  >
                    <option value="IA">IA</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Automatisation">Automatisation</option>
                    <option value="Business">Business</option>
                    <option value="Tutoriel">Tutoriel</option>
                    <option value="Actualités">Actualités</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    placeholder="Séparer les tags par des virgules"
                    value={article.tags.join(', ')}
                    onChange={(e) => setArticle({ 
                      ...article, 
                      tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean)
                    })}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                  <p className="text-xs text-light/60 mt-1">
                    Ex: intelligence artificielle, marketing digital, automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
