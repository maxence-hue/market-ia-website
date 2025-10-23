'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, LucideIcon, Star } from 'lucide-react'
import Link from 'next/link'

interface OfferSectionProps {
  icon: LucideIcon
  title: string
  description: string
  startingPrice: string
  benefits: string[]
  references: { name: string; result: string }[]
  servicePage: string
  imageUrl?: string
  illustration?: React.ReactNode
  reversed?: boolean
}

export function OfferSection({
  icon: Icon,
  title,
  description,
  startingPrice,
  benefits,
  references,
  servicePage,
  imageUrl,
  illustration,
  reversed = false,
}: OfferSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={`${reversed ? 'lg:order-2' : ''}`}>
            {/* Price Badge - More Visible */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-xl border-2 border-primary mb-6 glow">
              <div className="p-2 bg-primary rounded-lg">
                <Icon className="text-light" size={28} />
              </div>
              <div>
                <div className="text-light/60 text-xs font-medium uppercase tracking-wider">
                  À partir de
                </div>
                <div className="text-light gradient-text text-3xl font-bold leading-none">
                  {startingPrice}€
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">{title}</h2>
            <p className="text-light/80 text-lg mb-8 leading-relaxed">
              {description}
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 p-1 bg-primary/20 rounded-full">
                    <Check size={16} className="text-primary" />
                  </div>
                  <span className="text-light">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={servicePage}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-light rounded-lg glow hover:bg-primary-dark transition-all duration-300"
            >
              <span>Découvrir {title}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${reversed ? 'lg:order-1' : ''}`}
          >
            <div className="relative glass rounded-2xl overflow-hidden p-2 group hover:border-primary/60 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {illustration ? (
                illustration
              ) : imageUrl ? (
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-[400px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                  <Icon className="w-32 h-32 text-primary/30" />
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* References - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 mb-6 justify-center">
            <Star className="w-5 h-5 text-primary" />
            <h3 className="text-light text-xl font-display font-bold">
              Résultats clients
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {references.map((ref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="mb-3">
                  <div className="text-light font-semibold text-lg mb-1">
                    {ref.name}
                  </div>
                  <div className="h-0.5 w-12 bg-primary mx-auto mb-3"></div>
                </div>
                <div className="text-primary font-medium">
                  {ref.result}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
