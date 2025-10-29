'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-primary to-primary-light shadow-lg hover:shadow-glow transition-all duration-300 group"
      aria-label="Changer de thème"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-6 h-6 text-white group-hover:-rotate-180 transition-transform duration-500" />
      )}
    </button>
  )
}
