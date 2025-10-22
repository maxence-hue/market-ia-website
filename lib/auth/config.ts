import bcrypt from 'bcryptjs'

export const AUTH_CONFIG = {
  sessionDuration: 24 * 60 * 60 * 1000, // 24 heures
  cookieName: 'market-ia-admin-session',
  secretKey: process.env.AUTH_SECRET_KEY || 'change-me-in-production'
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

// Credentials admin (à changer en production)
export const ADMIN_CREDENTIALS = {
  email: process.env.ADMIN_EMAIL || 'admin@market-ia.fr',
  passwordHash: process.env.ADMIN_PASSWORD_HASH || '$2a$10$rOZJVqEKvXGKvXGKvXGKvXGKvXGKvXGKvXGKvXGKvXGKvXGKvXGKv' // "admin123"
}
