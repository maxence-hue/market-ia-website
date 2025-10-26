import { defineType, defineField } from 'sanity'

/**
 * Schéma pour les composants React personnalisés
 * Permet d'insérer des composants interactifs dans les articles
 */
export default defineType({
  name: 'customComponent',
  title: 'Composant Personnalisé',
  type: 'object',
  icon: () => '⚛️',
  
  fields: [
    defineField({
      name: 'componentType',
      title: 'Type de Composant',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: '❓ FAQ', value: 'faq' },
          { title: '📋 Résumé Article', value: 'articleSummary' },
          { title: '📚 Programme Formation', value: 'programmeFormation' },
          { title: '🎯 CTA Banner', value: 'ctaBanner' },
          { title: '🚀 CTA Hero', value: 'ctaHero' },
          { title: '💳 CTA Card', value: 'ctaCard' },
          { title: '⭐ Témoignages', value: 'testimonials' },
          { title: '💰 Grille Tarifs', value: 'pricingGrid' },
          { title: '🔥 Avantages', value: 'benefits' },
          { title: '📊 Statistiques', value: 'stats' },
        ],
      },
      description: 'Choisissez le composant React à afficher',
    }),

    defineField({
      name: 'customData',
      title: 'Données Personnalisées (JSON)',
      type: 'text',
      rows: 5,
      description: 'Données optionnelles en JSON pour personnaliser le composant. Ex: {"title": "Mon titre", "buttonText": "Cliquez ici"}',
    }),
  ],

  preview: {
    select: {
      componentType: 'componentType',
    },
    prepare({ componentType }) {
      const labels: Record<string, string> = {
        faq: '❓ FAQ',
        articleSummary: '📋 Résumé',
        programmeFormation: '📚 Programme',
        ctaBanner: '🎯 CTA Banner',
        ctaHero: '🚀 CTA Hero',
        ctaCard: '💳 CTA Card',
        testimonials: '⭐ Témoignages',
        pricingGrid: '💰 Tarifs',
        benefits: '🔥 Avantages',
        stats: '📊 Stats',
      }

      return {
        title: labels[componentType] || `Composant: ${componentType}`,
        subtitle: 'Composant React interactif',
      }
    },
  },
})
