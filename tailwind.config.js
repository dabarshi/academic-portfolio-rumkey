/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arimo: ["Arimo", "sans-serif"], // Add Arimo font here
      },
    },
  },
  plugins: [],
};
