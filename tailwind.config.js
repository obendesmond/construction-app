/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#211F1F",
        Secondary: "#F0A500",
        Tertiary: "#E45826",
        White: "#FFFFFF",
        Dark1: "#2B2727",
        Dark2: "#1A1616",
        ShadowColor: "#FFFCF5",
        Gray01: "#6D6D6D",
        Gray02: "#A7A7A7",
        Gray03: "#B5B5B5",
        Gray04: "#EBEBEB",
        Gray05: "#E6D5B8",
      },
      screens: {
        // md: "600px",
      },
    },
  },
  plugins: [require("daisyui")],
};
