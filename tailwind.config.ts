import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary navy palette (keyed under the original token name for drop-in reuse)
        'pub-green': {
          50: '#F4F6F8',
          100: '#E1E6EC',
          200: '#C2CCD8',
          300: '#93A3B5',
          400: '#5E738D',
          500: '#364F6B',
          600: '#253A52',
          700: '#1C2B3A',
          800: '#151F2A',
          900: '#0E151C',
        },
        // Off-white / cream background palette
        'pub-cream': {
          50: '#FFFFFF',
          100: '#F9F7F4',
          200: '#F1EEE8',
          300: '#E8E3D9',
          400: '#D8D0C1',
          500: '#BFB5A0',
          600: '#A0937A',
          700: '#7A6F5C',
          800: '#524B3E',
          900: '#2E2A23',
        },
        // Warm gold / taupe accent palette
        'pub-wood': {
          50: '#F7F5F2',
          100: '#EFEAE2',
          200: '#DED4C2',
          300: '#C3B39B',
          400: '#A89376',
          500: '#8B7355',
          600: '#75614A',
          700: '#5E4E3B',
          800: '#433830',
          900: '#1C2B3A',
        },
        // Semantic aliases
        navy: {
          DEFAULT: '#1C2B3A',
          dark: '#151F2A',
        },
        gold: {
          DEFAULT: '#8B7355',
          dark: '#75614A',
        },
        offwhite: '#F9F7F4',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
export default config
