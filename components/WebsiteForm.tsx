'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send } from 'lucide-react'

const websiteSchema = z.object({
  companyName: z.string().min(2, 'Le nom de l\'entreprise doit contenir au moins 2 caractères'),
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide').optional(),
  sector: z.string().min(1, 'Veuillez sélectionner un secteur'),
  websiteType: z.string().min(1, 'Sélectionnez un type de site'),
  currentWebsite: z.string().optional(),
  mainGoals: z.array(z.string()).min(1, 'Sélectionnez au moins un objectif'),
  desiredFeatures: z.array(z.string()).optional(),
  plan: z.string().min(1, 'Sélectionnez une formule'),
  startDate: z.string().min(1, 'Sélectionnez une date de démarrage'),
  additionalInfo: z.string().optional(),
  rgpd: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
})

type WebsiteFormData = z.infer<typeof websiteSchema>

export default function WebsiteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WebsiteFormData>({
    resolver: zodResolver(websiteSchema),
  })

  const onSubmit = async (data: WebsiteFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/website-quote', {
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
        <label htmlFor="websiteType" className="block text-light mb-2 text-sm font-medium">
          Type de site souhaité *
        </label>
        <select
          {...register('websiteType')}
          id="websiteType"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        >
          <option value="">Sélectionnez un type</option>
          <option value="vitrine">Site vitrine (présentation)</option>
          <option value="business">Site business (génération leads)</option>
          <option value="ecommerce">E-commerce (boutique en ligne)</option>
          <option value="portfolio">Portfolio / Book</option>
          <option value="blog">Blog / Magazine</option>
          <option value="landing">Landing page</option>
        </select>
        {errors.websiteType && (
          <p className="mt-1 text-sm text-red-400">{errors.websiteType.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="currentWebsite" className="block text-light mb-2 text-sm font-medium">
          Site web actuel (si existant)
        </label>
        <input
          {...register('currentWebsite')}
          type="url"
          id="currentWebsite"
          placeholder="https://votre-site.fr"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        />
      </div>

      <div>
        <label className="block text-light mb-2 text-sm font-medium">
          Objectifs principaux * (sélectionnez tous ceux qui s&apos;appliquent)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Être visible sur Google',
            'Générer des contacts / leads',
            'Vendre en ligne',
            'Présenter mes services',
            'Crédibiliser mon entreprise',
            'Automatiser la prise de RDV',
            'Publier du contenu régulièrement',
            'Fidéliser mes clients',
          ].map((goal) => (
            <label key={goal} className="flex items-center gap-2 text-light/80 cursor-pointer">
              <input
                {...register('mainGoals')}
                type="checkbox"
                value={goal}
                className="w-4 h-4 rounded border-white/10 bg-dark-surface text-primary focus:ring-primary"
              />
              <span className="text-sm">{goal}</span>
            </label>
          ))}
        </div>
        {errors.mainGoals && (
          <p className="mt-1 text-sm text-red-400">{errors.mainGoals.message}</p>
        )}
      </div>

      <div>
        <label className="block text-light mb-2 text-sm font-medium">
          Fonctionnalités souhaitées (optionnel)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Blog / Actualités',
            'Formulaire de contact',
            'Prise de RDV en ligne',
            'Chat en direct',
            'Galerie photos / Portfolio',
            'Témoignages clients',
            'Carte interactive',
            'Multilingue',
          ].map((feature) => (
            <label key={feature} className="flex items-center gap-2 text-light/80 cursor-pointer">
              <input
                {...register('desiredFeatures')}
                type="checkbox"
                value={feature}
                className="w-4 h-4 rounded border-white/10 bg-dark-surface text-primary focus:ring-primary"
              />
              <span className="text-sm">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="plan" className="block text-light mb-2 text-sm font-medium">
          Formule souhaitée *
        </label>
        <select
          {...register('plan')}
          id="plan"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        >
          <option value="">Sélectionnez une formule</option>
          <option value="essentiel">Essentiel - 99€/mois</option>
          <option value="business">Business - 179€/mois</option>
          <option value="ecommerce">E-Commerce - 289€/mois</option>
          <option value="growth">Growth+ - 499€/mois</option>
          <option value="not-sure">Je ne sais pas encore</option>
        </select>
        {errors.plan && <p className="mt-1 text-sm text-red-400">{errors.plan.message}</p>}
      </div>

      <div>
        <label htmlFor="startDate" className="block text-light mb-2 text-sm font-medium">
          Quand souhaitez-vous lancer votre site ? *
        </label>
        <select
          {...register('startDate')}
          id="startDate"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        >
          <option value="">Sélectionnez une période</option>
          <option value="asap">Dès que possible (10 jours)</option>
          <option value="1-month">Dans 1 mois</option>
          <option value="2-3-months">Dans 2-3 mois</option>
          <option value="flexible">Flexible</option>
        </select>
        {errors.startDate && (
          <p className="mt-1 text-sm text-red-400">{errors.startDate.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="additionalInfo" className="block text-light mb-2 text-sm font-medium">
          Informations complémentaires
        </label>
        <textarea
          {...register('additionalInfo')}
          id="additionalInfo"
          rows={3}
          placeholder="Précisez vos besoins, inspirations, contraintes..."
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light resize-none"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          {...register('rgpd')}
          type="checkbox"
          id="rgpd"
          className="mt-1 w-4 h-4 rounded border-white/10 bg-dark-surface"
        />
        <label htmlFor="rgpd" className="text-sm text-light/70">
          J&apos;accepte que mes données soient utilisées pour me recontacter concernant mon projet de site internet. *
        </label>
      </div>
      {errors.rgpd && <p className="text-sm text-red-400">{errors.rgpd.message}</p>}

      {submitSuccess && (
        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
          Merci ! Votre demande a été envoyée avec succès. Nous vous répondrons sous 24h pour discuter de votre projet.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Recevoir mon devis site internet'}
        <Send className="w-5 h-5" />
      </button>
    </form>
  )
}
