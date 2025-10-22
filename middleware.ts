import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
  // Routes admin protégées
  if (path.startsWith('/admin') && path !== '/admin/login') {
    const token = request.cookies.get('market-ia-admin-session')?.value
    
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    
    // Vérifier la validité du token
    try {
      const secret = new TextEncoder().encode(process.env.AUTH_SECRET_KEY || 'change-me-in-production')
      await jwtVerify(token, secret)
    } catch {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*'
}
