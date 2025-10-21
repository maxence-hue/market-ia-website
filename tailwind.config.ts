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
        primary: {
          DEFAULT: '#7B61FF',
          light: '#9B87FF',
          dark: '#5B41DF',
        },
        dark: {
          DEFAULT: '#0F0F10',
          surface: '#1C1C1E',
          lighter: '#2C2C2E',
        },
        light: '#F2F2F2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(123, 97, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(123, 97, 255, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'stars': "url('/background-stars.svg')",
      },
    },
  },
  plugins: [],
}
export default config
