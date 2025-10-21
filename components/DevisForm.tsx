'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send } from 'lucide-react'

const devisSchema = z.object({
  companyName: z.string().min(2, 'Le nom de l\'entreprise doit contenir au moins 2 caractères'),
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  sector: z.string().min(1, 'Veuillez sélectionner un secteur'),
  processToAutomate: z.string().min(20, 'Veuillez décrire le processus à automatiser (min. 20 caractères)'),
  currentTools: z.array(z.string()).min(1, 'Veuillez sélectionner au moins un outil'),
  mainGoal: z.string().min(10, 'Veuillez décrire votre objectif principal'),
  startDate: z.string().min(1, 'Veuillez sélectionner une date'),
  rgpd: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
})

type DevisFormData = z.infer<typeof devisSchema>

export default function DevisForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [selectedTools, setSelectedTools] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<DevisFormData>({
    resolver: zodResolver(devisSchema),
  })

  const tools = [
    'Google Workspace',
    'Microsoft 365',
    'Notion',
    'Airtable',
    'Zapier',
    'Make',
    'HubSpot',
    'Salesforce',
    'Monday.com',
    'Slack',
    'Autre',
  ]

  const handleToolToggle = (tool: string) => {
    const newTools = selectedTools.includes(tool)
      ? selectedTools.filter((t) => t !== tool)
      : [...selectedTools, tool]
    setSelectedTools(newTools)
    setValue('currentTools', newTools)
  }

  const onSubmit = async (data: DevisFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/devis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()
        setSelectedTools([])
        setTimeout(() => setSubmitSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="companyName" className="block text-light mb-2 text-sm font-medium">
          Nom de l&apos;entreprise *
        </label>
        <input
          {...register('companyName')}
          type="text"
          id="companyName"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        />
        {errors.companyName && (
          <p className="mt-1 text-sm text-red-400">{errors.companyName.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-light mb-2 text-sm font-medium">
            Prénom *
          </label>
          <input
            {...register('firstName')}
            type="text"
            id="firstName"
            className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-light mb-2 text-sm font-medium">
            Nom *
          </label>
          <input
            {...register('lastName')}
            type="text"
            id="lastName"
            className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-light mb-2 text-sm font-medium">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-light mb-2 text-sm font-medium">
            Téléphone *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="sector" className="block text-light mb-2 text-sm font-medium">
          Secteur d&apos;activité *
        </label>
        <select
          {...register('sector')}
          id="sector"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        >
          <option value="">Sélectionnez un secteur</option>
          <option value="retail">Commerce / Retail</option>
          <option value="services">Services B2B</option>
          <option value="healthcare">Santé / Bien-être</option>
          <option value="realestate">Immobilier</option>
          <option value="education">Éducation / Formation</option>
          <option value="tech">Tech / SaaS</option>
          <option value="hospitality">Hôtellerie / Restauration</option>
          <option value="other">Autre</option>
        </select>
        {errors.sector && <p className="mt-1 text-sm text-red-400">{errors.sector.message}</p>}
      </div>

      <div>
        <label htmlFor="processToAutomate" className="block text-light mb-2 text-sm font-medium">
          Processus à automatiser *
        </label>
        <textarea
          {...register('processToAutomate')}
          id="processToAutomate"
          rows={4}
          placeholder="Décrivez le processus actuel et ce que vous aimeriez automatiser..."
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light resize-none"
        />
        {errors.processToAutomate && (
          <p className="mt-1 text-sm text-red-400">{errors.processToAutomate.message}</p>
        )}
      </div>

      <div>
        <label className="block text-light mb-3 text-sm font-medium">
          Outils actuellement utilisés *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {tools.map((tool) => (
            <button
              key={tool}
              type="button"
              onClick={() => handleToolToggle(tool)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                selectedTools.includes(tool)
                  ? 'bg-primary border-primary text-white'
                  : 'bg-dark-surface border-white/10 text-light hover:border-primary/50'
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
        {errors.currentTools && (
          <p className="mt-2 text-sm text-red-400">{errors.currentTools.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="mainGoal" className="block text-light mb-2 text-sm font-medium">
          Objectif principal *
        </label>
        <textarea
          {...register('mainGoal')}
          id="mainGoal"
          rows={3}
          placeholder="Gagner du temps, réduire les erreurs, améliorer l'expérience client..."
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light resize-none"
        />
        {errors.mainGoal && (
          <p className="mt-1 text-sm text-red-400">{errors.mainGoal.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="startDate" className="block text-light mb-2 text-sm font-medium">
          Date souhaitée de démarrage *
        </label>
        <select
          {...register('startDate')}
          id="startDate"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        >
          <option value="">Sélectionnez une période</option>
          <option value="asap">Dès que possible</option>
          <option value="1month">Dans 1 mois</option>
          <option value="3months">Dans 3 mois</option>
          <option value="6months">Dans 6 mois</option>
          <option value="later">Plus tard</option>
        </select>
        {errors.startDate && (
          <p className="mt-1 text-sm text-red-400">{errors.startDate.message}</p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          {...register('rgpd')}
          type="checkbox"
          id="rgpd"
          className="mt-1 w-4 h-4 rounded border-white/10 bg-dark-surface"
        />
        <label htmlFor="rgpd" className="text-sm text-light/70">
          J&apos;accepte que mes données soient utilisées pour me recontacter. *
        </label>
      </div>
      {errors.rgpd && <p className="text-sm text-red-400">{errors.rgpd.message}</p>}

      {submitSuccess && (
        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
          Merci ! Votre demande de devis a été envoyée. Nous vous contacterons sous 24h pour un
          diagnostic gratuit.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Demander un devis gratuit'}
        <Send className="w-5 h-5" />
      </button>
    </form>
  )
}
