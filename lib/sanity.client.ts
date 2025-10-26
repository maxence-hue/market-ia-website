import { createClient } from 'next-sanity'

/**
 * Configuration du client Sanity
 * Utilisé pour récupérer les données depuis votre CMS
 */

// Configuration de base
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Client pour les requêtes publiques
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Utilise le CDN pour de meilleures performances
})

// Client pour les requêtes avec token (preview, mutations)
export const clientWithToken = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Pas de CDN pour les données en temps réel
  token: process.env.SANITY_API_TOKEN,
})

/**
 * Helper pour récupérer des données avec cache
 * @param query - Requête GROQ
 * @param params - Paramètres de la requête
 * @param revalidate - Durée du cache en secondes (3600 = 1 heure)
 */
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 3600, // Cache d'1 heure par défaut
}: {
  query: string
  params?: any
  revalidate?: number | false
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: revalidate,
    },
  })
}
