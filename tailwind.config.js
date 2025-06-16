/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b348d",
        secondary: "#c8b6ff",
        tertiary: "#ffd166",
      },

    },
  },
  plugins: [],
}

