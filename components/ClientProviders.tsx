'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'
import dynamic from 'next/dynamic'

// Import dynamique pour éviter le pre-rendering
const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
})

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <ThemeToggle />
    </ThemeProvider>
  )
}
