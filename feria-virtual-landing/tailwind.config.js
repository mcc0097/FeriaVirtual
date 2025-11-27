/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#003594',
        orange: '#FF5B41',
        grey: '#EDEDED',
        black: '#1E1E1E',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
