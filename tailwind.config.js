/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#161616",
                accent: "#FBE54D",
                field: "#2D2D2D",
                error: "#E76143",
                unchosenText: "#848484",
                search: "#333535",
                hint: "#41434E",
            },
            padding: {
                "74px": "74px",
                "17px": "17px",
                "25px": "25px",
                "15px": "15px",
            },
            display: ["group-hover"],
        },
    },
    plugins: [],
};
