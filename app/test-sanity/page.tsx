import { client } from '@/lib/sanity.client'

export const dynamic = 'force-dynamic'

export default async function TestSanityPage() {
  let error = null
  let posts = []
  let projectId = ''
  let dataset = ''

  try {
    projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'NON CONFIGURÉ'
    dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'NON CONFIGURÉ'
    
    // Test de connexion basique
    const query = `*[_type == "blogPost"] {
      _id,
      titre,
      publie,
      datePublication
    }`
    
    posts = await client.fetch(query)
  } catch (e: any) {
    error = e.message
  }

  return (
    <div className="min-h-screen bg-dark text-light p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">🔧 Test Connexion Sanity</h1>
        
        {/* Configuration */}
        <div className="bg-dark-surface p-6 rounded-lg mb-8 border border-primary/30">
          <h2 className="text-2xl font-bold mb-4">📋 Configuration</h2>
          <div className="space-y-2 font-mono text-sm">
            <p><strong>Project ID:</strong> {projectId}</p>
            <p><strong>Dataset:</strong> {dataset}</p>
            <p><strong>API Version:</strong> 2024-01-01</p>
          </div>
        </div>

        {/* Erreur */}
        {error && (
          <div className="bg-red-500/20 border border-red-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">❌ Erreur</h2>
            <p className="text-red-300">{error}</p>
          </div>
        )}

        {/* Résultats */}
        {!error && (
          <div className="bg-green-500/20 border border-green-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">✅ Connexion Réussie</h2>
            <p className="text-green-300">Nombre d'articles trouvés : <strong>{posts.length}</strong></p>
          </div>
        )}

        {/* Liste des articles */}
        {posts.length > 0 && (
          <div className="bg-dark-surface p-6 rounded-lg border border-primary/30">
            <h2 className="text-2xl font-bold mb-4">📝 Articles dans Sanity</h2>
            <div className="space-y-4">
              {posts.map((post: any) => (
                <div key={post._id} className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-bold">{post.titre}</p>
                  <p className="text-sm text-light/60">
                    ID: {post._id} | 
                    Publié: {post.publie ? '✅ Oui' : '❌ Non'} | 
                    Date: {new Date(post.datePublication).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-blue-500/20 border border-blue-500 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">💡 Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-300">
            <li>Si tu vois "NON CONFIGURÉ", ajoute les variables d'environnement</li>
            <li>Si tu vois une erreur, vérifie que le Project ID est correct</li>
            <li>Si tu vois 0 articles, crée un article dans Sanity Studio</li>
            <li>Si l'article n'est pas publié, coche "Publié" dans Sanity</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
