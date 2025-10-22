'use client'

import { useState, useRef } from 'react'
import { Upload, X, Loader2 } from 'lucide-react'
import Image from 'next/image'

interface ImageUploaderProps {
  value: string
  onChange: (url: string) => void
  folder?: string
  label?: string
  alt?: string
  onAltChange?: (alt: string) => void
}

export default function ImageUploader({ 
  value, 
  onChange, 
  folder = 'general',
  label = 'Image',
  alt = '',
  onAltChange
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState(value)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Veuillez sélectionner une image valide')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('L\'image ne doit pas dépasser 5MB')
      return
    }

    setUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', folder)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (res.ok) {
        const data = await res.json()
        onChange(data.url)
        setPreview(data.url)
      } else {
        throw new Error('Erreur lors de l\'upload')
      }
    } catch (error) {
      alert('Erreur lors de l\'upload de l\'image')
    } finally {
      setUploading(false)
    }
  }

  const removeImage = () => {
    onChange('')
    setPreview('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-light mb-2">
        {label}
      </label>

      {preview ? (
        <div className="space-y-3">
          <div className="relative group">
            <div className="relative w-full h-64 rounded-lg overflow-hidden border border-light/10">
              <Image
                src={preview}
                alt={alt || "Preview"}
                fill
                className="object-cover"
              />
            </div>
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg 
                       opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={20} />
            </button>
          </div>

          {onAltChange && (
            <div>
              <label className="block text-sm font-medium text-light mb-2">
                Texte alternatif (Alt)
              </label>
              <input
                type="text"
                value={alt}
                onChange={(e) => onAltChange(e.target.value)}
                className="w-full px-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="Description de l'image pour l'accessibilité"
              />
              <p className="text-xs text-light/60 mt-1">
                Important pour le SEO et l&apos;accessibilité
              </p>
            </div>
          )}
        </div>
      ) : (
        <div
          onClick={() => !uploading && fileInputRef.current?.click()}
          className="w-full h-64 border-2 border-dashed border-light/20 rounded-lg 
                   flex flex-col items-center justify-center cursor-pointer
                   hover:border-primary hover:bg-primary/5 transition-all"
        >
          {uploading ? (
            <div className="text-center">
              <Loader2 className="animate-spin text-primary mx-auto mb-2" size={40} />
              <p className="text-light/60">Upload en cours...</p>
            </div>
          ) : (
            <>
              <Upload className="text-light/40 mb-2" size={40} />
              <p className="text-light/60">Cliquez pour uploader une image</p>
              <p className="text-light/40 text-sm mt-1">PNG, JPG, WEBP (max 5MB)</p>
            </>
          )}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  )
}
