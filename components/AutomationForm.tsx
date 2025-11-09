'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send } from 'lucide-react'

const automationSchema = z.object({
  companyName: z.string().min(2, 'Le nom de l\'entreprise doit contenir au moins 2 caractères'),
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide').optional(),
  sector: z.string().min(1, 'Veuillez sélectionner un secteur'),
  processToAutomate: z.string().min(20, 'Décrivez le processus à automatiser (min 20 caractères)'),
  currentTools: z.array(z.string()).min(1, 'Sélectionnez au moins un outil'),
  mainGoal: z.string().min(10, 'Décrivez votre objectif principal'),
  startDate: z.string().min(1, 'Sélectionnez une date de démarrage'),
  rgpd: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
})

type AutomationFormData = z.infer<typeof automationSchema>

export default function AutomationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AutomationFormData>({
    resolver: zodResolver(automationSchema),
  })

  const onSubmit = async (data: AutomationFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/automation-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()
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
            Téléphone
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
          <option value="health">Santé / Bien-être</option>
          <option value="real-estate">Immobilier</option>
          <option value="hospitality">Hôtellerie / Restauration</option>
          <option value="construction">BTP / Construction</option>
          <option value="education">Formation / Éducation</option>
          <option value="tech">Tech / SaaS</option>
          <option value="other">Autre</option>
        </select>
        {errors.sector && <p className="mt-1 text-sm text-red-400">{errors.sector.message}</p>}
      </div>

      <div>
        <label htmlFor="processToAutomate" className="block text-light mb-2 text-sm font-medium">
          Quel processus souhaitez-vous automatiser ? *
        </label>
        <textarea
          {...register('processToAutomate')}
          id="processToAutomate"
          rows={4}
          placeholder="Ex: Gestion des leads depuis Facebook Ads vers mon CRM Notion, avec envoi d'email automatique..."
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light resize-none"
        />
        {errors.processToAutomate && (
          <p className="mt-1 text-sm text-red-400">{errors.processToAutomate.message}</p>
        )}
      </div>

      <div>
        <label className="block text-light mb-2 text-sm font-medium">
          Outils actuellement utilisés * (sélectionnez tous ceux qui s&apos;appliquent)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Google Workspace',
            'Notion',
            'Airtable',
            'Shopify',
            'WooCommerce',
            'Calendly',
            'Stripe',
            'PayPal',
            'Mailchimp',
            'Sendinblue',
            'Slack',
            'WhatsApp Business',
            'Facebook Ads',
            'Google Ads',
            'CRM (autre)',
            'Aucun outil spécifique',
          ].map((tool) => (
            <label key={tool} className="flex items-center gap-2 text-light/80 cursor-pointer">
              <input
                {...register('currentTools')}
                type="checkbox"
                value={tool}
                className="w-4 h-4 rounded border-white/10 bg-dark-surface text-primary focus:ring-primary"
              />
              <span className="text-sm">{tool}</span>
            </label>
          ))}
        </div>
        {errors.currentTools && (
          <p className="mt-1 text-sm text-red-400">{errors.currentTools.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="mainGoal" className="block text-light mb-2 text-sm font-medium">
          Objectif principal de cette automatisation *
        </label>
        <textarea
          {...register('mainGoal')}
          id="mainGoal"
          rows={3}
          placeholder="Ex: Gagner 2h par jour, réduire les erreurs de saisie, améliorer le suivi client..."
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light resize-none"
        />
        {errors.mainGoal && (
          <p className="mt-1 text-sm text-red-400">{errors.mainGoal.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="startDate" className="block text-light mb-2 text-sm font-medium">
          Quand souhaitez-vous démarrer ? *
        </label>
        <select
          {...register('startDate')}
          id="startDate"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        >
          <option value="">Sélectionnez une période</option>
          <option value="asap">Dès que possible</option>
          <option value="1-month">Dans 1 mois</option>
          <option value="2-3-months">Dans 2-3 mois</option>
          <option value="later">Plus tard (exploration)</option>
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
          J&apos;accepte que mes données soient utilisées pour me recontacter concernant mon projet d&apos;automatisation. *
        </label>
      </div>
      {errors.rgpd && <p className="text-sm text-red-400">{errors.rgpd.message}</p>}

      {submitSuccess && (
        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
          Merci ! Votre demande de devis a été envoyée avec succès. Nous vous répondrons sous 24h.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Recevoir mon devis gratuit'}
        <Send className="w-5 h-5" />
      </button>
    </form>
  )
}
