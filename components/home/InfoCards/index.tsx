"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, PenTool, FileCheck, Quote } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  {
    title: "Academic Editing",
    description: "Refine your theses, dissertations, and papers with PhD-level editing for clarity, flow, and scholarly impact.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "bg-blue-900",
    link: "/services/academic-editing",
  },
  {
    title: "Research Writing",
    description: "Get expert assistance in drafting proposals, literature reviews, and methodologies while maintaining academic integrity.",
    icon: <PenTool className="w-8 h-8" />,
    color: "bg-blue-600",
    link: "/services/research-writing",
  },
  {
    title: "Journal Submission",
    description: "Increase your acceptance rates with meticulous proofreading and peer-review feedback for high-impact journal articles.",
    icon: <FileCheck className="w-8 h-8" />,
    color: "bg-indigo-800",
    link: "/services/proofreading",
  },
  {
    title: "Style & Formatting",
    description: "Ensure perfect adherence to APA, MLA, Chicago, or Harvard styles with comprehensive citation and layout checks.",
    icon: <Quote className="w-8 h-8" />,
    color: "bg-red-600",
    link: "/services/formatting",
  },
];

const InfoCards = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#05203C] mb-4"
          >
            Our Specialized Research Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            We provide expert academic support to help researchers and students navigate the complexities of scholarly writing and publication.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full"
            >
              <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-${category.color.split('-')[1]}-200`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                {category.description}
              </p>
              <Link 
                href={category.link}
                className="inline-flex items-center text-[#05203C] font-bold hover:gap-2 transition-all group"
              >
                Explore Service
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
