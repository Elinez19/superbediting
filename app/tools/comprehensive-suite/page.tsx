import { TOOL_PACKAGES } from "../page";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, HeadphonesIcon, Settings, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function ComprehensiveSuitePage() {
  const pkg = TOOL_PACKAGES.find(p => p.name === "Comprehensive Writing & Research Suite");

  if (!pkg) return null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <Link href="/tools" className="inline-flex items-center text-blue-300 hover:text-white font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>
          
          {pkg.badge && (
            <div className="inline-flex items-center justify-center bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 mx-auto">
              <Sparkles className="w-4 h-4 mr-2" /> {pkg.badge}
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{pkg.name}</h1>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Our most popular package. Combine advanced grammar correction with industry-leading plagiarism detection to ensure your research is both flawless and original.
          </p>

          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
            <div className="flex items-end gap-2 text-white">
              <span className="text-5xl font-extrabold">{pkg.priceMonth}</span>
              <span className="opacity-80 font-medium pb-2">/ month</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-xl font-semibold">
              <span>Save with</span>
              <span>{pkg.priceYear}/year</span>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose the Comprehensive Suite?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Perfect for students and early-career researchers who need to verify their manuscript's originality before submission.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Avoid Rejection</h3>
              <p className="text-gray-600 text-sm">Pre-check your work with Turnitin to prevent accidental plagiarism rejections.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <Zap className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Workflow Efficiency</h3>
              <p className="text-gray-600 text-sm">Edit, paraphrase, and check for originality all under one affordable subscription.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <Settings className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Priority Setup</h3>
              <p className="text-gray-600 text-sm">Fast-tracked account creation so you can start checking your papers immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Included Section */}
      <section className="py-24 px-4 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Included in this Package</h2>
          
          <div className="space-y-8">
            {pkg.tools.map((tool, j) => (
              <div key={j} className="flex items-start gap-6 bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{tool.name}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-[#05203C] text-white rounded-3xl p-10 md:p-12 shadow-xl mb-12 flex flex-col items-center">
             <HeadphonesIcon className="w-12 h-12 text-blue-400 mb-6" />
             <h3 className="text-2xl font-bold mb-4">Priority Customer Support</h3>
             <p className="text-lg text-blue-100 max-w-2xl">{pkg.support}</p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all shadow-xl hover:shadow-2xl">
            Subscribe to {pkg.name}
          </button>
        </div>
      </section>
    </div>
  );
}
