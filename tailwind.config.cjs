/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#292d39",
        secondary: "#cf0038",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        ashWhite: "#dce4f1",
        dimsecondary: "#58081e"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jose: ['Josefin Sans', 'sans-serif'],
        ral: ['Raleway', 'sans-serif'],
        octbold: ['oct-bold', 'sans-serif'],
        octreg: ['oct-reg', 'sans-serif'],
        octmed: ['oct-med', 'sans-serif'],
        octmexp: ['oct-mexp', 'sans-serif']
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};