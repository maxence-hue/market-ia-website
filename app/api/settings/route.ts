import { NextRequest, NextResponse } from 'next/server'
import { readJSON, writeJSON } from '@/lib/db/file-manager'
import { getSession } from '@/lib/auth/session'

interface Settings {
  siteName: string
  tagline: string
  description: string
  email: string
  phone: string
  address: string
  social: {
    facebook: string
    twitter: string
    linkedin: string
    instagram: string
  }
  heroTitle: string
  heroSubtitle: string
  seo: {
    defaultMetaTitle: string
    defaultMetaDescription: string
    defaultOgImage: string
  }
}

export async function GET() {
  try {
    const data = await readJSON<Settings>('settings/general.json')
    
    return NextResponse.json({ 
      settings: data || {} 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des paramètres' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const settings = await request.json()

    await writeJSON('settings/general.json', {
      ...settings,
      updatedAt: new Date().toISOString(),
      updatedBy: session.email
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la sauvegarde des paramètres' },
      { status: 500 }
    )
  }
}
