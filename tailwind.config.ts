import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'serif'],
        'playfair-display': ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#8B4513',
        'light-gray': '#B6B6B6',
      },
    },
  },
  plugins: [],
} satisfies Config
