'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50 bg-gradient-to-r from-gold-400 via-burgundy-500 to-burgundy-700 shadow-[0_2px_10px_rgba(123,45,59,0.5)]"
      style={{ scaleX }}
    />
  );
}
