"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData, Project } from "@/data/portfolio";
import { Typewriter } from "@/components/Typewriter";
import { BrutalistButton } from "@/components/BrutalistButton";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { ProjectModal } from "@/components/ProjectModal";
import {
  FileDown,
  ArrowRight,
  ExternalLink,
  Code2,
  Terminal,
  Award,
  GraduationCap,
  Sparkles,
  Layers,
  CheckCircle,
  MapPin,
  Mail,
  Phone
} from "lucide-react";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-full space-y-16 sm:space-y-24">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12">
        {/* Top Meta Tag Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-[3px] border-black bg-white p-3 sm:p-4 mb-8 shadow-[4px_4px_0px_0px_#000]">
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase text-black">
            <span className="w-3 h-3 bg-[#D4FF00] border-2 border-black inline-block animate-pulse" />
            <span>PORTFOLIO SPECIFICATION // 2026 EDITION</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-600">
            <MapPin className="w-3.5 h-3.5 text-black" />
            <span>{portfolioData.personal.location}</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Big Headlines & CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Typewriter Role Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-[#D4FF00] border-2 border-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-[3px_3px_0px_0px_#FFE600]">
                <Terminal className="w-4 h-4 text-[#D4FF00]" />
                <span>ROLE:</span>
                <Typewriter words={portfolioData.personal.roles} className="text-white" />
              </div>

              {/* Massive Brutalist Headline */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase font-mono leading-[0.9] text-black">
                SATYAM <br />
                <span className="bg-[#FFE600] px-2 py-0.5 border-[3px] border-black shadow-[6px_6px_0px_0px_#000] inline-block my-1">
                  SHUKLA
                </span>
              </h1>

              {/* Tagline */}
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-mono font-bold text-neutral-900 border-l-4 border-black pl-3 py-1">
                {portfolioData.personal.tagline}
              </p>

              {/* Objective / Bio */}
              <p className="mt-4 text-sm sm:text-base font-sans text-neutral-700 leading-relaxed font-medium">
                {portfolioData.personal.fullBio}
              </p>
            </div>

            {/* Prominent CTA Button Group */}
            <div className="pt-2 border-t-[3px] border-black space-y-4">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Download CV Button */}
                <BrutalistButton
                  href={portfolioData.personal.cvPath}
                  download="Satyam-Shukla-CV.pdf"
                  variant="lime"
                  size="lg"
                  ariaLabel="Download Satyam Shukla Resume PDF"
                >
                  <FileDown className="w-5 h-5" />
                  <span>DOWNLOAD CV</span>
                </BrutalistButton>

                {/* View Projects Button */}
                <BrutalistButton
                  href="/projects"
                  variant="yellow"
                  size="lg"
                  ariaLabel="View Satyam Shukla's Projects"
                >
                  <span>VIEW PROJECTS</span>
                  <ArrowRight className="w-5 h-5" />
                </BrutalistButton>

                {/* Contact Me Button */}
                <BrutalistButton
                  href="/contact"
                  variant="black"
                  size="lg"
                  ariaLabel="Contact Satyam Shukla"
                >
                  <Mail className="w-5 h-5 text-[#D4FF00]" />
                  <span>CONTACT ME</span>
                </BrutalistButton>
              </div>

              {/* Secondary info row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase">
                  DIRECT REACH:
                </span>
                <CopyEmailButton email={portfolioData.personal.email} />
                <a
                  href={portfolioData.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-black bg-white text-black font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_0px_#000] hover:bg-[#25D366] hover:text-white transition-all cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame with Photo & Badges (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-white border-[4px] border-black p-4 sm:p-5 shadow-[8px_8px_0px_0px_#000] relative">
              {/* Corner brutalist sticker */}
              <div className="absolute -top-3 -right-3 bg-[#FF5E1E] text-white border-2 border-black px-3 py-1 font-mono text-xs font-black uppercase rotate-3 shadow-[3px_3px_0px_0px_#000]">
                VERIFIED STUDENT
              </div>

              {/* Profile Image container */}
              <div className="relative aspect-square w-full border-[3px] border-black overflow-hidden bg-black">
                <Image
                  src={portfolioData.personal.avatarPath}
                  alt="Satyam Shukla - Web Designer & Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/85 text-white p-2.5 font-mono text-xs border-t-2 border-black flex justify-between items-center">
                  <span className="text-[#D4FF00] font-black">SATYAM SHUKLA</span>
                  <span className="text-neutral-300">SRMCEM CSE &apos;26</span>
                </div>
              </div>

              {/* Meta stats below image */}
              <div className="mt-4 space-y-2 font-mono text-xs font-bold">
                <div className="flex items-center justify-between p-2 bg-[#F8F5EE] border-2 border-black">
                  <span className="text-neutral-600">ACADEMIC DEGREE:</span>
                  <span className="text-black font-black">B.TECH CSE (AKTU)</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-[#F8F5EE] border-2 border-black">
                  <span className="text-neutral-600">PREVIOUS DEGREE:</span>
                  <span className="text-black font-black">B.SC MATHEMATICS</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-[#D4FF00] border-2 border-black text-black">
                  <span>CERTIFICATIONS:</span>
                  <span className="font-black">IBM COGNITIVE (2023)</span>
                </div>
              </div>
            </div>

            {/* Quick status pill */}
            <div className="mt-4 p-3 bg-black text-white border-[3px] border-black font-mono text-xs flex items-center justify-between">
              <span className="text-[#D4FF00] font-bold">● STATUS REPORT:</span>
              <span className="uppercase text-neutral-300">OPEN TO ENGINEERING INTERNSHIPS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TICKER MARQUEE ===================== */}
      <MarqueeBanner />

      {/* ===================== FOUR CORE PILLARS ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-[3px] border-black bg-black text-[#D4FF00] p-4 font-mono text-xs sm:text-sm font-black uppercase mb-6 flex justify-between items-center">
          <span>// 01. CORE HIGHLIGHTS & ARCHITECTURAL FOUNDATION</span>
          <span className="hidden sm:inline">[FOUR DISTINCT PILLARS]</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="bg-white border-[3px] border-black p-5 shadow-[5px_5px_0px_0px_#000] hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-[#FFE600] border-2 border-black flex items-center justify-center font-mono font-black text-lg mb-3">
              01
            </div>
            <h3 className="font-mono text-base font-black uppercase text-black mb-2">
              FULL STACK WEB
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
              IBM Certified in Full Stack Web Development (React, Node.js, Express, MongoDB, MySQL). Building robust decoupled CRUD architectures.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-[3px] border-black p-5 shadow-[5px_5px_0px_0px_#000] hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-[#D4FF00] border-2 border-black flex items-center justify-center font-mono font-black text-lg mb-3">
              02
            </div>
            <h3 className="font-mono text-base font-black uppercase text-black mb-2">
              PYTHON & AUTOMATION
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
              IBM Certified Python developer. Hands-on expertise with OOP architectures, exception handling, batch processing, and script automation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-[3px] border-black p-5 shadow-[5px_5px_0px_0px_#000] hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-[#00F0FF] border-2 border-black flex items-center justify-center font-mono font-black text-lg mb-3">
              03
            </div>
            <h3 className="font-mono text-base font-black uppercase text-black mb-2">
              BLOCKCHAIN & AI
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Capstone research author in Hybrid Blockchain & Federated Graph Neural Networks for multi-hop supply chain fraud prevention.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border-[3px] border-black p-5 shadow-[5px_5px_0px_0px_#000] hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-[#FF5E1E] text-white border-2 border-black flex items-center justify-center font-mono font-black text-lg mb-3">
              04
            </div>
            <h3 className="font-mono text-base font-black uppercase text-black mb-2">
              MATH + GRAPHIC DESIGN
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Dual power of B.Sc Mathematics analytical rigor combined with hands-on mastery in Adobe Creative Suite (Photoshop, Illustrator, After Effects).
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED WORK PREVIEW ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-[4px] border-black pb-4 mb-8">
          <div>
            <div className="font-mono text-xs font-black uppercase tracking-widest text-[#FF5E1E] mb-1">
              // PRODUCTION & CAPSTONE WORK
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-mono uppercase tracking-tight text-black">
              FEATURED PROJECTS
            </h2>
          </div>
          <BrutalistButton href="/projects" variant="lime" size="md">
            <span>EXPLORE ALL 4 PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </BrutalistButton>
        </div>

        {/* Top 2 Featured Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="group bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                  <span className="font-mono text-3xl font-black text-black">
                    #{project.number}
                  </span>
                  <span className="px-2.5 py-1 bg-[#FFE600] border-2 border-black font-mono text-xs font-black uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-mono text-xl sm:text-2xl font-black uppercase tracking-tight text-black group-hover:text-[#FF5E1E] transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="font-mono text-xs font-bold text-neutral-600 mb-4">
                  {project.tagline}
                </p>

                <p className="font-sans text-sm text-neutral-800 leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>

                <div className="p-3 bg-[#F8F5EE] border-2 border-black mb-6">
                  <span className="block font-mono text-xs font-bold text-neutral-500 uppercase mb-1">
                    KEY PROBLEM SOLVED:
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-neutral-900 line-clamp-3">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-neutral-100 border border-black font-mono text-xs font-bold text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t-2 border-black flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 bg-black text-[#D4FF00] border-2 border-black font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_0px_#FFE600] hover:bg-[#FFE600] hover:text-black transition-colors cursor-pointer"
                >
                  VIEW FULL SPECS
                </button>
                <Link
                  href="/projects"
                  className="font-mono text-xs font-black text-black hover:text-[#FF5E1E] underline flex items-center gap-1"
                >
                  <span>SEE IN PROJECT CATALOG</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SKILLS MATRIX ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-[3px] border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0px_0px_#D4FF00]">
          <div className="border-b-[3px] border-black pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#FF5E1E]">
                // VERIFIED ARSENAL
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-mono uppercase text-black">
                TECHNICAL SKILLS & PROFICIENCIES
              </h2>
            </div>
            <span className="font-mono text-xs font-bold bg-[#D4FF00] px-3 py-1 border-2 border-black">
              TESTED & CERTIFIED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#F8F5EE] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-mono text-base font-black uppercase text-black mb-1 border-b-2 border-black pb-1">
                    {skillGroup.category}
                  </h3>
                  <p className="font-sans text-xs text-neutral-600 mb-3">
                    {skillGroup.description}
                  </p>
                  <ul className="space-y-1.5">
                    {skillGroup.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center justify-between text-xs font-mono py-1 px-2 bg-white border border-black"
                      >
                        <span className="font-bold text-black">{item.name}</span>
                        <span className="text-[10px] uppercase font-black text-neutral-600 bg-neutral-200 px-1.5 py-0.5">
                          {item.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EDUCATION & CERTIFICATIONS SPOTLIGHT ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Box */}
          <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000]">
            <div className="flex items-center gap-2 border-b-2 border-black pb-3 mb-6">
              <GraduationCap className="w-6 h-6 text-black" />
              <h3 className="font-mono text-xl sm:text-2xl font-black uppercase text-black">
                ACADEMIC JOURNEY
              </h3>
            </div>

            <div className="space-y-6">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="border-l-4 border-black pl-4 py-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-black uppercase bg-[#FFE600] px-2 py-0.5 border border-black">
                      {edu.period}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-neutral-500">
                      {edu.status}
                    </span>
                  </div>
                  <h4 className="font-mono text-lg font-black uppercase text-black mt-2">
                    {edu.degree} — {edu.field}
                  </h4>
                  <p className="font-mono text-xs font-bold text-neutral-700 mt-1">
                    {edu.institution}
                  </p>
                  <p className="font-sans text-xs text-neutral-700 mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Box */}
          <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#FFE600]">
            <div className="flex items-center gap-2 border-b-2 border-black pb-3 mb-6">
              <Award className="w-6 h-6 text-black" />
              <h3 className="font-mono text-xl sm:text-2xl font-black uppercase text-black">
                IBM CREDENTIALS
              </h3>
            </div>

            <div className="space-y-6">
              {portfolioData.certifications.map((cert) => (
                <div key={cert.id} className="p-4 bg-[#F8F5EE] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-black text-[#D4FF00] font-mono text-xs font-black uppercase">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-600">
                      YEAR: {cert.year}
                    </span>
                  </div>
                  <h4 className="font-mono text-base font-black uppercase text-black">
                    {cert.title}
                  </h4>
                  <ul className="mt-3 space-y-1 font-mono text-xs text-neutral-800">
                    {cert.skillsLearned.slice(0, 3).map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-black inline-block" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CALL TO ACTION SECTION ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A0A0A] text-white border-[4px] border-black p-8 sm:p-12 shadow-[10px_10px_0px_0px_#D4FF00] relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-[#D4FF00] text-black font-mono text-xs font-black uppercase">
              // LET&apos;S COLLABORATE
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-mono uppercase tracking-tight leading-none text-white">
              READY TO BRING VALUE TO YOUR TEAM?
            </h2>
            <p className="font-sans text-base sm:text-lg text-neutral-300 leading-relaxed">
              Whether you need a dedicated Full Stack Web Engineer, a Python automation specialist, or a sharp problem-solver with strong mathematical and algorithmic roots—I am ready to contribute.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <BrutalistButton href="/contact" variant="lime" size="lg">
                <span>CONNECT WITH SATYAM</span>
                <ArrowRight className="w-5 h-5" />
              </BrutalistButton>
              <BrutalistButton
                href={portfolioData.personal.cvPath}
                download="Satyam-Shukla-CV.pdf"
                variant="white"
                size="lg"
              >
                <FileDown className="w-5 h-5" />
                <span>DOWNLOAD RESUME</span>
              </BrutalistButton>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
