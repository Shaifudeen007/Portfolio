/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // ✅ Covers all JS/JSX files in /src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",      // 💠 Dark Blue (custom)
        secondary: "#9333ea",    // 💜 Purple (custom)
        accent: "#f59e0b",       // 🟡 Amber (custom)
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],    // 📝 Body font
        heading: ['Oswald', 'sans-serif'],  // 🔠 Headings
      },
      // ✅ You can optionally add keyframes here for animated background
      keyframes: {
        bgScroll: {
          '0%': {
            backgroundPosition: '0px 220px, 3px 220px, 151.5px 337.5px',
          },
          '100%': {
            backgroundPosition: '0px 6800px, 3px 6800px, 151.5px 6917.5px',
          },
        },
      },
      animation: {
        'bg-scroll': 'bgScroll 150s linear infinite',
      },
    },
  },
  plugins: [],
};
