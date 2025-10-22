import { NextRequest, NextResponse } from 'next/server'
import { readJSON, writeJSON } from '@/lib/db/file-manager'
import { getSession } from '@/lib/auth/session'

interface Service {
  id: string
  title: string
  slug: string
  icon: string
  excerpt: string
  image: string
  imageAlt: string
  content: string
  features: string[]
  ctaText: string
  ctaLink: string
  order: number
  active: boolean
}

export async function GET() {
  try {
    const data = await readJSON<{ services: Service[] }>('services/services.json')
    
    return NextResponse.json({ 
      services: data?.services || [] 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des services' },
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

    const { services } = await request.json()

    await writeJSON('services/services.json', {
      services,
      updatedAt: new Date().toISOString(),
      updatedBy: session.email
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la sauvegarde des services' },
      { status: 500 }
    )
  }
}
