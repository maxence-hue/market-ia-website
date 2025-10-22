'use client'

import { useEffect, useState } from 'react'
import { Save, Plus, Trash2, Star, Loader2 } from 'lucide-react'

interface Abonnement {
  id: string
  name: string
  slug: string
  price: number
  activationFee: number
  popular: boolean
  order: number
  description: string
  features: string[]
  timeIncluded: string
  sla: string
  active: boolean
}

export default function AbonnementsPage() {
  const [abonnements, setAbonnements] = useState<Abonnement[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadAbonnements()
  }, [])

  const loadAbonnements = async () => {
    try {
      const res = await fetch('/api/abonnements')
      if (res.ok) {
        const data = await res.json()
        setAbonnements(data.abonnements)
      }
    } catch (error) {
      console.error('Error loading abonnements:', error)
    } finally {
      setLoading(false)
    }
  }

  const saveAbonnements = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/abonnements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ abonnements })
      })

      if (res.ok) {
        alert('Abonnements sauvegardés avec succès !')
      }
    } catch (error) {
      alert('Erreur lors de la sauvegarde')
    } finally {
      setSaving(false)
    }
  }

  const addAbonnement = () => {
    const newAbo: Abonnement = {
      id: Date.now().toString(),
      name: 'Nouvel abonnement',
      slug: 'nouvel-abonnement',
      price: 0,
      activationFee: 0,
      popular: false,
      order: abonnements.length,
      description: '',
      features: [''],
      timeIncluded: '2h',
      sla: '48h',
      active: true
    }
    setAbonnements([...abonnements, newAbo])
  }

  const updateAbonnement = (id: string, updates: Partial<Abonnement>) => {
    setAbonnements(abonnements.map(a => a.id === id ? { ...a, ...updates } : a))
  }

  const deleteAbonnement = (id: string) => {
    if (confirm('Supprimer cet abonnement ?')) {
      setAbonnements(abonnements.filter(a => a.id !== id))
    }
  }

  const addFeature = (id: string) => {
    const abo = abonnements.find(a => a.id === id)
    if (abo) {
      updateAbonnement(id, { features: [...abo.features, ''] })
    }
  }

  const updateFeature = (id: string, index: number, value: string) => {
    const abo = abonnements.find(a => a.id === id)
    if (abo) {
      const newFeatures = [...abo.features]
      newFeatures[index] = value
      updateAbonnement(id, { features: newFeatures })
    }
  }

  const deleteFeature = (id: string, index: number) => {
    const abo = abonnements.find(a => a.id === id)
    if (abo) {
      updateAbonnement(id, { features: abo.features.filter((_, i) => i !== index) })
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
            Abonnements
          </h1>
          <p className="text-light/60">
            Gérez vos formules d&apos;abonnement
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={addAbonnement}
            className="flex items-center gap-2 px-6 py-3 border border-primary text-primary 
                     rounded-lg hover:bg-primary/10 transition-colors font-semibold"
          >
            <Plus size={20} />
            Ajouter un abonnement
          </button>
          <button
            onClick={saveAbonnements}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                     text-white rounded-lg transition-colors font-semibold disabled:opacity-50"
          >
            {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
            {saving ? 'Sauvegarde...' : 'Sauvegarder'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {abonnements.map((abo) => (
          <div
            key={abo.id}
            className={`bg-dark-surface p-6 rounded-lg border ${
              abo.popular ? 'border-primary' : 'border-light/10'
            } relative`}
          >
            {abo.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                POPULAIRE
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <input
                  type="text"
                  value={abo.name}
                  onChange={(e) => updateAbonnement(abo.id, { name: e.target.value })}
                  className="text-xl font-bold bg-transparent border-b border-light/10 text-light 
                           focus:border-primary outline-none pb-1"
                />
                <button
                  onClick={() => deleteAbonnement(abo.id)}
                  className="p-1 text-red-400 hover:bg-red-500/10 rounded"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <input
                    type="number"
                    value={abo.price}
                    onChange={(e) => updateAbonnement(abo.id, { price: parseInt(e.target.value) || 0 })}
                    className="text-3xl font-bold bg-dark border border-light/10 rounded px-2 py-1 text-light 
                             focus:border-primary outline-none w-32"
                  />
                  <span className="text-light/60">€/mois</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-light/60">Frais d&apos;activation:</span>
                  <input
                    type="number"
                    value={abo.activationFee}
                    onChange={(e) => updateAbonnement(abo.id, { activationFee: parseInt(e.target.value) || 0 })}
                    className="bg-dark border border-light/10 rounded px-2 py-1 text-light 
                             focus:border-primary outline-none w-20"
                  />
                  <span className="text-light/60">€</span>
                </div>
              </div>

              <textarea
                value={abo.description}
                onChange={(e) => updateAbonnement(abo.id, { description: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 bg-dark border border-light/10 rounded-lg text-light text-sm
                         focus:border-primary outline-none resize-none"
                placeholder="Description courte"
              />

              <div className="space-y-2">
                <label className="text-sm font-medium text-light">Fonctionnalités</label>
                {abo.features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => updateFeature(abo.id, index, e.target.value)}
                      className="flex-1 px-3 py-1 bg-dark border border-light/10 rounded text-light text-sm
                               focus:border-primary outline-none"
                      placeholder="Fonctionnalité"
                    />
                    <button
                      onClick={() => deleteFeature(abo.id, index)}
                      className="p-1 text-red-400 hover:bg-red-500/10 rounded"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addFeature(abo.id)}
                  className="text-xs px-3 py-1 border border-light/10 text-light rounded hover:bg-light/5"
                >
                  + Ajouter
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-light/60">Temps inclus</label>
                  <input
                    type="text"
                    value={abo.timeIncluded}
                    onChange={(e) => updateAbonnement(abo.id, { timeIncluded: e.target.value })}
                    className="w-full px-3 py-1 bg-dark border border-light/10 rounded text-light text-sm
                             focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-light/60">SLA</label>
                  <input
                    type="text"
                    value={abo.sla}
                    onChange={(e) => updateAbonnement(abo.id, { sla: e.target.value })}
                    className="w-full px-3 py-1 bg-dark border border-light/10 rounded text-light text-sm
                             focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-2 border-t border-light/10">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={abo.popular}
                    onChange={(e) => updateAbonnement(abo.id, { popular: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <Star size={14} className="text-primary" />
                  <span className="text-xs text-light">Populaire</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={abo.active}
                    onChange={(e) => updateAbonnement(abo.id, { active: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-xs text-light">Actif</span>
                </label>
              </div>
            </div>
          </div>
        ))}

        {abonnements.length === 0 && (
          <div className="col-span-3 bg-dark-surface p-12 rounded-lg border border-light/10 text-center">
            <p className="text-light/60 mb-4">Aucun abonnement configuré</p>
            <button
              onClick={addAbonnement}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                       text-white rounded-lg transition-colors font-semibold"
            >
              <Plus size={20} />
              Créer le premier abonnement
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
