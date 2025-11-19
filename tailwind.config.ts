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
        'pub-green': {
          50: '#f0f7f4',
          100: '#dceee5',
          200: '#bddccb',
          300: '#92c2a7',
          400: '#62a17d',
          500: '#3d7f5a',
          600: '#2d6547',
          700: '#24513a',
          800: '#1f4230',
          900: '#1a3729',
        },
        'pub-cream': {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#faf4e8',
          300: '#f6ead4',
          400: '#f0d9b8',
          500: '#e9c59a',
          600: '#d4a574',
          700: '#b8875a',
          800: '#996d4c',
          900: '#7d5a41',
        },
        'pub-wood': {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e5dcd0',
          300: '#d4c4b2',
          400: '#c0a890',
          500: '#b08f75',
          600: '#9d7a63',
          700: '#826553',
          800: '#6b5447',
          900: '#58473d',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

