'use client'

import { useEffect, useState } from 'react'
import { Save, Plus, Trash2, Loader2 } from 'lucide-react'
import ImageUploader from '@/components/admin/ImageUploader'

interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  photo: string
  photoAlt: string
  order: number
  linkedin: string
  active: boolean
}

export default function EquipePage() {
  const [team, setTeam] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadTeam()
  }, [])

  const loadTeam = async () => {
    try {
      const res = await fetch('/api/equipe')
      if (res.ok) {
        const data = await res.json()
        setTeam(data.team)
      }
    } catch (error) {
      console.error('Error loading team:', error)
    } finally {
      setLoading(false)
    }
  }

  const saveTeam = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/equipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ team })
      })

      if (res.ok) {
        alert('Équipe sauvegardée avec succès !')
      }
    } catch (error) {
      alert('Erreur lors de la sauvegarde')
    } finally {
      setSaving(false)
    }
  }

  const addMember = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name: '',
      role: '',
      description: '',
      photo: '',
      photoAlt: '',
      order: team.length,
      linkedin: '',
      active: true
    }
    setTeam([...team, newMember])
  }

  const updateMember = (id: string, updates: Partial<TeamMember>) => {
    setTeam(team.map(m => m.id === id ? { ...m, ...updates } : m))
  }

  const deleteMember = (id: string) => {
    if (confirm('Supprimer ce membre ?')) {
      setTeam(team.filter(m => m.id !== id))
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
            Équipe
          </h1>
          <p className="text-light/60">
            Gérez les membres de votre équipe
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={addMember}
            className="flex items-center gap-2 px-6 py-3 border border-primary text-primary 
                     rounded-lg hover:bg-primary/10 transition-colors font-semibold"
          >
            <Plus size={20} />
            Ajouter un membre
          </button>
          <button
            onClick={saveTeam}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                     text-white rounded-lg transition-colors font-semibold disabled:opacity-50"
          >
            {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
            {saving ? 'Sauvegarde...' : 'Sauvegarder'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-dark-surface p-6 rounded-lg border border-light/10"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-light">Membre #{member.order + 1}</h3>
                <button
                  onClick={() => deleteMember(member.id)}
                  className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              <ImageUploader
                value={member.photo}
                onChange={(url) => updateMember(member.id, { photo: url })}
                folder="team"
                label="Photo"
                alt={member.photoAlt}
                onAltChange={(alt) => updateMember(member.id, { photoAlt: alt })}
              />

              <div>
                <label className="block text-sm font-medium text-light mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => updateMember(member.id, { name: e.target.value })}
                  className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                           focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-light mb-2">
                  Poste
                </label>
                <input
                  type="text"
                  value={member.role}
                  onChange={(e) => updateMember(member.id, { role: e.target.value })}
                  className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                           focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="CEO & Founder"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-light mb-2">
                  Description
                </label>
                <textarea
                  value={member.description}
                  onChange={(e) => updateMember(member.id, { description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                           focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                  placeholder="Courte biographie..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-light mb-2">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  value={member.linkedin}
                  onChange={(e) => updateMember(member.id, { linkedin: e.target.value })}
                  className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                           focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={member.active}
                  onChange={(e) => updateMember(member.id, { active: e.target.checked })}
                  className="w-4 h-4 text-primary bg-dark border-light/20 rounded"
                />
                <span className="text-light">Membre actif</span>
              </label>
            </div>
          </div>
        ))}

        {team.length === 0 && (
          <div className="col-span-2 bg-dark-surface p-12 rounded-lg border border-light/10 text-center">
            <p className="text-light/60 mb-4">Aucun membre dans l&apos;équipe</p>
            <button
              onClick={addMember}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                       text-white rounded-lg transition-colors font-semibold"
            >
              <Plus size={20} />
              Ajouter le premier membre
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
