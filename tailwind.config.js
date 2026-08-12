/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Colors kept for potential Tailwind class usage; primary usage is via CSS vars
      colors: {
        "cyan-glow": "#00e5ff",
        "teal-accent": "#2dd4a8",
        "coral-accent": "#ff6b6b",
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      // NOTE: Animations/keyframes are defined in index.css via @keyframes.
      // We only register the class names here so Tailwind doesn't purge them.
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "border-glow": "border-glow 4s ease-in-out infinite",
        "rotate-slow": "rotate-slow 30s linear infinite",
        orbit: "orbit 20s linear infinite",
      },
    },
  },
  plugins: [],
};