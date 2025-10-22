import fs from 'fs/promises'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export async function readJSON<T>(filepath: string): Promise<T | null> {
  try {
    const fullPath = path.join(CONTENT_DIR, filepath)
    const content = await fs.readFile(fullPath, 'utf-8')
    return JSON.parse(content)
  } catch {
    return null
  }
}

export async function writeJSON(filepath: string, data: any): Promise<void> {
  const fullPath = path.join(CONTENT_DIR, filepath)
  await fs.mkdir(path.dirname(fullPath), { recursive: true })
  await fs.writeFile(fullPath, JSON.stringify(data, null, 2), 'utf-8')
}

export async function readMDX(filepath: string): Promise<string | null> {
  try {
    const fullPath = path.join(CONTENT_DIR, filepath)
    return await fs.readFile(fullPath, 'utf-8')
  } catch {
    return null
  }
}

export async function writeMDX(filepath: string, content: string): Promise<void> {
  const fullPath = path.join(CONTENT_DIR, filepath)
  await fs.mkdir(path.dirname(fullPath), { recursive: true })
  await fs.writeFile(fullPath, content, 'utf-8')
}

export async function listFiles(directory: string): Promise<string[]> {
  try {
    const fullPath = path.join(CONTENT_DIR, directory)
    return await fs.readdir(fullPath)
  } catch {
    return []
  }
}

export async function deleteFile(filepath: string): Promise<void> {
  const fullPath = path.join(CONTENT_DIR, filepath)
  await fs.unlink(fullPath)
}
