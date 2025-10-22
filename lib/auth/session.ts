import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { AUTH_CONFIG } from './config'

export interface Session {
  email: string
  isAdmin: boolean
  expiresAt: number
}

export async function createSession(email: string): Promise<string> {
  const secret = new TextEncoder().encode(AUTH_CONFIG.secretKey)
  const expiresAt = Date.now() + AUTH_CONFIG.sessionDuration
  
  const token = await new SignJWT({ email, isAdmin: true, expiresAt })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(secret)
  
  return token
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = cookies()
  const token = cookieStore.get(AUTH_CONFIG.cookieName)?.value
  
  if (!token) return null
  
  try {
    const secret = new TextEncoder().encode(AUTH_CONFIG.secretKey)
    const { payload } = await jwtVerify(token, secret)
    
    if ((payload.expiresAt as number) < Date.now()) {
      return null
    }
    
    return {
      email: payload.email as string,
      isAdmin: payload.isAdmin as boolean,
      expiresAt: payload.expiresAt as number
    }
  } catch {
    return null
  }
}

export function deleteSession() {
  cookies().delete(AUTH_CONFIG.cookieName)
}
