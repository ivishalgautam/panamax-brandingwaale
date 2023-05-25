/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyan-light": "#BEFCFE",
        // secondary: "#1D4390",
        secondary: "#001234",
        primary: "#E41D20",
        "pink-light": "#FFF1F1",
        "pink-extra-light": "#FFFBFA",
      },
    },
  },
  plugins: [],
};
