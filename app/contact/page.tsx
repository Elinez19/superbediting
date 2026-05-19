import { Metadata } from "next";
import { Mail, Phone, MapPin, MessageSquare, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Superb Editing",
  description: "Get in touch with Superb Editing for academic editing, research writing support, and premium writing tools.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#05203C] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            For more information or enquiry on any of our services, please do not hesitate to contact us via the following options.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start space-x-6">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-1">info@superbediting.com</p>
                  <p className="text-gray-600">contact@superbediting.com</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start space-x-6">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Call / WhatsApp</h3>
                  <p className="text-gray-600">+234 906 996 6566</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-6">Follow Us on Social Media</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-full flex items-center justify-center transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-400 rounded-full flex items-center justify-center transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-50 text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-full flex items-center justify-center transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="flex items-center space-x-3 mb-8">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow" placeholder="How can we help?" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow resize-none" placeholder="Write your message here..."></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#05203C] hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-md text-lg">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
