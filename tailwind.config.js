/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        blinkShadow: "blinkShadow 2s infinite",
      },
      keyframes: {
        blinkShadow: {
          "0%, 100%": {
            boxShadow: "0 0 0px 0px rgba(254, 184, 67, 0)",
          },
          "50%": {
            boxShadow: "0 0 30px 10px rgba(255, 20, 20, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
