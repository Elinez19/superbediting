"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X, Award, Quote, HelpCircle, FileText, FileCheck } from "lucide-react";

// Types
type Tab = "Language Editing" | "Translation" | "LaTeX" | "PhD Thesis" | "Group Deals";

const TABS: Tab[] = ["Language Editing", "Translation", "LaTeX", "PhD Thesis", "Group Deals"];

const WORD_COUNTS = [
  { label: "0-500", mult: 1 },
  { label: "501-1000", mult: 1.8 },
  { label: "1001-1500", mult: 2.6 },
  { label: "1501-2000", mult: 3.4 },
  { label: "2001-2500", mult: 4.2 },
];

const COMPARISON = [
  { feature: "Correct English Language", standard: true, express: true, premium: true },
  { feature: "High-Speed Turnaround", standard: false, express: true, premium: true },
  { feature: "Improved Writing Flow", standard: false, express: false, premium: true },
  { feature: "Unlimited Revisions", standard: false, express: false, premium: true },
  { feature: "Expert Editing for Research Papers", standard: true, express: true, premium: true },
  { feature: "Customized Editing Based on Needs", standard: true, express: true, premium: true },
  { feature: "12-Month Support Validity", standard: false, express: false, premium: true },
];

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<Tab>("Language Editing");
  
  // States for Word Counts for each plan
  const [stdWordCount, setStdWordCount] = useState(WORD_COUNTS[0]);
  const [expWordCount, setExpWordCount] = useState(WORD_COUNTS[0]);
  const [plusWordCount, setPlusWordCount] = useState(WORD_COUNTS[0]);

  const stdBasePrice = 95;
  const expBasePrice = 170;
  const plusBasePrice = 204;

  const stdPrice = Math.round(stdBasePrice * stdWordCount.mult);
  const expPrice = Math.round(expBasePrice * expWordCount.mult);
  const plusPrice = Math.round(plusBasePrice * plusWordCount.mult);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px]">
        <div className="absolute inset-0 w-full h-full">
           <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="People working" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        
        {/* White Text Box */}
        <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1000px] bg-white p-6 md:p-10 shadow-lg rounded-sm z-10 border-t-4 border-red-600">
          <h1 className="text-2xl md:text-4xl font-bold text-[#05203C] mb-4">
            Why Choose SuperbEditing for Your Manuscript/thesis?
          </h1>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Getting your manuscript accepted by a reputable journal is a significant milestone in your academic journey, but the road to publication can be challenging. The clarity and precision of your writing are crucial in effectively communicating your research findings. At SuperbEditing.com, our seasoned editors possess deep research and academic editing expertise. We&apos;re committed to helping you enhance your manuscript and increase your chances of publication.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            With years of experience supporting academics and researchers, Superb Editing offers top-tier language editing services designed to refine your writing. Customize our service to meet your needs by selecting the appropriate package and turnaround time.
          </p>
          <p className="text-red-600 font-bold mt-4 text-center">
            Get your manuscript/thesis edited with our affordable packages.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="pt-32 pb-8 px-4 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab 
                  ? "border-[#05203C] text-[#05203C]" 
                  : "border-transparent text-gray-500 hover:text-[#05203C] hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Language Editing" && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#05203C] mb-4">Our Packages & Options</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the package that best fits your needs and let Superb Editors help you confidently achieve your publication and academic goals.
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-stretch mt-8">
              
              {/* Standard */}
              <div className="flex flex-col relative px-6 py-8 border border-gray-200 rounded-xl hover:shadow-xl transition-shadow bg-white">
                <h3 className="text-2xl font-bold text-[#05203C] mb-2">Standard Editing</h3>
                <p className="text-red-600 font-semibold mb-4 text-sm">Perfect Your Manuscript/thesis for Submission</p>
                <p className="text-gray-600 text-sm mb-6 h-28 text-left">
                  Before submitting your manuscript, ensure it is polished and free from language errors. Our Standard Editing package is ideal for researchers looking to refine their work with thorough, professional editing.
                </p>
                <ul className="text-left text-sm text-gray-700 mb-6 space-y-2 font-medium">
                  <li><span className="text-[#05203C] font-bold">Turnaround Time:</span> 4-14 business days</li>
                  <li><span className="text-[#05203C] font-bold">Base Price:</span> Starting at $95 for 500 words</li>
                </ul>
                
                <div className="mt-auto">
                  <div className="flex flex-col items-center mb-6">
                    <label className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Price calculator</label>
                    <select 
                      className="border-2 border-gray-200 rounded-md px-3 py-2 text-sm w-full text-[#05203C] font-semibold bg-gray-50 cursor-pointer focus:outline-none focus:border-red-600"
                      value={stdWordCount.label}
                      onChange={(e) => setStdWordCount(WORD_COUNTS.find(w => w.label === e.target.value) || WORD_COUNTS[0])}
                    >
                      <option disabled>Word count</option>
                      {WORD_COUNTS.map(wc => (
                        <option key={wc.label} value={wc.label}>{wc.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex justify-center items-end gap-2 mb-6">
                    <span className="text-sm text-gray-500 mb-1 font-medium">From</span>
                    <span className="text-4xl font-extrabold text-[#05203C]">${stdPrice}</span>
                  </div>

                  <Link href="/services/standard-editing">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md w-full transition-colors text-sm flex items-center justify-center gap-2">
                      Order Standard <span className="text-xs">▶</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Express */}
              <div className="flex flex-col relative px-6 py-8 border border-gray-200 rounded-xl hover:shadow-xl transition-shadow bg-white">
                <h3 className="text-2xl font-bold text-[#05203C] mb-2">Express Editing</h3>
                <p className="text-red-600 font-semibold mb-4 text-sm">Fast-Track Your Manuscript</p>
                <p className="text-gray-600 text-sm mb-6 h-28 text-left">
                  Need your manuscript edited quickly? Our Express Editing service offers the same high-quality editing as our Standard package but with a much faster turnaround, ensuring your work is ready when needed.
                </p>
                <ul className="text-left text-sm text-gray-700 mb-6 space-y-2 font-medium">
                  <li><span className="text-[#05203C] font-bold">Turnaround Time:</span> 1-4 business days</li>
                  <li><span className="text-[#05203C] font-bold">Base Price:</span> Starting at $170 for 500 words</li>
                </ul>
                
                <div className="mt-auto">
                  <div className="flex flex-col items-center mb-6">
                    <label className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Price calculator</label>
                    <select 
                      className="border-2 border-gray-200 rounded-md px-3 py-2 text-sm w-full text-[#05203C] font-semibold bg-gray-50 cursor-pointer focus:outline-none focus:border-red-600"
                      value={expWordCount.label}
                      onChange={(e) => setExpWordCount(WORD_COUNTS.find(w => w.label === e.target.value) || WORD_COUNTS[0])}
                    >
                      <option disabled>Word count</option>
                      {WORD_COUNTS.map(wc => (
                        <option key={wc.label} value={wc.label}>{wc.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex justify-center items-end gap-2 mb-6">
                    <span className="text-sm text-gray-500 mb-1 font-medium">From</span>
                    <span className="text-4xl font-extrabold text-[#05203C]">${expPrice}</span>
                  </div>

                  <Link href="/services/express-editing">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md w-full transition-colors text-sm flex items-center justify-center gap-2">
                      Order Express <span className="text-xs">▶</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Premium Plus */}
              <div className="flex flex-col relative px-6 py-8 border-2 border-[#05203C] rounded-xl hover:shadow-2xl transition-shadow bg-blue-50/30">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                  RECOMMENDED
                </div>
                <h3 className="text-2xl font-bold text-[#05203C] mb-2">Premium Plus</h3>
                <p className="text-red-600 font-semibold mb-4 text-sm">Enhance Writing & Get Ongoing Support</p>
                <p className="text-gray-600 text-sm mb-6 h-28 text-left">
                  Looking for more than just basic editing? Our Premium Plus package not only improves the flow and coherence of your manuscript but also provides unlimited editing support. Benefit from continuous revisions and guidance.
                </p>
                <ul className="text-left text-sm text-gray-700 mb-6 space-y-2 font-medium">
                  <li><span className="text-[#05203C] font-bold">Support Duration:</span> Valid for 12 months</li>
                  <li><span className="text-[#05203C] font-bold">Base Price:</span> Starting at $204 for 500 words</li>
                </ul>

                <div className="mt-auto">
                  <div className="flex flex-col items-center mb-6">
                    <label className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Price calculator</label>
                    <select 
                      className="border-2 border-gray-200 rounded-md px-3 py-2 text-sm w-full text-[#05203C] font-semibold bg-gray-50 cursor-pointer focus:outline-none focus:border-[#05203C]"
                      value={plusWordCount.label}
                      onChange={(e) => setPlusWordCount(WORD_COUNTS.find(w => w.label === e.target.value) || WORD_COUNTS[0])}
                    >
                      <option disabled>Word count</option>
                      {WORD_COUNTS.map(wc => (
                        <option key={wc.label} value={wc.label}>{wc.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex justify-center items-end gap-2 mb-6">
                    <span className="text-sm text-gray-500 mb-1 font-medium">From</span>
                    <span className="text-4xl font-extrabold text-[#05203C]">${plusPrice}</span>
                  </div>

                  <Link href="/services/premium-plus">
                    <button className="bg-[#05203C] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-md w-full transition-colors text-sm flex items-center justify-center gap-2 shadow-lg">
                      Order Premium Plus <span className="text-xs">▶</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mt-20 overflow-x-auto pb-4 max-w-[1100px] mx-auto">
              <h2 className="text-3xl font-bold text-center text-[#05203C] mb-4">Compare Packages/options</h2>
              <p className="text-center text-gray-600 mb-12">Go through the table below to compare packages and choose the best one.</p>

              <table className="w-full text-sm text-left table-fixed min-w-[800px] border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-[#05203C] text-white">
                  <tr>
                    <th className="p-6 font-bold w-[40%] text-lg">Feature/Benefit</th>
                    <th className="p-6 text-center font-bold w-[20%] text-lg border-l border-white/20">Standard Editing</th>
                    <th className="p-6 text-center font-bold w-[20%] text-lg border-l border-white/20">Express Editing</th>
                    <th className="p-6 text-center font-bold w-[20%] text-lg border-l border-white/20">Premium Plus Editing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                      <td className="p-4 font-semibold text-gray-800">{row.feature}</td>
                      <td className="p-4 text-center border-l border-gray-200">
                        {row.standard ? <Check className="w-6 h-6 text-green-600 mx-auto" strokeWidth={3} /> : <X className="w-6 h-6 text-red-600 mx-auto" strokeWidth={3} />}
                      </td>
                      <td className="p-4 text-center border-l border-gray-200">
                        {row.express ? <Check className="w-6 h-6 text-green-600 mx-auto" strokeWidth={3} /> : <X className="w-6 h-6 text-red-600 mx-auto" strokeWidth={3} />}
                      </td>
                      <td className="p-4 text-center border-l border-gray-200">
                        {row.premium ? <Check className="w-6 h-6 text-green-600 mx-auto" strokeWidth={3} /> : <X className="w-6 h-6 text-red-600 mx-auto" strokeWidth={3} />}
                      </td>
                    </tr>
                  ))}
                  {/* Additional explicit rows based on prompt */}
                  <tr className="bg-gray-50 border-t-2 border-gray-300">
                     <td className="p-4 font-bold text-[#05203C]">Starting Price for 500 Words</td>
                     <td className="p-4 text-center border-l border-gray-200 font-bold text-lg">$95</td>
                     <td className="p-4 text-center border-l border-gray-200 font-bold text-lg">$170</td>
                     <td className="p-4 text-center border-l border-gray-200 font-bold text-lg text-red-600">$204</td>
                  </tr>
                  <tr className="bg-gray-50">
                     <td className="p-4 font-bold text-[#05203C]">Turnaround Time</td>
                     <td className="p-4 text-center border-l border-gray-200 font-medium text-sm">7-25 Business Days</td>
                     <td className="p-4 text-center border-l border-gray-200 font-medium text-sm">4-25 Business Days</td>
                     <td className="p-4 text-center border-l border-gray-200 font-medium text-sm">1-25 Business Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* New Sections Placeholders */}
            <div className="grid grid-cols-1 gap-16 py-12 max-w-[1000px] mx-auto">
              {/* Testimonials */}
              <div className="bg-white p-8 border border-gray-100 shadow-md rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
                <h3 className="text-2xl font-bold text-[#05203C] mb-6 flex items-center gap-3"><Quote className="text-red-600 w-8 h-8" /> Testimonials</h3>
                <p className="text-gray-600 italic">&quot;The editing provided by SuperbEditing completely transformed my manuscript. It was accepted into a high-impact journal just weeks later!&quot; - Dr. A. Smith</p>
                <p className="text-sm text-gray-500 mt-4">(More testimonials and case studies coming soon)</p>
              </div>

              {/* Editing Samples */}
              <div className="bg-[#05203C] p-8 text-white rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><FileCheck className="text-red-500 w-8 h-8" /> Editing Samples</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                     <h4 className="font-bold text-red-400 mb-2">Before</h4>
                     <p className="text-sm text-gray-300 line-through">The study investigate about the impacts of temperature to the reactions rate.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl text-[#05203C]">
                     <h4 className="font-bold text-green-600 mb-2">After</h4>
                     <p className="text-sm font-medium">This study investigates the impact of temperature on the reaction rate.</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gray-50 p-8 border border-gray-200 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#05203C] mb-6 flex items-center gap-3"><HelpCircle className="text-red-600 w-8 h-8" /> FAQ</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-bold text-[#05203C] mb-1">What file formats do you accept?</p>
                    <p className="text-sm text-gray-600">We accept Word (.doc, .docx) and LaTeX files.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-bold text-[#05203C] mb-1">How does the 12-Month Support work?</p>
                    <p className="text-sm text-gray-600">For Premium Plus orders, you can send us your revised manuscript based on reviewer feedback, and we will edit it again at no extra cost for a year.</p>
                  </div>
                </div>
              </div>

              {/* Order Form Placeholder */}
              <div className="bg-white border-2 border-red-100 p-8 rounded-2xl text-center shadow-lg">
                <FileText className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#05203C] mb-4">Order Form</h3>
                <p className="text-gray-600 mb-6">Our easy-to-use ordering system makes uploading your document and selecting your package a breeze.</p>
                <button className="bg-red-600 text-white font-bold px-8 py-3 rounded-md hover:bg-red-700 transition-colors shadow-md">
                   Start Your Order
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Other Tabs Placeholders */}
        {activeTab !== "Language Editing" && (
          <div className="py-20 text-center text-gray-500">
            Content for {activeTab} coming soon...
          </div>
        )}
      </section>

    </div>
  );
}
