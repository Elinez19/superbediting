"use client";

import React from 'react';
import * as Icons from 'lucide-react';

interface FieldsGridProps {
  fields: Array<{ id: string; name: string; icon: string }>;
  color: string;
}

export const FieldsGrid = ({ fields, color }: FieldsGridProps) => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Areas of Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose from our wide range of academic specializations. Each service is tailored to meet the rigorous standards of international research and publication.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fields.map((field) => {
            const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[field.icon] || Icons.Book;
            return (
              <div 
                key={field.id}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${color}10`, color: color }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{field.name}</h3>
                <div className="flex items-center text-sm font-medium" style={{ color: color }}>
                  Learn More <Icons.ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
