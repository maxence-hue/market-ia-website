'use client'

import { useEffect, useState } from 'react'
import { Save, Loader2, FileText, Home, Mail } from 'lucide-react'
import ImageUploader from '@/components/admin/ImageUploader'

interface PageContent {
  [key: string]: any
}

const availablePages = [
  {
    id: 'home',
    name: 'Page d\'accueil',
    icon: Home,
    description: 'Gérez le contenu de la page d\'accueil'
  },
  {
    id: 'contact',
    name: 'Page Contact',
    icon: Mail,
    description: 'Modifiez les informations de contact'
  }
]

export default function PagesEditor() {
  const [selectedPage, setSelectedPage] = useState<string>('home')
  const [pageContent, setPageContent] = useState<PageContent>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadPage(selectedPage)
  }, [selectedPage])

  const loadPage = async (pageSlug: string) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/pages/${pageSlug}`)
      if (res.ok) {
        const data = await res.json()
        setPageContent(data.page)
      }
    } catch (error) {
      console.error('Error loading page:', error)
    } finally {
      setLoading(false)
    }
  }

  const savePage = async () => {
    setSaving(true)
    try {
      const res = await fetch(`/api/pages/${selectedPage}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pageContent)
      })

      if (res.ok) {
        alert('Page sauvegardée avec succès !')
      }
    } catch (error) {
      alert('Erreur lors de la sauvegarde')
    } finally {
      setSaving(false)
    }
  }

  const updateContent = (path: string, value: any) => {
    const keys = path.split('.')
    const newContent = { ...pageContent }
    let current: any = newContent

    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {}
      current = current[keys[i]]
    }

    current[keys[keys.length - 1]] = value
    setPageContent(newContent)
  }

  const updateArrayItem = (path: string, index: number, field: string, value: any) => {
    const keys = path.split('.')
    const newContent = { ...pageContent }
    let current: any = newContent

    for (const key of keys) {
      if (!current[key]) current[key] = []
      current = current[key]
    }

    if (!current[index]) current[index] = {}
    current[index][field] = value
    setPageContent({ ...newContent })
  }

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={40} />
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-light mb-2">
            Éditeur de Pages
          </h1>
          <p className="text-light/60">
            Modifiez le contenu et les images de vos pages
          </p>
        </div>
        <button
          onClick={savePage}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                   text-white rounded-lg transition-colors font-semibold disabled:opacity-50"
        >
          {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
          {saving ? 'Sauvegarde...' : 'Sauvegarder'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Page selector */}
        <div className="lg:col-span-1 space-y-2">
          {availablePages.map((page) => {
            const Icon = page.icon
            return (
              <button
                key={page.id}
                onClick={() => setSelectedPage(page.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedPage === page.id
                    ? 'border-primary bg-primary/10 text-light'
                    : 'border-light/10 bg-dark-surface text-light/70 hover:border-primary/50 hover:text-light'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={20} className={selectedPage === page.id ? 'text-primary' : 'text-light/40'} />
                  <span className="font-semibold">{page.name}</span>
                </div>
                <p className="text-sm text-light/50">{page.description}</p>
              </button>
            )
          })}
        </div>

        {/* Content editor */}
        <div className="lg:col-span-3 space-y-6">
          {selectedPage === 'home' && pageContent && (
            <>
              {/* Hero Section */}
              <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
                <h2 className="text-xl font-display font-bold text-light mb-6 flex items-center gap-2">
                  <FileText size={20} className="text-primary" />
                  Section Hero
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Titre principal
                    </label>
                    <input
                      type="text"
                      value={pageContent.hero?.title || ''}
                      onChange={(e) => updateContent('hero.title', e.target.value)}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      placeholder="Titre accrocheur..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Sous-titre
                    </label>
                    <textarea
                      value={pageContent.hero?.subtitle || ''}
                      onChange={(e) => updateContent('hero.subtitle', e.target.value)}
                      rows={2}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                      placeholder="Description..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-light mb-2">
                        Texte du bouton
                      </label>
                      <input
                        type="text"
                        value={pageContent.hero?.ctaText || ''}
                        onChange={(e) => updateContent('hero.ctaText', e.target.value)}
                        className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                                 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        placeholder="Démarrer un projet"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-light mb-2">
                        Lien du bouton
                      </label>
                      <input
                        type="text"
                        value={pageContent.hero?.ctaLink || ''}
                        onChange={(e) => updateContent('hero.ctaLink', e.target.value)}
                        className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                                 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        placeholder="/contact"
                      />
                    </div>
                  </div>

                  <ImageUploader
                    value={pageContent.hero?.backgroundImage || ''}
                    onChange={(url) => updateContent('hero.backgroundImage', url)}
                    folder="pages"
                    label="Image de fond"
                  />
                </div>
              </div>

              {/* About Section */}
              <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
                <h2 className="text-xl font-display font-bold text-light mb-6">
                  Section À propos
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Titre
                    </label>
                    <input
                      type="text"
                      value={pageContent.about?.title || ''}
                      onChange={(e) => updateContent('about.title', e.target.value)}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Contenu
                    </label>
                    <textarea
                      value={pageContent.about?.content || ''}
                      onChange={(e) => updateContent('about.content', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                    />
                  </div>

                  <ImageUploader
                    value={pageContent.about?.image || ''}
                    onChange={(url) => updateContent('about.image', url)}
                    folder="pages"
                    label="Image"
                    alt={pageContent.about?.imageAlt || ''}
                    onAltChange={(alt) => updateContent('about.imageAlt', alt)}
                  />
                </div>
              </div>

              {/* Stats Section */}
              <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
                <h2 className="text-xl font-display font-bold text-light mb-6">
                  Statistiques
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {pageContent.stats?.map((stat: any, index: number) => (
                    <div key={index} className="bg-dark p-4 rounded-lg border border-light/10">
                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs font-medium text-light/70 mb-1">
                            Valeur
                          </label>
                          <input
                            type="text"
                            value={stat.value || ''}
                            onChange={(e) => updateArrayItem('stats', index, 'value', e.target.value)}
                            className="w-full px-3 py-2 bg-dark-surface border border-light/10 rounded text-light text-sm
                                     focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            placeholder="50+"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-light/70 mb-1">
                            Label
                          </label>
                          <input
                            type="text"
                            value={stat.label || ''}
                            onChange={(e) => updateArrayItem('stats', index, 'label', e.target.value)}
                            className="w-full px-3 py-2 bg-dark-surface border border-light/10 rounded text-light text-sm
                                     focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            placeholder="Projets réalisés"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
                <h2 className="text-xl font-display font-bold text-light mb-6">
                  Section CTA (Appel à l&apos;action)
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Titre
                    </label>
                    <input
                      type="text"
                      value={pageContent.cta?.title || ''}
                      onChange={(e) => updateContent('cta.title', e.target.value)}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Sous-titre
                    </label>
                    <textarea
                      value={pageContent.cta?.subtitle || ''}
                      onChange={(e) => updateContent('cta.subtitle', e.target.value)}
                      rows={2}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-light mb-2">
                        Texte du bouton
                      </label>
                      <input
                        type="text"
                        value={pageContent.cta?.ctaText || ''}
                        onChange={(e) => updateContent('cta.ctaText', e.target.value)}
                        className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                                 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-light mb-2">
                        Lien
                      </label>
                      <input
                        type="text"
                        value={pageContent.cta?.ctaLink || ''}
                        onChange={(e) => updateContent('cta.ctaLink', e.target.value)}
                        className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                                 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedPage === 'contact' && (
            <div className="bg-dark-surface p-6 rounded-lg border border-light/10 text-center">
              <p className="text-light/60 mb-4">
                La page Contact utilise les paramètres généraux définis dans
              </p>
              <a
                href="/admin/settings"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 text-primary 
                         rounded-lg hover:bg-primary/30 transition-colors font-semibold"
              >
                Aller aux Réglages
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
