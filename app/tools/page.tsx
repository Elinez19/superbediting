import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Info, HeadphonesIcon, HelpCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Writing Tools & Software - Superb Editing",
  description: "Access top-tier writing tools like Grammarly, QuillBot, and Turnitin at affordable prices through our corporate access.",
};

export const TOOL_PACKAGES = [
  {
    name: "Package 1: Standard Writing Essentials",
    badge: null,
    color: "bg-white",
    borderColor: "border-gray-200",
    headerColor: "bg-gray-50",
    priceMonth: "$15",
    priceYear: "$60",
    tools: [
      {
        name: "Quill Bot",
        desc: "Quill Bot is a powerful paraphrasing tool that helps you rewrite sentences, find synonyms, and enhance your writing style. Quill Bot helps you rephrase your text to improve clarity and flow. Its AI-powered rewriting capabilities make it easy to reword complex sentences and avoid plagiarism."
      },
      {
        name: "Grammarly",
        desc: "It is an advanced grammar and spell checker that ensures your writing is clear, concise, and free of errors. While Grammarly catches grammatical errors and suggests improvements, its advanced algorithms provide suggestions to improve your grammar, punctuation, and style, making your writing polished and professional."
      }
    ],
    support: "Get help whenever you need it. Our customer support team is available via email and chat to assist with any issues or questions regarding the tools."
  },
  {
    name: "Package 2: Comprehensive Writing & Research Suite",
    badge: "Recommended",
    color: "bg-white",
    borderColor: "border-red-600 border-2",
    headerColor: "bg-[#05203C] text-white",
    priceMonth: "$30",
    priceYear: "$120",
    tools: [
      {
        name: "Everything is in package 1 (Standard Writing Essentials)",
        desc: "plus Turnitin (student account)."
      },
      {
        name: "Turnitin",
        desc: "Turnitin is an industry-leading plagiarism detection tool that ensures originality and proper citations. Turnitin provides comprehensive checks against extensive databases, ensuring your work is original and properly referenced to avoid falling victim to accidental plagiarism and tarnish your academic profile."
      }
    ],
    support: "Enjoy priority support with our Comprehensive Writing & Research Suite. For any technical or usage issues, access detailed guides and FAQs and get direct assistance from our support team."
  },
  {
    name: "Package 3: Ultimate Academic Writing Toolkit",
    badge: null,
    color: "bg-white",
    borderColor: "border-gray-200",
    headerColor: "bg-gray-50",
    priceMonth: "$50",
    priceYear: "$200",
    tools: [
      {
        name: "Everything in package 2 (Comprehensive Writing & Research Suite)",
        desc: "plus Paperpal and AI humanizer."
      },
      {
        name: "Paper pal AI",
        desc: "An AI-powered tool designed to refine academic writing by improving clarity, coherence, and structure. Paper pal AI optimizes your research papers, theses, and manuscripts, enhancing clarity and academic tone."
      },
      {
        name: "AI Humanizer (Undetectable)",
        desc: "A sophisticated tool that ensures AI-generated content is undetectable as machine-written, blending seamlessly into human-like writing. With the AI Humanizer, AI-generated text can be transformed into natural, human-like writing indistinguishable from a human's written content."
      }
    ],
    support: "Receive 24/7 priority customer support with detailed guides, one-on-one video tutorials, and personalized assistance for any issues or inquiries related to the tools.",
    note: "This package is ideal for researchers and students aiming for publication in prestigious journals.",
    noteTitle: "Perfect for Academic Publishing"
  }
];

export default function ToolsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white py-24 px-4 border-b-4 border-red-600">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white">OUR PREMIUM WRITING TOOLS PACKAGES</h1>
          <div className="bg-white text-[#05203C] p-8 md:p-10 rounded-2xl shadow-2xl text-left max-w-4xl mx-auto border-t-4 border-red-600 relative">
            <div className="absolute -top-6 left-8 bg-red-600 p-3 rounded-full text-white shadow-lg">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <p className="text-[15px] md:text-lg leading-relaxed font-medium mt-2">
              At SuperbEditing.com, we understand the importance of having the right tools at your disposal when it comes to academic writing and research. That’s why we offer curated packages of top-tier writing tools to help you efficiently produce high-quality work while relieving the burden of huge costs associated with their individual subscription prices. You can access these tools at very affordable prices through our corporate access.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {TOOL_PACKAGES.map((pkg, i) => (
              <div key={i} className={`rounded-xl flex flex-col relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white ${pkg.borderColor}`}>
                {pkg.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-6 py-1.5 uppercase tracking-wider rounded-b-md shadow-md z-10 whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}
                
                <div className={`p-8 text-center border-b border-gray-200 ${pkg.headerColor}`}>
                  <h3 className="text-xl md:text-2xl font-bold mb-6 mt-4 leading-snug">{pkg.name}</h3>
                  <div className="flex justify-center items-end gap-2 mb-3">
                    <span className="text-5xl font-extrabold">{pkg.priceMonth}</span>
                  </div>
                  <p className="text-sm font-medium mb-4">1 Month Subscription for {pkg.badge === "Recommended" ? "all three tools" : (pkg.name.includes("3") ? "all five tools" : "both tools")}</p>
                  <div className={`text-sm font-bold uppercase tracking-wide inline-block px-4 py-2 rounded-md ${pkg.badge ? 'bg-red-600 text-white shadow-md' : 'bg-[#05203C] text-white'}`}>
                    1-Year: {pkg.priceYear}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h4 className="font-bold text-[#05203C] text-lg mb-6 flex items-center gap-2 border-b border-gray-100 pb-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600" /> Tools Included
                  </h4>
                  <ul className="space-y-8 flex-grow mb-10">
                    {pkg.tools.map((tool, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <div className="mt-1">
                          <CheckCircle2 className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <strong className="block text-[#05203C] text-[15px] mb-2">{tool.name}</strong>
                          <span className="text-gray-700 text-sm leading-relaxed">{tool.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {pkg.note && (
                    <div className="bg-red-50 text-red-900 p-5 rounded-lg text-sm mb-8 border border-red-200 shadow-sm relative overflow-hidden">
                      <div className="absolute left-0 top-0 w-1 h-full bg-red-600"></div>
                      <strong className="block mb-1 text-red-700">{pkg.noteTitle}</strong>
                      {pkg.note}
                    </div>
                  )}

                  <div className="bg-blue-50 rounded-lg p-5 mb-8 border border-blue-100 relative">
                    <div className="flex items-center gap-2 mb-3 font-bold text-[#05203C]">
                      <HeadphonesIcon className="w-5 h-5 text-red-600" />
                      <span>Customer Support</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{pkg.support}</p>
                  </div>

                  <button className="w-full py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg bg-red-600 hover:bg-red-700 text-white mt-auto text-lg uppercase tracking-wide">
                    Subscribe Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-4xl text-center bg-[#05203C] rounded-2xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rounded-bl-full opacity-20"></div>
          <h2 className="text-3xl font-bold text-white mb-6">Looking for a Single Tool?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            For single or any other premium writing tools not listed in our packages, please get in touch with us.
          </p>
          <Link 
            href="mailto:contact@superbediting.com"
            className="inline-flex items-center justify-center bg-red-600 text-white font-bold px-10 py-4 rounded-md hover:bg-red-700 transition-colors shadow-lg text-lg tracking-wide"
          >
            contact@superbediting.com
          </Link>
        </div>
      </section>
    </div>
  );
}
