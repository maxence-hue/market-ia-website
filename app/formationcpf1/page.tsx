'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Check, Phone, Mail, MapPin, Clock, Users, Award, TrendingUp, Shield, Star, ArrowRight } from 'lucide-react'

const WEBHOOK_URL = 'https://adsolar.app.n8n.cloud/webhook-test/bf10f266-a132-41c2-bcd7-cce7b916b26d'

const questions = [
  {
    id: 'nom',
    question: 'Quel est votre nom complet ?',
    type: 'text',
    placeholder: 'Jean Dupont',
    required: true
  },
  {
    id: 'email',
    question: 'Quel est votre email professionnel ?',
    type: 'email',
    placeholder: 'jean@entreprise.fr',
    required: true
  },
  {
    id: 'telephone',
    question: 'Quel est votre numéro de téléphone ?',
    type: 'tel',
    placeholder: '06 12 34 56 78',
    required: true
  },
  {
    id: 'situation',
    question: 'Quelle est votre situation actuelle ?',
    type: 'radio',
    options: [
      { value: 'emploi', label: 'En emploi (CDI/CDD)', score: 2 },
      { value: 'chercheur', label: 'En recherche d\'emploi', score: 3 },
      { value: 'etudiant', label: 'Étudiant', score: 1 },
      { value: 'independant', label: 'Indépendant/Freelance', score: 2 },
      { value: 'formation', label: 'En formation continue', score: 3 }
    ],
    required: true
  },
  {
    id: 'objectif',
    question: 'Quel est votre objectif principal ?',
    type: 'radio',
    options: [
      { value: 'performance', label: 'Améliorer ma performance au travail', score: 3 },
      { value: 'emploi', label: 'Trouver un meilleur emploi', score: 3 },
      { value: 'competences', label: 'Acquérir de nouvelles compétences', score: 2 },
      { value: 'entreprise', label: 'Développer mon entreprise', score: 2 },
      { value: 'curiosite', label: 'Curiosité personnelle', score: 1 }
    ],
    required: true
  },
  {
    id: 'experience',
    question: 'Quelle est votre expérience avec l\'IA ?',
    type: 'radio',
    options: [
      { value: 'debutant', label: 'Débutant total', score: 1 },
      { value: 'notions', label: 'Quelques notions', score: 2 },
      { value: 'utilisateur', label: 'J\'utilise déjà des outils IA', score: 3 },
      { value: 'avance', label: 'Je maîtrise certains outils', score: 3 },
      { value: 'expert', label: 'Expert en IA', score: 2 }
    ],
    required: true
  },
  {
    id: 'disponibilite',
    question: 'Quelle est votre disponibilité pour la formation ?',
    type: 'radio',
    options: [
      { value: 'immediat', label: 'Dès que possible', score: 3 },
      { value: '1mois', label: 'Dans 1 mois', score: 2 },
      { value: '3mois', label: 'Dans 3 mois', score: 1 },
      { value: '6mois', label: 'Dans 6 mois', score: 1 },
      { value: 'information', label: 'Je cherche seulement des informations', score: 1 }
    ],
    required: true
  },
  {
    id: 'budget',
    question: 'Quel est votre budget pour la formation ?',
    type: 'radio',
    options: [
      { value: 'cpf', label: 'Formation CPF (prise en charge)', score: 3 },
      { value: 'entreprise', label: 'Prise en charge par mon entreprise', score: 3 },
      { value: '1000-2000', label: '1000€ - 2000€', score: 2 },
      { value: '2000-3000', label: '2000€ - 3000€', score: 2 },
      { value: 'moins1000', label: 'Moins de 1000€', score: 1 }
    ],
    required: true
  }
]

export default function FormationCPF1() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value })
    setError('')
  }

  const handleNext = () => {
    if (!answers[questions[currentStep].id]) {
      setError('Veuillez répondre à cette question avant de continuer.')
      return
    }
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const calculateScore = () => {
    let score = 0
    questions.forEach(question => {
      if (question.type === 'radio' && answers[question.id]) {
        const option = question.options?.find(opt => opt.value === answers[question.id])
        if (option) score += option.score
      }
    })
    return score
  }

  const getTemperature = (score: number) => {
    if (score >= 15) return 'hot'
    if (score >= 10) return 'warm'
    return 'cold'
  }

  const handleSubmit = async () => {
    if (!answers[questions[currentStep].id]) {
      setError('Veuillez répondre à cette question avant de continuer.')
      return
    }

    setIsSubmitting(true)
    setError('')

    const score = calculateScore()
    const temperature = getTemperature(score)

    const submissionData: Record<string, any> = {
      ...answers,
      score,
      temperature,
      timestamp: new Date().toISOString(),
      source: 'formationcpf1'
    }

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      if (!response.ok) {
        throw new Error('Erreur lors de la soumission')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Erreur webhook:', error)
      
      const formData = new FormData()
      Object.keys(submissionData).forEach(key => {
        formData.append(key, submissionData[key])
      })

      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        })
        setIsSubmitted(true)
      } catch (fallbackError) {
        console.error('Erreur fallback:', fallbackError)
        setError('Une erreur est survenue. Veuillez réessayer plus tard.')
      }
    }

    setIsSubmitting(false)
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Merci pour votre réponse !
            </h2>
            <p className="text-gray-600 mb-6">
              Nous avons bien reçu votre demande. Notre équipe vous contactera dans les plus brefs délais pour discuter de votre projet de formation.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>Prochaines étapes :</strong><br />
                • Analyse de votre profil<br />
                • Appel d&apos;évaluation personnalisé<br />
                • Proposition de formation adaptée
              </p>
            </div>
            <a 
              href="https://market-ia.fr" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retour au site Market-IA
            </a>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Formation IA Professionnelle</h1>
              <p className="text-blue-100">Évaluez votre éligibilité en 2 minutes</p>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Question {currentStep + 1} sur {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    {questions[currentStep].question}
                  </h2>

                  {questions[currentStep].type === 'text' || questions[currentStep].type === 'email' || questions[currentStep].type === 'tel' ? (
                    <input
                      type={questions[currentStep].type}
                      placeholder={questions[currentStep].placeholder}
                      value={answers[questions[currentStep].id] || ''}
                      onChange={(e) => handleAnswer(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      autoFocus
                    />
                  ) : (
                    <div className="space-y-3">
                      {questions[currentStep].options?.map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                            answers[questions[currentStep].id] === option.value
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name={questions[currentStep].id}
                            value={option.value}
                            checked={answers[questions[currentStep].id] === option.value}
                            onChange={(e) => handleAnswer(e.target.value)}
                            className="mr-3"
                          />
                          <span className="text-gray-900">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {error && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    currentStep === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Précédent
                </button>

                {currentStep === questions.length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    <Check className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Suivant
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Vos données sont protégées et ne seront utilisées que dans le cadre de votre demande de formation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
