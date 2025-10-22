'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Home,
  FileText,
  Newspaper,
  Package,
  CreditCard,
  Users,
  MessageSquare,
  Settings,
  Image,
  LogOut,
  Menu,
  X
} from 'lucide-react'

const menuItems = [
  { href: '/admin', label: 'Dashboard', icon: Home },
  { href: '/admin/pages', label: 'Pages', icon: FileText },
  { href: '/admin/blog', label: 'Blog', icon: Newspaper },
  { href: '/admin/services', label: 'Services', icon: Package },
  { href: '/admin/abonnements', label: 'Abonnements', icon: CreditCard },
  { href: '/admin/equipe', label: 'Équipe', icon: Users },
  { href: '/admin/temoignages', label: 'Témoignages', icon: MessageSquare },
  { href: '/admin/media', label: 'Médias', icon: Image },
  { href: '/admin/settings', label: 'Réglages', icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  // Ne pas afficher le layout sur la page de login
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-dark flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-dark-surface border-r border-light/10 transition-all duration-300 flex flex-col`}
      >
        {/* Header */}
        <div className="h-16 border-b border-light/10 flex items-center justify-between px-4">
          {sidebarOpen && (
            <h1 className="text-xl font-display font-bold text-primary">
              Market-IA
            </h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-light/5 rounded-lg transition-colors text-light"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-light/70 hover:bg-light/5 hover:text-light'
                }`}
              >
                <Icon size={20} />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-light/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-light/70 
                     hover:bg-light/5 hover:text-light transition-colors"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Déconnexion</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
