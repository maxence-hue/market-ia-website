'use client'

import { useEffect, useState } from 'react'
import { Upload, Search, Copy, Download, Trash2, FileText, Image as ImageIcon, File, Loader2 } from 'lucide-react'
import Image from 'next/image'

interface MediaFile {
  name: string
  path: string
  size: number
  type: 'image' | 'document' | 'other'
  extension: string
}

export default function MediaLibrary() {
  const [files, setFiles] = useState<MediaFile[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFolder, setSelectedFolder] = useState('all')

  useEffect(() => {
    loadMedia()
  }, [])

  const loadMedia = async () => {
    try {
      // Simuler le chargement des fichiers depuis le dossier uploads
      // Dans une vraie application, vous feriez un appel API
      setLoading(false)
    } catch (error) {
      console.error('Error loading media:', error)
      setLoading(false)
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files
    if (!fileList || fileList.length === 0) return

    setUploading(true)
    const uploadedFiles: MediaFile[] = []

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i]
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', 'general')

      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        })

        if (res.ok) {
          const data = await res.json()
          const fileType = file.type.startsWith('image/') ? 'image' : 
                          file.type.includes('pdf') || file.type.includes('document') ? 'document' : 
                          'other'
          
          uploadedFiles.push({
            name: file.name,
            path: data.url,
            size: file.size,
            type: fileType,
            extension: file.name.split('.').pop() || ''
          })
        }
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }

    setFiles([...uploadedFiles, ...files])
    setUploading(false)
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    alert('URL copiée dans le presse-papiers !')
  }

  const downloadFile = (url: string, name: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = name
    link.click()
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const getFileIcon = (file: MediaFile) => {
    if (file.type === 'image') return <ImageIcon size={20} className="text-primary" />
    if (file.type === 'document') return <FileText size={20} className="text-blue-400" />
    return <File size={20} className="text-light/60" />
  }

  const filteredFiles = files.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedFolder === 'all' || file.type === selectedFolder)
  )

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={40} />
      </div>
    )
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-light mb-2">
          Bibliothèque de Médias
        </h1>
        <p className="text-light/60">
          Gérez vos images et fichiers
        </p>
      </div>

      {/* Stats & Upload */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/20 rounded-lg">
              <File className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-light">{files.length}</p>
              <p className="text-sm text-light/60">Fichiers</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <ImageIcon className="text-green-400" size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-light">
                {files.filter(f => f.type === 'image').length}
              </p>
              <p className="text-sm text-light/60">Images</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <FileText className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-light">
                {files.filter(f => f.type === 'document').length}
              </p>
              <p className="text-sm text-light/60">Documents</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
          <label className="flex flex-col items-center justify-center h-full cursor-pointer group">
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              accept="image/*,.pdf,.doc,.docx,.txt"
            />
            <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors mb-2">
              {uploading ? (
                <Loader2 className="text-primary animate-spin" size={24} />
              ) : (
                <Upload className="text-primary" size={24} />
              )}
            </div>
            <p className="text-sm font-semibold text-light group-hover:text-primary transition-colors">
              {uploading ? 'Upload...' : 'Uploader'}
            </p>
          </label>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-light/40" size={20} />
          <input
            type="text"
            placeholder="Rechercher un fichier..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-dark-surface border border-light/10 rounded-lg text-light 
                     focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          />
        </div>

        <div className="flex gap-2">
          {[
            { value: 'all', label: 'Tous' },
            { value: 'image', label: 'Images' },
            { value: 'document', label: 'Documents' }
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setSelectedFolder(value)}
              className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
                selectedFolder === value
                  ? 'bg-primary text-white'
                  : 'bg-dark-surface text-light/70 border border-light/10 hover:border-primary/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Files Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {filteredFiles.map((file, index) => (
          <div
            key={index}
            className="bg-dark-surface rounded-lg border border-light/10 overflow-hidden 
                     hover:border-primary/50 transition-all group"
          >
            {/* Preview */}
            <div className="aspect-square bg-dark flex items-center justify-center p-4 relative">
              {file.type === 'image' ? (
                <Image
                  src={file.path}
                  alt={file.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2">
                  {getFileIcon(file)}
                  <span className="text-xs font-semibold text-light/60 uppercase">
                    {file.extension}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-3">
              <p className="text-sm text-light font-medium truncate mb-1">
                {file.name}
              </p>
              <p className="text-xs text-light/60">
                {formatFileSize(file.size)}
              </p>
            </div>

            {/* Actions */}
            <div className="flex border-t border-light/10">
              <button
                onClick={() => copyToClipboard(file.path)}
                className="flex-1 p-2 text-light/70 hover:text-primary hover:bg-primary/10 
                         transition-colors flex items-center justify-center gap-1"
                title="Copier l'URL"
              >
                <Copy size={14} />
              </button>
              <button
                onClick={() => downloadFile(file.path, file.name)}
                className="flex-1 p-2 text-light/70 hover:text-blue-400 hover:bg-blue-400/10 
                         transition-colors flex items-center justify-center gap-1 border-l border-light/10"
                title="Télécharger"
              >
                <Download size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredFiles.length === 0 && !loading && (
        <div className="bg-dark-surface p-12 rounded-lg border border-dashed border-light/20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
            <Upload className="text-primary" size={32} />
          </div>
          <p className="text-light/60 mb-4">
            {searchQuery ? 'Aucun fichier trouvé' : 'Aucun fichier uploadé'}
          </p>
          <label className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light 
                         text-white rounded-lg transition-colors font-semibold cursor-pointer">
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              accept="image/*,.pdf,.doc,.docx,.txt"
            />
            <Upload size={20} />
            Uploader des fichiers
          </label>
        </div>
      )}
    </div>
  )
}
