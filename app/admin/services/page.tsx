'use client'

import { useEffect, useState } from 'react'
import { Save, Plus, Trash2, GripVertical, Loader2, ChevronDown, ChevronUp, DollarSign, Star } from 'lucide-react'
import ImageUploader from '@/components/admin/ImageUploader'

interface SubscriptionPlan {
  id: string
  name: string
  monthlyPrice: number
  setupFee: number
  popular: boolean
  timeIncluded: string
  sla: string
  features: string[]
}

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
  subscriptionPlans: SubscriptionPlan[]
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
      subscriptionPlans: [],
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

  // Gestion des plans d'abonnement
  const addPlan = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId)
    if (service) {
      const newPlan: SubscriptionPlan = {
        id: Date.now().toString(),
        name: 'Nouveau plan',
        monthlyPrice: 0,
        setupFee: 0,
        popular: false,
        timeIncluded: '2h',
        sla: '48h',
        features: ['']
      }
      updateService(serviceId, { 
        subscriptionPlans: [...service.subscriptionPlans, newPlan] 
      })
    }
  }

  const updatePlan = (serviceId: string, planId: string, updates: Partial<SubscriptionPlan>) => {
    const service = services.find(s => s.id === serviceId)
    if (service) {
      updateService(serviceId, {
        subscriptionPlans: service.subscriptionPlans.map(p => 
          p.id === planId ? { ...p, ...updates } : p
        )
      })
    }
  }

  const deletePlan = (serviceId: string, planId: string) => {
    if (confirm('Supprimer ce plan ?')) {
      const service = services.find(s => s.id === serviceId)
      if (service) {
        updateService(serviceId, {
          subscriptionPlans: service.subscriptionPlans.filter(p => p.id !== planId)
        })
      }
    }
  }

  const addPlanFeature = (serviceId: string, planId: string) => {
    const service = services.find(s => s.id === serviceId)
    if (service) {
      const plan = service.subscriptionPlans.find(p => p.id === planId)
      if (plan) {
        updatePlan(serviceId, planId, { 
          features: [...plan.features, ''] 
        })
      }
    }
  }

  const updatePlanFeature = (serviceId: string, planId: string, index: number, value: string) => {
    const service = services.find(s => s.id === serviceId)
    if (service) {
      const plan = service.subscriptionPlans.find(p => p.id === planId)
      if (plan) {
        const newFeatures = [...plan.features]
        newFeatures[index] = value
        updatePlan(serviceId, planId, { features: newFeatures })
      }
    }
  }

  const deletePlanFeature = (serviceId: string, planId: string, index: number) => {
    const service = services.find(s => s.id === serviceId)
    if (service) {
      const plan = service.subscriptionPlans.find(p => p.id === planId)
      if (plan) {
        updatePlan(serviceId, planId, { 
          features: plan.features.filter((_, i) => i !== index) 
        })
      }
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
            Services & Abonnements
          </h1>
          <p className="text-light/60">
            Gérez vos services et leurs plans d&apos;abonnement
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
                  <p className="text-light/40 text-sm mt-1">
                    {service.subscriptionPlans.length} plan(s) d&apos;abonnement
                  </p>
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
                    Icône (Lucide)
                  </label>
                  <input
                    type="text"
                    value={service.icon}
                    onChange={(e) => updateService(service.id, { icon: e.target.value })}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="Globe, Zap, GraduationCap..."
                  />
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
                    placeholder="Description complète du service qui sera affichée sur la page dédiée..."
                  />
                </div>

                {/* Fonctionnalités générales */}
                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Fonctionnalités générales
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

                {/* Plans d'abonnement */}
                <div className="border-t border-light/10 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-display font-bold text-light flex items-center gap-2">
                        <DollarSign size={20} className="text-primary" />
                        Plans d&apos;abonnement
                      </h4>
                      <p className="text-light/60 text-sm">
                        Configurez les différents plans pour ce service
                      </p>
                    </div>
                    <button
                      onClick={() => addPlan(service.id)}
                      className="flex items-center gap-2 px-4 py-2 border border-primary text-primary 
                               rounded-lg hover:bg-primary/10 transition-colors text-sm font-semibold"
                    >
                      <Plus size={16} />
                      Ajouter un plan
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.subscriptionPlans.map((plan) => (
                      <div
                        key={plan.id}
                        className="bg-dark p-4 rounded-lg border border-light/10 relative"
                      >
                        {plan.popular && (
                          <div className="absolute -top-2 right-4 px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold flex items-center gap-1">
                            <Star size={12} fill="currentColor" />
                            Populaire
                          </div>
                        )}

                        <div className="space-y-3 mt-2">
                          <div>
                            <label className="block text-xs font-medium text-light/70 mb-1">
                              Nom du plan
                            </label>
                            <input
                              type="text"
                              value={plan.name}
                              onChange={(e) => updatePlan(service.id, plan.id, { name: e.target.value })}
                              className="w-full px-3 py-2 bg-dark-surface border border-light/10 rounded text-light text-sm
                                       focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-xs font-medium text-light/70 mb-1">
                                Prix/mois (€)
                              </label>
                              <input
                                type="number"
                                value={plan.monthlyPrice}
                                onChange={(e) => updatePlan(service.id, plan.id, { monthlyPrice: parseInt(e.target.value) || 0 })}
                                className="w-full px-3 py-2 bg-dark-surface border border-light/10 rounded text-light text-sm
                                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-light/70 mb-1">
                                Frais setup (€)
                              </label>
                              <input
                                type="number"
                                value={plan.setupFee}
                                onChange={(e) => updatePlan(service.id, plan.id, { setupFee: parseInt(e.target.value) || 0 })}
                                className="w-full px-3 py-2 bg-dark-surface border border-light/10 rounded text-light text-sm
                                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-xs font-medium text-light/70 mb-1">
                                Temps inclus
                              </label>
                              <input
                                type="text"
                                value={plan.timeIncluded}
                                onChange={(e) => updatePlan(service.id, plan.id, { timeIncluded: e.target.value })}
                                className="w-full px-3 py-2 bg-dark-surface border border-light/10 rounded text-light text-sm
                                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                placeholder="2h"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-light/70 mb-1">
                                SLA
                              </label>
                              <input
                                type="text"
                                value={plan.sla}
                                onChange={(e) => updatePlan(service.id, plan.id, { sla: e.target.value })}
                                className="w-full px-3 py-2 bg-dark-surface border border-light/10 rounded text-light text-sm
                                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                placeholder="48h"
                              />
                            </div>
                          </div>

                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={plan.popular}
                              onChange={(e) => updatePlan(service.id, plan.id, { popular: e.target.checked })}
                              className="w-4 h-4 text-primary bg-dark-surface border-light/20 rounded"
                            />
                            <span className="text-light text-sm">Marquer comme populaire</span>
                          </label>

                          <div>
                            <label className="block text-xs font-medium text-light/70 mb-2">
                              Fonctionnalités du plan
                            </label>
                            <div className="space-y-1">
                              {plan.features.map((feature, index) => (
                                <div key={index} className="flex gap-1">
                                  <input
                                    type="text"
                                    value={feature}
                                    onChange={(e) => updatePlanFeature(service.id, plan.id, index, e.target.value)}
                                    className="flex-1 px-2 py-1 bg-dark-surface border border-light/10 rounded text-light text-xs
                                             focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                    placeholder="Fonctionnalité"
                                  />
                                  <button
                                    onClick={() => deletePlanFeature(service.id, plan.id, index)}
                                    className="px-2 py-1 border border-red-500/20 text-red-400 rounded hover:bg-red-500/10"
                                  >
                                    <Trash2 size={12} />
                                  </button>
                                </div>
                              ))}
                              <button
                                onClick={() => addPlanFeature(service.id, plan.id)}
                                className="w-full px-2 py-1 border border-light/10 text-light rounded hover:bg-light/5 text-xs"
                              >
                                + Ajouter
                              </button>
                            </div>
                          </div>

                          <button
                            onClick={() => deletePlan(service.id, plan.id)}
                            className="w-full px-3 py-2 border border-red-500/20 text-red-400 rounded-lg 
                                     hover:bg-red-500/10 transition-colors text-sm font-semibold"
                          >
                            Supprimer le plan
                          </button>
                        </div>
                      </div>
                    ))}

                    {service.subscriptionPlans.length === 0 && (
                      <div className="col-span-full bg-dark p-8 rounded-lg border border-dashed border-light/20 text-center">
                        <p className="text-light/60 text-sm mb-2">
                          Aucun plan d&apos;abonnement configuré
                        </p>
                        <button
                          onClick={() => addPlan(service.id)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary 
                                   rounded-lg hover:bg-primary/30 transition-colors text-sm font-semibold"
                        >
                          <Plus size={16} />
                          Créer le premier plan
                        </button>
                      </div>
                    )}
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
                    <span className="text-light">Service actif</span>
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
