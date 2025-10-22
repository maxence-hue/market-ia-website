'use client'

import Link from 'next/link'
import { FileText, Image, Settings, BookOpen, Users, MessageSquare, LayoutGrid } from 'lucide-react'

export default function AdminDashboard() {
  const cards = [
    {
      title: 'Modifier les Pages',
      description: 'Éditez les textes et images de votre site',
      icon: FileText,
      href: '/admin/pages',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
    },
    {
      title: 'Créer un Article',
      description: 'Rédigez et publiez des articles de blog',
      icon: BookOpen,
      href: '/admin/blog',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
    },
    {
      title: 'Gérer les Images',
      description: 'Uploadez et organisez vos photos',
      icon: Image,
      href: '/admin/media',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
    },
    {
      title: 'Gérer les Services',
      description: 'Modifiez vos offres et tarifs',
      icon: LayoutGrid,
      href: '/admin/services',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
    },
    {
      title: 'Équipe',
      description: 'Ajoutez ou modifiez les membres',
      icon: Users,
      href: '/admin/equipe',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
    },
    {
      title: 'Témoignages',
      description: 'Gérez les avis clients',
      icon: MessageSquare,
      href: '/admin/temoignages',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
    },
    {
      title: 'Paramètres',
      description: 'Configurez les infos du site',
      icon: Settings,
      href: '/admin/settings',
      color: 'from-gray-500 to-slate-500',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/30',
    },
  ]

  return (
    <div className="p-8">
      {/* Welcome Banner */}
      <div className="mb-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 p-8">
        <div className="relative z-10">
          <h1 className="text-4xl font-display font-bold text-light mb-3">
            👋 Bienvenue dans votre Admin
          </h1>
          <p className="text-light/70 text-lg max-w-2xl">
            Gérez facilement tout le contenu de votre site. Cliquez sur une carte ci-dessous pour commencer.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <Link
              key={card.href}
              href={card.href}
              className={`group relative p-6 rounded-xl border ${card.borderColor} ${card.bgColor} 
                       hover:scale-105 transition-all duration-300 hover:shadow-glow`}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${card.color} mb-4`}>
                <Icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-display font-bold text-light mb-2 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              
              <p className="text-light/60 text-sm">
                {card.description}
              </p>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-primary">→</div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Help Section */}
      <div className="mt-12 p-6 bg-dark-surface rounded-xl border border-light/10">
        <h2 className="text-xl font-display font-bold text-light mb-4 flex items-center gap-2">
          💡 Besoin d&apos;aide ?
        </h2>
        <div className="space-y-3 text-light/70">
          <p><strong className="text-light">• Pour modifier une page :</strong> Allez dans &quot;Modifier les Pages&quot;, sélectionnez une page, modifiez les champs et cliquez &quot;Sauvegarder&quot;</p>
          <p><strong className="text-light">• Pour créer un article :</strong> Cliquez sur &quot;Créer un Article&quot;, remplissez le formulaire et publiez</p>
          <p><strong className="text-light">• Pour uploader une image :</strong> Allez dans &quot;Gérer les Images&quot; et glissez-déposez vos fichiers</p>
          <p><strong className="text-light">• Pour modifier un service :</strong> Rendez-vous dans &quot;Gérer les Services&quot; et cliquez sur un service</p>
        </div>
      </div>
    </div>
  )
}
