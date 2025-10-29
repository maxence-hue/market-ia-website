'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Upload, Copy, Check, X } from 'lucide-react'

interface UploadedImage {
  url: string
  filename: string
}

export default function UploadImagesPage() {
  const [uploading, setUploading] = useState(false)
  const [images, setImages] = useState<UploadedImage[]>([])
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)
    setError(null)

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        // Créer un nom de fichier SEO-friendly (plus permissif)
        const seoFilename = file.name
          .toLowerCase()
          .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Supprime les accents
          .replace(/\s+/g, '-') // Espaces en tirets
          .replace(/[^a-z0-9._-]/g, '') // Garde lettres, chiffres, points, tirets
          .replace(/-+/g, '-') // Évite les tirets multiples
          .replace(/^-|-$/g, '') // Supprime tirets au début/fin

        const response = await fetch(`/api/upload-image?filename=${seoFilename}`, {
          method: 'POST',
          body: file,
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.error || 'Erreur upload')
        }

        return await response.json()
      })

      const results = await Promise.all(uploadPromises)
      setImages([...images, ...results])
    } catch (err: any) {
      setError(err.message)
      console.error('Erreur:', err)
    } finally {
      setUploading(false)
    }
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedUrl(url)
    setTimeout(() => setCopiedUrl(null), 2000)
  }

  const removeImage = (url: string) => {
    setImages(images.filter(img => img.url !== url))
  }

  return (
    <div className="min-h-screen bg-dark py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
              📸 Gestionnaire d&apos;Images
            </h1>
            <p className="text-xl text-light/70">
              Uploadez vos images optimisées SEO sur Vercel Blob
            </p>
          </div>

          {/* Upload Zone */}
          <div className="card-glass p-8 mb-8 border-2 border-dashed border-primary/50 hover:border-primary transition-all">
            <label className="flex flex-col items-center justify-center cursor-pointer">
              <Upload className="w-16 h-16 text-primary mb-4" />
              <span className="text-xl font-semibold text-light mb-2">
                Cliquez pour uploader des images
              </span>
              <span className="text-light/60 text-sm mb-4">
                Formats : JPG, PNG, WebP, SVG, GIF (max 10 MB par fichier)
              </span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                disabled={uploading}
              />
              {uploading && (
                <div className="flex items-center gap-2 text-primary">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                  <span>Upload en cours...</span>
                </div>
              )}
            </label>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-8">
              <div className="flex items-center gap-2 text-red-400">
                <X className="w-5 h-5" />
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Images uploadées */}
          {images.length > 0 && (
            <div>
              <h2 className="text-2xl font-display font-bold mb-6 text-light">
                Images Uploadées ({images.length})
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="card-glass overflow-hidden group"
                  >
                    {/* Image */}
                    <div className="relative aspect-video bg-dark-surface">
                      <Image
                        src={image.url}
                        alt={image.filename}
                        fill
                        className="object-cover"
                      />
                      <button
                        onClick={() => removeImage(image.url)}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <p className="text-sm text-light/60 mb-3 truncate">
                        {image.filename}
                      </p>
                      
                      {/* URL copiable */}
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={image.url}
                          readOnly
                          className="flex-1 bg-dark-surface text-light/80 px-3 py-2 rounded-lg text-sm border border-light/10"
                        />
                        <button
                          onClick={() => copyToClipboard(image.url)}
                          className="bg-primary hover:bg-primary-dark text-white p-2 rounded-lg transition-colors"
                        >
                          {copiedUrl === image.url ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Code à copier */}
                      <div className="mt-3">
                        <p className="text-xs text-light/40 mb-1">
                          Code Next.js :
                        </p>
                        <code className="block bg-[#1e1e1e] text-xs text-green-400 p-2 rounded overflow-x-auto">
                          {`<Image src="${image.url}" alt="..." width={1200} height={675} />`}
                        </code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guide */}
          <div className="mt-12 card-glass p-8">
            <h3 className="text-2xl font-display font-bold mb-4 text-light">
              💡 Bonnes Pratiques SEO
            </h3>
            <ul className="space-y-3 text-light/70">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Noms de fichiers</strong> : Utilisez des mots-clés séparés par des tirets (ex: formation-ia-var-2024.jpg)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Format</strong> : Préférez WebP pour un meilleur compromis qualité/poids</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Dimensions</strong> : Hero 1920x1080, Articles 1200x675, Thumbnails 600x400</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Poids</strong> : Idéalement &lt; 500 KB pour des performances optimales (max 10 MB accepté)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Alt text</strong> : Toujours ajouter un texte alternatif descriptif dans votre code</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
