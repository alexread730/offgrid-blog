import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Header and Description */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 tracking-tight">
              Living
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-orange-400 tracking-tight">
              Off Grid
            </h1>
            <p className="text-xl md:text-2xl text-green-900">
              Discover the freedom of sustainable living, self-sufficiency, and harmony with nature.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/blog" 
                className="bg-green-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden shadow-lg">
            <img
              src="/images/yodiman.jpg"
              alt="Off-grid living"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
