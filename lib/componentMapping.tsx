import { CTABanner } from '@/components/blog/CTABanner'
import { FAQ } from '@/components/blog/FAQ'
import ArticleSummary from '@/components/blog/ArticleSummary'

/**
 * Mapping des composants React pour Sanity
 * Associe chaque type de composant à son composant React
 */
export const componentMapping: Record<string, React.ComponentType<any>> = {
  ctaBanner: CTABanner,
  faq: FAQ,
  articleSummary: ArticleSummary,
  // Ajoutez d'autres composants ici au fur et à mesure
  // programmeFormation: ProgrammeFormation,
  // etc.
}
