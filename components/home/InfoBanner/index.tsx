"use client";

import { motion } from "framer-motion";
import { Users, Trophy, GraduationCap, CheckCircle } from "lucide-react";

const STATS = [
  {
    icon: <Users size={24} />,
    value: "5,000+",
    label: "Satisfied Scholars",
    color: "text-blue-600",
    bg: "bg-blue-600/10",
  },
  {
    icon: <Trophy size={24} />,
    value: "99%",
    label: "Publication Rate",
    color: "text-red-600",
    bg: "bg-red-600/10",
  },
  {
    icon: <GraduationCap size={24} />,
    value: "150+",
    label: "PhD-Level Editors",
    color: "text-blue-600",
    bg: "bg-blue-600/10",
  },
  {
    icon: <CheckCircle size={24} />,
    value: "10M+",
    label: "Words Polished",
    color: "text-red-600",
    bg: "bg-red-600/10",
  },
];

const InfoBanner = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-transparent group-hover:border-inherit`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;
