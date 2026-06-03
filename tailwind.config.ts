import type { Config } from 'tailwindcss'

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFEF5',
        parchment: '#F8F6F0',
        burgundy: {
          50: '#FDF2F4',
          100: '#FAE6EA',
          200: '#F5CCD5',
          300: '#EDA5B4',
          400: '#E07A90',
          500: '#C9506A',
          600: '#A93C55',
          700: '#7B2D3B',
          800: '#672736',
          900: '#582333',
          950: '#310F19',
        },
        gold: {
          50: '#FDFAED',
          100: '#FAF3D1',
          200: '#F4E5A3',
          300: '#E0CB82',
          400: '#D4B45E',
          500: '#C9A84C',
          600: '#B08A3A',
          700: '#926831',
          800: '#79542E',
          900: '#654629',
          950: '#3A2414',
        },
        navy: {
          50: '#EEF1F8',
          100: '#D9DFF0',
          200: '#B8C3E4',
          300: '#8EA1D3',
          400: '#677DBE',
          500: '#4A61A9',
          600: '#3A4E8E',
          700: '#2D3D6E',
          800: '#1B2A4A',
          900: '#151F38',
          950: '#0D1425',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Lora', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Roboto', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        reading: '1.85',
        relaxed: '1.75',
      },
      maxWidth: {
        reading: '72ch',
        'reading-wide': '85ch',
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
