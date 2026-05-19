export const TOP_NAV_LINKS = [
  { label: "Thesis Editing", href: "#" },
  { label: "Dissertation Support", href: "#" },
  { label: "Journal Submission", href: "#" },
  { label: "Plagiarism Check", href: "#" },
  { label: "Data Analysis", href: "#" },
  { label: "Client Portal", href: "#" },
];

export interface NavLink {
  label: string;
  href: string;
  hasMegaMenu: boolean;
  badge?: string;
  subLinks?: { label: string; href: string; }[];
}

export const MAIN_NAV_LINKS: NavLink[] = [
  {
    label: "Editing Services",
    href: "/services",
    hasMegaMenu: true,
    subLinks: [
      { label: "Standard Editing", href: "/services/standard-editing" },
      { label: "Express Editing", href: "/services/express-editing" },
      { label: "Premium Plus", href: "/services/premium-plus" },
    ]
  },
  {
    label: "Courses",
    href: "/courses",
    hasMegaMenu: true,
    subLinks: [
      { label: "Research Proposal", href: "/courses/research-proposal" },
      { label: "Literature Review", href: "/courses/literature-review" },
    ]
  },
  {
    label: "Premium Tools",
    href: "/tools",
    hasMegaMenu: true,
    subLinks: [
      { label: "Standard Essentials", href: "/tools/standard-essentials" },
      { label: "Comprehensive Suite", href: "/tools/comprehensive-suite" },
      { label: "Ultimate Toolkit", href: "/tools/ultimate-toolkit" },
    ]
  },
  {
    label: "Blog",
    href: "/blog",
    hasMegaMenu: false,
  },
  {
    label: "Publications/Conferences",
    href: "/publications",
    hasMegaMenu: true,
    subLinks: [
      { label: "Recommended Journals", href: "/publications/recommended-journals" },
      { label: "Upcoming Conferences", href: "/publications/upcoming-conferences" },
    ]
  },
];

export const HERO_SLIDES = [
  {
    id: "01",
    title: "Polish Your Research Writing with Superb Editing",
    subtitle: "Superb Editing",
    description: "Transform your manuscript into a publication-ready masterpiece. We specialize Polish Your Research Writing with Superb Editing.",
    buttonText: "Get a Quote",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Access Premium Writing Tools at Affordable Prices",
    subtitle: "Superb Editing",
    description: "Boost your productivity with trusted academic writing and plagiarism-checking tools, including Grammarly, QuillBot, Turnitin, and more — all in one affordable package.",
    buttonText: "Explore Services",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Fast-Track Your Publication Success",
    subtitle: "Superb Editing",
    description: "Increase your acceptance rates in high-impact journals. Our peer-reviewers provide the critical feedback you need to succeed.",
    buttonText: "Start Now",
    image: "https://images.unsplash.com/photo-1523240715639-99a8080ffc00?q=80&w=2070&auto=format&fit=crop",
  },
];

export const ANNOUNCEMENT_TEXT = "New Semester Special: Get 15% off on all dissertation editing services this month! Use code RESEARCH15";
export const PHONE_NUMBER = "+2349069966566";
