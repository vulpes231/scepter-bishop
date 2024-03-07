/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing-script": ['"Dancing Script"', "cursive"],
        ojuju: ['"Ojuju"', "cursive"],
        "indie-flower": ['"Indie Flower"', "cursive"],
        "space-grotesk": ['"Space Grotesk"', "cursive"],
      },
    },
  },
  plugins: [],
};
