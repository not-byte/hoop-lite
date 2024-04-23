import type { Config } from "tailwindcss";
export default (<Partial<Config>> {
  theme: {
    extend: {
      fontFamily: {
        display: "Inter"
      },
      fontSize: {
        xxl: "2.986rem",
        xl: "1.728rem",
        lg: "1.2rem",
        md: "1rem",
        sm: "0.833rem"
      },
      colors: {
        blood: "rgb(231,36,36)",
        dark: "rgb(30,30,30,1.00)",
        gray: "rgb(75,75,75,1.00)"
      },
      borderWidth: {
        "1": "1px"
      }
    }
  }
});