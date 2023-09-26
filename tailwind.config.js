/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // light mode
        primary: '#0079FF',
        gray: '#697C9A',
        'gray-blue': '#4B6A9B',
        'dark-gray': '#2B3442',
        'light-gray': '#F6F8FF',
        'gray-white': '#FEFEFE',
        // dark mode
        dark: '#141D2F',
        'navy-blue': '#1E2A47',
      },
      fontSize: {
        xl: ['1.625rem', '1.5625rem'],
        large: ['1.375rem', '1.5625rem'],
        base: ['1rem', '1.5625rem'],
        small: ['0.9375rem', '1.5625rem'],
        xs: ['0.8125rem', '1.5625rem'],
        '2xs': ['0.6875rem', '1.5625rem'],
      },
      fontFamily: {
        'space-mono': ["'Space Mono'", 'monospace'],
      },
    },
  },
  plugins: [],
};
