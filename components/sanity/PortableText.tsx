import { PortableText as PortableTextComponent } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity.image'
import { componentMapping } from '@/lib/componentMapping'

/**
 * Composant pour afficher le contenu riche de Sanity
 * Personnalise le rendu de chaque type de bloc
 */

const components = {
  // Blocs de texte
  block: {
    // Paragraphe normal
    normal: ({ children }: any) => (
      <p className="mb-6 text-light/80 leading-relaxed text-lg">{children}</p>
    ),
    // Titres
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-display font-bold text-light mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-display font-bold text-light mt-10 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-display font-bold text-light mt-8 mb-3">
        {children}
      </h4>
    ),
    // Citations
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5 rounded-r-lg">
        <div className="text-light/90 italic text-lg">{children}</div>
      </blockquote>
    ),
  },

  // Marques de texte
  marks: {
    // Gras
    strong: ({ children }: any) => (
      <strong className="font-bold text-light">{children}</strong>
    ),
    // Italique
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    // Code inline
    code: ({ children }: any) => (
      <code className="px-2 py-1 bg-dark-surface rounded text-primary font-mono text-sm">
        {children}
      </code>
    ),
    // Liens
    link: ({ children, value }: any) => {
      const isExternal = value?.href?.startsWith('http')
      return (
        <a
          href={value?.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-primary hover:text-primary-light underline transition-colors"
        >
          {children}
        </a>
      )
    },
  },

  // Types personnalisés
  types: {
    // Images
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }

      const imageUrl = urlForImage(value).width(1200).url()

      return (
        <figure className="my-8 rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={value.alt || 'Image'}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-light/60 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },

    // Composants React personnalisés
    customComponent: ({ value }: any) => {
      const Component = componentMapping[value.componentType]
      
      if (!Component) {
        console.warn(`Composant "${value.componentType}" non trouvé dans componentMapping`)
        return (
          <div className="my-8 p-4 bg-yellow-500/20 border border-yellow-500 rounded-lg">
            <p className="text-yellow-300">
              ⚠️ Composant &quot;{value.componentType}&quot; non disponible
            </p>
          </div>
        )
      }

      // Parser les données JSON si présentes
      let customData = {}
      if (value.customData) {
        try {
          customData = JSON.parse(value.customData)
        } catch (e) {
          console.error('Erreur parsing JSON customData:', e)
        }
      }

      return <Component {...customData} />
    },

    // Blocs de code avec coloration syntaxique
    code: ({ value }: any) => {
      return (
        <div className="my-8 rounded-xl overflow-hidden border border-primary/30">
          {value.filename && (
            <div className="bg-dark-surface px-4 py-2 border-b border-primary/30 text-sm text-light/60">
              📄 {value.filename}
            </div>
          )}
          <pre className="bg-[#1e1e1e] p-6 overflow-x-auto">
            <code className={`language-${value.language || 'text'} text-sm`}>
              {value.code}
            </code>
          </pre>
          {value.language && (
            <div className="bg-dark-surface px-4 py-2 border-t border-primary/30 text-xs text-primary">
              {value.language.toUpperCase()}
            </div>
          )}
        </div>
      )
    },
  },

  // Listes
  list: {
    // Liste à puces
    bullet: ({ children }: any) => (
      <ul className="mb-6 space-y-2 list-disc list-inside text-light/80">
        {children}
      </ul>
    ),
    // Liste numérotée
    number: ({ children }: any) => (
      <ol className="mb-6 space-y-2 list-decimal list-inside text-light/80">
        {children}
      </ol>
    ),
  },

  // Items de liste
  listItem: {
    bullet: ({ children }: any) => (
      <li className="ml-4">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="ml-4">{children}</li>
    ),
  },
}

interface PortableTextProps {
  value: any
  className?: string
}

/**
 * Composant PortableText personnalisé
 * Utilise les composants définis ci-dessus pour le rendu
 */
export default function PortableText({ value, className = '' }: PortableTextProps) {
  return (
    <div className={`prose prose-invert prose-lg max-w-none ${className}`}>
      <PortableTextComponent value={value} components={components} />
    </div>
  )
}
