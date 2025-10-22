'use client'

/**
 * Page pour le Sanity Studio intégré
 * Accessible via /admin
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function AdminPage() {
  return <NextStudio config={config} />
}
