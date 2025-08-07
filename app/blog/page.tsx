import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Sacred Science of Vedic Astrology",
    excerpt: "Discover the ancient wisdom that connects cosmic movements with human destiny through the divine knowledge of Jyotish Shastra.",
    category: "Vedic Astrology",
    author: "Pandit Radheshyam Sharma",
    date: "2025-01-15",
    readTime: "8 min read",
    image: "/vedic-astrology-symbols.png",
    sanskrit: "ज्योतिष शास्त्र"
  },
  {
    id: 2,
    title: "Krishna's Divine Guidance in Modern Times",
    excerpt: "How the eternal teachings of Lord Krishna can illuminate our path through contemporary challenges and spiritual growth.",
    category: "Spirituality",
    author: "Mata Vrinda Devi",
    date: "2025-01-12",
    readTime: "6 min read",
    image: "/lord-krishna-guidance.png",
    sanskrit: "कृष्ण मार्गदर्शन"
  },
  {
    id: 3,
    title: "Gemstones and Their Planetary Powers",
    excerpt: "Understanding how precious stones can channel planetary energies to bring balance, prosperity, and spiritual protection.",
    category: "Gemstone Therapy",
    author: "Acharya Krishna Das",
    date: "2025-01-10",
    readTime: "10 min read",
    image: "/cosmic-gemstones.png",
    sanskrit: "रत्न चिकित्सा"
  },
  {
    id: 4,
    title: "Vastu Shastra: Harmonizing Space and Spirit",
    excerpt: "Learn how ancient architectural principles can create sacred spaces that enhance positive energy flow in your home.",
    category: "Vastu Shastra",
    author: "Pandit Govind Sharma",
    date: "2025-01-08",
    readTime: "7 min read",
    image: "/traditional-indian-home-vastu.png",
    sanskrit: "वास्तु शास्त्र"
  },
  {
    id: 5,
    title: "The Mystical Power of Mantras",
    excerpt: "Explore how sacred sound vibrations can transform consciousness and connect us with divine cosmic frequencies.",
    category: "Mantras & Meditation",
    author: "Mata Vrinda Devi",
    date: "2025-01-05",
    readTime: "9 min read",
    image: "/om-sound-energy.png",
    sanskrit: "मंत्र शक्ति"
  },
  {
    id: 6,
    title: "Planetary Remedies for Modern Life",
    excerpt: "Practical solutions and spiritual practices to balance planetary influences and overcome life's challenges.",
    category: "Remedies",
    author: "Pandit Radheshyam Sharma",
    date: "2025-01-03",
    readTime: "12 min read",
    image: "/planetary-healing-symbols.png",
    sanskrit: "ग्रह उपाय"
  }
]

const categories = [
  "All Posts",
  "Vedic Astrology",
  "Spirituality", 
  "Gemstone Therapy",
  "Vastu Shastra",
  "Mantras & Meditation",
  "Remedies"
]

export default function BlogPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Divine Wisdom Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Explore ancient wisdom, spiritual insights, and practical guidance for modern living
          </p>
          <div className="mt-4">
            <span className="text-saffron font-medium text-lg">ज्ञान भंडार</span>
            <span className="text-gray-500 text-sm ml-2">Knowledge Treasury</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cinzel text-lg text-deep-blue">Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10 border-lotus-pink/30 focus:border-lotus-pink"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cinzel text-lg text-deep-blue">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-3 py-2 rounded-md hover:bg-saffron/10 hover:text-saffron transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cinzel text-lg text-deep-blue">Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <h4 className="font-semibold text-sm text-deep-blue hover:text-saffron cursor-pointer line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-saffron/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-deep-blue text-cream">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="font-cinzel text-xl text-deep-blue group-hover:text-saffron transition-colors line-clamp-2">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    
                    <div className="text-center mb-2">
                      <span className="text-saffron font-medium">{post.sanskrit}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-saffron hover:text-saffron/80 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-saffron/10 hover:border-saffron transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-saffron text-deep-blue rounded-md font-semibold">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-saffron/10 hover:border-saffron transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-saffron/10 hover:border-saffron transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-saffron/10 hover:border-saffron transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
