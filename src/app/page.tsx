import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/mdx'

export default async function Home() {
  const posts = getAllBlogPosts()

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="relative">

        {/* Content Container */}
        <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8 py-60 bg-[url('/images/hero.png')] bg-cover bg-center">
          {/* Left Side: Header and Description */}
          <div className="max-w-2xl">
            <div className="space-y-8">
              <img src="/images/main-logo.png" alt="logo" className="w-1/2" />
              <p className="text-xl md:text-2xl text-amber-50">
                Discover the freedom of sustainable living, self-sufficiency, and harmony with nature.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Read Up Section */}
      <div className="mt-24 text-center">
        <h2 className="text-5xl font-bold text-green-800 mb-8">Read Up</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-5xl">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src={`/images/solar-1.jpg`}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
