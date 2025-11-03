import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': {
          light: '#31AA5A',
          DEFAULT: '#31AA5A',
          dark: '#258A49',
        },
        'brand-yellow': '#FCC71C',
        'brand-black': '#1D1918',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(180deg, #31AA5A 0%, #258A49 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
