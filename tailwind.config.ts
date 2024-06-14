import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "420px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: "24px",
    },
    extend:{
      colors: {
        black: "#000000",
        white: "#ffffff",
        "gray": "#f2f0f1",
        "gray-2": "#f0eeed",
        gold: "#ffc633",
        green: "#01AB31",
        red: "#ff3333",
        brown: "#4F4631",
        burgandi: "#314F4A",
        blue: "#31344F",
        yellow: "#F5DD06",
        orange: "#F57906",
        sky: "#06CAF5",
        "blue-2": "#063AF5",
        violet: "#7D06F5",
        pink: "#F506A4"
      },
      borderRadius:{
        sm:"8px",
        md:"16px",
        lg:"28px",
        xl:"64px"
     },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config