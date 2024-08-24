import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreenGreyStart: "#0F1A1A", // Even darker Green-Grey
        darkGreenGrey: "#1B2B2B",      // Darker Green-Grey
        beigeWhite: {
          50: "#FBF9F2",  // Very light beige
          100: "#F7F4E8", // Lighter beige
          200: "#F3EFD7", // Light beige
          300: "#EEE9C5", // Medium-light beige
          400: "#E8E3B4", // Beige
          500: "#E3DDA2", // Standard beige
          600: "#D7D091", // Slightly darker beige
          700: "#C2B97D", // Darker beige
          800: "#A69E6B", // Much darker beige
          900: "#837E54", // Darkest beige
        },
        terminalBlueGrey: "#1A1D21"
      },
    },
  },
  plugins: [],
} satisfies Config;
