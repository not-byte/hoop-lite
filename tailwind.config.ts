import type { Config } from "tailwindcss";

export default {
    content: [
        "./app.vue",
        "./components/**/*.${vue,ts,js,html}",
        "./pages/**/*.{vue,ts,js,html}"
    ],
    theme: {
        fontFamily: {
            display: "Inter, Courier New, Courier, monospace"
        },
        fontSize: {
            xxl: "3rem",
            xl: "1.75rem",
            lg: "1.25rem",
            md: "1rem",
            sm: "0.85rem"
        },
        extend: {
            colors: {
                blood: "rgba(242,53,53,1.00)",
                dark: "rgba(30,30,30,1.00)",
                gray: "rgba(75,75,75,1.00)",
                mid: "rgba(125,125,125,1.00)",
            },
            borderWidth: {
                "1": "1px",
            },
            gridTemplateColumns: {
                "13": "repeat(13, minmax(0, 1fr))"
            },
        },
    },
    plugins: []
} satisfies Config;