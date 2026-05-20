import { Metadata } from "next";
import Link from "next/link";
import { PlayCircle, Clock, DollarSign, Star, UserCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Courses - Superb Editing",
  description: "Enhance your academic writing skills with our specialized courses in Research Proposal Writing, Literature Review Strategies, and more.",
};

export const COURSES = [
  {
    id: 1,
    title: "Mastering Research Proposal Writing",
    focus: "Research Proposal Writing",
    instructor: {
      name: "Dr. Sarah Jenkins",
      bio: "Dr. Jenkins is a seasoned academic with over 15 years of experience in securing research grants and publishing in top-tier journals.",
    },
    outline: [
      "Understanding the Proposal Structure",
      "Formulating a Strong Research Question",
      "Justifying Your Methodology",
      "Creating a Realistic Budget & Timeline"
    ],
    duration: "4 Weeks (Self-paced)",
    cost: "$150",
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Advanced Literature Review Strategies",
    focus: "Literature Review Strategies",
    instructor: {
      name: "Prof. Michael Chen",
      bio: "Prof. Chen specializes in systematic reviews and meta-analyses, helping students synthesize vast amounts of literature efficiently.",
    },
    outline: [
      "Defining the Scope of Your Review",
      "Effective Database Searching",
      "Synthesizing and Thematic Analysis",
      "Identifying Research Gaps"
    ],
    duration: "6 Weeks (Self-paced)",
    cost: "$200",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop",
  }
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white py-20 px-4 relative overflow-hidden border-b-4 border-red-600">
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Academic Writing Courses</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
            Elevate your research skills with expert-led courses designed for students, researchers, and academics.
          </p>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-[#05203C] mb-16">Course Catalog</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {COURSES.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col hover:shadow-2xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-md font-bold shadow-md text-sm uppercase tracking-wide">
                    {course.focus}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#05203C] mb-4">{course.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-700 font-medium border-b border-gray-100 pb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-red-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="font-bold text-lg">{course.cost}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded text-yellow-700">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-bold">{course.rating}</span>
                      <span className="text-sm">({course.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="bg-blue-50/50 border-l-4 border-[#05203C] p-4 mb-6">
                    <div className="flex items-start space-x-4">
                      <UserCircle className="w-10 h-10 text-[#05203C] shrink-0" />
                      <div>
                        <h4 className="font-bold text-[#05203C]">Instructor: {course.instructor.name}</h4>
                        <p className="text-sm text-gray-600 mt-1 italic">{course.instructor.bio}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 flex-grow">
                    <h4 className="font-bold text-[#05203C] mb-4 text-lg">Course Outline/Syllabus:</h4>
                    <ul className="space-y-3">
                      {course.outline.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors shadow-md text-center">
                      Enroll Now
                    </button>
                    <button className="flex-1 bg-white border-2 border-[#05203C] hover:bg-blue-50 text-[#05203C] font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center space-x-2">
                      <PlayCircle className="w-5 h-5" />
                      <span>Free Preview</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Previews Section */}
      <section className="py-24 bg-white px-4 border-t border-gray-200">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-[#05203C] mb-6 flex items-center justify-center gap-3">
            <PlayCircle className="w-8 h-8 text-red-600" /> Free Preview / Sample Lessons
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Not sure if a course is right for you? Watch our free sample introductory video lessons to experience our high-quality instruction firsthand before purchasing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {COURSES.map((course) => (
               <div key={`preview-${course.id}`} className="relative rounded-2xl overflow-hidden aspect-video bg-[#05203C] group cursor-pointer shadow-xl border-4 border-transparent hover:border-red-600 transition-colors">
                  <img 
                    src={course.image} 
                    alt={`${course.title} Preview`} 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    <div className="bg-red-600/90 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <PlayCircle className="w-12 h-12" />
                    </div>
                    <h3 className="font-bold text-lg md:text-xl text-center leading-snug">{course.title}<br/><span className="text-red-300 text-sm font-normal">Watch Introduction</span></h3>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
