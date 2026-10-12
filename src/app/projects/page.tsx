"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { ProjectModal } from "@/components/ProjectModal";
import { BrutalistButton } from "@/components/BrutalistButton";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import {
  ExternalLink,
  CheckCircle2,
  Filter,
  FileText,
  Layers,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { label: "ALL PROJECTS", value: "ALL" },
    { label: "AI & BLOCKCHAIN", value: "AI & Blockchain" },
    { label: "FULL STACK WEB", value: "Full Stack" },
    { label: "PYTHON & AUTOMATION", value: "Python & Automation" },
    { label: "GRAPHIC DESIGN", value: "Graphic Design" }
  ];

  const filteredProjects =
    selectedFilter === "ALL"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedFilter);

  return (
    <div className="w-full space-y-12 sm:space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12">
        <div className="border-[4px] border-black bg-white p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000]">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs font-black uppercase text-neutral-500 mb-2">
            <span>// ARCHITECTURE & CODE INVENTORY</span>
            <span className="bg-[#D4FF00] text-black px-2.5 py-1 border border-black">
              4 VERIFIED CASE STUDIES
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-mono uppercase tracking-tight text-black leading-none">
            ENGINEERING <br className="sm:hidden" />
            <span className="bg-[#FFE600] px-3 py-1 border-[3px] border-black inline-block mt-2 sm:mt-0 shadow-[5px_5px_0px_0px_#000]">
              PROJECTS
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg font-sans text-neutral-800 max-w-3xl leading-relaxed font-medium">
            Every project listed here is derived strictly from real coursework, IBM Cognitive certifications, and academic research at SRMCEM Lucknow. No fabricated claims, no mock metrics.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 pt-6 border-t-[3px] border-black flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1.5 font-mono text-xs font-black uppercase mr-2 text-neutral-600">
              <Filter className="w-4 h-4 text-black" />
              FILTER:
            </span>
            {categories.map((cat) => {
              const isActive = selectedFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedFilter(cat.value)}
                  className={`px-3 py-1.5 font-mono text-xs font-black uppercase border-2 border-black transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#D4FF00] text-black shadow-[3px_3px_0px_0px_#000] -translate-x-0.5 -translate-y-0.5"
                      : "bg-[#F8F5EE] text-black hover:bg-[#FFE600]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Number & Category Ribbon */}
                <div className="flex items-center justify-between border-b-[3px] border-black pb-3 mb-4">
                  <span className="font-mono text-4xl sm:text-5xl font-black text-black">
                    {project.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#FFE600] border-2 border-black font-mono text-xs font-black uppercase text-black">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase tracking-tight text-black mb-2 leading-tight">
                  {project.title}
                </h2>

                <p className="font-mono text-xs sm:text-sm font-bold text-neutral-600 mb-4 border-l-3 border-[#FF5E1E] pl-2">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-neutral-800 leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>

                {/* The Problem Solved Block */}
                <div className="p-4 bg-[#F8F5EE] border-2 border-black mb-6">
                  <span className="font-mono text-xs font-black text-neutral-500 uppercase block mb-1">
                    PROBLEM SOLVED:
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-neutral-900 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="mb-6 space-y-2">
                  <span className="font-mono text-xs font-black text-neutral-500 uppercase block">
                    HIGHLIGHTED FEATURES:
                  </span>
                  <ul className="space-y-1.5">
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5 fill-[#D4FF00]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="mb-6">
                  <span className="font-mono text-[11px] font-black text-neutral-500 uppercase block mb-2">
                    TECH STACK & TOOLS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white border border-black font-mono text-xs font-bold text-black shadow-[1.5px_1.5px_0px_0px_#000]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t-[3px] border-black flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="px-4 py-2.5 bg-[#D4FF00] text-black border-2 border-black font-mono text-xs sm:text-sm font-black uppercase shadow-[3px_3px_0px_0px_#000] hover:bg-[#c3ec00] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                >
                  VIEW FULL DETAILS
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white text-black border-2 border-black hover:bg-[#FFE600] transition-colors shadow-[2px_2px_0px_0px_#000]"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  ) : null}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-black text-white border-2 border-black hover:bg-[#FF5E1E] transition-colors shadow-[2px_2px_0px_0px_#000]"
                      title="View Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeBanner
        items={[
          "BTECH CAPSTONE: BLOCKCHAIN + GNN",
          "IBM COGNITIVE: FULL STACK WEB",
          "IBM COGNITIVE: PYTHON PROGRAMMING",
          "GRAPHIC ARTISTRY: ADOBE CREATIVE SUITE",
          "SRMCEM LUCKNOW",
          "PURE MATHEMATICS: PURVANCHAL UNIVERSITY"
        ]}
        bgColor="bg-[#FFE600]"
      />

      {/* Capstone Deep Dive Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-white border-[4px] border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_#D4FF00]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <span className="px-2.5 py-0.5 bg-[#D4FF00] text-black font-mono text-xs font-black uppercase">
                SPOTLIGHT RESEARCH PUBLICATION / PROGRESS REPORT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-mono uppercase text-white">
                FRAUD DETECTION IN SCM USING HYBRID TECHNOLOGY: BLOCKCHAIN & AI
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Academic research carried out at Shri Ramswaroop Memorial College of Engineering & Management, Lucknow. Explores multi-hop graph neural networks (GNN) and federated consensus over Hyperledger Fabric to prevent fraud rings in enterprise supply chains.
              </p>
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#FFE600] pt-2">
                <span>AUTHORS: Satyam Shukla & Sudhanshu Chaudhary</span>
                <span>•</span>
                <span>GUIDES: Mr. Ravi Shekhar & Dr. Sadhana Rana</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <BrutalistButton
                onClick={() => setActiveModalProject(portfolioData.projects[0])}
                variant="lime"
                size="md"
              >
                <span>READ CAPSTONE SPECS</span>
                <ArrowRight className="w-4 h-4" />
              </BrutalistButton>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
