import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

/**
 * Configuration du Sanity Studio
 * Ce fichier configure l'interface d'administration de votre CMS
 */
export default defineConfig({
  name: 'default',
  title: 'Market-IA CMS',

  // ID du projet Sanity (à récupérer après sanity init)
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  
  // Dataset (production par défaut)
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  // Plugins Sanity
  plugins: [
    deskTool(), // Interface de gestion de contenu
    visionTool(), // Outil pour tester les requêtes GROQ
  ],

  // Schémas de contenu
  schema: {
    types: schemaTypes,
  },

  // Configuration de l'API
  apiVersion: '2024-01-01',
})
