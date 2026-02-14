/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b1c2d",
        secondary: "#102a43",
        accent: "#1c3d5a",
        light: "#e0f2ff",
      },
    },
  },
  plugins: [],
}
