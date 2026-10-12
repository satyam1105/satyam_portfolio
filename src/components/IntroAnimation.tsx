"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const IntroAnimation: React.FC = () => {
  const [stage, setStage] = useState<"initial" | "satyam" | "shukla" | "exit">("initial");
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    // Check session storage so it doesn't replay on every minor navigation
    const hasSeenIntro = sessionStorage.getItem("satyam_portfolio_intro_seen");
    if (hasSeenIntro === "true") {
      setIsVisible(false);
      return;
    }

    // Sequence timing
    // 0ms: Initial mount
    // 100ms: SATYAM appears
    // 700ms: SHUKLA appears
    // 1600ms: Exit starts
    // 2200ms: Intro finished, full site revealed
    const timer1 = setTimeout(() => setStage("satyam"), 100);
    const timer2 = setTimeout(() => setStage("shukla"), 700);
    const timer3 = setTimeout(() => setStage("exit"), 1600);
    const timer4 = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("satyam_portfolio_intro_seen", "true");
    }, 2200);

    // Allow manual replay from window
    const handleReplay = () => {
      sessionStorage.removeItem("satyam_portfolio_intro_seen");
      setIsVisible(true);
      setStage("satyam");
      setTimeout(() => setStage("shukla"), 600);
      setTimeout(() => setStage("exit"), 1500);
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("satyam_portfolio_intro_seen", "true");
      }, 2100);
    };

    window.addEventListener("replay-portfolio-intro", handleReplay);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      window.removeEventListener("replay-portfolio-intro", handleReplay);
    };
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
    sessionStorage.setItem("satyam_portfolio_intro_seen", "true");
  };

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-overlay"
          initial={{ y: 0 }}
          animate={{ y: stage === "exit" ? "-100%" : 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A] text-white select-none overflow-hidden"
        >
          {/* Top Bar with Skip Button & Terminal Info */}
          <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex items-center justify-between border-b-2 border-white/20 font-mono text-xs uppercase tracking-widest text-[#D4FF00]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 bg-[#D4FF00] animate-ping" />
              <span>[SATYAM.DEV // INITIALIZING]</span>
            </div>
            <button
              onClick={handleSkip}
              className="px-3 py-1 bg-white text-black font-bold uppercase tracking-wider text-xs border-2 border-black hover:bg-[#FFE600] transition-colors cursor-pointer"
            >
              SKIP INTRO [ESC]
            </button>
          </div>

          {/* Grid Background Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-10 brutal-grid-pattern" />

          {/* Core Typography Animation */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
            {/* Step 1: SATYAM */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{
                opacity: stage === "initial" ? 0 : 1,
                y: stage === "initial" ? 50 : 0,
                scale: stage === "initial" ? 0.9 : 1
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase font-mono leading-none text-white drop-shadow-[5px_5px_0px_#D4FF00]"
            >
              SATYAM
            </motion.div>

            {/* Step 2: SHUKLA */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{
                opacity: stage === "shukla" || stage === "exit" ? 1 : 0,
                x: stage === "shukla" || stage === "exit" ? 0 : -60
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-1 sm:mt-2 text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase font-mono leading-none bg-[#FFE600] text-black px-4 md:px-8 py-1 border-[4px] border-black shadow-[8px_8px_0px_0px_#D4FF00]"
            >
              SHUKLA
            </motion.div>

            {/* Sub-tagline reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: stage === "shukla" || stage === "exit" ? 1 : 0,
                y: stage === "shukla" || stage === "exit" ? 0 : 20
              }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-[#D4FF00]"
            >
              <span>FULL STACK</span>
              <span>•</span>
              <span>PYTHON</span>
              <span>•</span>
              <span>BRUTALIST WEB</span>
            </motion.div>
          </div>

          {/* Bottom Loading Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 border-t-2 border-white/20 flex flex-col gap-2">
            <div className="flex justify-between font-mono text-[11px] text-white/70">
              <span>LOADING SYSTEM PROTOCOLS</span>
              <span>SRMCEM // BTECH CSE 2026</span>
            </div>
            <div className="w-full h-2.5 bg-neutral-800 border-2 border-black overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: stage === "exit" ? "100%" : stage === "shukla" ? "80%" : "35%" }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="h-full bg-[#D4FF00]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
