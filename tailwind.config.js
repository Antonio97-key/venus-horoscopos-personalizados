/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          darkest: '#0a0a12',
          dark: '#12121f',
          navy: '#1a1a2e',
          purple: '#16213e',
          violet: '#533483',
          accent: '#e4a853',
          gold: '#d4af37',
          soft: '#a8d5e5',
          aqua: '#00d9ff',
        },
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        body: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0a0a12 0%, #16213e 50%, #0f0f1a 100%)',
        'nebula': 'radial-gradient(ellipse at 50% 0%, rgba(83,52,131,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(0,217,255,0.1) 0%, transparent 40%)',
        'starfield': 'radial-gradient(2px 2px at 20px 30px, #fff, transparent), radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'cosmic': '0 0 40px rgba(212, 175, 55, 0.15)',
        'gold-glow': '0 0 30px rgba(228, 168, 83, 0.2)',
      },
    },
  },
  plugins: [],
};
