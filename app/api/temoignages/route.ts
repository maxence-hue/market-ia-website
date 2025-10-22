import { NextRequest, NextResponse } from 'next/server'
import { readJSON, writeJSON } from '@/lib/db/file-manager'
import { getSession } from '@/lib/auth/session'

interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  quote: string
  result: string
  avatar: string
  avatarAlt: string
  rating: number
  active: boolean
}

export async function GET() {
  try {
    const data = await readJSON<{ testimonials: Testimonial[] }>('temoignages/temoignages.json')
    
    return NextResponse.json({ 
      testimonials: data?.testimonials || [] 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des témoignages' },
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

    const { testimonials } = await request.json()

    await writeJSON('temoignages/temoignages.json', {
      testimonials,
      updatedAt: new Date().toISOString(),
      updatedBy: session.email
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la sauvegarde des témoignages' },
      { status: 500 }
    )
  }
}
