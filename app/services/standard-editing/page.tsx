import { PACKAGES } from "../page";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, Settings, Send, Clock, ShieldCheck, Zap } from "lucide-react";

export default function StandardEditingPage() {
  const pkg = PACKAGES.find(p => p.name === "Standard Editing");

  if (!pkg) return null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <Link href="/services" className="inline-flex items-center text-blue-300 hover:text-white font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-500/20 text-blue-200 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-blue-500/30">
                Core Service
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{pkg.name}</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {pkg.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#05203C] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-white/10">
                  Get Started
                </button>
                <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                  View Sample
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
               <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
               <img 
                 src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop" 
                 alt="Standard Editing" 
                 className="rounded-3xl shadow-2xl relative z-10 border border-white/10"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Polishing Your Work to Perfection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{pkg.text}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Error-Free Language</h3>
              <p className="text-gray-600">We eliminate grammatical errors, spelling mistakes, and punctuation issues to ensure flawless readability.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Clarity</h3>
              <p className="text-gray-600">Our editors refine your sentence structures and vocabulary to make your arguments clear and impactful.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Tone</h3>
              <p className="text-gray-600">We ensure your manuscript maintains a consistent, professional, and objective academic tone throughout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-4 bg-slate-50 border-y border-gray-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-gray-200"></div>
            
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-[#05203C] text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg border-4 border-slate-50">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Submit Document</h3>
              <p className="text-gray-600">Upload your manuscript and select the Standard Editing package during checkout.</p>
            </div>
            
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-[#05203C] text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg border-4 border-slate-50">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Expert Editing</h3>
              <p className="text-gray-600">A subject-matter expert meticulously reviews and edits your document for language and flow.</p>
            </div>
            
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-[#05203C] text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg border-4 border-slate-50">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Final Delivery</h3>
              <p className="text-gray-600">Receive your polished manuscript, complete with tracked changes and editor notes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl bg-blue-50 rounded-3xl p-10 md:p-16 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to polish your manuscript?</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                <span>Thorough language and grammar check</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                <span className="font-semibold text-gray-900">Turnaround: {pkg.turnaround}</span>
              </li>
            </ul>
            <div className="text-2xl font-bold text-[#05203C]">
              {pkg.price}
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-[#05203C] hover:bg-blue-900 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-md hover:shadow-lg">
              Start Your Order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
