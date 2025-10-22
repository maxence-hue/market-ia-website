import { NextRequest, NextResponse } from 'next/server'
import { verifyPassword, ADMIN_CREDENTIALS } from '@/lib/auth/config'
import { createSession } from '@/lib/auth/session'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Vérifier les credentials
    if (email !== ADMIN_CREDENTIALS.email) {
      return NextResponse.json(
        { error: 'Identifiants incorrects' },
        { status: 401 }
      )
    }

    const isValid = await verifyPassword(password, ADMIN_CREDENTIALS.passwordHash)
    if (!isValid) {
      return NextResponse.json(
        { error: 'Identifiants incorrects' },
        { status: 401 }
      )
    }

    // Créer la session
    const token = await createSession(email)

    // Set cookie
    cookies().set('market-ia-admin-session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 // 24 heures
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
