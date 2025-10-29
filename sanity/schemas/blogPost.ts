import { defineField, defineType } from 'sanity'

/**
 * Schéma pour les articles de blog
 * Contient tous les champs nécessaires pour un article complet
 */
export default defineType({
  name: 'blogPost',
  title: 'Article de Blog',
  type: 'document',
  icon: () => '📝',
  
  fields: [
    // Titre de l'article
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
      description: 'Le titre de votre article (max 100 caractères)',
    }),

    // Slug (URL) généré automatiquement depuis le titre
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'titre',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'Cliquez sur "Generate" pour créer automatiquement',
    }),

    // Image principale de l'article
    defineField({
      name: 'imageHero',
      title: 'Image Principale',
      type: 'image',
      options: {
        hotspot: true, // Permet de définir le point focal de l'image
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
          description: 'Important pour le SEO et l\'accessibilité',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // Résumé court de l'article
    defineField({
      name: 'resume',
      title: 'Résumé',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
      description: 'Description courte (max 200 caractères)',
    }),

    // Contenu principal avec éditeur riche
    defineField({
      name: 'contenu',
      title: 'Contenu',
      type: 'array',
      of: [
        {
          type: 'block',
          // Styles disponibles
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Titre H2', value: 'h2' },
            { title: 'Titre H3', value: 'h3' },
            { title: 'Titre H4', value: 'h4' },
            { title: 'Citation', value: 'blockquote' },
          ],
          // Formats de texte
          marks: {
            decorators: [
              { title: 'Gras', value: 'strong' },
              { title: 'Italique', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                title: 'Lien',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        // Images dans le contenu
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Légende',
            },
          ],
        },
        // Composants React personnalisés
        {
          type: 'customComponent',
        },
        // Blocs de code avec coloration syntaxique
        {
          type: 'code',
          title: 'Bloc de Code',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'JavaScript', value: 'javascript' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
              { title: 'Python', value: 'python' },
              { title: 'JSON', value: 'json' },
              { title: 'Bash', value: 'bash' },
              { title: 'SQL', value: 'sql' },
              { title: 'PHP', value: 'php' },
              { title: 'Ruby', value: 'ruby' },
              { title: 'Go', value: 'go' },
              { title: 'Rust', value: 'rust' },
              { title: 'Java', value: 'java' },
              { title: 'C#', value: 'csharp' },
              { title: 'Swift', value: 'swift' },
              { title: 'Kotlin', value: 'kotlin' },
            ],
            withFilename: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // Date de publication
    defineField({
      name: 'datePublication',
      title: 'Date de Publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    // Auteur
    defineField({
      name: 'auteur',
      title: 'Auteur',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Catégories
    defineField({
      name: 'categories',
      title: 'Catégories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          // Catégories générales
          { title: 'Tutoriels', value: 'tutoriels' },
          { title: 'Actualités', value: 'actualites' },
          { title: 'Guides', value: 'guides' },
          { title: 'IA', value: 'ia' },
          { title: 'Développement', value: 'developpement' },
          { title: 'Marketing', value: 'marketing' },
          
          // Services Market-IA
          { title: '📚 Formation IA', value: 'formation-ia' },
          { title: '⚡ Automatisations IA', value: 'automatisations-ia' },
          { title: '💎 SaaS Personnalisé', value: 'saas-personnalise' },
          { title: '🌐 Site Internet', value: 'site-internet' },
          { title: '🚀 Landing Page IA', value: 'landing-page-ia' },
        ],
      },
      description: 'Sélectionnez une ou plusieurs catégories (générales ou services)',
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Titre',
          type: 'string',
          validation: (Rule) => Rule.max(60),
          description: 'Titre pour les moteurs de recherche (max 60 caractères)',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160),
          description: 'Description pour les moteurs de recherche (max 160 caractères)',
        },
      ],
    }),

    // Visibilité
    defineField({
      name: 'publie',
      title: 'Publié',
      type: 'boolean',
      initialValue: true,
      description: 'Décochez pour masquer l\'article',
    }),
  ],

  // Prévisualisation dans la liste
  preview: {
    select: {
      title: 'titre',
      author: 'auteur',
      media: 'imageHero',
      date: 'datePublication',
    },
    prepare(selection) {
      const { title, author, media, date } = selection
      return {
        title: title,
        subtitle: `Par ${author} - ${new Date(date).toLocaleDateString('fr-FR')}`,
        media: media,
      }
    },
  },

  // Ordre par défaut
  orderings: [
    {
      title: 'Date de publication (récent)',
      name: 'datePublicationDesc',
      by: [{ field: 'datePublication', direction: 'desc' }],
    },
    {
      title: 'Date de publication (ancien)',
      name: 'datePublicationAsc',
      by: [{ field: 'datePublication', direction: 'asc' }],
    },
    {
      title: 'Titre A-Z',
      name: 'titreAsc',
      by: [{ field: 'titre', direction: 'asc' }],
    },
  ],
})
