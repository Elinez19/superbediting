"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X, Award } from "lucide-react";

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
  { feature: "Follow TLS guidelines referencing to your field of study", standard: true, express: true, premium: true },
  { feature: "Detailed language check (spelling, grammar, sentence structure and terminology)", standard: true, express: true, premium: true },
  { feature: "Free re-edit or money back in case of rejection based on language", standard: true, express: true, premium: true },
  { feature: "High-speed turnaround", standard: false, express: true, premium: true },
  { feature: "Free re-editing support for 12 months", standard: false, express: false, premium: true },
  { feature: "Cover letter, report on error & Reviewer comment", standard: false, express: false, premium: true },
  { feature: "Journal specific formatting as per journal instructions", standard: false, express: false, premium: true },
  { feature: "Reference check and format", standard: false, express: false, premium: true },
  { feature: "Plagiarism check for your writing sample check under turnitin", standard: false, express: false, premium: true },
  { feature: "Cover letter customized for your final submission", standard: false, express: false, premium: true },
  { feature: "Assessment report with feedback on paper language and structure", standard: false, express: false, premium: true },
  { feature: "Word count reduction of up to 20%", standard: false, express: false, premium: true },
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
        {/* Background Image Placeholder */}
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
        <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1000px] bg-white p-6 md:p-10 shadow-lg rounded-sm z-10">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Why SuperbEditing Language Editing services?
          </h1>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Getting your manuscript accepted by a top journal is challenging. The quality of your writing is important to effectively convey your research. Our Editors have extensive background and expertise in your field of study, and will help you increase your chances of being published.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="pt-28 pb-8 px-4 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab 
                  ? "border-[#007398] text-[#007398]" 
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <p className="text-center text-sm text-gray-600 max-w-[900px] mx-auto mb-10">
          Choose from 3 Editing plans. 12-month Support valid for 12 months. Choose from high-standard language editing services from our expert academic editors. Tailor the service to your specific needs by specifying the desired level of service and delivery time.
        </p>

        {activeTab === "Language Editing" && (
          <div className="space-y-12">
            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-stretch mt-12">
              
              {/* Standard */}
              <div className="flex flex-col relative px-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Standard</h3>
                <p className="text-gray-600 text-sm mb-4 h-12">
                  Ensure that your work is written in correct English before submission.
                </p>
                <div className="h-6 mb-2"></div> {/* Spacer for alignment */}
                
                <div className="mt-auto">
                  <div className="flex flex-col items-center mb-6">
                    <label className="text-xs font-semibold text-gray-500 mb-1">Price calculator</label>
                    <select 
                      className="border border-gray-300 rounded-sm px-3 py-2 text-sm w-48 text-gray-700 bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#007398]"
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
                    <span className="text-xs text-gray-500 mb-1">From</span>
                    <span className="text-4xl font-bold text-gray-900">${stdPrice}</span>
                  </div>

                  <Link href="/services/standard-editing">
                    <button className="bg-[#007398] hover:bg-[#005a77] text-white font-medium py-3 px-6 rounded-sm w-4/5 mx-auto transition-colors text-sm flex items-center justify-center gap-2">
                      Order Standard service <span className="text-xs">▶</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Express */}
              <div className="flex flex-col relative px-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Express</h3>
                <p className="text-gray-600 text-sm mb-4 h-12">
                  Get the same quality as Standard, but faster!
                </p>
                <div className="flex items-center justify-center gap-1 text-green-600 text-xs font-semibold mb-2 h-6">
                  <Check className="w-4 h-4 bg-green-100 rounded-full text-green-600 p-0.5" /> High-speed turnaround
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-col items-center mb-6">
                    <label className="text-xs font-semibold text-gray-500 mb-1">Price calculator</label>
                    <select 
                      className="border border-gray-300 rounded-sm px-3 py-2 text-sm w-48 text-gray-700 bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#007398]"
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
                    <span className="text-xs text-gray-500 mb-1">From</span>
                    <span className="text-4xl font-bold text-gray-900">${expPrice}</span>
                  </div>

                  <Link href="/services/express-editing">
                    <button className="bg-[#007398] hover:bg-[#005a77] text-white font-medium py-3 px-6 rounded-sm w-4/5 mx-auto transition-colors text-sm flex items-center justify-center gap-2">
                      Order Express service <span className="text-xs">▶</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Plus */}
              <div className="flex flex-col relative px-4">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide border border-green-200">
                  RECOMMENDED
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plus</h3>
                <p className="text-gray-600 text-sm mb-4 h-12">
                  Improve the flow and editing of your paper and get unlimited editing support.
                </p>
                <div className="flex items-center justify-center gap-1 text-green-600 text-xs font-semibold mb-2 h-6">
                  <Check className="w-4 h-4 bg-green-100 rounded-full text-green-600 p-0.5" /> Valid for 12 months
                </div>

                <div className="mt-auto">
                  <div className="flex flex-col items-center mb-6">
                    <label className="text-xs font-semibold text-gray-500 mb-1">Price calculator</label>
                    <select 
                      className="border border-gray-300 rounded-sm px-3 py-2 text-sm w-48 text-gray-700 bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#007398]"
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
                    <span className="text-xs text-gray-500 mb-1">From</span>
                    <span className="text-4xl font-bold text-gray-900">${plusPrice}</span>
                  </div>

                  <Link href="/services/premium-plus">
                    <button className="bg-[#007398] hover:bg-[#005a77] text-white font-medium py-3 px-6 rounded-sm w-4/5 mx-auto transition-colors text-sm flex items-center justify-center gap-2">
                      Order Plus service <span className="text-xs">▶</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mt-20 overflow-x-auto pb-4 max-w-[1100px] mx-auto">
              <table className="w-full text-sm text-left table-fixed min-w-[800px]">
                <thead>
                  <tr>
                    <th className="pb-8 font-normal text-gray-500 w-[40%]"></th>
                    <th className="pb-8 text-center font-normal w-[20%] align-bottom">
                      <div className="font-bold text-gray-900 mb-2 text-lg">Standard</div>
                      <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-2 bg-gray-50 inline-block px-3 py-1 rounded-full">{stdWordCount.label} words from</div>
                      <div className="text-2xl font-bold text-gray-900">${stdPrice}</div>
                    </th>
                    <th className="pb-8 text-center font-normal w-[20%] align-bottom">
                      <div className="font-bold text-gray-900 mb-2 text-lg">Express</div>
                      <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-2 bg-gray-50 inline-block px-3 py-1 rounded-full">{expWordCount.label} words from</div>
                      <div className="text-2xl font-bold text-gray-900">${expPrice}</div>
                    </th>
                    <th className="pb-8 text-center font-normal w-[20%] relative align-bottom">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider border border-green-200 whitespace-nowrap">
                        RECOMMENDED
                      </div>
                      <div className="font-bold text-gray-900 mb-2 text-lg mt-4">Plus</div>
                      <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-2 bg-gray-50 inline-block px-3 py-1 rounded-full">{plusWordCount.label} words from</div>
                      <div className="text-2xl font-bold text-gray-900">${plusPrice}</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-b border-gray-200">
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 group">
                      <td className="py-4 pr-6 text-gray-700 leading-snug font-medium text-[13px]">{row.feature}</td>
                      <td className="py-4 text-center">
                        {row.standard ? <Check className="w-5 h-5 text-green-500 mx-auto" strokeWidth={3} /> : <X className="w-5 h-5 text-red-500 mx-auto" strokeWidth={3} />}
                      </td>
                      <td className="py-4 text-center">
                        {row.express ? <Check className="w-5 h-5 text-green-500 mx-auto" strokeWidth={3} /> : <X className="w-5 h-5 text-red-500 mx-auto" strokeWidth={3} />}
                      </td>
                      <td className="py-4 text-center">
                        {row.premium ? <Check className="w-5 h-5 text-green-500 mx-auto" strokeWidth={3} /> : <X className="w-5 h-5 text-red-500 mx-auto" strokeWidth={3} />}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="pt-10"></td>
                    <td className="pt-10 text-center">
                       <Link href="/services/standard-editing">
                        <button className="bg-[#007398] hover:bg-[#005a77] text-white font-medium py-2 px-4 rounded-sm text-xs w-[85%] mx-auto transition-colors flex items-center justify-center gap-1">
                          Order Standard service <span className="text-[10px]">▶</span>
                        </button>
                       </Link>
                    </td>
                    <td className="pt-10 text-center">
                      <Link href="/services/express-editing">
                        <button className="bg-[#007398] hover:bg-[#005a77] text-white font-medium py-2 px-4 rounded-sm text-xs w-[85%] mx-auto transition-colors flex items-center justify-center gap-1">
                          Order Express service <span className="text-[10px]">▶</span>
                        </button>
                      </Link>
                    </td>
                    <td className="pt-10 text-center">
                      <Link href="/services/premium-plus">
                        <button className="bg-[#007398] hover:bg-[#005a77] text-white font-medium py-2 px-4 rounded-sm text-xs w-[85%] mx-auto transition-colors flex items-center justify-center gap-1">
                          Order Plus service <span className="text-[10px]">▶</span>
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tfoot>
              </table>
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

      {/* Guarantee Banner */}
      <section className="bg-[#eef4f9] py-12 w-full mt-12">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-center">
          <div className="flex flex-col items-center text-center">
             <div className="bg-blue-100 p-4 rounded-full mb-3">
               <Award className="w-12 h-12 text-[#007398]" strokeWidth={1.5} />
             </div>
             <span className="font-bold text-[#007398] text-lg uppercase tracking-wide">Exclusive Quality<br/>Guarantee</span>
          </div>
          <div className="h-24 w-px bg-blue-200 hidden md:block"></div>
          <p className="text-[15px] text-gray-700 max-w-[600px] leading-relaxed">
            No matter what service you choose, SuperbEditing services are always guaranteed. If your manuscript is rejected due to English proofreading issues, we will re-edit your paper for free no questions asked.
          </p>
        </div>
      </section>

      {/* Why SuperbEditing Section */}
      <section className="py-24 px-6 max-w-[1100px] mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-5/12">
            <div className="relative w-full aspect-4/3 overflow-hidden shadow-xl rounded-sm">
               <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop" 
                alt="Professional Editor" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why SuperbEditing Services?</h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Once you finish your manuscript, it is helpful to have it reviewed by an expert in your field whose first language is English. This will increase your chances to get published.
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Language-edited papers are published more often, have a higher IF/SJR, and are published with a lower revision rate than regular papers.*
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              With our professional editing and publishing experience, SuperbEditing is a trusted authority in the industry. We understand the standards upheld by reputable journals. Our language editing service comes with a quality guarantee, ensuring that your manuscript will meet the highest standards.
            </p>
            <p className="text-xs text-gray-500 italic mt-4">* Source: Our internal data</p>
          </div>
        </div>
      </section>

      {/* Need something different Section */}
      <section className="bg-[#eef4f9] py-20 w-full">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Need something different?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left">
            <div className="bg-transparent">
               <h3 className="text-xl font-bold text-gray-900 mb-3">Language Editing PhD Thesis</h3>
               <p className="text-[15px] text-gray-700 mb-6 leading-relaxed h-12">
                 Our experts will improve the language of your PhD Thesis helping you reach the highest academic standard.
               </p>
               <Link href="#" className="text-[#007398] font-semibold text-sm hover:underline flex items-center gap-1.5 transition-colors">
                 Find out more <span className="text-[10px]">▶</span>
               </Link>
            </div>
            
            <div className="bg-transparent">
               <h3 className="text-xl font-bold text-gray-900 mb-3">Language Editing LaTeX</h3>
               <p className="text-[15px] text-gray-700 mb-6 leading-relaxed h-12">
                 Make sure your LaTeX manuscript is written in correct English before research.
               </p>
               <Link href="#" className="text-[#007398] font-semibold text-sm hover:underline flex items-center gap-1.5 transition-colors">
                 Find out more <span className="text-[10px]">▶</span>
               </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
