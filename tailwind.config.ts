import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
        barlow: ["Barlow", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Noto Serif SC", "Georgia", "Times New Roman", "serif"]
      },
      colors: {
        paper: "#fffaf1",
        ink: "#171512",
        tomato: "#c83a32",
        sage: "#6c8068"
      }
    }
  },
  plugins: []
};

export default config;
