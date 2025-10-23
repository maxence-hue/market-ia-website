'use client'

import { Bot, Zap, Database, MessageSquare, Workflow, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

export function AutomationIllustration() {
  return (
    <div className="w-full h-[400px] bg-[#0a0a1a] rounded-xl p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-950/50 border border-violet-600/50 rounded-full mb-2">
            <Bot className="w-3 h-3 text-violet-400" />
            <span className="text-violet-400 text-xs">Création d&apos;Agent IA</span>
          </div>
          <h3 className="text-white text-lg mb-1">Construisez Votre Agent Intelligent</h3>
          <p className="text-gray-400 text-xs">Configuration visuelle sans code requis</p>
        </div>

        {/* Agent Builder Visual */}
        <div className="flex-1 flex items-center gap-4">
          {/* Left Side - Configuration Blocks */}
          <div className="flex-1 space-y-2.5">
            {/* Block 1 - Déclencheur */}
            <div className="bg-white/5 border border-violet-500/50 rounded-lg p-2.5 hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <Zap className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-white text-xs mb-0.5">Déclencheur</div>
                  <div className="text-gray-400 text-[10px]">Email, webhook, planification</div>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              </div>
            </div>

            {/* Block 2 - Source de données */}
            <div className="bg-white/5 border border-violet-500/50 rounded-lg p-2.5 hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <Database className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-white text-xs mb-0.5">Source de Données</div>
                  <div className="text-gray-400 text-[10px]">Base de connaissances, API</div>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              </div>
            </div>

            {/* Block 3 - Modèle IA */}
            <div className="bg-white/5 border border-violet-500/50 rounded-lg p-2.5 hover:bg-white/10 transition-all group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg opacity-50 blur"></div>
              <div className="relative bg-[#0a0a1a] rounded-lg p-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/50">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-xs mb-0.5">Modèle IA</div>
                    <div className="text-gray-400 text-[10px]">GPT-4, Claude, Gemini</div>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                </div>
              </div>
            </div>

            {/* Block 4 - Instructions */}
            <div className="bg-white/5 border border-violet-500/50 rounded-lg p-2.5 hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-white text-xs mb-0.5">Instructions</div>
                  <div className="text-gray-400 text-[10px]">Personnalisez le comportement</div>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              </div>
            </div>

            {/* Block 5 - Actions */}
            <div className="bg-white/5 border border-violet-500/50 rounded-lg p-2.5 hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <Workflow className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-white text-xs mb-0.5">Actions</div>
                  <div className="text-gray-400 text-[10px]">Réponse, email, notification</div>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              </div>
            </div>
          </div>

          {/* Arrow Separator */}
          <div className="flex-shrink-0">
            <ArrowRight className="w-8 h-8 text-violet-400" />
          </div>

          {/* Right Side - Agent Preview */}
          <div className="flex-1">
            <div className="bg-gradient-to-br from-violet-950/50 to-purple-950/50 border border-violet-500/50 rounded-xl p-4 h-full flex flex-col items-center justify-center shadow-2xl shadow-violet-500/20">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-violet-500/50 mb-4 relative">
                <Bot className="w-8 h-8 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0a1a] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
              <h4 className="text-white text-sm mb-1">Agent Support Client</h4>
              <p className="text-gray-400 text-xs text-center mb-3">Répond automatiquement aux questions courantes</p>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs">Actif</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-gray-400">
            <CheckCircle2 className="w-3 h-3" />
            <span>5 composants configurés</span>
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center gap-1.5 text-green-400">
            <CheckCircle2 className="w-3 h-3" />
            <span>Prêt à déployer</span>
          </div>
        </div>
      </div>
    </div>
  )
}
