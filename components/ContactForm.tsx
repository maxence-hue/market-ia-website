'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send } from 'lucide-react'

const contactSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide').optional(),
  service: z.string().min(1, 'Veuillez sélectionner un service'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  rgpd: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
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

      <div>
        <label htmlFor="service" className="block text-light mb-2 text-sm font-medium">
          Service souhaité *
        </label>
        <select
          {...register('service')}
          id="service"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        >
          <option value="">Sélectionnez un service</option>
          <option value="essentiel">Abonnement Essentiel</option>
          <option value="business">Abonnement Business</option>
          <option value="ecommerce">Abonnement E-commerce</option>
          <option value="growth">Abonnement Growth+</option>
          <option value="landing">Landing Page</option>
          <option value="automatisation">Automatisations IA</option>
          <option value="saas">SaaS Personnalisé</option>
          <option value="formation">Formation</option>
          <option value="autre">Autre</option>
        </select>
        {errors.service && <p className="mt-1 text-sm text-red-400">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="budget" className="block text-light mb-2 text-sm font-medium">
          Budget estimé (optionnel)
        </label>
        <select
          {...register('budget')}
          id="budget"
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light"
        >
          <option value="">Non défini</option>
          <option value="<500">Moins de 500€</option>
          <option value="500-1000">500€ - 1 000€</option>
          <option value="1000-2500">1 000€ - 2 500€</option>
          <option value="2500-5000">2 500€ - 5 000€</option>
          <option value=">5000">Plus de 5 000€</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-light mb-2 text-sm font-medium">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className="w-full px-4 py-3 bg-dark-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none text-light resize-none"
        />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
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
          Merci ! Votre message a été envoyé avec succès. Nous vous répondrons rapidement.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        <Send className="w-5 h-5" />
      </button>
    </form>
  )
}
