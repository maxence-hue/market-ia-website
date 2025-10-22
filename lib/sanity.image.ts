import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './sanity.client'

/**
 * Helper pour générer des URLs d'images optimisées
 * Sanity gère automatiquement le redimensionnement et l'optimisation
 */

const builder = imageUrlBuilder(client)

/**
 * Génère une URL d'image optimisée
 * @param source - Source de l'image depuis Sanity
 * @returns Builder d'URL avec méthodes de transformation
 * 
 * Exemple d'utilisation :
 * urlForImage(image).width(800).height(600).url()
 * urlForImage(image).fit('crop').url()
 */
export function urlForImage(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Génère une URL d'image avec dimensions spécifiques
 * @param source - Source de l'image
 * @param width - Largeur en pixels
 * @param height - Hauteur en pixels (optionnel)
 */
export function getImageUrl(
  source: SanityImageSource,
  width: number,
  height?: number
): string {
  let imageBuilder = urlForImage(source).width(width).auto('format')
  
  if (height) {
    imageBuilder = imageBuilder.height(height).fit('crop')
  }
  
  return imageBuilder.url()
}

/**
 * Génère un srcset pour images responsive
 * @param source - Source de l'image
 * @param widths - Tableau de largeurs (ex: [400, 800, 1200])
 */
export function getImageSrcSet(
  source: SanityImageSource,
  widths: number[] = [400, 800, 1200, 1600]
): string {
  return widths
    .map((width) => {
      const url = urlForImage(source).width(width).auto('format').url()
      return `${url} ${width}w`
    })
    .join(', ')
}
