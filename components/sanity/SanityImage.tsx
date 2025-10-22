import Image from 'next/image'
import { urlForImage, getImageSrcSet } from '@/lib/sanity.image'

/**
 * Composant Image optimisé pour Sanity
 * Gère automatiquement les URLs et le responsive
 */

interface SanityImageProps {
  image: any
  alt?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
}

export default function SanityImage({
  image,
  alt,
  width = 1200,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
}: SanityImageProps) {
  // Si pas d'image, ne rien afficher
  if (!image?.asset?._ref) {
    return null
  }

  // Génère l'URL de l'image
  const imageUrl = urlForImage(image).width(width).url()

  // Alt text : utilise celui fourni, sinon celui de Sanity, sinon vide
  const imageAlt = alt || image.alt || ''

  return (
    <Image
      src={imageUrl}
      alt={imageAlt}
      width={width}
      height={height || width}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  )
}
