import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * API Route pour revalider le cache Next.js
 * Appelé par le webhook Sanity quand un article est publié/modifié
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Vérification du secret pour sécuriser l'endpoint
    const secret = request.nextUrl.searchParams.get('secret')
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      )
    }

    // Revalider toutes les pages du blog
    revalidatePath('/blog')
    revalidatePath('/blog/[slug]')
    
    // Si un slug spécifique est fourni, le revalider aussi
    if (body.slug) {
      revalidatePath(`/blog/${body.slug}`)
    }

    console.log('✅ Cache revalidé pour:', body.slug || 'tous les articles')

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      slug: body.slug
    })
  } catch (error) {
    console.error('❌ Erreur revalidation:', error)
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    )
  }
}

// Permettre GET pour tester l'endpoint
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: 'Invalid secret' },
      { status: 401 }
    )
  }

  return NextResponse.json({
    message: 'Revalidate endpoint is working',
    usage: 'POST to this endpoint with a secret parameter'
  })
}
