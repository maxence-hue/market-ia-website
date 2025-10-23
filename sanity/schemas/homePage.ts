import { defineField, defineType } from 'sanity'

/**
 * Schéma pour la page d'accueil
 * Permet de modifier tous les textes et images de la homepage
 */
export default defineType({
  name: 'homePage',
  title: 'Page d\'Accueil',
  type: 'document',
  icon: () => '🏠',
  
  fields: [
    // Section Hero
    defineField({
      name: 'heroTitle',
      title: 'Titre Principal',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Le grand titre en haut de la page',
    }),

    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
      description: 'Le texte sous le titre principal',
    }),

    defineField({
      name: 'heroButtonText',
      title: 'Texte du Bouton',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Texte du bouton principal (ex: "Démarrer un projet")',
    }),

    defineField({
      name: 'heroButtonLink',
      title: 'Lien du Bouton',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Lien du bouton (ex: /contact)',
    }),

    defineField({
      name: 'heroImage',
      title: 'Image de Fond',
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
      description: 'Image de fond de la section hero',
    }),

    // Section À propos
    defineField({
      name: 'aboutTitle',
      title: 'Titre Section À Propos',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'aboutContent',
      title: 'Contenu À Propos',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
      description: 'Description de votre entreprise',
    }),

    defineField({
      name: 'aboutImage',
      title: 'Image À Propos',
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

    // Statistiques
    defineField({
      name: 'stat1Value',
      title: 'Statistique 1 - Valeur',
      type: 'string',
      description: 'Ex: "50+"',
    }),

    defineField({
      name: 'stat1Label',
      title: 'Statistique 1 - Label',
      type: 'string',
      description: 'Ex: "Projets réalisés"',
    }),

    defineField({
      name: 'stat2Value',
      title: 'Statistique 2 - Valeur',
      type: 'string',
      description: 'Ex: "100%"',
    }),

    defineField({
      name: 'stat2Label',
      title: 'Statistique 2 - Label',
      type: 'string',
      description: 'Ex: "Clients satisfaits"',
    }),

    defineField({
      name: 'stat3Value',
      title: 'Statistique 3 - Valeur',
      type: 'string',
      description: 'Ex: "24/7"',
    }),

    defineField({
      name: 'stat3Label',
      title: 'Statistique 3 - Label',
      type: 'string',
      description: 'Ex: "Support disponible"',
    }),

    // Call to Action
    defineField({
      name: 'ctaTitle',
      title: 'CTA - Titre',
      type: 'string',
      description: 'Titre de l\'appel à l\'action en bas de page',
    }),

    defineField({
      name: 'ctaSubtitle',
      title: 'CTA - Sous-titre',
      type: 'string',
      description: 'Sous-titre du CTA',
    }),

    defineField({
      name: 'ctaButtonText',
      title: 'CTA - Texte Bouton',
      type: 'string',
      description: 'Texte du bouton CTA',
    }),

    defineField({
      name: 'ctaButtonLink',
      title: 'CTA - Lien Bouton',
      type: 'string',
      description: 'Lien du bouton CTA',
    }),
  ],

  preview: {
    select: {
      title: 'heroTitle',
      media: 'heroImage',
    },
  },
})
