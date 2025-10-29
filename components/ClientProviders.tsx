'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <ThemeToggle />
    </ThemeProvider>
  )
}
