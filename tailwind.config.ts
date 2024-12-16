import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        heading: ['var(--font-heading)'],
      },
      colors: {
        background: 'hsl(var(--background))',
        text: 'hsl(var(--text))',
        secondary: 'hsl(var(--secondary))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
