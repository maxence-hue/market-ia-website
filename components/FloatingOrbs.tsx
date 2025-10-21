'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Orb {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function FloatingOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([])

  useEffect(() => {
    // Create 8 floating orbs - moins d'éléments, mouvement divergent
    const newOrbs: Orb[] = Array.from({ length: 8 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 8
      const distance = 40 + Math.random() * 20 // 40-60% du centre
      
      return {
        id: i,
        x: 50 + Math.cos(angle) * distance,
        y: 50 + Math.sin(angle) * distance,
        size: Math.random() * 120 + 80, // 80-200px (plus petit)
        duration: Math.random() * 25 + 20, // 20-45s (plus lent)
        delay: Math.random() * 5,
      }
    })
    setOrbs(newOrbs)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {orbs.map((orb, index) => {
        const angle = (Math.PI * 2 * index) / 8
        const moveDistance = 150 // Distance de séparation en px
        
        return (
          <motion.div
            key={orb.id}
            className="absolute rounded-full"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: orb.size,
              height: orb.size,
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0) 70%)',
              filter: 'blur(50px)',
            }}
            animate={{
              x: [0, Math.cos(angle) * moveDistance, 0],
              y: [0, Math.sin(angle) * moveDistance, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: orb.duration,
              delay: orb.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )
      })}
    </div>
  )
}
