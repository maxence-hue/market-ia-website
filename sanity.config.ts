import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './sanity/schemas'

/**
 * Configuration du Sanity Studio
 * Ce fichier configure l'interface d'administration de votre CMS
 * Accessible sur /admin
 */
export default defineConfig({
  name: 'default',
  title: 'Market-IA CMS',
  
  // Chemin de base pour Sanity Studio
  basePath: '/admin',

  // ID du projet Sanity
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  
  // Dataset (production par défaut)
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  // Plugins Sanity
  plugins: [
    structureTool(), // Interface de gestion de contenu
    visionTool(), // Outil pour tester les requêtes GROQ
    codeInput(), // Support des blocs de code
  ],

  // Schémas de contenu
  schema: {
    types: schemaTypes,
  },

  // Configuration de l'API
  apiVersion: '2024-01-01',
})
