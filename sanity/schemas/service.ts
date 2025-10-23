import { defineField, defineType } from 'sanity'

/**
 * Schéma pour les services
 * Permet de gérer tous vos services (Site Internet, Landing Pages, etc.)
 */
export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: () => '🎯',
  
  fields: [
    // Informations de base
    defineField({
      name: 'title',
      title: 'Nom du Service',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Ex: "Site Internet", "Landing Pages"',
    }),

    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'URL du service (ex: site-internet)',
    }),

    defineField({
      name: 'icon',
      title: 'Icône',
      type: 'string',
      description: 'Nom de l\'icône Lucide (ex: Globe, Zap, GraduationCap)',
    }),

    defineField({
      name: 'price',
      title: 'Prix',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Ex: "à partir de 99 €/mois", "Sur devis"',
    }),

    defineField({
      name: 'excerpt',
      title: 'Description Courte',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(150),
      description: 'Description courte pour la carte (max 150 caractères)',
    }),

    defineField({
      name: 'coverImage',
      title: 'Image Principale',
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
    }),

    // Contenu détaillé
    defineField({
      name: 'description',
      title: 'Description Complète',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Titre H2', value: 'h2' },
            { title: 'Titre H3', value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Gras', value: 'strong' },
              { title: 'Italique', value: 'em' },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
      description: 'Description détaillée du service',
    }),

    // Fonctionnalités
    defineField({
      name: 'features',
      title: 'Fonctionnalités',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(3),
      description: 'Liste des fonctionnalités incluses',
    }),

    // Call to Action
    defineField({
      name: 'ctaText',
      title: 'Texte du Bouton',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Ex: "Démarrer mon site", "Demander un devis"',
    }),

    defineField({
      name: 'ctaLink',
      title: 'Lien du Bouton',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Lien du bouton (ex: /contact)',
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
      description: 'Décochez pour masquer ce service',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'coverImage',
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
