/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#224DE5",
        secondary: "#F15A24",
        neutral: {
          60: "#CDCDCD",
          70: "#F8F8FA",
          80: "#F9F9FC",
        },
      },
      boxShadow: {
        "3xl": "37px 37px 80px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
