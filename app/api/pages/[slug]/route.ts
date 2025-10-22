import { NextRequest, NextResponse } from 'next/server'
import { readJSON, writeJSON } from '@/lib/db/file-manager'
import { getSession } from '@/lib/auth/session'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const data = await readJSON(`pages/${params.slug}.json`)
    
    return NextResponse.json({ 
      page: data || {} 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Page non trouvée' },
      { status: 404 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const pageData = await request.json()

    await writeJSON(`pages/${params.slug}.json`, {
      ...pageData,
      updatedAt: new Date().toISOString(),
      updatedBy: session.email
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la sauvegarde' },
      { status: 500 }
    )
  }
}
