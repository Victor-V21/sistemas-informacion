/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#49129c',
        secondary: {
          DEFAULT: '#B40086',
          100: '#C51297',
          200: '#831266',
        },
        tertiary: '#ef2967',
        
      },
      fontFamily: {
        'work_black': ['WorkSans-Black', 'sans-serif'],
        'work_light': ['WorkSans-Light', 'sans-serif'],
        'work_medium': ['WorkSans-Medium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

