"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Mail, MessageSquare, FileDown, Terminal } from "lucide-react";
import { CopyEmailButton } from "./CopyEmailButton";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export const Footer: React.FC = () => {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#0A0A0A] text-white border-t-[4px] border-black mt-20 select-none">
      {/* Top Banner strip */}
      <div className="bg-[#FFE600] text-black border-b-[3px] border-black px-4 py-3 font-mono font-black text-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-black inline-block animate-pulse" />
          <span className="uppercase">NEED A HARDWORKING DEVELOPER? LET&apos;S TALK CODE & ARCHITECTURE.</span>
        </div>
        <div className="flex items-center gap-2">
          <CopyEmailButton email={portfolioData.personal.email} className="bg-black text-white hover:bg-neutral-800" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Identity & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono font-black text-2xl text-white tracking-tight">
              <div className="w-8 h-8 bg-[#D4FF00] text-black flex items-center justify-center font-bold text-base border-2 border-white">
                <Terminal className="w-5 h-5" />
              </div>
              <span>SATYAM SHUKLA</span>
            </div>
            <p className="font-mono text-xs text-neutral-400 leading-relaxed">
              Full Stack Web Developer & Python Engineer based in Uttar Pradesh, India. Pursuing B.Tech in CSE at SRMCEM Lucknow. Prior B.Sc in Mathematics.
            </p>
            <div className="p-3 bg-neutral-900 border-2 border-neutral-700 font-mono text-xs text-[#D4FF00] space-y-1">
              <div>LOCAL TIME: {timeString || "CALCULATING..."}</div>
              <div>LOCATION: GORAKHPUR / LUCKNOW, IN</div>
              <div>AVAILABILITY: OPEN TO OFFERS</div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs font-black uppercase tracking-widest text-[#D4FF00] mb-4">
              // SITE NAVIGATION
            </h4>
            <ul className="space-y-2.5 font-mono text-sm font-bold">
              <li>
                <Link href="/" className="hover:text-[#FFE600] hover:underline flex items-center gap-2">
                  <span>→</span> <span>HOME</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#FFE600] hover:underline flex items-center gap-2">
                  <span>→</span> <span>PROJECTS (04)</span>
                </Link>
              </li>
              <li>
                <Link href="/extracurricular" className="hover:text-[#FFE600] hover:underline flex items-center gap-2">
                  <span>→</span> <span>EXTRACURRICULAR & HONORS</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFE600] hover:underline flex items-center gap-2">
                  <span>→</span> <span>CONTACT DIRECT</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <h4 className="font-mono text-xs font-black uppercase tracking-widest text-[#D4FF00] mb-4">
              // CONNECT DIRECTLY
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm">
              <li>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-2 bg-neutral-900 border border-neutral-700 hover:border-[#D4FF00] flex items-center gap-2 text-white hover:text-[#D4FF00] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D4FF00] shrink-0" />
                  <span className="truncate">{portfolioData.personal.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-900 border border-neutral-700 hover:border-[#25D366] flex items-center gap-2 text-white hover:text-[#25D366] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>WHATSAPP DIRECT</span>
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-900 border border-neutral-700 hover:border-[#0077B5] flex items-center gap-2 text-white hover:text-[#0077B5] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077B5] shrink-0" />
                  <span>LINKEDIN PROFILE</span>
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-900 border border-neutral-700 hover:border-white flex items-center gap-2 text-white hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-white shrink-0" />
                  <span>GITHUB PROFILE</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Action & CV */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-black uppercase tracking-widest text-[#D4FF00]">
              // RESUME ASSET
            </h4>
            <p className="font-mono text-xs text-neutral-400">
              Download the official verified CV containing complete academic scores, IBM credentials, and project history.
            </p>
            <a
              href={portfolioData.personal.cvPath}
              download="Satyam-Shukla-CV.pdf"
              className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 bg-[#D4FF00] text-black border-2 border-white font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_#fff] hover:bg-[#FFE600] transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
            <button
              onClick={scrollToTop}
              className="w-full flex items-center justify-center gap-2 p-2 bg-neutral-900 border border-neutral-700 text-neutral-300 font-mono text-xs hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              <span>BACK TO TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div>
            © 2026 SATYAM SHUKLA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-3 text-neutral-400">
            <span>DESIGNED IN BRUTALISM</span>
            <span>•</span>
            <span>POWERED BY NEXT.JS & REACT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
