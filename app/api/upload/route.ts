import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { getSession } from '@/lib/auth/session'

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    const folder = (formData.get('folder') as string) || 'general'

    if (!file) {
      return NextResponse.json({ error: 'Aucun fichier fourni' }, { status: 400 })
    }

    // Générer un nom de fichier unique
    const timestamp = Date.now()
    const originalName = file.name.replace(/\s+/g, '-').toLowerCase()
    const fileName = `${timestamp}-${originalName}`

    // Créer le dossier si nécessaire
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', folder)
    await mkdir(uploadDir, { recursive: true })

    // Sauvegarder le fichier
    const buffer = Buffer.from(await file.arrayBuffer())
    const filePath = path.join(uploadDir, fileName)
    await writeFile(filePath, buffer)

    // URL publique
    const url = `/uploads/${folder}/${fileName}`

    return NextResponse.json({ success: true, url })
  } catch (error) {
    console.error('Error uploading file:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'upload' },
      { status: 500 }
    )
  }
}
