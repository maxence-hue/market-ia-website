'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Loader2 } from 'lucide-react'
import { Metadata } from 'next'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Bonjour ! Je suis votre assistant IA. Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Appel direct au webhook n8n
      const response = await fetch('https://adsolar.app.n8n.cloud/webhook/58090386-2c10-4ce8-b8ce-1c1f7e6d3a04/chat', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'sendMessage',
          chatInput: input,
          sessionId: getSessionId()
        })
      })

      console.log('Response status:', response.status)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Error response:', errorText)
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const contentType = response.headers.get('content-type')
      let data
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json()
      } else {
        const text = await response.text()
        data = { output: text }
      }
      
      console.log('Response from n8n:', data)
      
      // Essayer différents champs de réponse possibles
      let responseText = ''
      if (typeof data === 'string') {
        responseText = data
      } else if (data.output) {
        responseText = data.output
      } else if (data.response) {
        responseText = data.response
      } else if (data.message) {
        responseText = data.message
      } else if (data.text) {
        responseText = data.text
      } else if (data.data) {
        responseText = typeof data.data === 'string' ? data.data : JSON.stringify(data.data)
      } else {
        responseText = JSON.stringify(data)
      }
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: responseText || 'Désolé, je n\'ai pas pu traiter votre demande.',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Erreur complète:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content: `Erreur de connexion: ${error instanceof Error ? error.message : 'Erreur inconnue'}. Vérifiez que le workflow n8n est actif.`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const getSessionId = () => {
    let sessionId = localStorage.getItem('chatSessionId')
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem('chatSessionId', sessionId)
    }
    return sessionId
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[90vh] bg-dark-surface rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Assistant IA Market-IA</h1>
              <p className="text-sm text-white/80">Toujours là pour vous aider</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
              )}
              <div
                className={`max-w-[70%] rounded-2xl px-5 py-3 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-primary to-primary-light text-white'
                    : 'bg-white/5 text-light border border-white/10'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                <span className={`text-xs mt-2 block ${
                  message.role === 'user' ? 'text-white/70' : 'text-light/50'
                }`}>
                  {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              {message.role === 'user' && (
                <div className="w-8 h-8 bg-light/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-light" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div className="bg-white/5 rounded-2xl px-5 py-3 border border-white/10">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-primary animate-spin" />
                  <span className="text-sm text-light/70">En train d&apos;écrire...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 bg-dark-surface border-t border-white/10">
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Écrivez votre message..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-light placeholder-light/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span className="hidden sm:inline">Envoyer</span>
                </>
              )}
            </button>
          </div>
          <p className="text-xs text-light/40 mt-3 text-center">
            Propulsé par Market-IA • IA conversationnelle avancée
          </p>
        </div>
      </div>
    </div>
  )
}
