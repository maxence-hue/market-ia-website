'use client'

import React, { useState, useMemo, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronRight, ChevronLeft, Check, Phone, Mail, MapPin, Clock, Users, Award, 
  Shield, Star, ArrowLeft, Send, Loader2, AlertTriangle, CheckCircle2, XCircle,
  Zap, Palette, Rocket, GraduationCap, Lightbulb, X, Linkedin, Facebook, Instagram
} from 'lucide-react'

const WEBHOOK_URL = 'https://adsolar.app.n8n.cloud/webhook-test/bf10f266-a132-41c2-bcd7-cce7b916b26d'

function getUtmParams() {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']
  return keys.reduce((acc: Record<string, string>, key) => {
    const value = params.get(key)
    if (value) acc[key] = value
    return acc
  }, {})
}

function computeLeadScore(answers: Record<string, string | boolean>) {
  let score = 0
  if (answers.funding === 'CPF') score += 4
  if (answers.funding === 'Employeur') score += 3
  if (answers.funding === 'Personnel') score += 1
  if (answers.timeframe === 'Sous 30 jours') score += 4
  if (answers.timeframe === '1 à 3 mois') score += 2
  if (answers.canAttend === 'Oui') score += 2
  if (typeof answers.phone === 'string' && answers.phone.trim()) score += 1
  if (typeof answers.email === 'string' && answers.email.trim()) score += 1
  return score
}

function scoreToTemperature(score: number) {
  if (score >= 9) return 'hot'
  if (score >= 6) return 'warm'
  return 'cold'
}

function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: string }) {
  const baseClass = "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
  const variants: Record<string, string> = {
    default: "bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF]",
    success: "bg-green-500/10 border border-green-500/30 text-green-400"
  }
  return <span className={`${baseClass} ${variants[variant] || variants.default}`}>{children}</span>
}

function InfoBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white">
      <span>{icon}</span><span>{text}</span>
    </span>
  )
}

function Button({ children, href, onClick, variant = 'primary', size = 'md', className = '', disabled = false }: { 
  children: React.ReactNode; href?: string; onClick?: () => void; variant?: string; size?: string; className?: string; disabled?: boolean 
}) {
  const baseClass = "inline-flex items-center justify-center gap-2 font-semibold transition-all rounded-xl"
  const sizes: Record<string, string> = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg", full: "w-full px-6 py-4 text-base" }
  const variants: Record<string, string> = {
    primary: "bg-gradient-to-r from-[#7C4DFF] to-[#00BCD4] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline: "bg-transparent border-2 border-white/20 text-white hover:bg-white/10",
    secondary: "bg-white text-[#7C4DFF] hover:bg-white/90"
  }
  const classes = `${baseClass} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className} ${disabled ? 'opacity-50 pointer-events-none' : ''}`
  if (href) return <a href={href} className={classes}>{children}</a>
  return <button onClick={onClick} className={classes} disabled={disabled}>{children}</button>
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 ${className}`}>{children}</div>
}

function Section({ children, id, dark, pattern, className = '' }: { children: React.ReactNode; id?: string; dark?: boolean; pattern?: boolean; className?: string }) {
  return (
    <section id={id} className={`py-16 px-4 md:px-6 ${dark ? 'bg-[#0f1f35]' : 'bg-[#0a1628]'} ${pattern ? 'dot-pattern' : ''} ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}

function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{children}</h2>
      {subtitle && <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

function QualificationQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | boolean>>({
    objective: '', role: '', funding: '', timeframe: '', canAttend: '',
    firstName: '', lastName: '', email: '', phone: '', city: '', callTime: '', consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const firstFocusableRef = useRef<HTMLButtonElement>(null)

  const score = useMemo(() => computeLeadScore(answers), [answers])
  const temperature = useMemo(() => scoreToTemperature(score), [score])
  const totalSteps = 4

  useEffect(() => {
    if (typeof window === 'undefined') return
    const focusQuiz = () => {
      if (window.location.hash === '#questionnaire') {
        window.setTimeout(() => firstFocusableRef.current?.focus?.(), 150)
      }
    }
    focusQuiz()
    window.addEventListener('hashchange', focusQuiz)
    return () => window.removeEventListener('hashchange', focusQuiz)
  }, [])

  const update = (key: string, value: string | boolean) => setAnswers(prev => ({ ...prev, [key]: value }))

  const isStepValid = useMemo(() => {
    if (step === 0) return Boolean(answers.objective)
    if (step === 1) return Boolean(answers.role)
    if (step === 2) return Boolean(answers.funding) && Boolean(answers.timeframe) && Boolean(answers.canAttend)
    if (step === 3) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(answers.email).trim())
      const phoneOk = /^[0-9 +().-]{8,}$/.test(String(answers.phone).trim())
      return Boolean(String(answers.firstName).trim()) && Boolean(String(answers.lastName).trim()) && emailOk && phoneOk && Boolean(String(answers.city).trim()) && answers.consent
    }
    return false
  }, [answers, step])

  const next = () => { if (isStepValid) setStep(s => Math.min(totalSteps - 1, s + 1)) }
  const prev = () => setStep(s => Math.max(0, s - 1))

  const submit = async () => {
    if (!isStepValid || isSubmitting) return
    setIsSubmitting(true)
    setSubmitError('')
    try {
      const payload = { form: 'qualification_quiz_v1', createdAt: new Date().toISOString(), pageUrl: typeof window !== 'undefined' ? window.location.href : '', utm: getUtmParams(), answers, lead: { score, temperature } }
      try {
        const res = await fetch(WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        if (!res.ok) throw new Error(`Webhook error: ${res.status}`)
      } catch {
        const form = new URLSearchParams()
        Object.entries(payload.answers || {}).forEach(([key, value]) => form.set(key, String(value)))
        form.set('lead_score', String(score))
        form.set('lead_temperature', temperature)
        await fetch(WEBHOOK_URL, { method: 'POST', mode: 'no-cors', body: form })
      }
      setIsSuccess(true)
    } catch {
      setSubmitError("Impossible d'envoyer vos réponses. Vous pouvez nous appeler directement.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const stepTitle = ['Objectif', 'Profil', 'Financement', 'Coordonnées'][step]

  return (
    <section id="questionnaire" className="py-14 md:py-20 px-6 bg-gradient-to-b from-[#0f1f35] to-[#0a1628] dot-pattern relative overflow-hidden">
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#7C4DFF]/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4"><Badge>QUESTIONNAIRE DE QUALIFICATION</Badge></div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Vérifiez en 60 secondes si cette formation est faite pour vous</h2>
          <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto">Objectif : vous rappeler uniquement si votre projet est mûr (places limitées).</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
          {isSuccess ? (
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-[#00E676] mb-3"><CheckCircle2 className="w-6 h-6" /><span className="font-semibold">Réponses envoyées</span></div>
              <h3 className="text-xl font-bold text-white mb-3">Merci !</h3>
              <p className="text-[#94A3B8] mb-6">Un conseiller Market-IA revient vers vous rapidement.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button href="tel:+33618180598" size="lg"><Phone className="w-4 h-4" />Appeler 06 18 18 05 98</Button>
                <Button href="#tarif" variant="outline" size="lg">Voir les tarifs</Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <div><p className="text-[#94A3B8] text-sm">Étape {step + 1}/{totalSteps}</p><p className="text-white font-semibold">{stepTitle}</p></div>
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#7C4DFF] to-[#00D4FF]" style={{ width: `${((step + 1) / totalSteps) * 100}%` }} /></div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                  {step === 0 && (
                    <div><p className="text-white font-semibold mb-4">Quel est votre objectif principal ?</p>
                      <div className="grid gap-3">{['Gagner du temps sur la rédaction', 'Créer du contenu marketing', 'Produire des visuels & vidéos', 'Automatiser des tâches', 'Autre'].map((value, i) => (
                        <button key={value} ref={i === 0 ? firstFocusableRef : undefined} type="button" onClick={() => update('objective', value)} className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${answers.objective === value ? 'border-[#00D4FF]/60 bg-[#00D4FF]/10 text-white' : 'border-white/10 bg-white/5 text-[#94A3B8] hover:bg-white/10 hover:text-white'}`}>{value}</button>
                      ))}</div>
                    </div>
                  )}
                  {step === 1 && (
                    <div><p className="text-white font-semibold mb-4">Quel profil vous décrit le mieux ?</p>
                      <div className="grid gap-3">{['Dirigeant / Décideur', 'Marketing / Communication', 'RH / Formation', 'Freelance', 'Autre'].map((value) => (
                        <button key={value} type="button" onClick={() => update('role', value)} className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${answers.role === value ? 'border-[#00D4FF]/60 bg-[#00D4FF]/10 text-white' : 'border-white/10 bg-white/5 text-[#94A3B8] hover:bg-white/10 hover:text-white'}`}>{value}</button>
                      ))}</div>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div><p className="text-white font-semibold mb-4">Comment souhaitez-vous financer ?</p>
                        <div className="grid gap-3">{['CPF', 'Employeur', 'Personnel', 'Je ne sais pas encore'].map((value) => (
                          <button key={value} type="button" onClick={() => update('funding', value)} className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${answers.funding === value ? 'border-[#00D4FF]/60 bg-[#00D4FF]/10 text-white' : 'border-white/10 bg-white/5 text-[#94A3B8] hover:bg-white/10 hover:text-white'}`}>{value}</button>
                        ))}</div>
                      </div>
                      <div><p className="text-white font-semibold mb-4">Quand souhaitez-vous démarrer ?</p>
                        <div className="grid gap-3">{['Sous 30 jours', '1 à 3 mois', 'Plus tard'].map((value) => (
                          <button key={value} type="button" onClick={() => update('timeframe', value)} className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${answers.timeframe === value ? 'border-[#00D4FF]/60 bg-[#00D4FF]/10 text-white' : 'border-white/10 bg-white/5 text-[#94A3B8] hover:bg-white/10 hover:text-white'}`}>{value}</button>
                        ))}</div>
                      </div>
                      <div><p className="text-white font-semibold mb-4">Êtes-vous disponible pour venir à Toulon ?</p>
                        <div className="grid gap-3 sm:grid-cols-2">{['Oui', 'Non'].map((value) => (
                          <button key={value} type="button" onClick={() => update('canAttend', value)} className={`w-full text-center px-4 py-3 rounded-xl border transition-colors ${answers.canAttend === value ? 'border-[#00D4FF]/60 bg-[#00D4FF]/10 text-white' : 'border-white/10 bg-white/5 text-[#94A3B8] hover:bg-white/10 hover:text-white'}`}>{value}</button>
                        ))}</div>
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div className="space-y-4">
                      <p className="text-white font-semibold">Où doit-on vous rappeler ?</p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div><label className="block text-sm text-[#94A3B8] mb-1">Prénom</label><input value={String(answers.firstName)} onChange={(e) => update('firstName', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50" placeholder="Votre prénom" /></div>
                        <div><label className="block text-sm text-[#94A3B8] mb-1">Nom</label><input value={String(answers.lastName)} onChange={(e) => update('lastName', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50" placeholder="Votre nom" /></div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div><label className="block text-sm text-[#94A3B8] mb-1">Email</label><input value={String(answers.email)} onChange={(e) => update('email', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50" placeholder="prenom@entreprise.com" inputMode="email" /></div>
                        <div><label className="block text-sm text-[#94A3B8] mb-1">Téléphone</label><input value={String(answers.phone)} onChange={(e) => update('phone', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50" placeholder="06 00 00 00 00" inputMode="tel" /></div>
                      </div>
                      <div><label className="block text-sm text-[#94A3B8] mb-1">Ville</label><input value={String(answers.city)} onChange={(e) => update('city', e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50" placeholder="Toulon, Hyères…" /></div>
                      <label className="flex items-start gap-3 text-[#94A3B8] text-sm mt-2"><input type="checkbox" checked={Boolean(answers.consent)} onChange={(e) => update('consent', e.target.checked)} className="mt-1" /><span>J&apos;accepte d&apos;être contacté par Market-IA au sujet de cette formation.</span></label>
                      {submitError && <div className="flex items-start gap-2 text-[#FF5252] bg-[#FF5252]/10 border border-[#FF5252]/20 rounded-xl p-4"><AlertTriangle className="w-5 h-5 mt-0.5" /><p className="text-sm text-white">{submitError}</p></div>}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button onClick={prev} variant="outline" size="md" className={step === 0 ? 'opacity-40 pointer-events-none' : ''}><ArrowLeft className="w-4 h-4" />Retour</Button>
                {step < totalSteps - 1 ? (
                  <Button onClick={next} size="md" className={`${!isStepValid ? 'opacity-60 pointer-events-none' : ''} flex-1`}>Continuer</Button>
                ) : (
                  <Button onClick={submit} size="md" disabled={!isStepValid || isSubmitting} className="flex-1">{isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" />Envoi...</> : <><Send className="w-4 h-4" />Envoyer & être rappelé</>}</Button>
                )}
              </div>
              <p className="text-[#94A3B8] text-xs mt-4 text-center">Vos informations restent confidentielles.</p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-12 bg-gradient-to-b from-[#0f1f35] to-[#0a1628] dot-pattern relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#7C4DFF]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div className="mb-8 flex items-center justify-center gap-3" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C4DFF] to-[#00D4FF] flex items-center justify-center shadow-lg overflow-hidden">
            <img src="https://market-ia.fr/_next/image?url=%2Flogo-marketia-white.png&w=1920&q=75" alt="Market-IA" className="w-full h-full object-contain p-2" loading="lazy" />
          </div>
          <div className="text-left"><span className="text-2xl font-bold text-white block">Market<span className="text-[#00D4FF]">-IA</span></span><span className="text-xs text-[#94A3B8]">Formation Savoir<span className="text-[#00D4FF]">IA</span>®</span></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-6"><Badge>FORMATION CERTIFIANTE RS6776</Badge></motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"><span className="text-white">Maîtrisez l&apos;IA Générative</span><br /><span className="text-[#00D4FF]">en 3 jours</span></motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-[#94A3B8] text-base md:text-lg mb-8 max-w-2xl mx-auto">21 heures de formation intensive pour créer des contenus professionnels avec l&apos;intelligence artificielle</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap justify-center gap-3 mb-8"><InfoBadge icon="📍" text="Toulon" /><InfoBadge icon="📅" text="20-22 Janvier" /><InfoBadge icon="💰" text="CPF : reste 102€" /></motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mb-4"><Button href="#questionnaire" size="full" className="max-w-md mx-auto">Je me forme à l&apos;IA →</Button></motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="text-[#94A3B8] text-sm flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00E676]" />Places limitées à 8 personnes</motion.p>
      </div>
    </section>
  )
}

function Problems() {
  const painPoints = [
    { icon: <XCircle className="w-8 h-8 text-[#FF5252]" />, title: "Des résultats frustrants", description: "Vos prompts génèrent du contenu plat, sans personnalité. Vous savez que l'IA peut faire mieux, mais comment ?" },
    { icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />, title: "La peur de mal faire", description: "Droits d'auteur, données confidentielles, IA Act... Un faux pas peut coûter cher à votre entreprise." },
    { icon: <Clock className="w-8 h-8 text-orange-400" />, title: "Un temps précieux gaspillé", description: "Vous reformulez 10 fois vos demandes. L'IA devait vous faire gagner du temps, pas vous en faire perdre." }
  ]
  return (
    <Section dark><SectionTitle>Vous utilisez l&apos;IA mais...</SectionTitle>
      <div className="grid gap-6 md:grid-cols-3">{painPoints.map((point, index) => (
        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
          <Card className="h-full text-center"><div className="mb-4 flex justify-center">{point.icon}</div><h3 className="text-lg font-bold text-white mb-3">{point.title}</h3><p className="text-[#94A3B8] text-sm">{point.description}</p></Card>
        </motion.div>
      ))}</div>
      <div className="mt-10 flex justify-center"><Button href="#questionnaire" size="full" className="max-w-md mx-auto">Je passe à l&apos;IA →</Button></div>
    </Section>
  )
}

function Transformation() {
  const beforeItems = ["Prompts qui ne fonctionnent pas", "Peur de mal utiliser l'IA", "Aucune méthodologie", "Contenus génériques", "Risques juridiques flous"]
  const afterItems = ["Maîtrise du Prompt Engineering", "Conformité RGPD & IA Act", "Méthode structurée SavoirIA®", "Contenus professionnels en minutes", "Certification reconnue RS6776"]
  return (
    <Section pattern><SectionTitle>En 3 jours, transformez votre façon de travailler</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 border-l-4 border-l-[#FF5252]">
          <div className="flex items-center gap-2 mb-6"><X className="w-6 h-6 text-[#FF5252]" /><h3 className="text-lg font-bold text-white">Avant la formation</h3></div>
          <ul className="space-y-3">{beforeItems.map((item, index) => (<li key={index} className="flex items-start gap-3 text-[#94A3B8]"><X className="w-5 h-5 text-[#FF5252] flex-shrink-0 mt-0.5" /><span>{item}</span></li>))}</ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 border-l-4 border-l-[#00E676]">
          <div className="flex items-center gap-2 mb-6"><Check className="w-6 h-6 text-[#00E676]" /><h3 className="text-lg font-bold text-white">Après la formation</h3></div>
          <ul className="space-y-3">{afterItems.map((item, index) => (<li key={index} className="flex items-start gap-3 text-white"><Check className="w-5 h-5 text-[#00E676] flex-shrink-0 mt-0.5" /><span>{item}</span></li>))}</ul>
        </motion.div>
      </div>
      <div className="mt-10 flex justify-center"><Button href="#questionnaire" size="full" className="max-w-md mx-auto">Je me forme à l&apos;IA →</Button></div>
    </Section>
  )
}

function Programme() {
  const programmeData = [
    { day: "JOUR 1", title: "Comprendre & Maîtriser", color: "#7C4DFF", modules: ["Introduction à l'IA Générative (3h)", "Prompt Engineering (3h)", "Sécurité & Confidentialité (1h)"] },
    { day: "JOUR 2", title: "Optimiser & Conformer", color: "#00E676", modules: ["Accessibilité & Inclusion (2h)", "Optimisation des contenus (3h)", "Conformité RGPD & IA Act (2h)"] },
    { day: "JOUR 3", title: "Créer & Produire", color: "#FF9800", modules: ["Rédaction assistée par IA (3h)", "Création visuelle avec IA (2h)", "IA & Productivité (2h)"] }
  ]
  return (
    <Section id="programme" dark><SectionTitle>Le programme de vos 3 jours</SectionTitle>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{programmeData.map((day, index) => (
        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
          <Card className="h-full"><div className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: day.color }}>{day.day}</div><h3 className="text-lg font-bold text-white mb-4">{day.title}</h3><ul className="space-y-2">{day.modules.map((module, i) => (<li key={i} className="flex items-start gap-2 text-[#94A3B8] text-sm"><Check className="w-4 h-4 text-[#00D4FF] flex-shrink-0 mt-0.5" /><span>{module}</span></li>))}</ul></Card>
        </motion.div>
      ))}</div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-12">
        <Card className="p-6 text-center border border-[#00D4FF]/30 max-w-2xl mx-auto"><div className="flex items-center justify-center gap-3"><GraduationCap className="w-8 h-8 text-[#00D4FF]" /><p className="text-white font-semibold">À l&apos;issue : Certification RS6776 - Création de contenus par IA générative</p></div></Card>
      </motion.div>
      <div className="mt-10 flex justify-center"><Button href="#questionnaire" size="full" className="max-w-md mx-auto">Je veux cette certification →</Button></div>
    </Section>
  )
}

function Tools() {
  const tools = [{ name: "ChatGPT-4o", icon: "🤖", tag: "Texte" }, { name: "Claude 3.5", icon: "🧠", tag: "Analyse" }, { name: "Gemini 3 Pro", icon: "✨", tag: "Multimodal" }, { name: "Mistral IA", icon: "🚀", tag: "Français" }, { name: "DALL·E 3", icon: "🎨", tag: "Images" }, { name: "Midjourney", icon: "🌈", tag: "Création" }, { name: "Sora", icon: "🎬", tag: "Vidéo" }, { name: "Firefly", icon: "🔥", tag: "Adobe" }]
  return (
    <Section><SectionTitle subtitle="Maîtrisez les outils IA les plus performants de 2025">Les outils que vous maîtriserez</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">{tools.map((tool, index) => (
        <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-center cursor-pointer transition-all hover:scale-105 hover:border-[#00D4FF]/50">
          <span className="text-3xl mb-2 block">{tool.icon}</span><span className="text-white font-semibold block">{tool.name}</span><span className="text-xs text-[#00D4FF]/70 mt-1 block">{tool.tag}</span>
        </motion.div>
      ))}</div>
      <div className="mt-10 flex justify-center"><Button href="#questionnaire" size="full" className="max-w-md mx-auto">Je maîtrise ces outils →</Button></div>
    </Section>
  )
}

function Benefits() {
  const benefits = [
    { icon: <Zap className="w-10 h-10 text-yellow-400" />, title: "Rédiger 10x plus vite", description: "Emails, rapports, articles... Produisez des contenus de qualité en quelques minutes" },
    { icon: <Palette className="w-10 h-10 text-pink-400" />, title: "Créer des visuels pro", description: "Générez des images professionnelles sans compétences graphiques" },
    { icon: <Shield className="w-10 h-10 text-[#00E676]" />, title: "Travailler en conformité", description: "Maîtrisez le cadre légal RGPD et IA Act pour utiliser l'IA sereinement" },
    { icon: <Rocket className="w-10 h-10 text-[#00D4FF]" />, title: "Automatiser vos tâches", description: "Gagnez jusqu'à 10h par semaine sur les tâches répétitives" }
  ]
  return (
    <Section dark><SectionTitle>Ce que vous saurez faire</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">{benefits.map((benefit, index) => (
        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
          <Card className="h-full"><div className="flex items-start gap-4"><div className="flex-shrink-0 p-3 rounded-xl bg-white/5">{benefit.icon}</div><div><h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3><p className="text-[#94A3B8] text-sm">{benefit.description}</p></div></div></Card>
        </motion.div>
      ))}</div>
      <div className="mt-10 flex justify-center"><Button href="#questionnaire" size="full" className="max-w-md mx-auto">Je booste ma productivité →</Button></div>
    </Section>
  )
}

function Pricing() {
  const includes = ["21 heures de formation présentielle", "Supports de cours complets", "Accès aux outils pendant la formation", "Passage certification RS6776", "Attestation de fin de formation", "Groupe limité à 8 personnes"]
  return (
    <Section id="tarif" dark><SectionTitle>Investissement & Financement</SectionTitle>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-xl mx-auto">
        <div className="bg-white/5 backdrop-blur-lg border border-[#00D4FF]/30 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#7C4DFF]/20 to-[#00D4FF]/20 p-6 text-center border-b border-white/10"><h3 className="text-lg font-bold text-white mb-1">FORMATION COMPLÈTE 21H</h3><p className="text-[#94A3B8] text-sm">Certification RS6776 incluse</p></div>
          <div className="p-6 text-center">
            <div className="mb-4"><span className="text-[#94A3B8] line-through text-lg">3 500€</span></div>
            <div className="text-5xl font-extrabold text-white mb-2">3 180€<span className="text-lg font-normal text-[#94A3B8]"> TTC</span></div>
            <motion.div initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="bg-[#00E676]/10 border border-[#00E676]/30 rounded-xl p-4 mt-6 mb-6">
              <div className="flex items-center justify-center gap-2 mb-2"><Lightbulb className="w-5 h-5 text-[#00E676]" /><span className="font-semibold text-[#00E676]">Finançable à 98% par votre CPF</span></div>
              <p className="text-white text-2xl font-bold">Reste à charge : 102,23€</p>
            </motion.div>
            <ul className="space-y-3 text-left mb-8">{includes.map((item, index) => (<li key={index} className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-[#00E676] flex-shrink-0" /><span>{item}</span></li>))}</ul>
            <div className="space-y-3"><Button href="#questionnaire" size="full">Je réserve ma place →</Button><Button href="https://www.moncompteformation.gouv.fr" variant="outline" size="full">Vérifier mon éligibilité CPF →</Button></div>
            <div className="mt-6 flex items-center justify-center gap-2 text-[#94A3B8] text-sm"><Shield className="w-4 h-4" /><span>Organisme certifié Qualiopi</span></div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

function Urgency() {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-[#7C4DFF] to-[#00D4FF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"><div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} /></div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4"><Clock className="w-6 h-6 text-white" /><span className="text-white font-bold text-lg">Session du 20-22 janvier 2025</span></div>
        <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 mb-6"><Users className="w-5 h-5 text-white/80" /><span className="text-white/90 text-lg">Plus que <strong className="text-white">3 places</strong> disponibles</span></motion.div>
        <Button href="#questionnaire" variant="secondary" size="lg">Je saisis cette opportunité →</Button>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0f1f35] border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7C4DFF] to-[#00D4FF] flex items-center justify-center overflow-hidden"><img src="https://market-ia.fr/_next/image?url=%2Flogo-marketia-white.png&w=1920&q=75" alt="Market-IA" className="w-full h-full object-contain p-2" loading="lazy" /></div>
              <div><span className="text-xl font-bold text-white">Market<span className="text-[#00D4FF]">-IA</span></span><span className="block text-xs text-[#94A3B8]">Formation SavoirIA®</span></div>
            </div>
            <p className="text-[#94A3B8] text-sm mb-4">Agence spécialisée en Intelligence Artificielle. Formation certifiante à l&apos;IA générative.</p>
            <div className="flex items-center gap-2 text-[#00E676] text-sm mb-4"><Shield className="w-4 h-4" /><span>Organisme certifié Qualiopi</span></div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/market-ia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#00D4FF] hover:bg-white/10 transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="https://www.facebook.com/marketia.fr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#00D4FF] hover:bg-white/10 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/market_ia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#00D4FF] hover:bg-white/10 transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:contact@market-ia.fr" className="flex items-center gap-2 text-[#94A3B8] hover:text-[#00D4FF] transition-colors text-sm"><Mail className="w-4 h-4" />contact@market-ia.fr</a></li>
              <li><a href="tel:+33618180598" className="flex items-center gap-2 text-[#94A3B8] hover:text-[#00D4FF] transition-colors text-sm"><Phone className="w-4 h-4" />06 18 18 05 98</a></li>
              <li><div className="flex items-start gap-2 text-[#94A3B8] text-sm"><MapPin className="w-4 h-4 mt-0.5" /><span>Toulon, Var (83)<br />Provence-Alpes-Côte d&apos;Azur</span></div></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Informations</h4>
            <ul className="space-y-2">
              <li><a href="#programme" className="text-[#94A3B8] hover:text-[#00D4FF] transition-colors text-sm">Programme</a></li>
              <li><a href="#tarif" className="text-[#94A3B8] hover:text-[#00D4FF] transition-colors text-sm">Tarifs</a></li>
              <li><a href="https://market-ia.fr/mentions-legales" className="text-[#94A3B8] hover:text-[#00D4FF] transition-colors text-sm">Mentions légales</a></li>
              <li><a href="https://market-ia.fr/cgv" className="text-[#94A3B8] hover:text-[#00D4FF] transition-colors text-sm">CGV</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-[#94A3B8] text-sm">
          <p>© {new Date().getFullYear()} Market-IA / SavoirIA®. Tous droits réservés.</p>
          <p className="mt-1">Certification RS6776 - France Compétences</p>
        </div>
      </div>
    </footer>
  )
}

function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-[#0a1628]/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 z-50">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm"><span className="text-[#94A3B8]">Reste à payer</span><p className="text-white font-bold">102€</p></div>
        <Button href="#questionnaire" size="md" className="flex-1 max-w-[200px]">Je m&apos;inscris →</Button>
      </div>
    </div>
  )
}

export default function FormationCPF1() {
  return (
    <div className="min-h-screen bg-[#0a1628]" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <QualificationQuiz />
      <Hero />
      <Problems />
      <Transformation />
      <Programme />
      <Tools />
      <Benefits />
      <Pricing />
      <Urgency />
      <Footer />
      <StickyFooter />
      <div className="h-20 md:hidden" />
    </div>
  )
}
