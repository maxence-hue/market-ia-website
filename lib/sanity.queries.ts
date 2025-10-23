import { sanityFetch } from './sanity.client'

/**
 * Requêtes GROQ pour récupérer les données depuis Sanity
 * GROQ = Graph-Relational Object Queries (langage de requête de Sanity)
 */

// ============================================
// TYPES TYPESCRIPT
// ============================================

export interface BlogPost {
  _id: string
  titre: string
  slug: { current: string }
  imageHero: any
  resume: string
  contenu: any[]
  datePublication: string
  auteur: string
  categories: string[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  publie: boolean
}

export interface GalleryItem {
  _id: string
  titre: string
  description?: string
  images: any[]
  ordre: number
  visible: boolean
  categorie?: string
}

export interface SiteSettings {
  _id: string
  titreSite: string
  tagline?: string
  description?: string
  logo?: any
  contact?: {
    email?: string
    telephone?: string
    adresse?: string
  }
  reseauxSociaux?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
    youtube?: string
  }
  menuNavigation?: Array<{
    titre: string
    lien: string
  }>
  seoDefaut?: {
    metaTitle?: string
    metaDescription?: string
    imageOG?: any
  }
}

// ============================================
// REQUÊTES BLOG
// ============================================

/**
 * Récupère tous les articles de blog publiés
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost" && publie == true] | order(datePublication desc) {
    _id,
    titre,
    slug,
    imageHero,
    resume,
    datePublication,
    auteur,
    categories,
    seo
  }`
  
  return sanityFetch<BlogPost[]>({ query })
}

/**
 * Récupère un article de blog par son slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug && publie == true][0] {
    _id,
    titre,
    slug,
    imageHero,
    resume,
    contenu,
    datePublication,
    auteur,
    categories,
    seo
  }`
  
  return sanityFetch<BlogPost | null>({ 
    query, 
    params: { slug } 
  })
}

/**
 * Récupère les articles récents (limité à n articles)
 */
export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost" && publie == true] | order(datePublication desc) [0...${limit}] {
    _id,
    titre,
    slug,
    imageHero,
    resume,
    datePublication,
    auteur,
    categories
  }`
  
  return sanityFetch<BlogPost[]>({ query })
}

/**
 * Récupère les articles par catégorie
 */
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost" && publie == true && $category in categories] | order(datePublication desc) {
    _id,
    titre,
    slug,
    imageHero,
    resume,
    datePublication,
    auteur,
    categories
  }`
  
  return sanityFetch<BlogPost[]>({ 
    query, 
    params: { category } 
  })
}

/**
 * Récupère tous les slugs des articles (pour generateStaticParams)
 */
export async function getAllBlogPostSlugs(): Promise<string[]> {
  const query = `*[_type == "blogPost" && publie == true].slug.current`
  
  return sanityFetch<string[]>({ query })
}

// ============================================
// REQUÊTES GALERIE
// ============================================

/**
 * Récupère toutes les galeries visibles
 */
export async function getAllGalleryItems(): Promise<GalleryItem[]> {
  const query = `*[_type == "gallery" && visible == true] | order(ordre asc) {
    _id,
    titre,
    description,
    images,
    ordre,
    categorie
  }`
  
  return sanityFetch<GalleryItem[]>({ query })
}

/**
 * Récupère les galeries par catégorie
 */
export async function getGalleryByCategory(category: string): Promise<GalleryItem[]> {
  const query = `*[_type == "gallery" && visible == true && categorie == $category] | order(ordre asc) {
    _id,
    titre,
    description,
    images,
    ordre
  }`
  
  return sanityFetch<GalleryItem[]>({ 
    query, 
    params: { category } 
  })
}

// ============================================
// REQUÊTES PARAMÈTRES
// ============================================

/**
 * Récupère les paramètres du site
 */
export async function getSiteSettings(): Promise<SiteSettings | null> {
  const query = `*[_type == "siteSettings"][0] {
    _id,
    titreSite,
    tagline,
    description,
    logo,
    contact,
    reseauxSociaux,
    menuNavigation,
    seoDefaut
  }`
  
  return sanityFetch<SiteSettings | null>({ 
    query,
    revalidate: 3600 // Cache de 1 heure
  })
}
