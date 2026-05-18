import React from "react";
import { TOP_NAV_LINKS } from "../../../constants";
import { 
  Briefcase, 
  Calendar, 
  ShoppingBag, 
  BookOpen, 
  User, 
  BookPlus
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  "Coworking Space": <Briefcase size={14} />,
  "Community Centre Booking": <Calendar size={14} />,
  "Merch Store": <ShoppingBag size={14} />,
  "E-Books": <BookPlus size={14} />,
  "Textbooks": < BookOpen size={14} />,
  "My Profile": <User size={14} />,
};

const TopBar = () => {
  return (
    <div className="bg-[#05203C] text-white border-b border-white/10 hidden md:block">  
      <nav 
        className="px-4 md:px-10 flex md:justify-end items-center py-2 overflow-x-auto no-scrollbar whitespace-nowrap"
        aria-label="Top level links"
      >
        <ul className="flex items-center gap-6 text-[11px] font-medium">
          {TOP_NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors shrink-0 cursor-pointer"
              >
                {ICON_MAP[link.label]}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
