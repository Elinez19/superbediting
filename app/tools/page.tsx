import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Info, HeadphonesIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Writing Tools & Software - Superb Editing",
  description: "Access top-tier writing tools like Grammarly, QuillBot, and Turnitin at affordable prices through our corporate access.",
};

const TOOL_PACKAGES = [
  {
    name: "Standard Writing Essentials",
    color: "bg-white",
    borderColor: "border-gray-200",
    headerColor: "bg-gray-50",
    priceMonth: "$15",
    priceYear: "$60",
    tools: [
      {
        name: "Quill Bot",
        desc: "A powerful paraphrasing tool that helps you rewrite sentences, find synonyms, and enhance your writing style. Its AI-powered rewriting capabilities make it easy to reword complex sentences and avoid plagiarism."
      },
      {
        name: "Grammarly",
        desc: "An advanced grammar and spell checker that ensures your writing is clear, concise, and free of errors. Its advanced algorithms provide suggestions to improve your grammar, punctuation, and style."
      }
    ],
    support: "Get help whenever you need it. Our customer support team is available via email and chat to assist with any issues or questions regarding the tools."
  },
  {
    name: "Comprehensive Writing & Research Suite",
    badge: "Recommended",
    color: "bg-blue-50/50",
    borderColor: "border-blue-200",
    headerColor: "bg-[#05203C] text-white",
    priceMonth: "$30",
    priceYear: "$120",
    tools: [
      {
        name: "Everything in Package 1",
        desc: "Includes access to Quill Bot and Grammarly."
      },
      {
        name: "Turnitin (Student Account)",
        desc: "An industry-leading plagiarism detection tool that ensures originality and proper citations. Turnitin provides comprehensive checks against extensive databases, ensuring your work is original."
      }
    ],
    support: "Enjoy priority support with our Comprehensive Writing & Research Suite. Access detailed guides and FAQs and get direct assistance from our support team."
  },
  {
    name: "Ultimate Academic Writing Toolkit",
    color: "bg-white",
    borderColor: "border-purple-200",
    headerColor: "bg-purple-50",
    priceMonth: "$50",
    priceYear: "$200",
    tools: [
      {
        name: "Everything in Package 2",
        desc: "Includes Quill Bot, Grammarly, and Turnitin."
      },
      {
        name: "Paperpal AI",
        desc: "An AI-powered tool designed to refine academic writing by improving clarity, coherence, and structure. Optimizes your research papers, theses, and manuscripts."
      },
      {
        name: "AI Humanizer (Undetectable)",
        desc: "A sophisticated tool that ensures AI-generated content is undetectable as machine-written, blending seamlessly into human-like writing."
      }
    ],
    support: "Receive 24/7 priority customer support with detailed guides, one-on-one video tutorials, and personalized assistance for any issues or inquiries.",
    note: "Perfect for Academic Publishing: This package is ideal for researchers and students aiming for publication in prestigious journals."
  }
];

export default function ToolsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Writing Tools & Software</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            At SuperbEditing.com, we understand the importance of having the right tools at your disposal when it comes to academic writing and research.
          </p>
          <div className="bg-blue-900/40 p-6 rounded-2xl border border-blue-800 backdrop-blur-sm text-left shadow-xl max-w-4xl mx-auto">
            <Info className="w-8 h-8 text-blue-300 mb-4" />
            <p className="text-blue-50 text-lg leading-relaxed">
              We offer curated packages of top-tier writing tools to help you efficiently produce high-quality work while relieving the burden of huge costs associated with their individual subscription prices. You can access these tools at very affordable prices through our corporate access.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Premium Writing Tools Packages</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TOOL_PACKAGES.map((pkg, i) => (
              <div key={i} className={`rounded-3xl border shadow-xl shadow-gray-200/50 flex flex-col relative overflow-hidden ${pkg.color} ${pkg.borderColor}`}>
                {pkg.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 uppercase tracking-wider rounded-b-xl shadow-md z-10">
                    {pkg.badge}
                  </div>
                )}
                
                <div className={`p-8 text-center border-b border-gray-100 ${pkg.headerColor}`}>
                  <h3 className="text-2xl font-bold mb-6 mt-4">{pkg.name}</h3>
                  <div className="flex justify-center items-end gap-2 mb-2">
                    <span className="text-4xl font-extrabold">{pkg.priceMonth}</span>
                    <span className="opacity-80 font-medium pb-1">/ month</span>
                  </div>
                  <div className="text-sm font-semibold opacity-80 bg-black/5 inline-block px-3 py-1 rounded-full">
                    or {pkg.priceYear} / year
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h4 className="font-bold text-gray-900 mb-4">Tools Included:</h4>
                  <ul className="space-y-6 flex-grow mb-8">
                    {pkg.tools.map((tool, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-gray-900 mb-1">{tool.name}</strong>
                          <span className="text-gray-600 text-sm leading-relaxed">{tool.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {pkg.note && (
                    <div className="bg-purple-50 text-purple-900 p-4 rounded-xl text-sm font-medium mb-6 border border-purple-100">
                      {pkg.note}
                    </div>
                  )}

                  <div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-100">
                    <div className="flex items-center gap-2 mb-2 font-bold text-gray-900">
                      <HeadphonesIcon className="w-5 h-5 text-blue-600" />
                      <span>Customer Support</span>
                    </div>
                    <p className="text-sm text-gray-600">{pkg.support}</p>
                  </div>

                  <button className="w-full py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg bg-[#05203C] hover:bg-blue-900 text-white mt-auto">
                    Subscribe Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center bg-blue-50 rounded-3xl p-12 border border-blue-100 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Looking for a Single Tool?</h2>
          <p className="text-lg text-gray-600 mb-8">
            For single or any other premium writing tools not listed in our packages, please get in touch with us.
          </p>
          <Link 
            href="mailto:contact@superbediting.com"
            className="inline-flex items-center justify-center bg-white border-2 border-[#05203C] text-[#05203C] font-bold px-8 py-3 rounded-xl hover:bg-[#05203C] hover:text-white transition-colors"
          >
            contact@superbediting.com
          </Link>
        </div>
      </section>
    </div>
  );
}
