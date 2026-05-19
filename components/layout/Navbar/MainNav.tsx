"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { MAIN_NAV_LINKS, PHONE_NUMBER } from "../../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

import MobileNav from "./MobileNav";

const MainNav = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { data: session, status } = useSession();

  return (
    <nav className="bg-white px-4 md:px-10 py-4 flex justify-between items-center relative shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="flex items-center gap-1.2 font-bold text-lg md:text-2xl text-[#05203C] whitespace-nowrap">
          <span className="text-[#BE1E2D]">SUPER</span>Editing
          <div className="flex flex-col border-l border-[#05203C]/20 pl-2 ml-1">
            <span className="text-[8px] md:text-[10px] leading-none font-bold uppercase tracking-tighter">
              Pro
            </span>
          </div>
        </div>
      </Link>

      {/* Nav Links (Desktop) */}
      <ul className="hidden lg:flex items-center gap-1">
        {MAIN_NAV_LINKS.map((link) => (
          <li
            key={link.label}
            className="relative"
            onMouseEnter={() => link.hasMegaMenu && setActiveMenu(link.label)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={link.href}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-[#BE1E2D] ${
                activeMenu === link.label ? "text-[#BE1E2D]" : "text-[#05203C]"
              }`}
            >
              {link.label}
              {link.badge && (
                <span className="bg-[#BE1E2D] text-white text-[8px] px-1 rounded ml-1">
                  {link.badge}
                </span>
              )}
              {link.hasMegaMenu && <ChevronDown size={14} className={`transition-transform ${activeMenu === link.label ? 'rotate-180' : ''}`} />}
            </Link>

            {/* Mega Menu / Sub Menu Dropdown */}
            <AnimatePresence>
              {activeMenu === link.label && link.subLinks && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 py-4 z-50 rounded-b-lg"
                >
                  <ul className="py-1">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.label}>
                        <Link
                          href={subLink.href}
                          className="block px-6 py-2.5 text-sm text-[#05203C] hover:bg-gray-50 hover:text-[#BE1E2D] transition-colors"
                        >
                          {subLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      {/* Right Side: Phone & Apply Now (Desktop) */}
      <div className="hidden lg:flex items-center gap-6">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center gap-2 text-[#05203C] text-sm font-semibold"
        >
          <Phone size={16} className="text-[#BE1E2D]" />
          {PHONE_NUMBER}
        </a>
        
        {status === "authenticated" ? (
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-semibold text-[#05203C] hover:text-[#BE1E2D] flex items-center gap-2">
              {session.user?.image ? (
                <img src={session.user.image} alt="Profile" className="w-6 h-6 rounded-full" />
              ) : null}
              Dashboard
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-[#BE1E2D] text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#9e1825] transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-semibold text-[#05203C] hover:text-[#BE1E2D]">
              Login
            </Link>
            <Link
              href="/apply"
              className="bg-[#05203C] text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#082a4d] transition-colors"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <MobileNav />
    </nav>
  );
};

export default MainNav;
