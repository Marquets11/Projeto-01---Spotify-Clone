/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        20: "20deg",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
