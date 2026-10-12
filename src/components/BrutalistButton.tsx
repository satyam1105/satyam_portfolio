"use client";

import React from "react";
import Link from "next/link";

interface BrutalistButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "lime" | "yellow" | "black" | "white" | "orange" | "cyan";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  external?: boolean;
  download?: boolean | string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export const BrutalistButton: React.FC<BrutalistButtonProps> = ({
  children,
  href,
  onClick,
  variant = "lime",
  size = "md",
  className = "",
  external = false,
  download = false,
  type = "button",
  disabled = false,
  ariaLabel
}) => {
  const variantStyles = {
    lime: "bg-[#D4FF00] text-black hover:bg-[#c3ec00]",
    yellow: "bg-[#FFE600] text-black hover:bg-[#ebd300]",
    black: "bg-black text-white hover:bg-neutral-800",
    white: "bg-white text-black hover:bg-neutral-100",
    orange: "bg-[#FF5E1E] text-white hover:bg-[#e04f14]",
    cyan: "bg-[#00F0FF] text-black hover:bg-[#00d6e6]"
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-bold tracking-wider uppercase",
    md: "px-5 py-2.5 text-sm font-black tracking-wider uppercase",
    lg: "px-7 py-3.5 text-base font-black tracking-wider uppercase",
    xl: "px-9 py-4 text-lg font-black tracking-widest uppercase"
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 border-[3px] border-black font-mono transition-all duration-150 " +
    "shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 " +
    "active:shadow-[1px_1px_0px_0px_#000000] active:translate-x-1 active:translate-y-1 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download}
          className={combinedClasses}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
