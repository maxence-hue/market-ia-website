import { defineField, defineType } from 'sanity'

/**
 * Schéma pour les paramètres globaux du site
 * Une seule entrée pour configurer tout le site
 */
export default defineType({
  name: 'siteSettings',
  title: 'Paramètres du Site',
  type: 'document',
  icon: () => '⚙️',
  
  fields: [
    // Nom du site
    defineField({
      name: 'titreSite',
      title: 'Nom du Site',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Le nom de votre site (ex: Market-IA)',
    }),

    // Slogan/Tagline
    defineField({
      name: 'tagline',
      title: 'Slogan',
      type: 'string',
      description: 'Slogan ou description courte',
    }),

    // Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Description générale du site pour le SEO',
    }),

    // Logo
    defineField({
      name: 'logo',
      title: 'Logo',
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
    }),

    // Informations de contact
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.email(),
        },
        {
          name: 'telephone',
          title: 'Téléphone',
          type: 'string',
        },
        {
          name: 'adresse',
          title: 'Adresse',
          type: 'text',
          rows: 2,
        },
      ],
    }),

    // Réseaux sociaux
    defineField({
      name: 'reseauxSociaux',
      title: 'Réseaux Sociaux',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        },
      ],
    }),

    // Menu de navigation
    defineField({
      name: 'menuNavigation',
      title: 'Menu de Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'titre',
              title: 'Titre',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'lien',
              title: 'Lien',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'Ex: /about, /contact, /services',
            },
          ],
          preview: {
            select: {
              title: 'titre',
              subtitle: 'lien',
            },
          },
        },
      ],
    }),

    // SEO par défaut
    defineField({
      name: 'seoDefaut',
      title: 'SEO par Défaut',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Titre',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
        {
          name: 'imageOG',
          title: 'Image Open Graph',
          type: 'image',
          description: 'Image par défaut pour les réseaux sociaux',
        },
      ],
    }),
  ],

  // Prévisualisation
  preview: {
    select: {
      title: 'titreSite',
      subtitle: 'tagline',
      media: 'logo',
    },
  },
})
