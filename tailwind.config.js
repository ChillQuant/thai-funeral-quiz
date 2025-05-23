/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f3f4f6',
          DEFAULT: '#4b5563',
          dark: '#1f2937',
        },
        secondary: {
          light: '#fef2f2',
          DEFAULT: '#dc2626',
          dark: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['Sarabun', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'fade-in-delay': 'fadeIn 1s ease-in 0.5s both',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 