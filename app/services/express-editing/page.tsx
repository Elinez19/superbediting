import { PACKAGES } from "../page";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, Settings, Send, Clock, Zap, Target } from "lucide-react";

export default function ExpressEditingPage() {
  const pkg = PACKAGES.find(p => p.name === "Express Editing");

  if (!pkg) return null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <Link href="/services" className="inline-flex items-center text-indigo-300 hover:text-white font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-indigo-500/20 text-indigo-200 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-indigo-500/30">
                <Zap className="w-4 h-4 mr-2" /> High Priority
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{pkg.name}</h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                {pkg.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-indigo-500/20">
                  Get Started
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
               <div className="absolute inset-0 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
               <img 
                 src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" 
                 alt="Express Editing" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Fast-Track Your Submission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{pkg.text}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Turnaround</h3>
              <p className="text-gray-600">Designed for tight deadlines. Get your fully edited manuscript back in just 1 to 4 business days.</p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uncompromised Quality</h3>
              <p className="text-gray-600">Speed doesn't mean skipping details. You receive the same rigorous grammatical and stylistic checks as our standard package.</p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Priority Queuing</h3>
              <p className="text-gray-600">Your document jumps to the front of the line, immediately assigned to an expert editor in your field.</p>
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
              <div className="w-16 h-16 mx-auto bg-indigo-600 text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg border-4 border-slate-50">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Submit & Flag Urgent</h3>
              <p className="text-gray-600">Upload your manuscript and select Express Editing. We process it immediately.</p>
            </div>
            
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-indigo-600 text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg border-4 border-slate-50">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Priority Editing</h3>
              <p className="text-gray-600">Our editors work diligently to refine your document within the expedited timeframe.</p>
            </div>
            
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-indigo-600 text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg border-4 border-slate-50">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Rapid Delivery</h3>
              <p className="text-gray-600">Receive your publication-ready manuscript right on time to meet your deadline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl bg-indigo-900 text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Beat the Deadline.</h2>
            <p className="text-indigo-200 mb-8 max-w-md">Get your manuscript edited flawlessly without missing your crucial submission dates.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-indigo-100">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
                <span>Priority assignment to subject experts</span>
              </li>
              <li className="flex items-center text-indigo-100">
                <Clock className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
                <span className="font-semibold text-white">Turnaround: {pkg.turnaround}</span>
              </li>
            </ul>
            <div className="text-2xl font-bold text-indigo-300">
              {pkg.price}
            </div>
          </div>
          
          <div className="w-full md:w-auto relative z-10">
            <button className="w-full md:w-auto bg-white hover:bg-gray-100 text-indigo-900 px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-xl">
              Start Urgent Order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
