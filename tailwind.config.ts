import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        cream: "#f9f7f4",
        "warm-gray": "#f5f3f0",
        gold: {
          DEFAULT: "#b8986e",
          light: "#d4bc94",
          dark: "#96784a",
        },
      },
      fontFamily: {
        serif: ["Cinzel", "serif"],
        sans: ["Inter", "sans-serif"],
        editorial: ["Cormorant Garamond", "serif"],
      },
      maxWidth: {
        "8xl": "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
