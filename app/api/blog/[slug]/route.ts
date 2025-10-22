import { NextRequest, NextResponse } from 'next/server'
import { readMDX, writeMDX, deleteFile } from '@/lib/db/file-manager'
import { getSession } from '@/lib/auth/session'
import matter from 'gray-matter'

// GET - Récupérer un article
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const content = await readMDX(`blog/${params.slug}.mdx`)
    if (!content) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
    }

    const { data, content: markdown } = matter(content)

    return NextResponse.json({ 
      article: {
        ...data,
        content: markdown
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'article' },
      { status: 500 }
    )
  }
}

// PUT - Mettre à jour un article
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
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
    await writeMDX(`blog/${params.slug}.mdx`, mdxContent)

    return NextResponse.json({ success: true, article })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de l\'article' },
      { status: 500 }
    )
  }
}

// DELETE - Supprimer un article
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    await deleteFile(`blog/${params.slug}.mdx`)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de l\'article' },
      { status: 500 }
    )
  }
}
