/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c1917",
        sand: "#f5efe4",
        clay: "#d97706",
        forest: "#14532d",
      },
      boxShadow: {
        card: "0 20px 60px rgba(28, 25, 23, 0.10)",
      },
    },
  },
  plugins: [],
};