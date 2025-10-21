import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Témoignages',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Entreprise',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Poste',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Témoignage',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'result',
      title: 'Résultat',
      type: 'string',
      description: 'Ex: "+250% de conversions", "ROI de 400%"',
    }),
    defineField({
      name: 'avatar',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'rating',
      title: 'Note',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'avatar',
    },
  },
})
