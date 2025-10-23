/**
 * Export de tous les schémas Sanity
 * Ajoutez ici tous vos nouveaux schémas
 */

import blogPost from './blogPost'
import gallery from './gallery'
import siteSettings from './siteSettings'
import homePage from './homePage'
import service from './service'
import teamMember from './teamMember'

export const schemaTypes = [
  // Pages
  homePage,
  
  // Articles de blog
  blogPost,
  
  // Services
  service,
  
  // Équipe
  teamMember,
  
  // Galerie d'images
  gallery,
  
  // Paramètres du site
  siteSettings,
]
