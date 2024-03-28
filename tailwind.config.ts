import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontSize: {
        xxl: "2.986rem",
        xl: "1.728rem",
        lg: "1.2rem",
        md: "1rem",
        sm: "0.833rem",
      },
      colors: {
        blood: "#E83B3A",
        dark: "#1D1D1D",
      },
    },
  },
};
