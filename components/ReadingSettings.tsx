'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type ThemeType = 'theme-light' | 'theme-parchment' | 'theme-dark';
export type FontSize = 'reader-size-sm' | 'reader-size-md' | 'reader-size-lg' | 'reader-size-xl';
export type FontFamily = 'reader-font-academic' | 'reader-font-classic' | 'reader-font-sans';

export default function ReadingSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeType>('theme-parchment'); // Default to parchment for beautiful reading
  const [fontSize, setFontSize] = useState<FontSize>('reader-size-md');
  const [fontFamily, setFontFamily] = useState<FontFamily>('reader-font-academic');
  const popupRef = useRef<HTMLDivElement>(null);

  // Load from local storage and apply on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('hncg-theme') as ThemeType | null;
    const savedSize = localStorage.getItem('hncg-font-size') as FontSize | null;
    const savedFont = localStorage.getItem('hncg-font-family') as FontFamily | null;

    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
    if (savedTheme) setTheme(savedTheme);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedSize) setFontSize(savedSize);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedFont) setFontFamily(savedFont);
  }, []);

  // Apply classes to HTML element
  useEffect(() => {
    const html = document.documentElement;
    
    // Theme
    html.classList.remove('theme-light', 'theme-parchment', 'theme-dark');
    html.classList.add(theme);
    localStorage.setItem('hncg-theme', theme);

    // Font Size
    html.classList.remove('reader-size-sm', 'reader-size-md', 'reader-size-lg', 'reader-size-xl');
    html.classList.add(fontSize);
    localStorage.setItem('hncg-font-size', fontSize);

    // Font Family
    html.classList.remove('reader-font-classic', 'reader-font-academic', 'reader-font-sans');
    html.classList.add(fontFamily);
    localStorage.setItem('hncg-font-family', fontFamily);
  }, [theme, fontSize, fontFamily]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const themes = [
    { id: 'theme-light', label: 'Sáng', color: '#FFFEF5', border: '#E5E5E5' },
    { id: 'theme-parchment', label: 'Giấy da', color: '#F4ECD8', border: '#D4B45E' },
    { id: 'theme-dark', label: 'Tối', color: '#0D1425', border: '#2D3D6E' },
  ];

  const fontSizes = [
    { id: 'reader-size-sm', label: 'Nhỏ', icon: 'A' },
    { id: 'reader-size-md', label: 'Vừa', icon: 'A' },
    { id: 'reader-size-lg', label: 'Lớn', icon: 'A' },
    { id: 'reader-size-xl', label: 'Rất lớn', icon: 'A' },
  ];

  const fontFamilies = [
    { id: 'reader-font-academic', label: 'Học thuật', desc: 'Noto Serif', fontClass: 'font-serif' },
    { id: 'reader-font-classic', label: 'Cổ điển', desc: 'Playfair', fontClass: 'font-serif italic font-semibold' },
    { id: 'reader-font-sans', label: 'Hiện đại', desc: 'Inter', fontClass: 'font-sans text-[13px]' },
  ];

  return (
    <div className="relative z-50 font-sans" ref={popupRef}>
      {/* Trigger Button - Refined Serif "Aa" */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Tùy chỉnh giao diện đọc"
        className="flex items-center justify-center w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-gold-400/40 text-burgundy-800 shadow-md hover:bg-gold-50/50 hover:shadow-[0_0_15px_rgba(201,168,76,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 relative select-none"
      >
        <span className="font-serif font-bold text-[17px] tracking-tight leading-none">Aa</span>
      </button>

      {/* Dropdown Panel - Academic parchment theme */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-14 w-80 bg-gold-50/95 backdrop-blur-xl border border-gold-400/35 rounded-2xl shadow-xl overflow-hidden p-6"
          >
            <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-burgundy-800 mb-5 flex items-center justify-center gap-2 select-none border-b border-gold-400/20 pb-3">
              <span>☩</span> Tùy chọn giao diện đọc
            </h3>

            {/* Section I: Theme Selector */}
            <div className="mb-5">
              <p className="font-serif text-[10px] font-bold tracking-widest text-burgundy-700/80 mb-3 select-none">I. MÀU NỀN</p>
              <div className="grid grid-cols-3 gap-3">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id as ThemeType)}
                    className={`flex flex-col items-center gap-1.5 group`}
                  >
                    <div 
                      className={`w-9 h-9 rounded-full border-2 transition-all duration-200 ${theme === t.id ? 'scale-110 shadow-md' : 'border-gray-200 group-hover:scale-105'}`}
                      style={{ backgroundColor: t.color, borderColor: theme === t.id ? '#7B2D3B' : undefined }}
                    />
                    <span className={`text-[10px] font-medium ${theme === t.id ? 'text-burgundy-800 font-bold' : 'text-gray-500'}`}>
                      {t.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gold-400/20 my-4 flex items-center justify-center">
              <span className="bg-gold-50 px-2 text-[9px] text-gold-500 select-none">☩</span>
            </div>

            {/* Section II: Font Size Selector */}
            <div className="mb-5">
              <p className="font-serif text-[10px] font-bold tracking-widest text-burgundy-700/80 mb-3 select-none">II. CỠ CHỮ</p>
              <div className="flex bg-gold-100/40 p-1.5 rounded-xl border border-gold-400/15">
                {fontSizes.map((fs, i) => (
                  <button
                    key={fs.id}
                    onClick={() => setFontSize(fs.id as FontSize)}
                    className={`flex-1 py-1.5 text-center transition-all duration-200 rounded-lg flex items-center justify-center
                      ${fontSize === fs.id ? 'bg-burgundy-700 text-white shadow-sm font-bold scale-105' : 'text-burgundy-900/60 hover:text-burgundy-800'}
                    `}
                  >
                    <span className="font-serif font-semibold" style={{ fontSize: `${12 + i * 2}px` }}>{fs.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gold-400/20 my-4 flex items-center justify-center">
              <span className="bg-gold-50 px-2 text-[9px] text-gold-500 select-none">☩</span>
            </div>

            {/* Section III: Font Family Selector */}
            <div>
              <p className="font-serif text-[10px] font-bold tracking-widest text-burgundy-700/80 mb-3 select-none">III. PHÔNG CHỮ</p>
              <div className="grid grid-cols-3 gap-2 bg-gold-100/40 p-1.5 rounded-xl border border-gold-400/15">
                {fontFamilies.map((ff) => (
                  <button
                    key={ff.id}
                    onClick={() => setFontFamily(ff.id as FontFamily)}
                    className={`flex flex-col items-center justify-center py-2 px-1 transition-all duration-200 rounded-lg text-center
                      ${fontFamily === ff.id ? 'bg-burgundy-700 text-white shadow-sm font-bold scale-105' : 'text-burgundy-900/60 hover:text-burgundy-800 hover:bg-gold-200/25'}
                    `}
                  >
                    <span className={`${ff.fontClass} leading-none mb-1`}>Aa</span>
                    <span className="text-[9px] block opacity-80">{ff.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
