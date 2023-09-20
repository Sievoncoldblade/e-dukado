import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,lgx}", "./components/**/*.{js,ts,jsx,tsx,lgx}", "./app/**/*.{js,ts,jsx,tsx,lgx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito", ...defaultTheme.fontFamily.sans],
    },
  },
  darkMode: "class",
};
export default config;
