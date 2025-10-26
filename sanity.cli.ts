import { defineCliConfig } from 'sanity/cli'

/**
 * Configuration CLI de Sanity
 * Utilisé pour les commandes sanity deploy, sanity build, etc.
 */
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
})
