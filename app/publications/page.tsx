import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar as CalendarIcon, MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Publications & Conferences - Superb Editing",
  description: "Discover suitable journals, research opportunities, and upcoming academic conferences.",
};

export const JOURNALS = [
  {
    title: "Journal of Advanced Research",
    impactFactor: "10.47",
    scope: "Multidisciplinary scientific research, technological innovations, and applied sciences.",
    deadline: "Rolling Submissions",
  },
  {
    title: "International Journal of Academic Studies",
    impactFactor: "4.82",
    scope: "Social sciences, humanities, education, and public policy research.",
    deadline: "Aug 15, 2026",
  },
  {
    title: "Global Medical Perspectives",
    impactFactor: "7.15",
    scope: "Clinical research, public health, and healthcare administration.",
    deadline: "Sep 01, 2026",
  }
];

export const CONFERENCES = [
  {
    title: "Annual Global Researchers Symposium",
    date: "October 12-14, 2026",
    location: "London, UK (Hybrid)",
    description: "A premier gathering of scholars across disciplines to present ongoing research and foster interdisciplinary collaboration.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "International Conference on Academic Publishing",
    date: "November 05-06, 2026",
    location: "Virtual",
    description: "Workshops and keynote sessions focused on navigating the peer-review process, open access trends, and research ethics.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop"
  }
];

export default function PublicationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications & Conferences</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover reputable journals for your next manuscript and explore upcoming academic conferences and workshops.
          </p>
        </div>
      </section>

      {/* Recommended Journals */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Recommended Journals</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JOURNALS.map((journal, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{journal.title}</h3>
                
                <div className="flex items-center space-x-2 mb-4 bg-green-50 text-green-700 px-3 py-1 rounded-lg w-fit text-sm font-semibold border border-green-200">
                  <span>Impact Factor:</span>
                  <span>{journal.impactFactor}</span>
                </div>
                
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Scope:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{journal.scope}</p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div className="text-sm font-medium text-gray-500">
                    Deadline: <span className="text-gray-900">{journal.deadline}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors p-2 bg-blue-50 hover:bg-blue-100 rounded-lg">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Conferences */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
           <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Conferences & Workshops</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
             {CONFERENCES.map((conf, i) => (
               <div key={i} className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 group">
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={conf.image} 
                      alt={conf.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:w-3/5 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{conf.title}</h3>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600 text-sm font-medium">
                        <CalendarIcon className="w-4 h-4 mr-2 text-purple-500" />
                        {conf.date}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm font-medium">
                        <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                        {conf.location}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {conf.description}
                    </p>

                    <button className="bg-[#05203C] hover:bg-blue-900 text-white font-bold py-2.5 px-6 rounded-xl transition-colors w-fit text-sm shadow-md">
                      Register Now
                    </button>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
