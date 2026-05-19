import { TOOL_PACKAGES } from "../page";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, HeadphonesIcon, Settings, ShieldCheck, Zap, Diamond } from "lucide-react";

export default function UltimateToolkitPage() {
  const pkg = TOOL_PACKAGES.find(p => p.name === "Ultimate Academic Writing Toolkit");

  if (!pkg) return null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#05203C] to-purple-900 text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <Link href="/tools" className="inline-flex items-center text-purple-300 hover:text-white font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>
          
          <div className="inline-flex items-center justify-center bg-purple-500/30 text-purple-200 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 mx-auto border border-purple-400/30">
            <Diamond className="w-4 h-4 mr-2" /> For Serious Academics
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{pkg.name}</h1>
          <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
            The complete arsenal. Bring AI-powered precision to your research writing while ensuring your manuscript reads flawlessly and undetectable.
          </p>

          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
            <div className="flex items-end gap-2 text-white">
              <span className="text-5xl font-extrabold">{pkg.priceMonth}</span>
              <span className="opacity-80 font-medium pb-2">/ month</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-xl font-semibold">
              <span>Best Value</span>
              <span>{pkg.priceYear}/year</span>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-4 bg-purple-50/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Master Your Writing Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">This suite is specifically curated for PhD candidates and researchers aiming for Q1/Q2 journal publications.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-purple-100 shadow-sm">
              <Diamond className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">AI Optimization</h3>
              <p className="text-gray-600 text-sm">Leverage cutting-edge AI (Paperpal) specifically trained on millions of published academic papers.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-purple-100 shadow-sm">
              <ShieldCheck className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Bypass Detectors</h3>
              <p className="text-gray-600 text-sm">Ensure your assisted writing isn't flagged by institutional AI detectors using our Humanizer tool.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-purple-100 shadow-sm">
              <Zap className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">All-in-One Solution</h3>
              <p className="text-gray-600 text-sm">Replace multiple expensive subscriptions with a single, highly affordable corporate package.</p>
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
              <div key={j} className="flex items-start gap-6 bg-purple-50/50 p-8 rounded-3xl border border-purple-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{tool.name}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {pkg.note && (
            <div className="mt-12 bg-purple-100 text-purple-900 p-8 rounded-2xl text-lg font-medium border border-purple-200 shadow-sm text-center">
              <Diamond className="w-8 h-8 mx-auto mb-4 text-purple-600" />
              {pkg.note}
            </div>
          )}
        </div>
      </section>

      {/* Support & CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-purple-900 text-white rounded-3xl p-10 md:p-12 shadow-xl mb-12 flex flex-col items-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
             <HeadphonesIcon className="w-12 h-12 text-purple-300 mb-6 relative z-10" />
             <h3 className="text-2xl font-bold mb-4 relative z-10">VIP 24/7 Support</h3>
             <p className="text-lg text-purple-100 max-w-2xl relative z-10">{pkg.support}</p>
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all shadow-xl hover:shadow-2xl">
            Subscribe to {pkg.name}
          </button>
        </div>
      </section>
    </div>
  );
}
