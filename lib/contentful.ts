import { createClient } from 'contentful'

/**
 * Client Contentful pour récupérer les données
 * Utilise les variables d'environnement pour la configuration
 */
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
})

/**
 * Client Contentful pour la prévisualisation (mode draft)
 */
export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  host: 'preview.contentful.com',
})

/**
 * Types TypeScript pour les articles de blog
 */
export interface BlogPost {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    title: string
    slug: string
    excerpt: string
    coverImage: {
      fields: {
        file: {
          url: string
        }
        title: string
      }
    }
    content: any // Rich text content
    author: string
    publishDate: string
    category: string
    tags: string[]
  }
}

/**
 * Types pour la galerie d'images
 */
export interface GalleryImage {
  sys: {
    id: string
  }
  fields: {
    title: string
    description: string
    image: {
      fields: {
        file: {
          url: string
        }
        title: string
      }
    }
  }
}

/**
 * Récupère tous les articles de blog
 * @param preview - Mode prévisualisation (true) ou production (false)
 */
export async function getAllBlogPosts(preview = false): Promise<BlogPost[]> {
  const contentfulClient = preview ? previewClient : client

  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: ['-fields.publishDate'],
  })

  return response.items as unknown as BlogPost[]
}

/**
 * Récupère un article de blog par son slug
 * @param slug - Le slug de l'article
 * @param preview - Mode prévisualisation
 */
export async function getBlogPostBySlug(
  slug: string,
  preview = false
): Promise<BlogPost | null> {
  const contentfulClient = preview ? previewClient : client

  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  })

  if (response.items.length === 0) {
    return null
  }

  return response.items[0] as unknown as BlogPost
}

/**
 * Récupère toutes les images de la galerie
 */
export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  const response = await client.getEntries({
    content_type: 'galleryImage',
    order: ['-sys.createdAt'],
  })

  return response.items as unknown as GalleryImage[]
}
