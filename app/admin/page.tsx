'use client'

import { useEffect, useState } from 'react'
import { FileText, Newspaper, Package, Users, MessageSquare, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    pages: 0,
    articles: 0,
    services: 0,
    team: 0
  })

  useEffect(() => {
    // Charger les stats
    loadStats()
  }, [])

  const loadStats = async () => {
    // TODO: Implémenter le chargement des stats
    setStats({
      pages: 5,
      articles: 12,
      services: 5,
      team: 3
    })
  }

  const cards = [
    { title: 'Pages', value: stats.pages, icon: FileText, href: '/admin/pages', color: 'bg-blue-500' },
    { title: 'Articles', value: stats.articles, icon: Newspaper, href: '/admin/blog', color: 'bg-green-500' },
    { title: 'Services', value: stats.services, icon: Package, href: '/admin/services', color: 'bg-purple-500' },
    { title: 'Équipe', value: stats.team, icon: Users, href: '/admin/equipe', color: 'bg-orange-500' },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-light mb-2">
          Dashboard Admin
        </h1>
        <p className="text-light/60">
          Bienvenue dans l&apos;interface d&apos;administration Market-IA
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <Link
              key={card.title}
              href={card.href}
              className="bg-dark-surface p-6 rounded-lg border border-light/10 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${card.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
                <TrendingUp className="text-green-400" size={20} />
              </div>
              <h3 className="text-light/60 text-sm mb-1">{card.title}</h3>
              <p className="text-3xl font-bold text-light">{card.value}</p>
            </Link>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-dark-surface p-6 rounded-lg border border-light/10">
        <h2 className="text-xl font-display font-bold text-light mb-4">
          Actions rapides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/blog/new"
            className="p-4 border border-light/10 rounded-lg hover:border-primary/50 transition-all text-center"
          >
            <Newspaper className="mx-auto mb-2 text-primary" size={32} />
            <p className="text-light font-medium">Nouvel article</p>
          </Link>
          <Link
            href="/admin/services"
            className="p-4 border border-light/10 rounded-lg hover:border-primary/50 transition-all text-center"
          >
            <Package className="mx-auto mb-2 text-primary" size={32} />
            <p className="text-light font-medium">Gérer services</p>
          </Link>
          <Link
            href="/admin/settings"
            className="p-4 border border-light/10 rounded-lg hover:border-primary/50 transition-all text-center"
          >
            <MessageSquare className="mx-auto mb-2 text-primary" size={32} />
            <p className="text-light font-medium">Paramètres</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
