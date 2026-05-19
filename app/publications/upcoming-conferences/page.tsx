import { CONFERENCES } from "../page";
import Link from "next/link";
import { ArrowLeft, Calendar as CalendarIcon, MapPin, Users, Presentation, Globe } from "lucide-react";

export default function UpcomingConferencesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#05203C] to-purple-900 text-white pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <Link href="/publications" className="inline-flex items-center text-purple-300 hover:text-white font-semibold mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Publications
          </Link>
          
          <div className="w-20 h-20 bg-purple-600/30 text-purple-300 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-purple-500/30">
            <CalendarIcon className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Upcoming Conferences & Workshops</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Network with peers, present your preliminary findings, and stay abreast of the latest developments in your field by attending these premier academic events.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Attend Academic Conferences?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Conferences are a vital part of the academic ecosystem, offering benefits that go far beyond just publishing a paper.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <Users className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Networking</h3>
              <p className="text-gray-600">Connect with potential collaborators, mentors, and journal editors in person or virtually.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <Presentation className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Constructive Feedback</h3>
              <p className="text-gray-600">Present your working papers and receive immediate, valuable feedback before submitting to a journal.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <Globe className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Trends</h3>
              <p className="text-gray-600">Discover the cutting edge of your discipline before the research is formally published.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The List Section */}
      <section className="py-24 px-4 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Event Calendar</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {CONFERENCES.map((conf, i) => (
               <div key={i} className="flex flex-col md:flex-row bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-shadow">
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={conf.image} 
                      alt={conf.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-center bg-white">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{conf.title}</h3>
                    
                    <div className="space-y-4 mb-8 bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                      <div className="flex items-center text-gray-800 font-medium text-lg">
                        <CalendarIcon className="w-5 h-5 mr-3 text-purple-600" />
                        {conf.date}
                      </div>
                      <div className="flex items-center text-gray-800 font-medium text-lg">
                        <MapPin className="w-5 h-5 mr-3 text-purple-600" />
                        {conf.location}
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                      {conf.description}
                    </p>

                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-colors w-full md:w-fit text-lg shadow-md hover:shadow-lg">
                      Register to Attend
                    </button>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl bg-white rounded-3xl p-10 md:p-16 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Presenting a paper?</h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
              Ensure your conference paper or poster presentation is flawless. Use our editing services before you present.
            </p>
          </div>
          
          <div className="w-full md:w-auto shrink-0">
            <Link href="/services" className="inline-block w-full md:w-auto bg-[#05203C] hover:bg-blue-900 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-md hover:shadow-lg text-center">
              Edit My Paper
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
