'use client'

import { useState } from 'react'
import { FileText, Home, Mail, Info } from 'lucide-react'
import Link from 'next/link'

export default function PagesManagement() {
  const pages = [
    {
      id: 'homepage',
      name: 'Page d\'accueil',
      description: 'La page principale du site',
      icon: Home,
      path: '/',
      available: true
    },
    {
      id: 'about',
      name: 'À propos',
      description: 'Présentation de l\'entreprise',
      icon: Info,
      path: '/about',
      available: false
    },
    {
      id: 'contact',
      name: 'Contact',
      description: 'Page de contact',
      icon: Mail,
      path: '/contact',
      available: true
    }
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-light mb-2">
          Gestion des Pages
        </h1>
        <p className="text-light/60">
          Gérez le contenu de vos pages statiques
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => {
          const Icon = page.icon
          return (
            <div
              key={page.id}
              className="bg-dark-surface p-6 rounded-lg border border-light/10 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Icon className="text-primary" size={24} />
                </div>
                {page.available ? (
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                    Disponible
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold">
                    Bientôt
                  </span>
                )}
              </div>

              <h3 className="text-xl font-display font-bold text-light mb-2">
                {page.name}
              </h3>
              <p className="text-light/60 text-sm mb-4">
                {page.description}
              </p>
              <p className="text-primary text-sm mb-4">
                {page.path}
              </p>

              {page.available ? (
                <Link
                  href={page.path}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary 
                           rounded-lg hover:bg-primary/30 transition-colors text-sm font-semibold"
                >
                  <FileText size={16} />
                  Voir la page
                </Link>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-4 py-2 bg-light/5 text-light/40 
                           rounded-lg cursor-not-allowed text-sm font-semibold"
                >
                  Bientôt disponible
                </button>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-8 bg-dark-surface p-6 rounded-lg border border-light/10">
        <h2 className="text-xl font-display font-bold text-light mb-4">
          ℹ️ Information
        </h2>
        <p className="text-light/70">
          Les pages sont actuellement affichées avec le contenu par défaut.
          L&apos;éditeur de pages sera disponible dans une prochaine version.
        </p>
        <p className="text-light/70 mt-2">
          En attendant, vous pouvez modifier le contenu directement dans les composants React du dossier <code className="px-2 py-1 bg-dark rounded text-primary">app/</code>.
        </p>
      </div>
    </div>
  )
}
