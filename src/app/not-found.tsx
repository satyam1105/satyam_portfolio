"use client";

import React from "react";
import Link from "next/link";
import { BrutalistButton } from "@/components/BrutalistButton";
import { Terminal, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 sm:py-32 text-center">
      <div className="bg-white border-[4px] border-black p-8 sm:p-14 shadow-[10px_10px_0px_0px_#000]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-[#D4FF00] font-mono text-xs font-black uppercase mb-6">
          <Terminal className="w-4 h-4" />
          <span>ERROR 404 // ROUTE NOT FOUND</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-black font-mono tracking-tighter text-black uppercase mb-4">
          404 <br />
          <span className="bg-[#FFE600] px-4 py-1 border-[3px] border-black inline-block mt-2 shadow-[6px_6px_0px_0px_#000]">
            PAGE MISSING
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg font-sans text-neutral-800 max-w-md mx-auto leading-relaxed font-medium">
          The requested coordinate does not exist in Satyam Shukla&apos;s portfolio system. Please recalibrate your route.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <BrutalistButton href="/" variant="lime" size="lg">
            <Home className="w-4 h-4" />
            <span>RETURN TO HOME</span>
          </BrutalistButton>
          <BrutalistButton href="/projects" variant="black" size="lg">
            <span>VIEW PROJECTS</span>
          </BrutalistButton>
        </div>
      </div>
    </div>
  );
}
