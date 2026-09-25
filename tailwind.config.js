/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'thinkers-orange': '#F4320B',
        'ink': '#1D1A17',
        'warm-canvas': '#F7F3EE',
        'soft-surface': '#FFFDF9',
        'glass-light': 'rgba(255, 255, 255, 0.58)',
        'glass-border': 'rgba(255, 255, 255, 0.52)',
        'ink-muted': '#6F6962',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(244, 50, 11, 0.1)',
        'glass-orange': '0 8px 32px 0 rgba(244, 50, 11, 0.25)',
      }
    },
  },
  plugins: [],
}
