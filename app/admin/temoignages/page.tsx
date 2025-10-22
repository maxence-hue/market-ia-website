'use client'

import { useEffect, useState } from 'react'
import { Save, Plus, Trash2, Star, Loader2 } from 'lucide-react'
import ImageUploader from '@/components/admin/ImageUploader'

interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  quote: string
  result: string
  avatar: string
  avatarAlt: string
  rating: number
  active: boolean
}

export default function TemoignagesPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadTestimonials()
  }, [])

  const loadTestimonials = async () => {
    try {
      const res = await fetch('/api/temoignages')
      if (res.ok) {
        const data = await res.json()
        setTestimonials(data.testimonials)
      }
    } catch (error) {
      console.error('Error loading testimonials:', error)
    } finally {
      setLoading(false)
    }
  }

  const saveTestimonials = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/temoignages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testimonials })
      })

      if (res.ok) {
        alert('Témoignages sauvegardés avec succès !')
      }
    } catch (error) {
      alert('Erreur lors de la sauvegarde')
    } finally {
      setSaving(false)
    }
  }

  const addTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: '',
      company: '',
      role: '',
      quote: '',
      result: '',
      avatar: '',
      avatarAlt: '',
      rating: 5,
      active: true
    }
    setTestimonials([...testimonials, newTestimonial])
  }

  const updateTestimonial = (id: string, updates: Partial<Testimonial>) => {
    setTestimonials(testimonials.map(t => t.id === id ? { ...t, ...updates } : t))
  }

  const deleteTestimonial = (id: string) => {
    if (confirm('Supprimer ce témoignage ?')) {
      setTestimonials(testimonials.filter(t => t.id !== id))
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
            Témoignages Clients
          </h1>
          <p className="text-light/60">
            Gérez les avis et témoignages de vos clients
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={addTestimonial}
            className="flex items-center gap-2 px-6 py-3 border border-primary text-primary 
                     rounded-lg hover:bg-primary/10 transition-colors font-semibold"
          >
            <Plus size={20} />
            Ajouter un témoignage
          </button>
          <button
            onClick={saveTestimonials}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                     text-white rounded-lg transition-colors font-semibold disabled:opacity-50"
          >
            {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
            {saving ? 'Sauvegarde...' : 'Sauvegarder'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-dark-surface p-6 rounded-lg border border-light/10"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => updateTestimonial(testimonial.id, { rating: star })}
                      className="transition-colors"
                    >
                      <Star
                        size={20}
                        className={star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-light/20'}
                      />
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => deleteTestimonial(testimonial.id)}
                  className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              <ImageUploader
                value={testimonial.avatar}
                onChange={(url) => updateTestimonial(testimonial.id, { avatar: url })}
                folder="testimonials"
                label="Photo du client"
                alt={testimonial.avatarAlt}
                onAltChange={(alt) => updateTestimonial(testimonial.id, { avatarAlt: alt })}
              />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    value={testimonial.name}
                    onChange={(e) => updateTestimonial(testimonial.id, { name: e.target.value })}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    value={testimonial.company}
                    onChange={(e) => updateTestimonial(testimonial.id, { company: e.target.value })}
                    className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                             focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="Acme Inc"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-light mb-2">
                  Poste
                </label>
                <input
                  type="text"
                  value={testimonial.role}
                  onChange={(e) => updateTestimonial(testimonial.id, { role: e.target.value })}
                  className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                           focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="CEO"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-light mb-2">
                  Témoignage
                </label>
                <textarea
                  value={testimonial.quote}
                  onChange={(e) => updateTestimonial(testimonial.id, { quote: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                           focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                  placeholder="Ce que pense le client de vos services..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-light mb-2">
                  Résultat obtenu (optionnel)
                </label>
                <input
                  type="text"
                  value={testimonial.result}
                  onChange={(e) => updateTestimonial(testimonial.id, { result: e.target.value })}
                  className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                           focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="Ex: +150% de conversions"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={testimonial.active}
                  onChange={(e) => updateTestimonial(testimonial.id, { active: e.target.checked })}
                  className="w-4 h-4 text-primary bg-dark border-light/20 rounded"
                />
                <span className="text-light">Témoignage actif</span>
              </label>
            </div>
          </div>
        ))}

        {testimonials.length === 0 && (
          <div className="col-span-2 bg-dark-surface p-12 rounded-lg border border-light/10 text-center">
            <p className="text-light/60 mb-4">Aucun témoignage</p>
            <button
              onClick={addTestimonial}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                       text-white rounded-lg transition-colors font-semibold"
            >
              <Plus size={20} />
              Ajouter le premier témoignage
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
