/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        sg: "#01ff79",
      },
      fontFamily: {
        robotom: ["Roboto Mono"],
      },
    },
  },
  plugins: [],
};
