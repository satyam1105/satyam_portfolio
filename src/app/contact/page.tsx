"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { BrutalistButton } from "@/components/BrutalistButton";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  FileDown,
  Terminal,
  ExternalLink,
  Sparkles
} from "lucide-react";
import { LinkedinIcon } from "@/components/BrandIcons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare mailto link with encoded subject and body
    const subjectEncoded = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || "Colleague"}`
    );
    const bodyEncoded = encodeURIComponent(
      `Hello Satyam,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact Form`
    );
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setIsSent(true);
  };

  return (
    <div className="w-full space-y-12 sm:space-y-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12">
        <div className="border-[4px] border-black bg-white p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000]">
          <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-neutral-500 mb-2">
            <span className="w-3 h-3 bg-[#D4FF00] border-2 border-black inline-block animate-ping" />
            <span>// TRANSMISSION PROTOCOL: DIRECT ACCESS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-mono uppercase tracking-tight text-black leading-tight">
            LET&apos;S BUILD <br className="sm:hidden" />
            <span className="bg-[#D4FF00] px-3 py-1 border-[3px] border-black inline-block mt-2 sm:mt-0 shadow-[5px_5px_0px_0px_#000]">
              SOMETHING.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg font-sans text-neutral-800 max-w-3xl leading-relaxed font-medium">
            I am actively seeking software engineering internships, junior developer roles, and high-impact web development collaborations. Reach out via email, WhatsApp, or LinkedIn—or send a quick note below.
          </p>
        </div>
      </section>

      {/* THREE PROMINENT CONTACT CHANNELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Channel 1: Email */}
          <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 bg-[#FFE600] border-2 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_#000]">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <span className="font-mono text-xs font-black uppercase text-neutral-500 block mb-1">
                CHANNEL 01 // EMAIL
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-mono uppercase text-black mb-2">
                EMAIL DIRECT
              </h2>
              <p className="font-mono text-xs sm:text-sm text-neutral-800 font-bold break-all mb-4">
                {portfolioData.personal.email}
              </p>
              <p className="font-sans text-xs text-neutral-600 mb-6">
                Preferred for formal job inquiries, interview invitations, or technical project discussions.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t-2 border-black">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-black text-[#D4FF00] border-2 border-black font-mono text-xs sm:text-sm font-black uppercase shadow-[3px_3px_0px_0px_#FFE600] hover:bg-neutral-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>OPEN MAIL CLIENT</span>
              </a>
              <CopyEmailButton email={portfolioData.personal.email} className="w-full justify-center" />
            </div>
          </div>

          {/* Channel 2: WhatsApp */}
          <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 bg-[#25D366] text-white border-2 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_#000]">
                <MessageSquare className="w-6 h-6 text-black" />
              </div>
              <span className="font-mono text-xs font-black uppercase text-neutral-500 block mb-1">
                CHANNEL 02 // CHAT
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-mono uppercase text-black mb-2">
                WHATSAPP
              </h2>
              <p className="font-mono text-xs sm:text-sm text-neutral-800 font-bold mb-4">
                {portfolioData.personal.phoneDisplay}
              </p>
              <p className="font-sans text-xs text-neutral-600 mb-6">
                Direct mobile messaging for fast responses, quick chats, and informal introductory calls.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-black">
              <a
                href={portfolioData.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-black border-2 border-black font-mono text-xs sm:text-sm font-black uppercase shadow-[3px_3px_0px_0px_#000] hover:bg-[#20ba59] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Channel 3: LinkedIn */}
          <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 bg-[#0077B5] text-white border-2 border-black flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_#000]">
                <LinkedinIcon className="w-6 h-6 text-white" />
              </div>
              <span className="font-mono text-xs font-black uppercase text-neutral-500 block mb-1">
                CHANNEL 03 // PROFESSIONAL
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-mono uppercase text-black mb-2">
                LINKEDIN
              </h2>
              <p className="font-mono text-xs sm:text-sm text-neutral-800 font-bold truncate mb-4">
                linkedin.com/in/satyam-shukla
              </p>
              <p className="font-sans text-xs text-neutral-600 mb-6">
                Connect on LinkedIn for professional endorsement, career updates, and recruitment networking.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-black">
              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#0077B5] text-white border-2 border-black font-mono text-xs sm:text-sm font-black uppercase shadow-[3px_3px_0px_0px_#000] hover:bg-[#006399] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>CONNECT ON LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM & LOCATION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Quick Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000]">
            <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-6">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-black" />
                <h3 className="font-mono text-lg sm:text-xl font-black uppercase text-black">
                  SEND A DIRECT MESSAGE
                </h3>
              </div>
              <span className="font-mono text-xs font-bold bg-[#D4FF00] px-2 py-0.5 border border-black">
                MAILTO ENGINE
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs font-black uppercase text-neutral-700 mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full p-3 bg-[#F8F5EE] border-2 border-black font-mono text-sm focus:outline-none focus:bg-[#FFE600]/20 focus:border-black"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-black uppercase text-neutral-700 mb-1">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full p-3 bg-[#F8F5EE] border-2 border-black font-mono text-sm focus:outline-none focus:bg-[#FFE600]/20 focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-black uppercase text-neutral-700 mb-1">
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Job Opportunity / Full Stack Role"
                  className="w-full p-3 bg-[#F8F5EE] border-2 border-black font-mono text-sm focus:outline-none focus:bg-[#FFE600]/20 focus:border-black"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-black uppercase text-neutral-700 mb-1">
                  YOUR MESSAGE *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note, job description, or collaboration idea here..."
                  className="w-full p-3 bg-[#F8F5EE] border-2 border-black font-mono text-sm focus:outline-none focus:bg-[#FFE600]/20 focus:border-black resize-y"
                />
              </div>

              {isSent && (
                <div className="p-3 bg-[#D4FF00] border-2 border-black font-mono text-xs font-bold text-black flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>PREPARING EMAIL TRANSMISSION IN YOUR CLIENT...</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-black text-[#D4FF00] border-[3px] border-black font-mono text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_#FFE600] hover:bg-neutral-800 active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>LAUNCH EMAIL TRANSMISSION</span>
              </button>
            </form>
          </div>

          {/* Location & Status Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Box */}
            <div className="bg-white border-[4px] border-black p-6 shadow-[6px_6px_0px_0px_#000]">
              <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-4">
                <MapPin className="w-5 h-5 text-black" />
                <h4 className="font-mono text-base font-black uppercase text-black">
                  PHYSICAL HEADQUARTERS
                </h4>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-neutral-500 font-bold block">HOME RESIDENCE:</span>
                  <span className="text-black font-black">{portfolioData.personal.address}</span>
                </div>
                <div>
                  <span className="text-neutral-500 font-bold block">CAMPUS LOCATION:</span>
                  <span className="text-black font-black">
                    SRMCEM, Tiwariganj, Faizabad Road, Lucknow, UP
                  </span>
                </div>
                <div>
                  <span className="text-neutral-500 font-bold block">WORK MOBILITY:</span>
                  <span className="text-black font-black">
                    Open to Relocation & Remote Engineering Roles
                  </span>
                </div>
              </div>
            </div>

            {/* Quick CV Card */}
            <div className="bg-[#FFE600] border-[4px] border-black p-6 shadow-[6px_6px_0px_0px_#000]">
              <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-3">
                <FileDown className="w-5 h-5 text-black" />
                <h4 className="font-mono text-base font-black uppercase text-black">
                  OFFICIAL RESUME
                </h4>
              </div>
              <p className="font-sans text-xs text-neutral-800 leading-relaxed mb-4 font-medium">
                Download the verified resume PDF with complete academic marks, IBM Cognitive credentials, and contact records.
              </p>
              <BrutalistButton
                href={portfolioData.personal.cvPath}
                download="Satyam-Shukla-CV.pdf"
                variant="black"
                size="md"
                className="w-full"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </BrutalistButton>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <MarqueeBanner
        items={[
          "er.satyamshukla7@gmail.com",
          "+91 9569075961",
          "SRMCEM LUCKNOW",
          "GORAKHPUR UP",
          "AVAILABLE FOR WORK",
          "LET'S BUILD SOMETHING BOLD"
        ]}
      />
    </div>
  );
}
