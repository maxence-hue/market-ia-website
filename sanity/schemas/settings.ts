import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Paramètres du site',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nom du site',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Slogan',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'social',
      title: 'Réseaux sociaux',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'heroTitle',
      title: 'Titre Hero',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre Hero',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Paramètres du site',
      }
    },
  },
})
