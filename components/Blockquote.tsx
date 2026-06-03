import React from "react";

export interface BlockquoteProps {
  children: React.ReactNode;
  source?: string;
  variant?: "scripture" | "magisterium" | "pullquote";
}

export function Blockquote({
  children,
  source,
  variant = "scripture",
}: BlockquoteProps) {
  
  if (variant === "pullquote") {
    return (
      <blockquote className="relative my-12 mx-auto max-w-3xl px-6 py-8 text-center border-t border-b border-gold-400/35 select-none">
        {/* Subtle decorative cross */}
        <div className="text-gold-500 text-lg mb-3">☩</div>
        <div className="relative z-10 text-xl md:text-2xl font-serif italic text-burgundy-950 leading-relaxed mb-4">
          {children}
        </div>
        {source && (
          <footer className="relative z-10 text-xs font-sans text-navy-800 uppercase tracking-[0.2em] flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-gold-400/40"></span>
            {source}
            <span className="w-6 h-px bg-gold-400/40"></span>
          </footer>
        )}
      </blockquote>
    );
  }

  const isScripture = variant === "scripture";

  return (
    <blockquote
      className={`
        my-8 mx-0 relative px-6 py-5 border-l-3 font-serif italic
        ${
          isScripture
            ? "border-gold-500 bg-gold-50/20 text-navy-950"
            : "border-burgundy-700 bg-burgundy-50/15 text-burgundy-950"
        }
      `}
    >
      {/* Decorative element - extremely subtle */}
      <span
        aria-hidden="true"
        className={`
          absolute top-0 left-2 select-none leading-none pointer-events-none opacity-10
          ${
            isScripture
              ? "text-6xl text-gold-500 font-serif"
              : "text-5xl text-burgundy-700"
          }
        `}
      >
        {isScripture ? "\u201C" : "\u271D"}
      </span>

      {/* Quote content */}
      <div className="relative z-10 pl-2 leading-relaxed text-base md:text-lg">{children}</div>

      {/* Source attribution */}
      {source && (
        <footer className={`relative z-10 mt-3 pl-2 text-xs font-sans tracking-wide uppercase ${isScripture ? 'text-gold-800/80' : 'text-burgundy-800/80'}`}>
          {source}
        </footer>
      )}
    </blockquote>
  );
}

