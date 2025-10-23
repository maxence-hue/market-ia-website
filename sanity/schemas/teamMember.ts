import { defineField, defineType } from 'sanity'

/**
 * Schéma pour les membres de l'équipe
 * Permet de gérer votre équipe avec photos et descriptions
 */
export default defineType({
  name: 'teamMember',
  title: 'Membre de l\'Équipe',
  type: 'document',
  icon: () => '👤',
  
  fields: [
    // Informations personnelles
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Nom complet du membre',
    }),

    defineField({
      name: 'role',
      title: 'Poste',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Ex: "CEO & Fondateur", "Développeur Full-Stack"',
    }),

    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
        },
      ],
      validation: (Rule) => Rule.required(),
      description: 'Photo professionnelle du membre',
    }),

    defineField({
      name: 'bio',
      title: 'Biographie',
      type: 'text',
      rows: 4,
      description: 'Courte biographie du membre',
    }),

    // Réseaux sociaux
    defineField({
      name: 'socialLinks',
      title: 'Réseaux Sociaux',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        },
        {
          name: 'github',
          title: 'GitHub',
          type: 'url',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
      ],
    }),

    // Ordre d'affichage
    defineField({
      name: 'order',
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
      description: 'Décochez pour masquer ce membre',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },

  orderings: [
    {
      title: 'Ordre croissant',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
