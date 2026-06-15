"use client";

import { useState } from "react";
import { RiFileCopyLine, RiCheckLine } from "react-icons/ri";

type CopyButtonProps = {
  textToCopy: string;
};

export function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center p-1.5 transition-colors duration-200"
      style={{
        background: "var(--bg-subtle)",
        border: "1px solid var(--border-light)",
        color: "var(--text-muted)",
        cursor: "pointer",
      }}
      title="Copy email address"
      aria-label={copied ? "Copied!" : "Copy email address"}
    >
      {copied ? (
        <RiCheckLine size={14} style={{ color: "var(--text-primary)" }} />
      ) : (
        <RiFileCopyLine size={14} />
      )}
    </button>
  );
}
