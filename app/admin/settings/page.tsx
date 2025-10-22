'use client'

import { useEffect, useState } from 'react'
import { Save, Loader2 } from 'lucide-react'
import ImageUploader from '@/components/admin/ImageUploader'

interface Settings {
  siteName: string
  tagline: string
  description: string
  email: string
  phone: string
  address: string
  social: {
    facebook: string
    twitter: string
    linkedin: string
    instagram: string
  }
  heroTitle: string
  heroSubtitle: string
  seo: {
    defaultMetaTitle: string
    defaultMetaDescription: string
    defaultOgImage: string
  }
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    siteName: 'Market-IA',
    tagline: 'L\'alliance parfaite entre humain et IA',
    description: '',
    email: '',
    phone: '',
    address: '',
    social: {
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: ''
    },
    heroTitle: '',
    heroSubtitle: '',
    seo: {
      defaultMetaTitle: '',
      defaultMetaDescription: '',
      defaultOgImage: ''
    }
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      const res = await fetch('/api/settings')
      if (res.ok) {
        const data = await res.json()
        if (data.settings && Object.keys(data.settings).length > 0) {
          setSettings(data.settings)
        }
      }
    } catch (error) {
      console.error('Error loading settings:', error)
    } finally {
      setLoading(false)
    }
  }

  const saveSettings = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      })

      if (res.ok) {
        alert('Paramètres sauvegardés avec succès !')
      }
    } catch (error) {
      alert('Erreur lors de la sauvegarde')
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
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-light mb-2">
            Paramètres du site
          </h1>
          <p className="text-light/60">
            Configuration générale de votre site
          </p>
        </div>
        <button
          onClick={saveSettings}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                   text-white rounded-lg transition-colors font-semibold disabled:opacity-50"
        >
          {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
          {saving ? 'Sauvegarde...' : 'Sauvegarder'}
        </button>
      </div>

      <div className="max-w-4xl space-y-8">
        {/* Informations générales */}
        <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
          <h2 className="text-xl font-display font-bold text-light mb-6">
            Informations générales
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Nom du site
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="Market-IA"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Slogan
              </label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="L'alliance parfaite entre humain et IA"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Description
              </label>
              <textarea
                value={settings.description}
                onChange={(e) => setSettings({ ...settings, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                placeholder="Description de votre entreprise..."
              />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
          <h2 className="text-xl font-display font-bold text-light mb-6">
            Informations de contact
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Email
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="contact@market-ia.fr"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="+33 1 23 45 67 89"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Adresse
              </label>
              <textarea
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                rows={2}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                placeholder="123 Rue Example, 75001 Paris, France"
              />
            </div>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
          <h2 className="text-xl font-display font-bold text-light mb-6">
            Réseaux sociaux
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Facebook
              </label>
              <input
                type="url"
                value={settings.social.facebook}
                onChange={(e) => setSettings({ 
                  ...settings, 
                  social: { ...settings.social, facebook: e.target.value }
                })}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="https://facebook.com/market-ia"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Twitter
              </label>
              <input
                type="url"
                value={settings.social.twitter}
                onChange={(e) => setSettings({ 
                  ...settings, 
                  social: { ...settings.social, twitter: e.target.value }
                })}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="https://twitter.com/market-ia"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-light mb-2">
                LinkedIn
              </label>
              <input
                type="url"
                value={settings.social.linkedin}
                onChange={(e) => setSettings({ 
                  ...settings, 
                  social: { ...settings.social, linkedin: e.target.value }
                })}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="https://linkedin.com/company/market-ia"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Instagram
              </label>
              <input
                type="url"
                value={settings.social.instagram}
                onChange={(e) => setSettings({ 
                  ...settings, 
                  social: { ...settings.social, instagram: e.target.value }
                })}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="https://instagram.com/market-ia"
              />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
          <h2 className="text-xl font-display font-bold text-light mb-6">
            Section Hero (Page d&apos;accueil)
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Titre principal
              </label>
              <input
                type="text"
                value={settings.heroTitle}
                onChange={(e) => setSettings({ ...settings, heroTitle: e.target.value })}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="L'alliance parfaite entre humain et intelligence artificielle"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Sous-titre
              </label>
              <textarea
                value={settings.heroSubtitle}
                onChange={(e) => setSettings({ ...settings, heroSubtitle: e.target.value })}
                rows={2}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                placeholder="Des sites, automatisations et formations qui travaillent à votre place"
              />
            </div>
          </div>
        </div>

        {/* SEO par défaut */}
        <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
          <h2 className="text-xl font-display font-bold text-light mb-6">
            SEO par défaut
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Meta Title par défaut
              </label>
              <input
                type="text"
                value={settings.seo.defaultMetaTitle}
                onChange={(e) => setSettings({ 
                  ...settings, 
                  seo: { ...settings.seo, defaultMetaTitle: e.target.value }
                })}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="Market-IA | Agence Web & IA"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Meta Description par défaut
              </label>
              <textarea
                value={settings.seo.defaultMetaDescription}
                onChange={(e) => setSettings({ 
                  ...settings, 
                  seo: { ...settings.seo, defaultMetaDescription: e.target.value }
                })}
                rows={3}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                placeholder="Description SEO par défaut du site..."
              />
            </div>

            <ImageUploader
              value={settings.seo.defaultOgImage}
              onChange={(url) => setSettings({ 
                ...settings, 
                seo: { ...settings.seo, defaultOgImage: url }
              })}
              folder="general"
              label="Image Open Graph par défaut"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
