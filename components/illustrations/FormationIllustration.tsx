'use client'

import {
  Brain,
  Cpu,
  MessageSquare,
  Image,
  TrendingUp,
  Target,
  GraduationCap,
  Play,
  CheckCircle,
} from "lucide-react"

export function FormationIllustration() {
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
            <GraduationCap className="w-3 h-3 text-violet-400" />
            <span className="text-violet-400 text-xs">
              Parcours de Formation
            </span>
          </div>
          <h3 className="text-white text-lg mb-1">
            Maîtrisez l&apos;Intelligence Artificielle
          </h3>
          <p className="text-gray-400 text-xs">
            6 modules • 40h de formation • Certification incluse
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-3 gap-3 flex-1">
          {/* Module 1 */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-violet-500/50 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center mb-2 shadow-lg shadow-violet-500/30">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-white mb-0.5 text-xs">
              Introduction à l&apos;IA
            </h4>
            <p className="text-gray-500 text-[10px] mb-2">
              Concepts fondamentaux
            </p>
            <div className="flex items-center gap-1">
              <div className="flex-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-full h-full bg-green-500"></div>
              </div>
              <CheckCircle className="w-2.5 h-2.5 text-green-500" />
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-violet-500/50 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center mb-2 shadow-lg shadow-violet-500/30">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-white mb-0.5 text-xs">
              Machine Learning
            </h4>
            <p className="text-gray-500 text-[10px] mb-2">
              Algorithmes & modèles
            </p>
            <div className="flex items-center gap-1">
              <div className="flex-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-violet-500"></div>
              </div>
              <span className="text-gray-500 text-[10px]">67%</span>
            </div>
          </div>

          {/* Module 3 */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-violet-500/50 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center mb-2 shadow-lg shadow-violet-500/30">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-white mb-0.5 text-xs">
              NLP & ChatGPT
            </h4>
            <p className="text-gray-500 text-[10px] mb-2">
              Traitement du langage
            </p>
            <div className="flex items-center gap-1">
              <div className="flex-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-violet-500"></div>
              </div>
              <span className="text-gray-500 text-[10px]">33%</span>
            </div>
          </div>

          {/* Module 4 */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-violet-500/50 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center mb-2 shadow-lg shadow-violet-500/30">
              <Image className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-white mb-0.5 text-xs">
              Computer Vision
            </h4>
            <p className="text-gray-500 text-[10px] mb-2">
              Reconnaissance d&apos;images
            </p>
            <div className="flex items-center gap-1">
              <div className="flex-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-violet-500"></div>
              </div>
              <Play className="w-2.5 h-2.5 text-gray-500" />
            </div>
          </div>

          {/* Module 5 */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-violet-500/50 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center mb-2 shadow-lg shadow-violet-500/30">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-white mb-0.5 text-xs">
              IA pour Business
            </h4>
            <p className="text-gray-500 text-[10px] mb-2">
              Applications pratiques
            </p>
            <div className="flex items-center gap-1">
              <div className="flex-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-violet-500"></div>
              </div>
              <Play className="w-2.5 h-2.5 text-gray-500" />
            </div>
          </div>

          {/* Module 6 */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 hover:border-violet-500/50 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center mb-2 shadow-lg shadow-violet-500/30">
              <Target className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-white mb-0.5 text-xs">
              Projet Final
            </h4>
            <p className="text-gray-500 text-[10px] mb-2">
              Mise en pratique
            </p>
            <div className="flex items-center gap-1">
              <div className="flex-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-violet-500"></div>
              </div>
              <Play className="w-2.5 h-2.5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Progress Footer */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-gray-400 text-xs">
              Progression globale
            </span>
            <span className="text-white text-sm">55%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="w-[55%] h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
