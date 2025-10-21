'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServicePageProps {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  price: string
  priceDetails: string
  features: string[]
  process: { step: string; title: string; description: string }[]
  benefits: string[]
  cta: string
  testimonials: { name: string; role: string; quote: string; result: string }[]
  iconName?: string
}

export function ServicePage({
  icon: Icon,
  title,
  subtitle,
  description,
  price,
  priceDetails,
  features,
  process,
  benefits,
  cta,
  testimonials,
  iconName,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Icon className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-light">{subtitle}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 gradient-text">
              {title}
            </h1>

            <p className="text-xl text-light/80 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Price Badge */}
            <div className="inline-flex items-center gap-4 px-8 py-4 glass rounded-2xl border-2 border-primary mb-8 glow">
              <div>
                <div className="text-light/60 text-sm font-medium uppercase tracking-wider">
                  À partir de
                </div>
                <div className="text-light gradient-text text-4xl font-bold leading-none">
                  {price}€
                </div>
              </div>
              <div className="h-12 w-px bg-primary/30"></div>
              <div className="text-left">
                <div className="text-light/90 text-sm">{priceDetails}</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-light rounded-lg glow hover:bg-primary-dark transition-all duration-300 text-lg font-semibold"
            >
              <span>{cta}</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
          >
            Ce qui est <span className="gradient-text">inclus</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover:border-primary/60 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <Check size={20} className="text-primary" />
                  </div>
                  <span className="text-light">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
          >
            Notre <span className="gradient-text">processus</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass p-6 rounded-xl h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center mb-4 text-light font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-display font-bold text-light mb-3">
                    {step.title}
                  </h3>
                  <p className="text-light/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
          >
            Pourquoi nous <span className="gradient-text">choisir</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 glass p-6 rounded-xl"
              >
                <div className="mt-1 p-2 bg-primary/20 rounded-full">
                  <Check size={18} className="text-primary" />
                </div>
                <span className="text-light text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
          >
            Ils nous font <span className="gradient-text">confiance</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-xl"
              >
                <div className="mb-6">
                  <div className="text-light font-semibold text-lg mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-primary text-sm">{testimonial.role}</div>
                </div>
                <p className="text-light/80 italic mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="pt-4 border-t border-primary/20">
                  <div className="text-primary font-semibold">
                    {testimonial.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-dark-surface">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-2xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Prêt à démarrer ?
              </h2>
              <p className="text-xl text-light/70 mb-8">
                Discutons de votre projet et trouvons la solution parfaite pour vous
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-light rounded-lg glow hover:bg-primary-dark transition-all duration-300 text-lg font-semibold"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
