"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { BrutalistButton } from "@/components/BrutalistButton";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import {
  Award,
  BookOpen,
  Mic,
  Palette,
  Calculator,
  Calendar,
  CheckCircle2,
  PlusCircle,
  ArrowRight,
  Terminal,
  FileCode2
} from "lucide-react";

export default function ExtracurricularPage() {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Research":
        return <BookOpen className="w-5 h-5 text-black" />;
      case "Public Speaking":
        return <Mic className="w-5 h-5 text-black" />;
      case "Creative Arts":
        return <Palette className="w-5 h-5 text-black" />;
      case "Mathematics":
        return <Calculator className="w-5 h-5 text-black" />;
      default:
        return <Award className="w-5 h-5 text-black" />;
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Research":
        return "bg-[#D4FF00]";
      case "Public Speaking":
        return "bg-[#FFE600]";
      case "Creative Arts":
        return "bg-[#FF5E1E] text-white";
      case "Mathematics":
        return "bg-[#00F0FF]";
      default:
        return "bg-neutral-200";
    }
  };

  return (
    <div className="w-full space-y-12 sm:space-y-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12">
        <div className="border-[4px] border-black bg-white p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000]">
          <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-neutral-500 mb-2">
            <span>// VERIFIED RECORD // LEADERSHIP, HONORS & BREADTH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-mono uppercase tracking-tight text-black leading-tight">
            EXTRACURRICULAR & <br className="sm:hidden" />
            <span className="bg-[#FFE600] px-3 py-1 border-[3px] border-black inline-block mt-2 sm:mt-0 shadow-[5px_5px_0px_0px_#000]">
              ACHIEVEMENTS
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg font-sans text-neutral-800 max-w-3xl leading-relaxed font-medium">
            A developer is more than just code syntax. This section highlights real academic research publications, certified credentials, public speaking engagements, and visual design accomplishments.
          </p>
        </div>
      </section>

      {/* TIMELINE / CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {portfolioData.extracurriculars.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              {/* Header row */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-9 h-9 border-2 border-black flex items-center justify-center font-bold ${getCategoryColor(
                      item.category
                    )}`}
                  >
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="font-mono text-xs font-black uppercase bg-black text-[#D4FF00] px-2.5 py-1">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600">
                  <Calendar className="w-3.5 h-3.5 text-black" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Title & Organization */}
              <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase tracking-tight text-black mb-1">
                {item.title}
              </h2>
              <p className="font-mono text-xs sm:text-sm font-bold text-neutral-600 mb-4">
                ORGANIZATION / INSTITUTION: {item.organizationOrContext}
              </p>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-neutral-800 leading-relaxed mb-6 font-medium">
                {item.description}
              </p>

              {/* Key Highlights Bullet points */}
              <div className="p-4 bg-[#F8F5EE] border-2 border-black mb-6 space-y-2">
                <span className="font-mono text-xs font-black uppercase text-neutral-500 block">
                  HIGHLIGHTED MILESTONES:
                </span>
                <ul className="space-y-2">
                  {item.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-900 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5 fill-[#D4FF00]" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {item.badges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-2.5 py-1 bg-white border border-black font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000]"
                  >
                    #{badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-[4px] border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000]">
          <div className="border-b-2 border-black pb-3 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-black" />
              <h3 className="font-mono text-xl sm:text-2xl font-black uppercase text-black">
                VERIFIED PROFESSIONAL CERTIFICATIONS
              </h3>
            </div>
            <span className="font-mono text-xs font-bold bg-[#D4FF00] px-2 py-0.5 border border-black">
              IBM COGNITIVE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 bg-[#F8F5EE] border-2 border-black shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-black text-[#D4FF00] font-mono text-xs font-black uppercase">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-600">
                      YEAR: {cert.year}
                    </span>
                  </div>
                  <h4 className="font-mono text-lg font-black uppercase text-black mb-3">
                    {cert.title}
                  </h4>
                  <ul className="space-y-1.5 font-mono text-xs text-neutral-800 mb-4">
                    {cert.skillsLearned.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-black inline-block" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-black/30 font-mono text-[11px] text-neutral-600 font-bold">
                  ✓ Verified in official academic curriculum and CV document
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITABLE PLACEHOLDER & EXPANSION GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-[4px] border-black bg-[#FFE600] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000]">
          <div className="flex items-center gap-2 mb-3">
            <PlusCircle className="w-6 h-6 text-black" />
            <h3 className="font-mono text-xl sm:text-2xl font-black uppercase text-black">
              LOOKING TO ADD MORE HONORS OR CLUBS?
            </h3>
          </div>

          <p className="font-sans text-sm sm:text-base text-neutral-900 leading-relaxed font-medium mb-4">
            Per your requirement, we never fabricate facts. You can easily add upcoming hackathon victories, college club leadership, or volunteer work directly in the central configuration file:
          </p>

          <div className="p-4 bg-black text-[#D4FF00] border-2 border-black font-mono text-xs overflow-x-auto mb-4">
            <code>
              // Open file: src/data/portfolio.ts<br />
              // Scroll to: portfolioData.extracurriculars<br />
              // Append a new item with category, title, organization, and achievements!
            </code>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <BrutalistButton href="/contact" variant="black" size="md">
              <span>LET&apos;S CONNECT & TALK</span>
              <ArrowRight className="w-4 h-4" />
            </BrutalistButton>
            <BrutalistButton
              href={portfolioData.personal.cvPath}
              download="Satyam-Shukla-CV.pdf"
              variant="white"
              size="md"
            >
              <span>DOWNLOAD FULL RESUME</span>
            </BrutalistButton>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeBanner
        items={[
          "SRMCEM LUCKNOW",
          "PURVANCHAL UNIVERSITY",
          "IBM COGNITIVE",
          "PUBLIC SPEAKING",
          "AI RESEARCH",
          "MATHEMATICAL RIGOR",
          "ADOBE CREATIVE SUITE"
        ]}
      />
    </div>
  );
}
