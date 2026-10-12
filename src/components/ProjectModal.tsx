"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolio";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Calendar, Award } from "lucide-react";
import { BrutalistButton } from "./BrutalistButton";
import { GithubIcon } from "./BrandIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#F8F5EE] border-[4px] border-black shadow-[10px_10px_0px_0px_#D4FF00] p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-4 border-b-[3px] border-black pb-4 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 bg-black text-[#D4FF00] font-mono text-xs font-black uppercase">
                PROJECT {project.number}
              </span>
              <span className="px-2.5 py-0.5 bg-[#FFE600] text-black border-2 border-black font-mono text-xs font-bold uppercase">
                {project.category}
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight font-mono text-black">
              {project.title}
            </h2>
            <p className="mt-1 font-mono text-sm text-neutral-700 font-bold">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-black text-white border-2 border-black hover:bg-[#FF5E1E] transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Overview & Context */}
        <div className="space-y-6">
          <div>
            <h3 className="font-mono text-xs font-black uppercase tracking-widest text-neutral-500 mb-2">
              // ARCHITECTURAL OVERVIEW
            </h3>
            <p className="text-base text-neutral-900 leading-relaxed font-sans font-medium">
              {project.details.overview}
            </p>
          </div>

          {/* Problem Solved */}
          <div className="p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000]">
            <h4 className="flex items-center gap-2 font-mono text-sm font-black uppercase text-black mb-2">
              <span className="w-2.5 h-2.5 bg-[#FF5E1E] inline-block" />
              THE CHALLENGE & SOLUTION
            </h4>
            <p className="text-sm sm:text-base text-neutral-800 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-mono text-xs font-black uppercase tracking-widest text-neutral-500 mb-3">
              // CORE SYSTEM CAPABILITIES
            </h3>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-neutral-900 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5 fill-[#D4FF00]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Notes */}
          <div className="p-4 bg-black text-[#D4FF00] border-[3px] border-black font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-white font-bold mb-2 uppercase">
              <Layers className="w-4 h-4 text-[#D4FF00]" />
              <span>DATA FLOW & SYSTEM ARCHITECTURE:</span>
            </div>
            <p className="text-white/90 leading-relaxed">
              {project.details.architectureNotes}
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div>
            <h3 className="font-mono text-xs font-black uppercase tracking-widest text-neutral-500 mb-2">
              // TECHNOLOGIES & TOOLS UTILIZED
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white border-2 border-black font-mono text-xs sm:text-sm font-bold text-black shadow-[2px_2px_0px_0px_#000]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t-[3px] border-black pt-4 font-mono text-xs">
            <div className="p-3 bg-white border-2 border-black">
              <span className="text-neutral-500 block uppercase font-bold">ROLE</span>
              <span className="font-black text-black">{project.details.role}</span>
            </div>
            <div className="p-3 bg-white border-2 border-black">
              <span className="text-neutral-500 block uppercase font-bold">TIMELINE</span>
              <span className="font-black text-black">{project.details.timeline}</span>
            </div>
            <div className="p-3 bg-white border-2 border-black">
              <span className="text-neutral-500 block uppercase font-bold">AFFILIATION</span>
              <span className="font-black text-black">{project.details.institutionOrPlatform}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            {project.githubUrl && (
              <BrutalistButton
                href={project.githubUrl}
                external
                variant="white"
                size="md"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB REPO</span>
              </BrutalistButton>
            )}
            {project.liveUrl && (
              <BrutalistButton
                href={project.liveUrl}
                external
                variant="lime"
                size="md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LIVE DEMO</span>
              </BrutalistButton>
            )}
            <BrutalistButton
              onClick={onClose}
              variant="black"
              size="md"
            >
              CLOSE
            </BrutalistButton>
          </div>
        </div>
      </div>
    </div>
  );
};
