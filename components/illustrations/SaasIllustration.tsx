'use client'

import {
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  BarChart3,
  Settings,
  CheckCircle2,
  TrendingUp,
} from "lucide-react"

export function SaasIllustration() {
  return (
    <div className="w-full h-[450px] md:h-[500px] bg-[#0a0a1a] rounded-xl p-6 md:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-violet-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-950/50 border border-violet-600/50 rounded-full mb-2">
            <Cloud className="w-3 h-3 text-violet-400" />
            <span className="text-violet-400 text-xs">
              Architecture SaaS
            </span>
          </div>
          <h3 className="text-white text-lg md:text-xl mb-1">
            Plateforme Scalable & Sécurisée
          </h3>
          <p className="text-gray-400 text-xs">
            Infrastructure cloud • RGPD • IA intégrée
          </p>
        </div>

        {/* Main Dashboard Mockup */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Top Bar */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">Votre SaaS</div>
                  <div className="text-gray-400 text-[10px]">Production Ready</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-600 text-[10px]">En ligne</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 group hover:border-violet-500/50 transition-all">
              <div className="flex items-center gap-1.5 mb-1">
                <Users className="w-3 h-3 text-violet-400" />
                <span className="text-gray-400 text-[10px]">Utilisateurs</span>
              </div>
              <div className="text-white text-lg font-bold">1,247</div>
              <div className="flex items-center gap-1 text-green-600 text-[9px]">
                <TrendingUp className="w-2.5 h-2.5" />
                +12%
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 group hover:border-violet-500/50 transition-all">
              <div className="flex items-center gap-1.5 mb-1">
                <BarChart3 className="w-3 h-3 text-pink-400" />
                <span className="text-gray-400 text-[10px]">Revenus</span>
              </div>
              <div className="text-white text-lg font-bold">€24K</div>
              <div className="flex items-center gap-1 text-green-600 text-[9px]">
                <TrendingUp className="w-2.5 h-2.5" />
                +28%
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 group hover:border-violet-500/50 transition-all">
              <div className="flex items-center gap-1.5 mb-1">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span className="text-gray-400 text-[10px]">Requêtes IA</span>
              </div>
              <div className="text-white text-lg font-bold">8.5K</div>
              <div className="flex items-center gap-1 text-green-600 text-[9px]">
                <TrendingUp className="w-2.5 h-2.5" />
                +45%
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Settings className="w-4 h-4 text-violet-400" />
              <span className="text-white text-xs font-semibold">Fonctionnalités</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-[11px]">Authentification sécurisée</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-[11px]">API REST & GraphQL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-[11px]">Dashboard analytics temps réel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-[11px]">IA intégrée (GPT, Mistral)</span>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="bg-gradient-to-r from-green-950/30 to-blue-950/30 border border-green-500/30 rounded-lg p-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="text-green-400 text-[10px] font-semibold">Sécurité RGPD</div>
              <div className="text-gray-400 text-[9px]">Hébergement Europe • Chiffrement E2E</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
