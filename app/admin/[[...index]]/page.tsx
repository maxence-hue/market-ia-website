'use client'

/**
 * Route pour accéder à Sanity Studio depuis le site
 * Accessible sur https://market-ia.fr/admin
 */

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function AdminPage() {
  return <NextStudio config={config} />
}
