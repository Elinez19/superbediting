import React from "react";
import { CalendarDays, Clock, MapPin, Download } from "lucide-react";

export const metadata = {
  title: "Research Submission Deadlines | Superb Editing",
  description: "Stay updated with critical submission deadlines for major academic journals, thesis defenses, and conference applications.",
};

const DeadlinesPage = () => {
  const upcomingDeadlines = [
    {
      title: "Nature Journal Q3 Submission",
      date: "September 15th, 2026",
      status: "Upcoming",
      tag: "Journal",
    },
    {
      title: "International Research Grant",
      date: "August 30th, 2026",
      status: "Open for Application",
      tag: "Funding",
    },
    {
      title: "Global Academic Conference",
      date: "July 20th, 2026",
      status: "Abstract Due",
      tag: "Conference",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-[#05203C]/10 rounded-full mb-4 text-[#05203C]">
            <CalendarDays size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#05203C]">
            Research Submission Deadlines
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Stay organized and never miss a critical academic date. We track the official
            deadlines for major journals, conferences, and institutional defenses.
          </p>
        </div>

        {/* Featured Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          <div className="bg-[#05203C] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Next Critical Deadline</h2>
              <p className="text-slate-300">Nature Communications - Special Edition Submission</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm border border-white/20 min-w-[80px]">
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider">Days</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm border border-white/20 min-w-[80px]">
                <div className="text-2xl font-bold text-white">08</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider">Hours</div>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingDeadlines.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#05203C]" />
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-[#05203C] bg-[#05203C]/10 px-2.5 py-1 rounded">
                    {item.tag}
                  </span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded ${
                    item.status === "Upcoming" ? "bg-amber-100 text-amber-700" :
                    item.status === "Open for Application" ? "bg-green-100 text-green-700" :
                    "bg-blue-100 text-blue-700"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#05203C] mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-slate-500 mb-6 text-sm">
                  <Clock size={16} />
                  <span>{item.date}</span>
                </div>
                <button className="flex items-center gap-2 text-sm font-semibold text-[#05203C] hover:text-[#0051A1] transition-colors">
                  <Download size={16} />
                  Download Submission Guidelines
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
          <div className="mt-1 bg-blue-100 text-blue-600 p-2 rounded-full hidden sm:block">
            <MapPin size={20} />
          </div>
          <div>
            <h4 className="font-bold text-[#05203C] mb-2">Important Notice for Researchers</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Submission deadlines are subject to change by the respective editorial boards or institutions. We update these dates frequently. Ensure you confirm with the specific journal&apos;s submission portal or your department office at least two weeks before the deadline.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeadlinesPage;
