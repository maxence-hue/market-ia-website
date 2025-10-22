import { defineField, defineType } from 'sanity'

/**
 * Schéma pour la galerie d'images
 * Permet de gérer une collection d'images avec descriptions
 */
export default defineType({
  name: 'gallery',
  title: 'Galerie',
  type: 'document',
  icon: () => '🖼️',
  
  fields: [
    // Titre de la galerie ou de l'image
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Titre de l\'image ou du projet',
    }),

    // Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Description de l\'image ou du projet',
    }),

    // Images (peut en contenir plusieurs)
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif',
              description: 'Description de l\'image pour le SEO',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Légende',
              description: 'Légende affichée sous l\'image',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    // Ordre d'affichage
    defineField({
      name: 'ordre',
      title: 'Ordre',
      type: 'number',
      description: 'Ordre d\'affichage (1, 2, 3...)',
      initialValue: 1,
    }),

    // Visibilité
    defineField({
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
      initialValue: true,
      description: 'Décochez pour masquer cette galerie',
    }),

    // Catégorie (optionnel)
    defineField({
      name: 'categorie',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Projets', value: 'projets' },
          { title: 'Équipe', value: 'equipe' },
          { title: 'Événements', value: 'evenements' },
          { title: 'Réalisations', value: 'realisations' },
        ],
      },
    }),
  ],

  // Prévisualisation
  preview: {
    select: {
      title: 'titre',
      media: 'images.0',
      visible: 'visible',
    },
    prepare(selection) {
      const { title, media, visible } = selection
      return {
        title: title,
        subtitle: visible ? 'Visible' : 'Masqué',
        media: media,
      }
    },
  },

  // Ordre par défaut
  orderings: [
    {
      title: 'Ordre croissant',
      name: 'ordreAsc',
      by: [{ field: 'ordre', direction: 'asc' }],
    },
    {
      title: 'Titre A-Z',
      name: 'titreAsc',
      by: [{ field: 'titre', direction: 'asc' }],
    },
  ],
})
