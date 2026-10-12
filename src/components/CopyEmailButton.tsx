"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
  showIcon?: boolean;
}

export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  email,
  className = "",
  showIcon = true
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-3 py-1.5 border-2 border-black bg-white text-black font-mono text-xs font-bold uppercase transition-all shadow-[2px_2px_0px_0px_#000000] hover:bg-[#FFE600] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer ${className}`}
      title="Click to copy email address"
      aria-label="Copy email address to clipboard"
    >
      {showIcon && (
        copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black" />
      )}
      <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL"}</span>
    </button>
  );
};
