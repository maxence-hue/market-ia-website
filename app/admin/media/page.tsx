'use client'

import { useEffect, useState } from 'react'
import { Upload, Trash2, Copy, Download, Search, Loader2, Check } from 'lucide-react'
import Image from 'next/image'

interface MediaFile {
  name: string
  url: string
  size: number
  uploadedAt: string
}

export default function MediaPage() {
  const [files, setFiles] = useState<MediaFile[]>([])
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [search, setSearch] = useState('')
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
      formData.append('folder', 'general')

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (res.ok) {
        const data = await res.json()
        const newFile: MediaFile = {
          name: file.name,
          url: data.url,
          size: file.size,
          uploadedAt: new Date().toISOString()
        }
        setFiles([newFile, ...files])
        alert('Image uploadée avec succès !')
      }
    } catch (error) {
      alert('Erreur lors de l\'upload')
    } finally {
      setUploading(false)
    }
  }

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedUrl(url)
    setTimeout(() => setCopiedUrl(null), 2000)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-light mb-2">
            Bibliothèque de médias
          </h1>
          <p className="text-light/60">
            Gérez vos images et fichiers
          </p>
        </div>
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
            id="media-upload"
          />
          <label
            htmlFor="media-upload"
            className={`flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                     text-white rounded-lg transition-colors font-semibold cursor-pointer
                     ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {uploading ? <Loader2 className="animate-spin" size={20} /> : <Upload size={20} />}
            {uploading ? 'Upload...' : 'Uploader une image'}
          </label>
        </div>
      </div>

      {/* Search */}
      <div className="bg-dark-surface p-4 rounded-lg border border-light/10 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-light/40" size={20} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un fichier..."
            className="w-full pl-10 pr-4 py-2 bg-dark border border-light/10 rounded-lg text-light 
                     focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-dark-surface p-4 rounded-lg border border-light/10">
          <p className="text-light/60 text-sm mb-1">Total fichiers</p>
          <p className="text-2xl font-bold text-light">{files.length}</p>
        </div>
        <div className="bg-dark-surface p-4 rounded-lg border border-light/10">
          <p className="text-light/60 text-sm mb-1">Espace utilisé</p>
          <p className="text-2xl font-bold text-primary">
            {formatFileSize(files.reduce((acc, f) => acc + f.size, 0))}
          </p>
        </div>
        <div className="bg-dark-surface p-4 rounded-lg border border-light/10">
          <p className="text-light/60 text-sm mb-1">Résultats</p>
          <p className="text-2xl font-bold text-light">{filteredFiles.length}</p>
        </div>
      </div>

      {/* Upload Area */}
      {files.length === 0 && (
        <div className="bg-dark-surface p-12 rounded-lg border-2 border-dashed border-light/20 text-center mb-6">
          <Upload className="mx-auto mb-4 text-light/40" size={48} />
          <p className="text-light/60 mb-4">Aucun fichier uploadé</p>
          <label
            htmlFor="media-upload"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                     text-white rounded-lg transition-colors font-semibold cursor-pointer"
          >
            <Upload size={20} />
            Uploader la première image
          </label>
        </div>
      )}

      {/* Files Grid */}
      {filteredFiles.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredFiles.map((file) => (
            <div
              key={file.url}
              className="bg-dark-surface rounded-lg border border-light/10 overflow-hidden group"
            >
              <div className="relative aspect-square">
                <Image
                  src={file.url}
                  alt={file.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={() => copyUrl(file.url)}
                    className="p-2 bg-primary rounded-lg hover:bg-primary-light transition-colors"
                    title="Copier l'URL"
                  >
                    {copiedUrl === file.url ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                  <a
                    href={file.url}
                    download
                    className="p-2 bg-primary rounded-lg hover:bg-primary-light transition-colors"
                    title="Télécharger"
                  >
                    <Download size={20} />
                  </a>
                </div>
              </div>
              <div className="p-3">
                <p className="text-light text-sm truncate mb-1" title={file.name}>
                  {file.name}
                </p>
                <p className="text-light/60 text-xs">
                  {formatFileSize(file.size)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredFiles.length === 0 && files.length > 0 && (
        <div className="bg-dark-surface p-12 rounded-lg border border-light/10 text-center">
          <p className="text-light/60">Aucun fichier ne correspond à votre recherche</p>
        </div>
      )}
    </div>
  )
}
