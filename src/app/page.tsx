import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Living Off the Grid
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Discover the freedom of sustainable living, self-sufficiency, and harmony with nature.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/blog" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Read Our Stories
            </Link>
            <Link 
              href="/about" 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Energy</h3>
            <p className="text-gray-600">Solar power, wind turbines, and energy independence.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Self-Sufficiency</h3>
            <p className="text-gray-600">Growing your own food and living sustainably.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Off-Grid Living</h3>
            <p className="text-gray-600">Tips, guides, and real-life experiences.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
