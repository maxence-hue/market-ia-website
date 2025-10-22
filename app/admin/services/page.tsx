'use client'

import { useEffect, useState } from 'react'
import { Save, Plus, Trash2, GripVertical, Loader2, ChevronDown, ChevronUp } from 'lucide-react'
import ImageUploader from '@/components/admin/ImageUploader'

interface Service {
  id: string
  title: string
  slug: string
  icon: string
  excerpt: string
  image: string
  imageAlt: string
  content: string
  features: string[]
  ctaText: string
  ctaLink: string
  order: number
  active: boolean
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [expandedService, setExpandedService] = useState<string | null>(null)

  useEffect(() => {
    loadServices()
  }, [])

  const loadServices = async () => {
    try {
      const res = await fetch('/api/services')
      if (res.ok) {
        const data = await res.json()
        setServices(data.services)
      }
    } catch (error) {
      console.error('Error loading services:', error)
    } finally {
      setLoading(false)
    }
  }

  const saveServices = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ services })
      })

      if (res.ok) {
        alert('Services sauvegardés avec succès !')
      }
    } catch (error) {
      alert('Erreur lors de la sauvegarde')
    } finally {
      setSaving(false)
    }
  }

  const addService = () => {
    const newService: Service = {
      id: Date.now().toString(),
      title: 'Nouveau service',
      slug: 'nouveau-service',
      icon: 'Globe',
      excerpt: '',
      image: '',
      imageAlt: '',
      content: '',
      features: [''],
      ctaText: 'Demander un devis',
      ctaLink: '/contact',
      order: services.length,
      active: true
    }
    setServices([...services, newService])
    setExpandedService(newService.id)
  }

  const updateService = (id: string, updates: Partial<Service>) => {
    setServices(services.map(s => s.id === id ? { ...s, ...updates } : s))
  }

  const deleteService = (id: string) => {
    if (confirm('Supprimer ce service ?')) {
      setServices(services.filter(s => s.id !== id))
    }
  }

  const addFeature = (id: string) => {
    const service = services.find(s => s.id === id)
    if (service) {
      updateService(id, { features: [...service.features, ''] })
    }
  }

  const updateFeature = (id: string, index: number, value: string) => {
    const service = services.find(s => s.id === id)
    if (service) {
      const newFeatures = [...service.features]
      newFeatures[index] = value
      updateService(id, { features: newFeatures })
    }
  }

  const deleteFeature = (id: string, index: number) => {
    const service = services.find(s => s.id === id)
    if (service) {
      updateService(id, { features: service.features.filter((_, i) => i !== index) })
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
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-light mb-2">
            Services
          </h1>
          <p className="text-light/60">
            Gérez vos services et leurs contenus
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={addService}
            className="flex items-center gap-2 px-6 py-3 border border-primary text-primary 
                     rounded-lg hover:bg-primary/10 transition-colors font-semibold"
          >
            <Plus size={20} />
            Ajouter un service
          </button>
          <button
            onClick={saveServices}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                     text-white rounded-lg transition-colors font-semibold disabled:opacity-50"
          >
            {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
            {saving ? 'Sauvegarde...' : 'Sauvegarder tout'}
          </button>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-dark-surface rounded-lg border border-light/10 overflow-hidden"
          >
            {/* Service Header */}
            <div className="p-6 flex items-center justify-between bg-dark-surface/50">
              <div className="flex items-center gap-4 flex-1">
                <button className="cursor-move text-light/40 hover:text-light">
                  <GripVertical size={20} />
                </button>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-light">{service.title}</h3>
                  <p className="text-light/60 text-sm">/{service.slug}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="p-2 text-light hover:bg-light/5 rounded-lg transition-colors"
                >
                  {expandedService === service.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <button
                  onClick={() => deleteService(service.id)}
                  className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

            {/* Service Details (Collapsible) */}
            {expandedService === service.id && (
              <div className="p-6 border-t border-light/10 space-y-6">
                {/* Informations de base */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Titre du service
                    </label>
                    <input
                      type="text"
                      value={service.title}
                      onChange={(e) => updateService(service.id, { title: e.target.value })}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Slug (URL)
                    </label>
                    <input
                      type="text"
                      value={service.slug}
                      onChange={(e) => updateService(service.id, { slug: e.target.value })}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Icône (Lucide - ex: Globe, Zap, GraduationCap)
                  </label>
                  <input
                    type="text"
                    value={service.icon}
                    onChange={(e) => updateService(service.id, { icon: e.target.value })}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="Globe"
                  />
                  <p className="text-xs text-light/50 mt-1">
                    Voir les icônes disponibles : <a href="https://lucide.dev/icons" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">lucide.dev/icons</a>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Extrait (description courte)
                  </label>
                  <textarea
                    value={service.excerpt}
                    onChange={(e) => updateService(service.id, { excerpt: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                    placeholder="Description courte pour les cartes de services..."
                  />
                </div>

                {/* Image */}
                <ImageUploader
                  value={service.image}
                  onChange={(url) => updateService(service.id, { image: url })}
                  folder="services"
                  label="Image du service"
                  alt={service.imageAlt}
                  onAltChange={(alt) => updateService(service.id, { imageAlt: alt })}
                />

                {/* Description détaillée */}
                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Description détaillée
                  </label>
                  <textarea
                    value={service.content}
                    onChange={(e) => updateService(service.id, { content: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                    placeholder="Description complète du service qui sera affichée sur la page dédiée...&#10;&#10;Utilisez \n\n pour créer des paragraphes."
                  />
                </div>

                {/* Fonctionnalités */}
                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Fonctionnalités clés
                  </label>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => updateFeature(service.id, index, e.target.value)}
                          className="flex-1 px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                                   focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                          placeholder="Fonctionnalité"
                        />
                        <button
                          onClick={() => deleteFeature(service.id, index)}
                          className="px-3 py-2 border border-red-500/20 text-red-400 rounded-lg 
                                   hover:bg-red-500/10 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addFeature(service.id)}
                      className="px-4 py-2 border border-light/10 text-light rounded-lg 
                               hover:bg-light/5 transition-colors text-sm"
                    >
                      + Ajouter une fonctionnalité
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-light/10">
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Texte du bouton
                    </label>
                    <input
                      type="text"
                      value={service.ctaText}
                      onChange={(e) => updateService(service.id, { ctaText: e.target.value })}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      placeholder="Demander un devis"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Lien du bouton
                    </label>
                    <input
                      type="text"
                      value={service.ctaLink}
                      onChange={(e) => updateService(service.id, { ctaLink: e.target.value })}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      placeholder="/contact"
                    />
                  </div>
                </div>

                {/* Active */}
                <div className="border-t border-light/10 pt-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={service.active}
                      onChange={(e) => updateService(service.id, { active: e.target.checked })}
                      className="w-4 h-4 text-primary bg-dark border-light/20 rounded"
                    />
                    <span className="text-light">Service actif (visible sur le site)</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        ))}

        {services.length === 0 && (
          <div className="bg-dark-surface p-12 rounded-lg border border-light/10 text-center">
            <p className="text-light/60 mb-4">Aucun service configuré</p>
            <button
              onClick={addService}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                       text-white rounded-lg transition-colors font-semibold"
            >
              <Plus size={20} />
              Créer le premier service
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
