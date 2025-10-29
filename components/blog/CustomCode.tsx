'use client'

import { useEffect, useState } from 'react'

interface CustomCodeProps {
  code?: string
}

export default function CustomCode({ code = '' }: CustomCodeProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!code) return

    try {
      // Créer une fonction qui retourne le composant
      const componentFunction = new Function(
        'React',
        'useState',
        'useEffect',
        `
        const { createElement: h } = React;
        ${code}
        return Component;
        `
      )

      // Exécuter la fonction pour obtenir le composant
      const DynamicComponent = componentFunction(
        { createElement: (type: any, props: any, ...children: any[]) => {
          if (typeof type === 'string') {
            return { type, props: { ...props, children } }
          }
          return type(props)
        }},
        useState,
        useEffect
      )

      setComponent(() => DynamicComponent)
      setError(null)
    } catch (err) {
      console.error('Erreur lors de l\'exécution du code:', err)
      setError(err instanceof Error ? err.message : 'Erreur inconnue')
    }
  }, [code])

  if (error) {
    return (
      <div className="card-glass p-6 border-2 border-red-500/50 mb-8">
        <div className="text-red-400 font-semibold mb-2">❌ Erreur dans le code personnalisé</div>
        <pre className="text-sm text-red-300/80 overflow-x-auto">{error}</pre>
      </div>
    )
  }

  if (!Component) {
    return null
  }

  return (
    <div className="my-8">
      <Component />
    </div>
  )
}
