import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cameroon': {
          'primary': '#2C5282', // Deep blue
          'secondary': '#F6AD55', // Warm orange
          'accent': '#48BB78', // Forest green
          'dark': '#1A365D', // Dark blue
          'light': '#F7FAFC', // Light gray
          'success': '#48BB78', // Green
          'warning': '#ECC94B', // Yellow
          'error': '#F56565', // Red
          'text': {
            'primary': '#2D3748',
            'secondary': '#4A5568',
            'light': '#A0AEC0'
          }
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    forms,
  ],
}

export default config; 