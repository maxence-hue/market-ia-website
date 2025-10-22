/**
 * Export de tous les schémas Sanity
 * Ajoutez ici tous vos nouveaux schémas
 */

import blogPost from './blogPost'
import gallery from './gallery'
import siteSettings from './siteSettings'

export const schemaTypes = [
  // Articles de blog
  blogPost,
  
  // Galerie d'images
  gallery,
  
  // Paramètres du site
  siteSettings,
]
