import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

/**
 * API Route pour uploader des images sur Vercel Blob
 * POST /api/upload-image?filename=mon-image.jpg
 */
export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const filename = searchParams.get('filename')

    if (!filename) {
      return NextResponse.json(
        { error: 'Le nom du fichier est requis' },
        { status: 400 }
      )
    }

    if (!request.body) {
      return NextResponse.json(
        { error: 'Le corps de la requête est vide' },
        { status: 400 }
      )
    }

    // Upload sur Vercel Blob
    const blob = await put(filename, request.body, {
      access: 'public',
      addRandomSuffix: true, // Ajoute un suffix aléatoire pour éviter les collisions
    })

    return NextResponse.json({
      success: true,
      url: blob.url,
      filename: blob.pathname,
    })
  } catch (error: any) {
    console.error('Erreur upload image:', error)
    return NextResponse.json(
      { error: error.message || 'Erreur lors de l\'upload' },
      { status: 500 }
    )
  }
}
