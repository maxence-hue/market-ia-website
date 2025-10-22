import { NextRequest, NextResponse } from 'next/server'
import { readMDX, writeMDX, listFiles } from '@/lib/db/file-manager'
import { getSession } from '@/lib/auth/session'
import matter from 'gray-matter'

// GET - Liste tous les articles
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const published = searchParams.get('published')

    const files = await listFiles('blog')
    const articles = await Promise.all(
      files
        .filter(f => f.endsWith('.mdx'))
        .map(async (file) => {
          const content = await readMDX(`blog/${file}`)
          if (!content) return null
          
          const { data } = matter(content)
          
          // Filtres
          if (category && data.category !== category) return null
          if (published === 'true' && !data.published) return null
          
          return {
            slug: data.slug,
            title: data.title,
            excerpt: data.excerpt,
            coverImage: data.coverImage,
            date: data.date,
            category: data.category,
            author: data.author,
            readTime: data.readTime,
            published: data.published,
            tags: data.tags || []
          }
        })
    )

    const filteredArticles = articles
      .filter(a => a !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return NextResponse.json({ articles: filteredArticles })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des articles' },
      { status: 500 }
    )
  }
}

// POST - Créer un nouvel article
export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const { frontmatter, content } = await request.json()
    
    const article = {
      ...frontmatter,
      updatedAt: new Date().toISOString()
    }

    const mdxContent = matter.stringify(content, article)
    await writeMDX(`blog/${frontmatter.slug}.mdx`, mdxContent)

    return NextResponse.json({ success: true, article })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'article' },
      { status: 500 }
    )
  }
}
