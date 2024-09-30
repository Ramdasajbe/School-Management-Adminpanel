/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)", // Will be controlled by CSS variables
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        neutral: "var(--color-neutral)",
        teCo: "var(--text-color-primary)",
        baCo: "var(--background-primary)",
        baCoSe: "var(--background-secondary)",
      },
    },
  },
  plugins: [],
};
