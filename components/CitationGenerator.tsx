'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type CitationStyle = 'APA' | 'MLA' | 'Chicago';

export default function CitationGenerator() {
  const [activeTab, setActiveTab] = useState<CitationStyle>('APA');
  const [copied, setCopied] = useState(false);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const currentYear = currentDate.getFullYear();
  const url = 'http://localhost:3000'; // Replace with real canonical URL in production

  const citations: Record<CitationStyle, string> = {
    APA: `Antigravity. (${currentYear}). Hôn nhân Công giáo. HNCG Research Database. Truy cập ngày ${formattedDate}, từ ${url}`,
    MLA: `Antigravity. "Hôn nhân Công giáo." HNCG Research, ${currentYear}, ${url}. Truy cập ${formattedDate}.`,
    Chicago: `Antigravity. "Hôn nhân Công giáo." HNCG Research Database. ${currentYear}. ${url}.`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(citations[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-16 mb-8 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-[var(--reader-border)] rounded-2xl p-6 shadow-sm transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
        <h3 className="font-serif font-bold text-[var(--reader-heading)] m-0 text-lg flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          Trích dẫn Bài viết này
        </h3>
        
        {/* Tabs */}
        <div className="flex bg-black/10 dark:bg-white/10 p-1 rounded-lg self-start sm:self-auto">
          {(['APA', 'MLA', 'Chicago'] as CitationStyle[]).map(style => (
            <button
              key={style}
              onClick={() => setActiveTab(style)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeTab === style ? 'bg-[var(--reader-bg-card)] text-[var(--reader-text-main)] shadow-sm' : 'text-[var(--reader-text-muted)] hover:text-[var(--reader-text-main)]'}`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      <div className="relative bg-[var(--reader-bg-main)] border border-[var(--reader-border)] rounded-xl p-4 font-sans text-sm text-[var(--reader-text-main)] shadow-inner transition-colors duration-300">
        <p className="pr-12 italic">{citations[activeTab]}</p>
        
        <button
          onClick={handleCopy}
          aria-label="Sao chép trích dẫn"
          className="absolute right-3 top-3 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-[var(--reader-text-muted)] hover:text-[var(--reader-heading)]"
        >
          {copied ? (
            <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
              <polyline points="20 6 9 17 4 12"></polyline>
            </motion.svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
