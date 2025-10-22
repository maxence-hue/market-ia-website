import { NextRequest, NextResponse } from 'next/server'
import { readJSON, writeJSON } from '@/lib/db/file-manager'
import { getSession } from '@/lib/auth/session'

interface Abonnement {
  id: string
  name: string
  slug: string
  price: number
  activationFee: number
  popular: boolean
  order: number
  description: string
  features: string[]
  timeIncluded: string
  sla: string
  active: boolean
}

export async function GET() {
  try {
    const data = await readJSON<{ abonnements: Abonnement[] }>('abonnements/abonnements.json')
    
    return NextResponse.json({ 
      abonnements: data?.abonnements || [] 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des abonnements' },
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

    const { abonnements } = await request.json()

    await writeJSON('abonnements/abonnements.json', {
      abonnements,
      updatedAt: new Date().toISOString(),
      updatedBy: session.email
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la sauvegarde des abonnements' },
      { status: 500 }
    )
  }
}
