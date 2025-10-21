import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subscription',
  title: 'Abonnements',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Prix mensuel (€)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'activationFee',
      title: 'Frais d\'activation (€)',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'popular',
      title: 'Populaire',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'features',
      title: 'Fonctionnalités',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Texte',
              type: 'string',
            },
            {
              name: 'included',
              title: 'Inclus',
              type: 'boolean',
              initialValue: true,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'timeIncluded',
      title: 'Temps inclus',
      type: 'string',
      description: 'Ex: "10h/mois", "Illimité"',
    }),
    defineField({
      name: 'sla',
      title: 'SLA',
      type: 'string',
      description: 'Ex: "48h", "24h", "4h"',
    }),
    defineField({
      name: 'content',
      title: 'Contenu détaillé',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      price: 'price',
      popular: 'popular',
    },
    prepare(selection) {
      const { title, price, popular } = selection
      return {
        title,
        subtitle: `${price}€/mois${popular ? ' ⭐ Populaire' : ''}`,
      }
    },
  },
})
