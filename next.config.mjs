/** @type {import('next').NextConfig} */
const nextConfig = {
  // Augmenter la taille max des uploads (10 MB)
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  
  images: {
    // Domaines autorisés pour les images externes
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
    
    // Formats d'images modernes (WebP et AVIF)
    formats: ['image/webp', 'image/avif'],
    
    // Tailles d'écran pour le responsive
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    
    // Tailles d'images pour les composants
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Durée de cache (30 jours)
    minimumCacheTTL: 60 * 60 * 24 * 30,
    
    // Désactiver l'optimisation en dev pour plus de rapidité
    unoptimized: process.env.NODE_ENV === 'development',
  },
  
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

export default nextConfig
