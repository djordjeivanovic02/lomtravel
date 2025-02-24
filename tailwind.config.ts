import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.3rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "var(--main-color)",
        title: "var(--title-color)",
        text: "var(--text-color)",
        lightText: "var(--light-text)",
        border: "var(--border-color)",
        red: "var(--red-color)",
        footer: "var(--footer-color)",
        form:"var(--form-color)"
      },
      fontFamily: {
        sans: "var(--font-dm-sans)",
        roboto: "var(--font-roboto)",
        handwritten: "var(--font-nothing-you-could-do)",
      },
    },
  },
  plugins: [],
} satisfies Config;
