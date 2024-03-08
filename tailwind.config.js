/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sublima-xb": ['sublima-xb', "sans-serif"],
        "sublima-xbi": ['sublima-xbi', "sans-serif"],
        "sublima-xl": ['sublima-xl', "sans-serif"],
        "sublima-xli": ['sublima-xli', "sans-serif"],
      },
    },
  },
  plugins: [],
}

