/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
