import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/mdx'

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="min-h-screen bg-[#F5F5DC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog Posts</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.author}</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
} 