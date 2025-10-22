import { NextRequest, NextResponse } from 'next/server'
import { readJSON, writeJSON } from '@/lib/db/file-manager'
import { getSession } from '@/lib/auth/session'

interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  photo: string
  photoAlt: string
  order: number
  linkedin: string
  active: boolean
}

export async function GET() {
  try {
    const data = await readJSON<{ team: TeamMember[] }>('equipe/equipe.json')
    
    return NextResponse.json({ 
      team: data?.team || [] 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'équipe' },
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

    const { team } = await request.json()

    await writeJSON('equipe/equipe.json', {
      team,
      updatedAt: new Date().toISOString(),
      updatedBy: session.email
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la sauvegarde de l\'équipe' },
      { status: 500 }
    )
  }
}
