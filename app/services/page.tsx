import { Metadata } from "next";
import ServicesClient from "./components/ServicesClient";

export const metadata: Metadata = {
  title: "Editing Services - Superb Editing",
  description: "Top-tier language editing services designed to refine your writing and increase your chances of publication.",
};

export const PACKAGES = [
  {
    name: "Standard Editing",
    description: "Perfect Your Manuscript/thesis for Submission",
    text: "Before submitting your manuscript, ensure it is polished and free from language errors. Our Standard Editing package is ideal for researchers looking to refine their work with thorough, professional editing.",
    turnaround: "4-14 business days",
    price: "Starting at $95 for 500 words",
    color: "bg-blue-50 text-blue-900 border-blue-200",
    buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    name: "Express Editing",
    description: "Fast-Track Your Manuscript Without Compromising Quality",
    text: "Need your manuscript edited quickly? Our Express Editing service offers the same high-quality editing as our Standard package but with a much faster turnaround, ensuring your work is ready when needed.",
    turnaround: "1-4 business days",
    price: "Starting at $170 for 500 words",
    color: "bg-indigo-50 text-indigo-900 border-indigo-200",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700 text-white",
  },
  {
    name: "Premium Plus Editing",
    badge: "Recommended",
    description: "Enhance Your Writing & Receive Ongoing Support",
    text: "Looking for more than just basic editing? Our Premium Plus package not only improves the flow and coherence of your manuscript but also provides unlimited editing support. Benefit from continuous revisions and guidance for up to 12 months, ensuring your work meets the highest standards.",
    turnaround: "Valid for 12 months",
    price: "Starting at $204 for 500 words",
    color: "bg-purple-50 text-purple-900 border-purple-200",
    buttonColor: "bg-purple-600 hover:bg-purple-700 text-white",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <ServicesClient />
    </main>
  );
}
