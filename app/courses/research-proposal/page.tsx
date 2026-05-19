import { COURSES } from "../page";
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, Star, UserCircle, PlayCircle, BookOpen, CheckCircle2, Award } from "lucide-react";

export default function ResearchProposalPage() {
  const course = COURSES.find(c => c.focus === "Research Proposal Writing");

  if (!course) return null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05203C] to-transparent mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <Link href="/courses" className="inline-flex items-center text-blue-300 hover:text-white font-semibold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
          </Link>
          
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              {course.focus}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{course.title}</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Master the art of crafting compelling research proposals that secure funding and academic approval. Learn the exact structures used by successful researchers.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10 text-white/90">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-bold">{course.rating}</span>
                <span className="text-sm opacity-80">({course.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span>Certificate of Completion</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-blue-900/20 text-lg">
                Enroll Now for {course.cost}
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center space-x-2 text-lg">
                <PlayCircle className="w-6 h-6" />
                <span>Watch Preview</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Instructor Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p>
                  Writing a research proposal is often the most critical step in your academic journey. It dictates whether you receive funding, gain ethical approval, and ultimately proceed with your thesis or dissertation.
                </p>
                <p>
                  This course demystifies the process. We break down the core components of a successful proposal—from articulating a clear research gap to designing a robust methodology. You will learn how to persuade reviewers that your research is not only viable but highly impactful.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Will Learn</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Identify compelling research gaps",
                  "Structure your literature review efficiently",
                  "Develop strong, testable hypotheses",
                  "Align methodology with research aims",
                  "Create realistic academic budgets",
                  "Anticipate reviewer questions and criticism"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Card */}
            <div>
              <div className="bg-slate-50 border border-gray-100 rounded-3xl p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Your Instructor</h3>
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <UserCircle className="w-16 h-16 text-[#05203C] opacity-80" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">{course.instructor.name}</h4>
                  <p className="text-blue-600 font-medium text-sm mt-1">Lead Academic Writer</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {course.instructor.bio}
                </p>
                <button className="w-full bg-white border border-gray-200 hover:border-gray-300 text-gray-800 font-semibold py-2.5 rounded-xl transition-colors text-sm">
                  View Full Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Outline Section */}
      <section className="py-20 px-4 bg-slate-50 border-y border-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
            <p className="text-gray-600">A step-by-step breakdown of what we cover over the 4-week program.</p>
          </div>

          <div className="space-y-6">
            {course.outline.map((module, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{module}</h3>
                  <p className="text-gray-600">
                    {i === 0 && "Dive into the fundamental building blocks of a research proposal. Learn how to outline your chapters effectively."}
                    {i === 1 && "Discover techniques to isolate a specific research gap and transform it into a clear, answerable research question."}
                    {i === 2 && "Learn how to defend your chosen research methods against academic scrutiny and prove its validity."}
                    {i === 3 && "Practical guides on building Gantt charts, budgeting, and planning for data collection logistics."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
