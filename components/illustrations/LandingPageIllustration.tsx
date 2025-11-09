'use client'

import {
  Rocket,
  Target,
  TrendingUp,
  MousePointerClick,
  BarChart4,
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export function LandingPageIllustration() {
  return (
    <div className="w-full h-[450px] md:h-[500px] bg-[#0a0a1a] rounded-xl p-6 md:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-violet-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-950/50 border border-pink-600/50 rounded-full mb-2">
            <Rocket className="w-3 h-3 text-pink-400" />
            <span className="text-pink-400 text-xs">
              Landing Page
            </span>
          </div>
          <h3 className="text-white text-lg md:text-xl mb-1">
            Conversion Optimisée par IA
          </h3>
          <p className="text-gray-400 text-xs">
            Design haute conversion • Livrée en 72h
          </p>
        </div>

        {/* Landing Page Mockup */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Hero Section Mock */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white text-xs font-bold">Votre Titre Accrocheur</div>
                  <div className="text-gray-400 text-[10px]">Sous-titre percutant</div>
                </div>
              </div>
            </div>
            
            {/* CTA Button Mock */}
            <div className="bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg p-2 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-pink-500/30 transition-all cursor-pointer">
              <span className="text-white text-xs font-bold">Commencer maintenant</span>
              <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Conversion Metrics */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 group hover:border-pink-500/50 transition-all">
              <div className="flex items-center gap-1.5 mb-2">
                <MousePointerClick className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-gray-400 text-[10px]">Taux de clic</span>
              </div>
              <div className="text-white text-2xl font-bold mb-1">8.7%</div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <span className="text-green-400 text-[9px]">+127% vs moyenne</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-3 group hover:border-pink-500/50 transition-all">
              <div className="flex items-center gap-1.5 mb-2">
                <Target className="w-3.5 h-3.5 text-violet-400" />
                <span className="text-gray-400 text-[10px]">Conversion</span>
              </div>
              <div className="text-white text-2xl font-bold mb-1">4.2%</div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <span className="text-green-400 text-[9px]">+89% vs avant</span>
              </div>
            </div>
          </div>

          {/* Features Highlights */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex-1">
            <div className="flex items-center gap-2 mb-3">
              <BarChart4 className="w-4 h-4 text-pink-400" />
              <span className="text-white text-xs font-semibold">Optimisations IA</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-[11px]">Titres optimisés pour CTR</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-[11px]">Design responsive 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-[11px]">A/B testing intégré</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-[11px]">Intégrations CRM (HubSpot, etc.)</span>
              </div>
            </div>
          </div>

          {/* Speed Badge */}
          <div className="bg-gradient-to-r from-pink-950/30 to-violet-950/30 border border-pink-500/30 rounded-lg p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Rocket className="w-3.5 h-3.5 text-pink-400" />
              </div>
              <div>
                <div className="text-pink-400 text-[10px] font-semibold">Livraison Express</div>
                <div className="text-gray-400 text-[9px]">Votre page en 72h maximum</div>
              </div>
            </div>
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
