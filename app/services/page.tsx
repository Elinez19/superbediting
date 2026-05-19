import { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Editing Services - Superb Editing",
  description: "Top-tier language editing services designed to refine your writing and increase your chances of publication.",
};

const PACKAGES = [
  {
    name: "Standard Editing",
    description: "Perfect Your Manuscript/thesis for Submission",
    text: "Before submitting your manuscript, ensure it is polished and free from language errors. Our Standard Editing package is ideal for researchers looking to refine their work with thorough, professional editing.",
    turnaround: "4-14 business days",
    price: "Starting at $95 for 500 words",
    color: "bg-blue-50 text-blue-900 border-blue-200",
    buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    name: "Express Editing",
    description: "Fast-Track Your Manuscript Without Compromising Quality",
    text: "Need your manuscript edited quickly? Our Express Editing service offers the same high-quality editing as our Standard package but with a much faster turnaround, ensuring your work is ready when needed.",
    turnaround: "1-4 business days",
    price: "Starting at $170 for 500 words",
    color: "bg-indigo-50 text-indigo-900 border-indigo-200",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700 text-white",
  },
  {
    name: "Premium Plus Editing",
    badge: "Recommended",
    description: "Enhance Your Writing & Receive Ongoing Support",
    text: "Looking for more than just basic editing? Our Premium Plus package not only improves the flow and coherence of your manuscript but also provides unlimited editing support. Benefit from continuous revisions and guidance for up to 12 months, ensuring your work meets the highest standards.",
    turnaround: "Valid for 12 months",
    price: "Starting at $204 for 500 words",
    color: "bg-purple-50 text-purple-900 border-purple-200",
    buttonColor: "bg-purple-600 hover:bg-purple-700 text-white",
  },
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

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Editing Services</h1>
          <p className="text-xl text-blue-100">
            Top-tier language editing services designed to refine your writing.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose SuperbEditing for Your Manuscript/Thesis?
        </h2>
        <div className="prose prose-lg mx-auto text-gray-600 space-y-4">
          <p>
            Getting your manuscript accepted by a reputable journal is a significant milestone in your academic journey, but the road to publication can be challenging. The clarity and precision of your writing are crucial in effectively communicating your research findings.
          </p>
          <p>
            At SuperbEditing.com, our seasoned editors possess deep research and academic editing expertise. We're committed to helping you enhance your manuscript and increase your chances of publication.
          </p>
          <p>
            With years of experience supporting academics and researchers, Superb Editing offers top-tier language editing services designed to refine your writing. Customize our service to meet your needs by selecting the appropriate package and turnaround time.
          </p>
          <p className="font-semibold text-[#05203C] text-xl mt-8 text-center">
            Get your manuscript/thesis edited with our affordable packages.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Packages & Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, i) => (
              <div key={i} className={`rounded-2xl border p-8 flex flex-col relative ${pkg.color}`}>
                {pkg.badge && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full shadow-sm">
                    {pkg.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <h4 className="font-semibold mb-4 opacity-90">{pkg.description}</h4>
                <p className="opacity-80 mb-6 flex-grow">{pkg.text}</p>
                
                <div className="bg-white/50 rounded-xl p-4 mb-6 space-y-2">
                  <div className="flex justify-between font-semibold">
                    <span>Turnaround:</span>
                    <span>{pkg.turnaround}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Price:</span>
                    <span>{pkg.price}</span>
                  </div>
                </div>
                
                <button className={`w-full py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg ${pkg.buttonColor}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Compare Packages/Options</h2>
          <p className="text-center text-gray-600 mb-12">Go through the table below to compare packages and choose the best one.</p>
          
          <div className="overflow-x-auto rounded-xl shadow-xl shadow-gray-200 border border-gray-100">
            <table className="w-full text-left bg-white">
              <thead className="bg-[#05203C] text-white">
                <tr>
                  <th className="p-4 font-semibold w-2/5">Feature/Benefit</th>
                  <th className="p-4 font-semibold text-center w-1/5 border-l border-white/10">Standard Editing</th>
                  <th className="p-4 font-semibold text-center w-1/5 border-l border-white/10">Express Editing</th>
                  <th className="p-4 font-semibold text-center w-1/5 border-l border-white/10">Premium Plus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center border-l border-gray-100">
                      {row.standard ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-red-300 mx-auto" />}
                    </td>
                    <td className="p-4 text-center border-l border-gray-100">
                      {row.express ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-red-300 mx-auto" />}
                    </td>
                    <td className="p-4 text-center border-l border-gray-100">
                      {row.premium ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-red-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-semibold border-t-2 border-gray-200">
                  <td className="p-4 text-gray-900">Starting Price for 500 Words</td>
                  <td className="p-4 text-center border-l border-gray-100">$95</td>
                  <td className="p-4 text-center border-l border-gray-100">$170</td>
                  <td className="p-4 text-center border-l border-gray-100">$204</td>
                </tr>
                <tr className="bg-gray-50 font-semibold">
                  <td className="p-4 text-gray-900">Turnaround Time</td>
                  <td className="p-4 text-center border-l border-gray-100 text-sm">7-25 Business Days</td>
                  <td className="p-4 text-center border-l border-gray-100 text-sm">4-25 Business Days</td>
                  <td className="p-4 text-center border-l border-gray-100 text-sm">1-25 Business Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
