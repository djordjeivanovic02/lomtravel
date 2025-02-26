import type { Config } from "tailwindcss";

export default {
  mode: "jit",
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
      animation: {
        "slide-up": "slide-up 400ms ease-out",
        "fade-in": "fade-in 1000ms ease-out",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      screens: {
        md: "850px",
      },
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
        form: "var(--form-color)",
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
