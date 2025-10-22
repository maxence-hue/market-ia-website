'use client'

import { useEffect, useState } from 'react'
import { Save, Plus, Trash2, GripVertical, Loader2 } from 'lucide-react'
import ImageUploader from '@/components/admin/ImageUploader'

interface Service {
  id: string
  title: string
  slug: string
  icon: string
  startingPrice: number
  priceLabel: string
  excerpt: string
  image: string
  imageAlt: string
  features: string[]
  content: string
  order: number
  active: boolean
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

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
        setEditingId(null)
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
      startingPrice: 0,
      priceLabel: 'À partir de',
      excerpt: '',
      image: '',
      imageAlt: '',
      features: [''],
      content: '',
      order: services.length,
      active: true
    }
    setServices([...services, newService])
    setEditingId(newService.id)
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
            Gérez vos offres de services
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
            {saving ? 'Sauvegarde...' : 'Sauvegarder'}
          </button>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-dark-surface p-6 rounded-lg border border-light/10"
          >
            <div className="flex items-start gap-4">
              <button className="mt-2 cursor-move text-light/40 hover:text-light">
                <GripVertical size={20} />
              </button>

              <div className="flex-1 space-y-4">
                {/* Title & Slug */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Titre
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
                      Slug
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

                {/* Price & Icon */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Prix (€)
                    </label>
                    <input
                      type="number"
                      value={service.startingPrice}
                      onChange={(e) => updateService(service.id, { startingPrice: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Label prix
                    </label>
                    <input
                      type="text"
                      value={service.priceLabel}
                      onChange={(e) => updateService(service.id, { priceLabel: e.target.value })}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      placeholder="À partir de"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Icône (Lucide)
                    </label>
                    <input
                      type="text"
                      value={service.icon}
                      onChange={(e) => updateService(service.id, { icon: e.target.value })}
                      className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                               focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      placeholder="Globe"
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Extrait
                  </label>
                  <textarea
                    value={service.excerpt}
                    onChange={(e) => updateService(service.id, { excerpt: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
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

                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Fonctionnalités
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

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Description détaillée
                  </label>
                  <textarea
                    value={service.content}
                    onChange={(e) => updateService(service.id, { content: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                  />
                </div>

                {/* Active */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={service.active}
                    onChange={(e) => updateService(service.id, { active: e.target.checked })}
                    className="w-4 h-4 text-primary bg-dark border-light/20 rounded"
                  />
                  <span className="text-light">Service actif</span>
                </label>
              </div>

              <button
                onClick={() => deleteService(service.id)}
                className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
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
