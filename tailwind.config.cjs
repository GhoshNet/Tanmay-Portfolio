/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1215",
        panel: "#121c20",
        line: "#24353c",
        bone: "#e8ebe4",
        mute: "#8b9ba1",
        amber: "#ffa62b",
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', '"Arial Narrow"', "Impact", "sans-serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "Menlo", "Consolas", "monospace"],
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
