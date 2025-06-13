import fs from 'fs'
import path from 'path'

const blogDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  content: string
}

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(blogDirectory, fileName)
      const content = fs.readFileSync(fullPath, 'utf8')
      const metadataPath = path.join(blogDirectory, `${slug}.json`)
      const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'))

      return {
        slug,
        title: metadata.title,
        description: metadata.description,
        date: metadata.date,
        author: metadata.author,
        content,
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`)
    const content = fs.readFileSync(fullPath, 'utf8')
    const metadataPath = path.join(blogDirectory, `${slug}.json`)
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'))

    return {
      slug,
      title: metadata.title,
      description: metadata.description,
      date: metadata.date,
      author: metadata.author,
      content,
    }
  } catch {
    return null
  }
} 