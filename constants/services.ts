export interface ServiceField {
  id: string;
  name: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
}

export interface ServiceCategory {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  color: string;
  fields: ServiceField[];
  features: string[];
  pricing: PricingPlan[];
}

export const SERVICE_DATA: Record<string, ServiceCategory> = {
  "academic-editing": {
    title: "Academic Manuscript Editing",
    subtitle: "Precision editing for scholars and researchers",
    description: "Our expert editors refine your academic papers, ensuring clarity, coherence, and strict adherence to scholarly standards. We cover everything from PhD theses to conference papers.",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    color: "#003366", // Navy Blue
    fields: [
      { id: "thesis", name: "Thesis Editing", icon: "GraduationCap" },
      { id: "dissertation", name: "Dissertation Support", icon: "BookOpen" },
      { id: "conference", name: "Conference Papers", icon: "Users" },
      { id: "case-study", name: "Case Studies", icon: "ClipboardList" },
    ],
    features: [
      "Grammar & Syntax Correction",
      "Logical Flow Improvement",
      "Tone & Style Adjustment",
      "References & Citations Check",
    ],
    pricing: [
      { id: "standard", name: "Standard Editing", price: "₦3.50", period: "/word", features: ["Grammar Correction", "Style Check", "7-Day Delivery"] },
      { id: "premium", name: "Premium Editing", price: "₦5.00", period: "/word", features: ["Everything in Standard", "Structural Review", "3-Day Delivery", "Plagiarism Report"] },
    ]
  },
  "research-writing": {
    title: "Professional Research Writing",
    subtitle: "Structure your ideas into impactful research",
    description: "Struggling to articulate your findings? Our research writing assistants help you draft, structure, and refine your work while maintaining academic integrity.",
    heroImage: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop",
    color: "#0051A1", // Sky Blue
    fields: [
      { id: "proposal", name: "Research Proposals", icon: "FileText" },
      { id: "lit-review", name: "Literature Reviews", icon: "Library" },
      { id: "abstract", name: "Abstract Writing", icon: "FileSearch" },
      { id: "methodology", name: "Methodology Drafting", icon: "Settings" },
    ],
    features: [
      "Structural Organization",
      "Data Presentation Advice",
      "Plagiarism Prevention",
      "Content Enrichment",
    ],
    pricing: [
      { id: "basic", name: "Assisted Writing", price: "₦8,000", period: "/page", features: ["Drafting Support", "Structural Guide", "Bibliography"] },
      { id: "comprehensive", name: "Full Writing Support", price: "₦15,000", period: "/page", features: ["Everything in Basic", "Data Analysis Help", "Unlimited Revisions"] },
    ]
  },
  "proofreading": {
    title: "Scientific & Journal Proofreading",
    subtitle: "Polishing your work for publication",
    description: "The final touch before submission. We eliminate typos, formatting errors, and stylistic inconsistencies that could hinder your publication success.",
    heroImage: "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?q=80&w=2070&auto=format&fit=crop",
    color: "#2E3192", // Dark Blue
    fields: [
      { id: "journal", name: "Journal Articles", icon: "FileCheck" },
      { id: "book-chapter", name: "Book Chapters", icon: "Book" },
      { id: "tech-report", name: "Technical Reports", icon: "BarChart" },
      { id: "white-paper", name: "White Papers", icon: "File" },
    ],
    features: [
      "Intensive Proofreading",
      "Punctuation & Spelling",
      "Final Formatting Check",
      "Fast Turnaround Options",
    ],
    pricing: [
      { id: "express", name: "Express Proof", price: "₦2.00", period: "/word", features: ["Quick Polish", "Grammar Fix", "24-Hour Delivery"] },
      { id: "detailed", name: "Detailed Review", price: "₦3.00", period: "/word", features: ["Style Review", "Contextual Check", "48-Hour Delivery"] },
    ]
  },
  "formatting": {
    title: "Citation & Style Formatting",
    subtitle: "Perfectly formatted according to any style guide",
    description: "APA, MLA, Chicago, Harvard, or Vancouver – we ensure your manuscript perfectly matches the specific requirements of your target journal or institution.",
    heroImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    color: "#E31E24", // Accent Red (keeping one red for variety/CTA feel)
    fields: [
      { id: "apa", name: "APA Styling", icon: "Quote" },
      { id: "mla", name: "MLA Formatting", icon: "AlignLeft" },
      { id: "chicago", name: "Chicago/Turabian", icon: "List" },
      { id: "harvard", name: "Harvard Referencing", icon: "BookOpen" },
    ],
    features: [
      "Bibliographic Accuracy",
      "In-text Citation Verification",
      "Layout & Margin Adjustment",
      "Table/Figure Formatting",
    ],
    pricing: [
      { id: "single", name: "Single Style", price: "₦10,000", period: "/document", features: ["Full Formatting", "Citation Check", "List of References"] },
    ]
  }
};
