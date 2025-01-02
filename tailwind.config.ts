import type { Config } from 'tailwindcss'

const gapSizesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

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
      flexBasis: {
        'calc-1/3': 'calc(33.3333% - 12px)',
        'calc-1/2': 'calc(50% - 12px)',
        'calc-full': 'calc(100% - 12px)',
      },
    },
  },

  safelist: [
    ...gapSizesArray.map((size) => `h-${size}`),
    ...gapSizesArray.map((size) => `w-${size}`),
  ],
  plugins: [],
} satisfies Config
