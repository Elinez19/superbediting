import { JOURNALS } from "../page";
import Link from "next/link";
import { ArrowLeft, BookOpen, ExternalLink, ShieldCheck, TrendingUp, CheckCircle2 } from "lucide-react";

export default function RecommendedJournalsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <Link href="/publications" className="inline-flex items-center text-blue-300 hover:text-white font-semibold mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Publications
          </Link>
          
          <div className="w-20 h-20 bg-blue-600/30 text-blue-300 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
            <BookOpen className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Recommended Journals</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Finding the right home for your manuscript is critical. Explore our curated list of high-impact, reputable journals across various disciplines to maximize your research's visibility.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why publish in these journals?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We strictly vet all recommended journals to ensure they meet the highest academic standards. We do not promote predatory publishers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Impact Factors</h3>
              <p className="text-gray-600">Journals indexed in major databases like Scopus, Web of Science, and PubMed with verified impact metrics.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rigorous Peer Review</h3>
              <p className="text-gray-600">Ensure your work is validated by subject-matter experts through transparent and ethical review processes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <CheckCircle2 className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">Maximize citations and academic influence by publishing in venues read by top researchers worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The List Section */}
      <section className="py-24 px-4 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Curated Journal Directory</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JOURNALS.map((journal, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{journal.title}</h3>
                
                <div className="flex items-center space-x-2 mb-6 bg-blue-100/50 text-blue-800 px-4 py-2 rounded-xl w-fit text-sm font-semibold">
                  <span>Impact Factor:</span>
                  <span className="text-base font-bold">{journal.impactFactor}</span>
                </div>
                
                <div className="mb-8 flex-grow">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Scope</h4>
                  <p className="text-gray-700 text-base leading-relaxed">{journal.scope}</p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200">
                  <div className="text-sm font-medium text-gray-500 flex flex-col">
                    <span className="mb-1 uppercase tracking-wider text-xs font-bold">Submission Deadline</span>
                    <span className="text-gray-900 text-base font-bold">{journal.deadline}</span>
                  </div>
                  <button className="text-blue-600 hover:text-white transition-colors p-3 bg-blue-50 hover:bg-blue-600 rounded-xl" title="Visit Journal Website">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl bg-[#05203C] rounded-3xl p-10 md:p-16 border border-blue-900 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">Need help formatting your manuscript?</h2>
            <p className="text-blue-100 text-lg mb-0 max-w-md">
              Every journal has strict formatting guidelines. Let our experts format your paper exactly to your target journal's requirements.
            </p>
          </div>
          
          <div className="w-full md:w-auto shrink-0">
            <Link href="/services" className="inline-block w-full md:w-auto bg-white hover:bg-gray-100 text-[#05203C] px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-md hover:shadow-lg text-center">
              View Formatting Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
