import React from "react";
import { BookMarked, Star, ShoppingCart, Info, Filter } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Research Resources | Superb Editing",
  description: "Curated list of the best academic writing guides, research methodology books, and style manuals.",
};

const ResourcesPage = () => {
  const categories = ["All", "Methodology", "Writing", "Styles", "Ethics"];

  const books = [
    {
      title: "The Craft of Research",
      author: "Booth, Colomb, & Williams",
      subject: "Methodology",
      rating: 4.9,
      reviews: 3240,
      imagePlaceholder: "bg-blue-100",
      tag: "Best Seller",
      category: "Methodology"
    },
    {
      title: "Style: Lessons in Clarity and Grace",
      author: "Joseph M. Williams",
      subject: "Writing",
      rating: 4.8,
      reviews: 1980,
      imagePlaceholder: "bg-green-100",
      tag: "Highly Recommended",
      category: "Writing"
    },
    {
      title: "Publication Manual of the APA (7th Ed.)",
      author: "American Psychological Association",
      subject: "Styles",
      rating: 4.9,
      reviews: 5100,
      imagePlaceholder: "bg-amber-100",
      tag: "Must Have",
      category: "Styles"
    },
    {
      title: "Research Design: Qualitative & Quantitative",
      author: "John W. Creswell",
      subject: "Methodology",
      rating: 4.7,
      reviews: 2540,
      imagePlaceholder: "bg-slate-200",
      tag: null,
      category: "Methodology"
    },
    {
      title: "The Elements of Style",
      author: "Strunk & White",
      subject: "Writing",
      rating: 4.8,
      reviews: 4890,
      imagePlaceholder: "bg-cyan-100",
      tag: "Classic",
      category: "Writing"
    },
    {
      title: "Academic Writing for Graduate Students",
      author: "Swales & Feak",
      subject: "Writing",
      rating: 4.6,
      reviews: 830,
      imagePlaceholder: "bg-purple-100",
      tag: null,
      category: "Writing"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#05203C]">
              Essential Research <span className="text-[#0051A1]">Resources</span>
            </h1>
            <p className="text-slate-600 text-lg">
              Our expert editors have curated the finest academic resources to help you master scholarly writing and research methodology.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-10 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 text-slate-500 mr-2 font-medium">
            <Filter size={20} />
            <span>Filter by:</span>
          </div>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                index === 0
                  ? "bg-[#05203C] text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#05203C] hover:text-[#05203C]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group flex flex-col h-full">
              {/* Image Placeholder */}
              <div className={`h-48 ${book.imagePlaceholder} relative flex items-center justify-center`}>
                {book.tag && (
                  <span className="absolute top-4 right-4 bg-white text-[#0051A1] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {book.tag}
                  </span>
                )}
                <BookMarked size={48} className="text-white/50" />
              </div>
              
              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs font-bold text-[#0051A1] mb-2 uppercase tracking-wider">{book.subject}</div>
                <h3 className="font-bold text-lg text-[#05203C] mb-1 line-clamp-2" title={book.title}>
                  {book.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">by {book.author}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-1 mb-4">
                    <Star size={16} className="text-amber-400 fill-amber-400" />
                    <span className="font-bold text-sm text-[#05203C]">{book.rating}</span>
                    <span className="text-xs text-slate-500">({book.reviews})</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-slate-50 hover:bg-slate-100 text-[#05203C] font-semibold py-2 rounded-lg text-sm transition-colors border border-slate-200 flex items-center justify-center gap-2">
                      <Info size={16} />
                      Details
                    </button>
                    <Link href="/cart" className="flex-1">
                      <button className="w-full bg-[#05203C] hover:bg-[#0051A1] text-white font-semibold py-2 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                        <ShoppingCart size={16} />
                        Get Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Affiliation Banner */}
        <div className="bg-[#05203C] rounded-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Need personalized writing guidance?</h2>
            <p className="text-slate-300 mb-6">
              Beyond books, Superb Editing provides one-on-one consultation, deep manuscript editing, and comprehensive research support to ensure your academic success.
            </p>
            <Link href="/pricing" className="inline-block bg-white text-[#05203C] font-bold px-8 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Explore Our Services
            </Link>
          </div>
          
          <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
      </div>
    </main>
  );
};

export default ResourcesPage;
