import { Metadata } from "next";
import Link from "next/link";
import { Calendar, User, ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Superb Editing",
  description: "Insightful articles, tips, and tutorials on research writing, journal publication, and academic trends.",
};

const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Common Mistakes in Academic Writing and How to Avoid Them",
    excerpt: "Discover the most frequent errors researchers make in their manuscripts and learn practical strategies to ensure your writing is clear, concise, and professional.",
    author: "Dr. Sarah Jenkins",
    date: "May 15, 2026",
    category: "Writing Tips",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Navigating the Peer Review Process: A Step-by-Step Guide",
    excerpt: "The peer review process can be daunting. This comprehensive guide breaks down each stage, from initial submission to addressing reviewer comments effectively.",
    author: "Prof. Michael Chen",
    date: "May 02, 2026",
    category: "Publication Process",
    image: "https://images.unsplash.com/photo-1523240715639-99a8080ffc00?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "How to Choose the Right Journal for Your Research",
    excerpt: "Selecting the appropriate journal is crucial for your research's visibility. Learn how to evaluate scope, impact factor, and audience to make an informed decision.",
    author: "Elena Rodriguez, PhD",
    date: "April 20, 2026",
    category: "Academic Trends",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Insights, tips, and tutorials on research writing, journal publication, and academic trends.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Blog Posts Area */}
            <div className="lg:col-span-2 space-y-12">
              {BLOG_POSTS.map((post) => (
                <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row group">
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-8 md:w-3/5 flex flex-col">
                    <div className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">
                      {post.category}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#05203C] transition-colors">
                      <Link href={`#`}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 font-medium">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1.5" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1.5" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Newsletter Signup */}
              <div className="bg-[#05203C] text-white rounded-3xl p-8 shadow-xl">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  Get the latest insights on academic writing and exclusive offers delivered straight to your inbox.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <ul className="space-y-3">
                  {[
                    { name: "Academic Trends", count: 12 },
                    { name: "Publication Process", count: 8 },
                    { name: "Writing Tips", count: 24 },
                    { name: "Grammar & Style", count: 15 },
                    { name: "Research Methodology", count: 9 }
                  ].map((category, i) => (
                    <li key={i}>
                      <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors font-medium">
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-500 py-1 px-3 rounded-full text-xs">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
