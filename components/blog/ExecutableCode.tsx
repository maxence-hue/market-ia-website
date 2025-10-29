'use client'

import { useEffect, useRef } from 'react'

interface ExecutableCodeProps {
  html?: string
  jsx?: string
  css?: string
}

export default function ExecutableCode({ html, jsx, css }: ExecutableCodeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Si du HTML est fourni, l'injecter directement
    if (html) {
      containerRef.current.innerHTML = html
    }

    // Si du CSS est fourni, l'ajouter
    if (css) {
      const styleElement = document.createElement('style')
      styleElement.textContent = css
      document.head.appendChild(styleElement)

      return () => {
        document.head.removeChild(styleElement)
      }
    }
  }, [html, css])

  // Si du JSX est fourni, essayer de l'évaluer (dangereux mais fonctionnel)
  if (jsx) {
    try {
      // Créer une fonction à partir du JSX
      const Component = new Function('React', `return ${jsx}`)
      return (
        <div className="executable-code-container my-8">
          {Component(require('react'))}
        </div>
      )
    } catch (error) {
      console.error('Erreur lors de l\'exécution du JSX:', error)
      return (
        <div className="card-glass p-6 my-8 border-l-4 border-red-500">
          <p className="text-red-400 font-semibold mb-2">❌ Erreur d&apos;exécution du code</p>
          <p className="text-light/60 text-sm">Le code JSX fourni contient une erreur.</p>
        </div>
      )
    }
  }

  // Rendu HTML direct
  return (
    <div 
      ref={containerRef} 
      className="executable-code-container my-8"
      suppressHydrationWarning
    />
  )
}
