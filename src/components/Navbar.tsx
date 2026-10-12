"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileDown, Sparkles, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PROJECTS", href: "/projects" },
    { name: "EXTRACURRICULAR", href: "/extracurricular" },
    { name: "CONTACT", href: "/contact" }
  ];

  const handleReplayIntro = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("replay-portfolio-intro"));
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F5EE] border-b-[3px] border-black">
      {/* Top micro ticker */}
      <div className="hidden md:flex items-center justify-between px-4 py-1 bg-black text-[#D4FF00] font-mono text-[11px] font-bold border-b-2 border-black tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-none bg-[#D4FF00] inline-block animate-ping" />
          <span>STATUS: B.TECH CSE @ SRMCEM // OPEN FOR OPPORTUNITIES</span>
        </div>
        <div className="flex items-center gap-4 text-white">
          <span>📍 GORAKHPUR & LUCKNOW, IN</span>
          <button
            onClick={handleReplayIntro}
            className="text-[#FFE600] hover:underline flex items-center gap-1 cursor-pointer"
            title="Replay opening intro animation"
          >
            <Sparkles className="w-3 h-3" />
            <span>REPLAY INTRO</span>
          </button>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-black font-mono font-black text-xl sm:text-2xl tracking-tighter"
          aria-label="Satyam Shukla Portfolio Home"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-[#D4FF00] flex items-center justify-center border-2 border-black group-hover:bg-[#D4FF00] group-hover:text-black transition-colors shadow-[3px_3px_0px_0px_#000]">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="group-hover:text-[#FF5E1E] transition-colors">
            SATYAM<span className="text-[#000000]">.DEV</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 lg:px-4 py-2 font-mono text-xs lg:text-sm font-black tracking-wider border-2 border-black transition-all duration-150 ${
                  isActive
                    ? "bg-[#D4FF00] text-black shadow-[3px_3px_0px_0px_#000] -translate-x-0.5 -translate-y-0.5"
                    : "bg-white text-black hover:bg-[#FFE600] hover:shadow-[3px_3px_0px_0px_#000]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Action: Download CV button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personal.cvPath}
            download="Satyam-Shukla-CV.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-[#FFE600] text-black border-[3px] border-black font-mono text-xs lg:text-sm font-black tracking-wider shadow-[3px_3px_0px_0px_#000] hover:bg-[#D4FF00] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer"
            aria-label="Download Satyam Shukla's Resume PDF"
          >
            <FileDown className="w-4 h-4" />
            <span>DOWNLOAD CV</span>
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_#D4FF00] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-[3px] border-black bg-[#F8F5EE] p-5 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="p-3 bg-black text-[#D4FF00] font-mono text-xs font-bold mb-4">
            <span>NAVIGATION CONSOLE // SELECT ROUTE</span>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 font-mono text-base font-black tracking-wider border-2 border-black transition-all ${
                    isActive
                      ? "bg-[#D4FF00] text-black shadow-[4px_4px_0px_0px_#000]"
                      : "bg-white text-black hover:bg-[#FFE600]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t-2 border-black space-y-2">
            <a
              href={portfolioData.personal.cvPath}
              download="Satyam-Shukla-CV.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FFE600] text-black border-2 border-black font-mono text-sm font-black shadow-[4px_4px_0px_0px_#000]"
            >
              <FileDown className="w-4 h-4" />
              <span>DOWNLOAD RESUME PDF</span>
            </a>

            <button
              onClick={() => {
                handleReplayIntro();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-black border-2 border-black font-mono text-xs font-bold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>REPLAY OPENING INTRO</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
