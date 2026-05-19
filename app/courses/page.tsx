import { Metadata } from "next";
import Link from "next/link";
import { PlayCircle, Clock, DollarSign, Star, UserCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Courses - Superb Editing",
  description: "Enhance your academic writing skills with our specialized courses in Research Proposal Writing, Literature Review Strategies, and more.",
};

const COURSES = [
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
    color: "bg-blue-50",
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
    color: "bg-indigo-50",
  }
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic Writing Courses</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
            Elevate your research skills with expert-led courses designed for students, researchers, and academics.
          </p>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Course Catalog</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {COURSES.map((course) => (
              <div key={course.id} className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-bold text-[#05203C] shadow-sm">
                    {course.focus}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  
                  <div className="flex items-center space-x-6 mb-6 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="font-bold">{course.cost}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-bold">{course.rating}</span>
                      <span className="text-sm">({course.reviews})</span>
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl mb-6 ${course.color}`}>
                    <div className="flex items-start space-x-4">
                      <UserCircle className="w-12 h-12 text-[#05203C] opacity-80" />
                      <div>
                        <h4 className="font-bold text-gray-900">{course.instructor.name}</h4>
                        <p className="text-sm text-gray-700 mt-1">{course.instructor.bio}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 flex-grow">
                    <h4 className="font-bold text-gray-900 mb-3">Course Outline:</h4>
                    <ul className="space-y-2">
                      {course.outline.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <button className="flex-1 bg-[#05203C] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md">
                      Enroll Now
                    </button>
                    <button className="flex-1 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2">
                      <PlayCircle className="w-5 h-5 text-blue-600" />
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
      <section className="py-20 bg-white px-4 border-t border-gray-100">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Try Before You Buy</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Not sure if a course is right for you? Watch our free sample lessons to experience our high-quality instruction firsthand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {COURSES.map((course) => (
               <div key={`preview-${course.id}`} className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900 group cursor-pointer">
                  <img 
                    src={course.image} 
                    alt={`${course.title} Preview`} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    <PlayCircle className="w-16 h-16 mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    <h3 className="font-bold text-lg md:text-xl text-center">{course.title} Preview</h3>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
