'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-navy-900 overflow-hidden">
      {/* 1. Deep Cathedral Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-950" />

      {/* 2. Stained Glass Rosette (SVG Pattern) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 mix-blend-color-dodge">
        <motion.div 
          className="w-[800px] h-[800px] text-gold-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
            <path d="M50 2 L50 98 M2 50 L98 50 M16 16 L84 84 M16 84 L84 16" stroke="currentColor" strokeWidth="0.5" />
            {[...Array(12)].map((_, i) => (
              <path key={i} d="M50 50 Q 60 20 50 2 Q 40 20 50 50" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.2" transform={`rotate(${i * 30} 50 50)`} />
            ))}
          </svg>
        </motion.div>
      </div>

      {/* 3. God Rays Effect */}
      <div className="absolute inset-0 god-rays mix-blend-overlay pointer-events-none" />

      {/* 4. Vignette Shadow */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Minimal Academic Title Area */}
        <div className="relative p-4 sm:p-8 md:p-12 lg:p-16 w-full flex flex-col items-center">

          {/* Decorative cross with pulse glow */}
          <motion.div
            variants={childVariants}
            className="text-3xl sm:text-4xl text-gold-400 mb-6 sm:mb-8 select-none flex justify-center"
          >
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6], textShadow: ["0 0 10px rgba(212,175,55,0.2)", "0 0 20px rgba(212,175,55,0.6)", "0 0 10px rgba(212,175,55,0.2)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              ☩
            </motion.span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={childVariants}
            className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold-300/90 font-sans text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6 font-semibold"
          >
            Báo cáo Nghiên cứu Chuyên Sâu
          </motion.p>

          {/* Main title */}
          <motion.h1
            variants={childVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-navy-50 font-bold leading-tight mb-4 drop-shadow-lg"
          >
            <span className="text-gold-400">Hôn nhân Công giáo</span>
          </motion.h1>

          {/* Second line of title */}
          <motion.p
            variants={childVariants}
            className="text-gold-200/80 text-xl md:text-3xl font-serif italic mb-10"
          >
            Vẻ đẹp, Bản chất và Những Thách đố Hiện đại
          </motion.p>

          {/* Decorative gold line */}
          <motion.div
            variants={childVariants}
            className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-10 opacity-70"
          />
        </div>

        {/* Scroll-down indicator */}
        <motion.div
          variants={childVariants}
          className="mt-16 flex flex-col items-center"
        >
          <span className="text-gold-400/50 text-xs uppercase tracking-widest mb-3 font-serif italic">Bắt đầu đọc</span>
          <motion.svg
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gold-400 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
