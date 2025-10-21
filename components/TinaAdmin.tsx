'use client'

import { useEffect } from 'react'

export function TinaAdmin() {
  useEffect(() => {
    // Redirect to Tina Cloud admin
    const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID
    if (clientId) {
      window.location.href = `https://app.tina.io/projects/${clientId}`
    } else {
      console.error('NEXT_PUBLIC_TINA_CLIENT_ID not configured')
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-light/70">Redirection vers Tina CMS...</p>
      </div>
    </div>
  )
}
