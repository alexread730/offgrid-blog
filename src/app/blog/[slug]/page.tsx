import { getBlogPostBySlug } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import MDXContent from '@/components/MDXContent'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Await params before using params.slug
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Dynamically import the MDX file as a component
  const MDXComponent = (await import(`@/content/blog/${slug}.mdx`)).default

  return (
    <main className="min-h-screen bg-[#F5F5DC] py-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex justify-between items-center text-gray-600">
            <span>{post.author}</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>
        <div className="prose prose-lg max-w-none">
          <MDXContent>
            <MDXComponent />
          </MDXContent>
        </div>
      </article>
    </main>
  )
} 