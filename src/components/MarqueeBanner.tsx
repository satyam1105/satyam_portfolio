"use client";

import React from "react";

interface MarqueeBannerProps {
  items?: string[];
  reverse?: boolean;
  bgColor?: string;
  textColor?: string;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

const defaultItems = [
  "SATYAM SHUKLA",
  "FULL STACK DEVELOPER",
  "PYTHON SPECIALIST",
  "B.TECH CSE 2026",
  "B.SC MATHEMATICS",
  "IBM COGNITIVE CERTIFIED",
  "BLOCKCHAIN & AI RESEARCH",
  "BRUTALIST ARCHITECTURE",
  "OPEN TO WORK",
  "SRMCEM LUCKNOW",
  "GORAKHPUR INDIA"
];

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  items = defaultItems,
  reverse = false,
  bgColor = "bg-[#D4FF00]",
  textColor = "text-black",
  className = "",
  speed = "normal"
}) => {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden border-y-[3px] border-black py-2.5 font-mono font-black uppercase tracking-wider text-xs sm:text-sm select-none ${bgColor} ${textColor} ${className}`}
    >
      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        {repeatedItems.map((item, idx) => (
          <span key={idx} className="inline-flex items-center mx-4 shrink-0">
            <span>{item}</span>
            <span className="mx-4 text-black opacity-40 font-normal">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
