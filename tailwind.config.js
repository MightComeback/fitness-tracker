/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "teal-color" : "#65d8cf",
      },
      textColor: {
        "main-teal" : "#65d8cf",
      },
      backgroundColor: {
        "main-teal-bg" : "#65d8cf",
      },
    },
  },
  plugins: [],
}
