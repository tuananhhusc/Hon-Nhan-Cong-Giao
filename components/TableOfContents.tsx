'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TocItem {
  id: string;
  title: string;
  level: number; // 2 for h2, 3 for h3
}

export interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // ── Intersection Observer ──────────────────────────────────────────
  useEffect(() => {
    if (items.length === 0) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        const sorted = visibleEntries.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );
        setActiveId(sorted[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      threshold: 0.3,
      rootMargin: '-80px 0px -60% 0px',
    });

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [items]);

  // ── Smooth‑scroll handler ─────────────────────────────────────────
  const scrollTo = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveId(id);
        setIsMobileOpen(false);
      }
    },
    []
  );

  // ── Lock body scroll when mobile panel is open ────────────────────
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // ── Shared list markup ────────────────────────────────────────────
  const renderItems = (onNavigate: (id: string) => void) => (
    <nav aria-label="Mục lục" className="relative pl-0.5">
      {/* Vertical axis line */}
      <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-[var(--reader-border)]/40 pointer-events-none" />

      <ul className="space-y-1 relative z-10">
        {items.map((item) => {
          const isActive = item.id === activeId;
          const isH3 = item.level === 3;

          return (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`
                  group relative flex w-full items-center text-left transition-all duration-200
                  py-1.5 pr-2 pl-4 text-xs
                  ${isH3 ? 'pl-6 text-[11px] leading-snug' : 'font-semibold tracking-wide'}
                  border-l-2
                  ${
                    isActive
                      ? 'border-[var(--reader-heading)] text-[var(--reader-heading)] font-bold bg-[var(--reader-heading)]/5'
                      : 'border-transparent text-[var(--reader-text-muted)] hover:text-[var(--reader-heading)] hover:border-[var(--reader-border)]/40 hover:bg-[var(--reader-border)]/5'
                  }
                `}
                style={{
                  borderLeftWidth: '2px',
                  // Ensure active item's left border aligns with the axis line (which is 7px from left edge)
                  // The button has pl-4 (16px), and border is at the left edge of the button.
                  // Since the vertical axis line is at absolute left-[7px], we can indent the button's padding-left:
                  paddingLeft: isH3 ? '24px' : '16px',
                }}
              >
                <span className="line-clamp-2">{item.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  // ═══════════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════════
  return (
    <>
      {/* ── Desktop: Flat, borderless list resting on the parchment page background ─── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="hidden lg:block max-h-[calc(100vh-8rem)] overflow-y-auto
          bg-transparent shadow-none border-none py-2 pr-4 relative select-none"
      >
        {/* Title */}
        <h2 className="font-serif text-xs uppercase tracking-[0.25em] text-[var(--reader-heading)] mb-1 select-none font-bold flex items-center gap-1.5">
          <span>☩</span> Mục Lục
        </h2>
        <p className="text-[9px] text-[var(--reader-text-muted)]/60 uppercase tracking-widest mb-3">Thời gian đọc: ~25 phút</p>
        <div className="mb-4 h-px w-10 bg-gradient-to-r from-[var(--reader-border)] to-transparent" />

        {renderItems(scrollTo)}
      </motion.div>

      {/* ── Mobile: Floating button ───────────────────────────────── */}
      <button
        onClick={() => setIsMobileOpen(true)}
        aria-label="Mở mục lục"
        className="fixed bottom-6 right-6 z-50 flex lg:hidden items-center justify-center
          w-12 h-12 rounded-full bg-[var(--reader-heading)] text-[var(--reader-bg-main)] shadow-lg
          hover:opacity-95 active:scale-95 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      </button>

      {/* ── Mobile: Bottom sheet ──────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-xs"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 350, damping: 35 }}
              className="absolute bottom-0 left-0 right-0 max-h-[70vh] overflow-y-auto
                bg-[var(--reader-bg-main)] rounded-t-2xl shadow-2xl border-t border-[var(--reader-border)]/30"
            >
              {/* Drag handle */}
              <div className="sticky top-0 z-10 flex flex-col items-center bg-[var(--reader-bg-main)] pt-3 pb-2 rounded-t-2xl">
                <div className="h-1 w-10 rounded-full bg-[var(--reader-border)]/50 mb-3" />

                <div className="flex w-full items-center justify-between px-6">
                  <h2 className="font-serif text-xs uppercase tracking-widest text-[var(--reader-heading)] select-none">
                    Mục Lục
                  </h2>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    aria-label="Đóng mục lục"
                    className="flex items-center justify-center w-8 h-8 rounded-full
                      text-[var(--reader-text-muted)] hover:bg-[var(--reader-border)]/10 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <div className="mt-2 h-px w-10 bg-[var(--reader-border)]/30" />
              </div>

              <div className="px-6 pt-2 pb-8 bg-[var(--reader-bg-main)]">
                {renderItems(scrollTo)}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
