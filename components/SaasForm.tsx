'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send } from 'lucide-react'

const saasSchema = z.object({
  companyName: z.string().min(2, 'Le nom de l\'entreprise doit contenir au moins 2 caractères'),
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide').optional(),
  sector: z.string().min(1, 'Veuillez sélectionner un secteur'),
  projectDescription: z.string().min(30, 'Décrivez votre projet SaaS (min 30 caractères)'),
  targetUsers: z.string().min(1, 'Sélectionnez le type d\'utilisateurs'),
  keyFeatures: z.array(z.string()).min(1, 'Sélectionnez au moins une fonctionnalité'),
  budget: z.string().min(1, 'Sélectionnez une fourchette budgétaire'),
  timeline: z.string().min(1, 'Sélectionnez un délai'),
  rgpd: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
})

type SaasFormData = z.infer<typeof saasSchema>

export default function SaasForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SaasFormData>({
    resolver: zodResolver(saasSchema),
  })

  const onSubmit = async (data: SaasFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/saas-quote', {
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
        <label htmlFor="projectDescription" className="block text-light mb-2 text-sm font-medium">
          Décrivez votre projet SaaS *
        </label>
        <textarea
          {...register('projectDescription')}
          id="projectDescription"
          rows={5}
          placeholder="Ex: Plateforme de gestion de chantiers pour artisans avec suivi temps réel, devis automatiques, facturation..."
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light resize-none"
        />
        {errors.projectDescription && (
          <p className="mt-1 text-sm text-red-400">{errors.projectDescription.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="targetUsers" className="block text-light mb-2 text-sm font-medium">
          Qui utilisera ce SaaS ? *
        </label>
        <select
          {...register('targetUsers')}
          id="targetUsers"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        >
          <option value="">Sélectionnez</option>
          <option value="internal">Équipe interne uniquement</option>
          <option value="clients">Mes clients</option>
          <option value="both">Équipe + Clients</option>
          <option value="public">Grand public (B2C)</option>
        </select>
        {errors.targetUsers && (
          <p className="mt-1 text-sm text-red-400">{errors.targetUsers.message}</p>
        )}
      </div>

      <div>
        <label className="block text-light mb-2 text-sm font-medium">
          Fonctionnalités clés souhaitées * (sélectionnez toutes celles qui s&apos;appliquent)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Gestion utilisateurs / Rôles',
            'Tableau de bord analytics',
            'Facturation / Paiements',
            'CRM intégré',
            'Gestion de projets',
            'Chat / Messagerie',
            'Notifications (email, SMS)',
            'API pour intégrations',
            'Application mobile',
            'Rapports automatiques',
            'Gestion documentaire',
            'Calendrier / Planning',
          ].map((feature) => (
            <label key={feature} className="flex items-center gap-2 text-light/80 cursor-pointer">
              <input
                {...register('keyFeatures')}
                type="checkbox"
                value={feature}
                className="w-4 h-4 rounded border-white/10 bg-dark-surface text-primary focus:ring-primary"
              />
              <span className="text-sm">{feature}</span>
            </label>
          ))}
        </div>
        {errors.keyFeatures && (
          <p className="mt-1 text-sm text-red-400">{errors.keyFeatures.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="budget" className="block text-light mb-2 text-sm font-medium">
          Budget estimé pour le développement *
        </label>
        <select
          {...register('budget')}
          id="budget"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        >
          <option value="">Sélectionnez une fourchette</option>
          <option value="5k-10k">5 000 € - 10 000 €</option>
          <option value="10k-20k">10 000 € - 20 000 €</option>
          <option value="20k-50k">20 000 € - 50 000 €</option>
          <option value="50k+">Plus de 50 000 €</option>
          <option value="not-sure">Je ne sais pas encore</option>
        </select>
        {errors.budget && <p className="mt-1 text-sm text-red-400">{errors.budget.message}</p>}
      </div>

      <div>
        <label htmlFor="timeline" className="block text-light mb-2 text-sm font-medium">
          Délai souhaité pour la mise en production *
        </label>
        <select
          {...register('timeline')}
          id="timeline"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        >
          <option value="">Sélectionnez un délai</option>
          <option value="1-3-months">1 à 3 mois</option>
          <option value="3-6-months">3 à 6 mois</option>
          <option value="6-12-months">6 à 12 mois</option>
          <option value="flexible">Flexible</option>
        </select>
        {errors.timeline && <p className="mt-1 text-sm text-red-400">{errors.timeline.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          {...register('rgpd')}
          type="checkbox"
          id="rgpd"
          className="mt-1 w-4 h-4 rounded border-white/10 bg-dark-surface"
        />
        <label htmlFor="rgpd" className="text-sm text-light/70">
          J&apos;accepte que mes données soient utilisées pour me recontacter concernant mon projet SaaS. *
        </label>
      </div>
      {errors.rgpd && <p className="text-sm text-red-400">{errors.rgpd.message}</p>}

      {submitSuccess && (
        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
          Merci ! Votre demande de devis SaaS a été envoyée avec succès. Nous vous répondrons sous 24h.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Recevoir mon devis SaaS personnalisé'}
        <Send className="w-5 h-5" />
      </button>
    </form>
  )
}
