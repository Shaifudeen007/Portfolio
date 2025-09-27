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
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
      },
      animation: {
        'bg-scroll': 'bgScroll 150s linear infinite',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
