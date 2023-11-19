/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        300: "300px",
        "100p":"100%"
      },
      height: {
        300: "300px",
       "100vh":"100vh"
      },
    },
  },
  plugins: [],
};
