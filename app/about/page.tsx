import { Metadata } from "next";
import { Target, Globe, Award, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Superb Editing",
  description: "Learn about Superb Editing, our mission to empower researchers globally, and our commitment to academic excellence.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Empowering students, researchers, and writers globally to achieve excellence in their academic endeavors.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p>
                Superb editing was founded with African scholars, students and researchers at mind. It is a part of <strong>K-Tech Solutions</strong>, a dynamic Nigerian business entity that delivers cutting-edge digital solutions tailored to enhance the quality and impact of academic, professional, and creative content. 
              </p>
              <p>
                Registered with the Corporate Affairs Commission (CAC) of Nigeria (BN: 3644623), we are committed to providing exceptional services powered by a blend of technological innovation and subject matter expertise to students, writers, and academics globally.
              </p>
              <p>
                With the coming of Superb Editing into play, we hope to bridge the review gap by serving as professional and personal editors to support students and researchers to perfect their writings to top-notch quality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col items-center text-center">
                 <Globe className="w-12 h-12 text-blue-600 mb-4" />
                 <h3 className="font-bold text-gray-900 mb-2">Global Reach</h3>
                 <p className="text-sm text-gray-600">Serving academics worldwide</p>
               </div>
               <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 flex flex-col items-center text-center translate-y-8">
                 <Award className="w-12 h-12 text-purple-600 mb-4" />
                 <h3 className="font-bold text-gray-900 mb-2">Top Quality</h3>
                 <p className="text-sm text-gray-600">Subject matter experts</p>
               </div>
               <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 flex flex-col items-center text-center">
                 <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
                 <h3 className="font-bold text-gray-900 mb-2">Academic Focus</h3>
                 <p className="text-sm text-gray-600">Specialized in research</p>
               </div>
               <div className="bg-green-50 p-8 rounded-3xl border border-green-100 flex flex-col items-center text-center translate-y-8">
                 <Target className="w-12 h-12 text-green-600 mb-4" />
                 <h3 className="font-bold text-gray-900 mb-2">Precision</h3>
                 <p className="text-sm text-gray-600">Perfecting every detail</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-[#05203C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-[#05203C] to-[#05203C]"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Target className="w-10 h-10 text-blue-300" />
          </div>
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-2xl md:text-3xl leading-relaxed font-light text-blue-50 italic">
            "To empower students, researchers, writers, and businesses with the tools and support they need to achieve excellence in their written and digital endeavors."
          </p>
        </div>
      </section>
    </div>
  );
}
