import type { Config } from "tailwindcss";
import { boxShadow } from "@unocss/preset-mini/theme";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        display: "Inter",
      },
      fontSize: {
        xxl: "2.986rem",
        xl: "1.728rem",
        lg: "1.2rem",
        md: "1rem",
        sm: "0.833rem",
      },
      borderRadius: {
        outside: "2rem",
        inside: "1rem",
      },
      colors: {
        blood: "rgb(231,36,36)",
        dark: "rgb(30,30,30,1.00)",
        gray: "rgb(75,75,75,1.00)",
        high: "rgb(125,125,125,1.00)",
        mid: "rgba(220,221,226,1.00)",
        smoke: "rgb(231,232,236,1.00)",
        light: "rgba(255,255,255,1.00)",
      },
      boxShadow: {
        inset: "inset 0px 0px 50px -25px",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
};
