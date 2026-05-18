import React from "react";
import Link from "next/link";
import { BookOpen, Search, Download } from "lucide-react";

export const metadata = {
  title: "Academic Writing Guidelines | Superb Editing",
  description: "Master the art of scholarly communication with our comprehensive guides on APA, MLA, Chicago, and Harvard formatting styles.",
};

const GuidelinesPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-7xl">
        {/* Header Section */}
        <div className="bg-[#05203C] text-white rounded-3xl p-10 mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 whitespace-pre-wrap">
              Academic Writing <span className="text-[#0051A1]">Guidelines</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8">
              Access the most comprehensive guides for APA, MLA, Chicago, and Harvard styles. Download PDF templates to ensure your research meets international standards.
            </p>
            <div className="flex gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search for a style guide..." 
                  className="w-full pl-12 pr-4 py-3 rounded-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0051A1]"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-linear-to-l from-white to-transparent pointer-events-none" />
          <BookOpen className="absolute -right-10 -bottom-10 text-white/5 pointer-events-none" size={300} />
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { name: "APA Style (7th Ed.)", description: "The standard for social sciences, education, and engineering." },
            { name: "MLA Style (9th Ed.)", description: "Commonly used in humanities and liberal arts fields." },
            { name: "Chicago/Turabian", description: "Preferred for history, business, and fine arts research." }
          ].map((style, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-[#05203C] mb-4">{style.name}</h2>
              <p className="text-slate-600 mb-6">{style.description}</p>
              <ul className="space-y-3 mb-8">
                {["Citation Rules", "Reference List", "Paper Layout", "Abstract Format"].map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-slate-700 font-medium group-hover:text-[#0051A1] transition-colors">{item}</span>
                    <button className="text-slate-400 hover:text-[#0051A1] p-2 bg-slate-50 rounded-full group-hover:bg-[#0051A1]/10 transition-colors">
                      <Download size={16} />
                    </button>
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-[#0051A1] font-bold text-sm hover:underline flex items-center justify-center w-full py-3 bg-[#0051A1]/5 rounded-xl">
                View Full {style.name} Guide
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GuidelinesPage;
