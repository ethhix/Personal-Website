/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixelated: ["Pixelify Sans", "monospace", "sans-serif"],
        departureMono: ["Departure Mono", "sans-serif"],
        determination: ["Determination Mono", "sans-serif"],
      },
      colors: {
        superdDarkBlue: "#0b0e1e",
        lighterBlue: "#1a485d",
        tangerine: "#d35831",
      },
    },
  },
  plugins: [],
};
