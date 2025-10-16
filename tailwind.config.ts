import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Neue Montreal"', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        background: '#000000',
        foreground: '#f4f4f5',
        accent: '#38bdf8',
        surface: '#0b0b0d',
        surfaceMuted: '#111115',
        border: '#1f1f25'
      },
      dropShadow: {
        glow: '0 0 1.5rem rgba(56, 189, 248, 0.45)'
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    }
  },
  plugins: []
};

export default config;
