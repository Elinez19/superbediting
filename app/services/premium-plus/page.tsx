import { PACKAGES } from "../page";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, RefreshCw, Send, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

export default function PremiumPlusPage() {
  const pkg = PACKAGES.find(p => p.name === "Premium Plus Editing");

  if (!pkg) return null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/20 mix-blend-multiply"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <Link href="/services" className="inline-flex items-center text-purple-300 hover:text-white font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {pkg.badge && (
                <div className="inline-flex items-center bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-md">
                  <Sparkles className="w-4 h-4 mr-2" /> {pkg.badge}
                </div>
              )}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{pkg.name}</h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                {pkg.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-purple-600/20">
                  Get Started
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
               <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
               <img 
                 src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop" 
                 alt="Premium Plus Editing" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comprehensive Support for Your Manuscript</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{pkg.text}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Structural & Flow Edits</h3>
              <p className="text-gray-600">Beyond grammar, we restructure sentences and paragraphs to improve logic, flow, and coherence of your argument.</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
              <RefreshCw className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unlimited Revisions</h3>
              <p className="text-gray-600">Make changes based on journal reviewer feedback and send it back to us for re-editing at no extra cost.</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow">
              <HeartHandshake className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">12-Month Support</h3>
              <p className="text-gray-600">Enjoy peace of mind with continuous editing support valid for an entire year from your initial submission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-4 bg-slate-50 border-y border-gray-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">The Premium Workflow</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-gray-200"></div>
            
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-purple-600 text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg border-4 border-slate-50">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Initial Deep Edit</h3>
              <p className="text-gray-600">Submit your draft. We perform a heavy edit focusing on structure, flow, formatting, and language.</p>
            </div>
            
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-purple-600 text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg border-4 border-slate-50">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Submit to Journal</h3>
              <p className="text-gray-600">You submit your polished manuscript to your target journal with confidence.</p>
            </div>
            
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-purple-600 text-white rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg border-4 border-slate-50">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Re-edit & Refine</h3>
              <p className="text-gray-600">When reviewers request changes, revise and send it back to us for unlimited re-editing for 12 months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl bg-purple-50 rounded-3xl p-10 md:p-16 border border-purple-100 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Invest in Your Publication Success</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3 shrink-0" />
                <span>Structural and comprehensive editing</span>
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3 shrink-0" />
                <span>Unlimited revisions based on reviewer feedback</span>
              </li>
              <li className="flex items-center text-gray-700">
                <RefreshCw className="w-5 h-5 text-purple-600 mr-3 shrink-0" />
                <span className="font-semibold text-gray-900">Validity: {pkg.turnaround}</span>
              </li>
            </ul>
            <div className="text-2xl font-bold text-purple-900">
              {pkg.price}
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-md hover:shadow-lg">
              Start Premium Order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
