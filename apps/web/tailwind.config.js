/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "apple-blur": "rgba(0,0,0,0.1)",
        "markdown-github-black": "#0d111688",
        "resume-purple": "#1e1c3b"
      },
      backdropBlur: {
        "apple-blur": "16px",
      },
      fontFamily: {
        sf: ["San Francisco", "sans-serif"],
      },
    },
  },
  plugins: [],
};
