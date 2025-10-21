import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icône (Lucide)',
      type: 'string',
      description: 'Nom de l\'icône Lucide (ex: Globe, Zap, Star)',
    }),
    defineField({
      name: 'startingPrice',
      title: 'Prix de départ',
      type: 'number',
    }),
    defineField({
      name: 'priceLabel',
      title: 'Label du prix',
      type: 'string',
      description: 'Ex: "Site vitrine complet", "Audit + 3 automatisations"',
    }),
    defineField({
      name: 'excerpt',
      title: 'Description courte',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'features',
      title: 'Fonctionnalités',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'content',
      title: 'Contenu détaillé',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      price: 'startingPrice',
    },
    prepare(selection) {
      const { title, price } = selection
      return {
        ...selection,
        subtitle: price ? `À partir de ${price}€` : 'Prix sur devis',
      }
    },
  },
})
