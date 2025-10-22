'use client'

import { useState } from 'react'

interface SEOData {
  metaTitle: string
  metaDescription: string
  metaKeywords: string[]
  ogImage: string
  canonicalUrl: string
  noIndex: boolean
  noFollow: boolean
}

interface SEOFieldsProps {
  data: SEOData
  onChange: (data: SEOData) => void
}

export default function SEOFields({ data, onChange }: SEOFieldsProps) {
  const [keyword, setKeyword] = useState('')

  const addKeyword = () => {
    if (keyword.trim() && !data.metaKeywords.includes(keyword.trim())) {
      onChange({
        ...data,
        metaKeywords: [...data.metaKeywords, keyword.trim()]
      })
      setKeyword('')
    }
  }

  const removeKeyword = (kw: string) => {
    onChange({
      ...data,
      metaKeywords: data.metaKeywords.filter(k => k !== kw)
    })
  }

  const titleLength = data.metaTitle.length
  const descLength = data.metaDescription.length

  return (
    <div className="space-y-6 bg-dark-surface p-6 rounded-lg border border-light/10">
      <h3 className="text-xl font-display font-bold text-light mb-4">
        Optimisation SEO
      </h3>

      {/* Meta Title */}
      <div>
        <label className="block text-sm font-medium text-light mb-2">
          Meta Title
          <span className={`ml-2 text-xs ${
            titleLength > 60 ? 'text-red-400' : titleLength > 50 ? 'text-yellow-400' : 'text-green-400'
          }`}>
            {titleLength}/60 caractères
          </span>
        </label>
        <input
          type="text"
          value={data.metaTitle}
          onChange={(e) => onChange({ ...data, metaTitle: e.target.value })}
          className="w-full px-4 py-3 bg-dark border border-light/10 rounded-lg text-light 
                   focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          placeholder="Titre optimisé pour SEO (50-60 caractères)"
        />
        <p className="text-xs text-light/60 mt-1">
          Ce titre apparaîtra dans les résultats de recherche Google
        </p>
      </div>

      {/* Meta Description */}
      <div>
        <label className="block text-sm font-medium text-light mb-2">
          Meta Description
          <span className={`ml-2 text-xs ${
            descLength > 160 ? 'text-red-400' : descLength > 150 ? 'text-yellow-400' : 'text-green-400'
          }`}>
            {descLength}/160 caractères
          </span>
        </label>
        <textarea
          value={data.metaDescription}
          onChange={(e) => onChange({ ...data, metaDescription: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 bg-dark border border-light/10 rounded-lg text-light 
                   focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
          placeholder="Description optimisée pour SEO (150-160 caractères)"
        />
        <p className="text-xs text-light/60 mt-1">
          Cette description apparaîtra sous le titre dans les résultats de recherche
        </p>
      </div>

      {/* Meta Keywords */}
      <div>
        <label className="block text-sm font-medium text-light mb-2">
          Mots-clés SEO ({data.metaKeywords.length})
        </label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
            className="flex-1 px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                     focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            placeholder="Ajouter un mot-clé et appuyer sur Entrée"
          />
          <button
            type="button"
            onClick={addKeyword}
            className="px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors"
          >
            Ajouter
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.metaKeywords.map((kw) => (
            <span
              key={kw}
              className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary 
                       rounded-full text-sm"
            >
              {kw}
              <button
                type="button"
                onClick={() => removeKeyword(kw)}
                className="hover:text-red-400 transition-colors"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* OG Image */}
      <div>
        <label className="block text-sm font-medium text-light mb-2">
          Image Open Graph (partage social)
        </label>
        <input
          type="text"
          value={data.ogImage}
          onChange={(e) => onChange({ ...data, ogImage: e.target.value })}
          className="w-full px-4 py-3 bg-dark border border-light/10 rounded-lg text-light 
                   focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          placeholder="/uploads/og-image.jpg"
        />
        <p className="text-xs text-light/60 mt-1">
          Image affichée lors du partage sur les réseaux sociaux (1200x630px recommandé)
        </p>
        {data.ogImage && (
          <img
            src={data.ogImage}
            alt="Preview OG"
            className="mt-2 w-full max-w-md rounded-lg border border-light/10"
          />
        )}
      </div>

      {/* Canonical URL */}
      <div>
        <label className="block text-sm font-medium text-light mb-2">
          URL Canonique (optionnel)
        </label>
        <input
          type="url"
          value={data.canonicalUrl}
          onChange={(e) => onChange({ ...data, canonicalUrl: e.target.value })}
          className="w-full px-4 py-3 bg-dark border border-light/10 rounded-lg text-light 
                   focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          placeholder="https://market-ia.fr/page-exemple"
        />
        <p className="text-xs text-light/60 mt-1">
          Indique aux moteurs de recherche l&apos;URL principale de ce contenu
        </p>
      </div>

      {/* Options d'indexation */}
      <div className="grid grid-cols-2 gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={data.noIndex}
            onChange={(e) => onChange({ ...data, noIndex: e.target.checked })}
            className="w-4 h-4 text-primary bg-dark border-light/20 rounded 
                     focus:ring-primary focus:ring-offset-dark"
          />
          <span className="text-sm text-light">
            No Index (ne pas indexer cette page)
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={data.noFollow}
            onChange={(e) => onChange({ ...data, noFollow: e.target.checked })}
            className="w-4 h-4 text-primary bg-dark border-light/20 rounded 
                     focus:ring-primary focus:ring-offset-dark"
          />
          <span className="text-sm text-light">
            No Follow (ne pas suivre les liens)
          </span>
        </label>
      </div>

      {/* Preview SERP */}
      <div className="mt-6 p-4 bg-dark rounded-lg border border-light/10">
        <p className="text-xs text-light/60 mb-2">Aperçu dans les résultats Google :</p>
        <div className="space-y-1">
          <div className="text-blue-400 text-lg hover:underline cursor-pointer">
            {data.metaTitle || 'Titre de la page'}
          </div>
          <div className="text-green-600 text-xs">
            {data.canonicalUrl || 'https://market-ia.fr/page'}
          </div>
          <div className="text-light/80 text-sm">
            {data.metaDescription || 'Description de la page qui apparaîtra dans les résultats de recherche...'}
          </div>
        </div>
      </div>
    </div>
  )
}
