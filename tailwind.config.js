/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF7",
        surface: "#F2F0EA",
        "surface-alt": "#ECE9E1",
        border: "#DCD9D0",
        "border-soft": "#E7E4DC",
        ink: "#121212",
        "ink-soft": "#46443F",
        mute: "#8A867B",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(#DCD9D0 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "22px 22px",
      },
    },
  },
  plugins: [],
};
