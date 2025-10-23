'use client'

import { Layout, Palette, Smartphone, Rocket, Zap, CheckCircle } from 'lucide-react'

export function WebsiteIllustration() {
  return (
    <div className="w-full h-[400px] bg-[#0a0a1a] rounded-xl p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-950/50 border border-violet-600/50 rounded-full mb-2">
            <Layout className="w-3 h-3 text-violet-400" />
            <span className="text-violet-400 text-xs">Création Web Pro</span>
          </div>
          <h3 className="text-white text-lg mb-1">Sites Internet & Landing Pages</h3>
          <p className="text-gray-400 text-xs">Design moderne • Responsive • Performance optimale</p>
        </div>

        {/* Main Illustration - Website Builder Concept */}
        <div className="flex-1 flex items-center gap-4">
          {/* Left: Process Steps */}
          <div className="flex flex-col gap-2.5 w-1/3">
            {/* Step 1 */}
            <div className="flex items-start gap-2 p-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-violet-500/50 transition-all">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/30">
                <Palette className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white text-xs mb-0.5">Design UI/UX</h4>
                <p className="text-gray-500 text-[10px]">Interface moderne</p>
              </div>
              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-2 p-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-violet-500/50 transition-all">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/30">
                <Layout className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white text-xs mb-0.5">Développement</h4>
                <p className="text-gray-500 text-[10px]">Code optimisé</p>
              </div>
              <div className="w-3 h-3 rounded-full border-2 border-violet-500 flex-shrink-0 mt-0.5 animate-pulse"></div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-2 p-2.5 bg-white/5 border border-white/10 rounded-lg opacity-60">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-3.5 h-3.5 text-gray-500" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-400 text-xs mb-0.5">Mise en ligne</h4>
                <p className="text-gray-600 text-[10px]">Déploiement</p>
              </div>
            </div>
          </div>

          {/* Center: Visual Mockup */}
          <div className="flex-1 flex flex-col items-center justify-center">
            {/* Browser/Website Mockup */}
            <div className="w-full max-w-xs bg-white/5 border border-white/20 rounded-lg overflow-hidden shadow-2xl">
              {/* Browser bar */}
              <div className="bg-white/10 px-2 py-1.5 flex items-center gap-1.5 border-b border-white/10">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/70"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/70"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/70"></div>
                </div>
                <div className="flex-1 bg-white/5 rounded px-2 py-0.5">
                  <p className="text-gray-500 text-[10px]">www.votre-site.com</p>
                </div>
              </div>

              {/* Website content */}
              <div className="bg-gradient-to-br from-violet-950/30 to-purple-950/30 p-4 space-y-3">
                {/* Header */}
                <div className="space-y-1.5">
                  <div className="h-2 bg-violet-500/40 rounded w-3/4"></div>
                  <div className="h-1.5 bg-white/20 rounded w-1/2"></div>
                </div>

                {/* Content blocks */}
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="aspect-square bg-violet-500/30 rounded"></div>
                  <div className="aspect-square bg-violet-500/30 rounded"></div>
                  <div className="aspect-square bg-violet-500/30 rounded"></div>
                </div>

                {/* CTA */}
                <div className="flex gap-1.5">
                  <div className="h-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded flex-1 flex items-center justify-center">
                    <Zap className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive indicator */}
            <div className="flex items-center gap-1.5 mt-3">
              <Layout className="w-3 h-3 text-violet-400" />
              <Smartphone className="w-3 h-3 text-violet-400" />
              <span className="text-gray-500 text-[10px] ml-0.5">100% Responsive</span>
            </div>
          </div>

          {/* Right: Features */}
          <div className="flex flex-col gap-2 w-1/3">
            <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Zap className="w-3 h-3 text-violet-400" />
                <span className="text-white text-xs">Performance</span>
              </div>
              <p className="text-gray-500 text-[10px]">Temps de chargement ultra-rapide</p>
            </div>

            <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Smartphone className="w-3 h-3 text-violet-400" />
                <span className="text-white text-xs">Mobile-First</span>
              </div>
              <p className="text-gray-500 text-[10px]">Optimisé pour tous les écrans</p>
            </div>

            <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Rocket className="w-3 h-3 text-violet-400" />
                <span className="text-white text-xs">SEO Ready</span>
              </div>
              <p className="text-gray-500 text-[10px]">Référencement optimisé</p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-around text-xs">
          <div className="text-center">
            <div className="text-white mb-0.5">7 jours</div>
            <div className="text-gray-500 text-[10px]">Livraison moyenne</div>
          </div>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="text-center">
            <div className="text-white mb-0.5">100%</div>
            <div className="text-gray-500 text-[10px]">Satisfaction client</div>
          </div>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="text-center">
            <div className="text-white mb-0.5">Support</div>
            <div className="text-gray-500 text-[10px]">Maintenance incluse</div>
          </div>
        </div>
      </div>
    </div>
  )
}
