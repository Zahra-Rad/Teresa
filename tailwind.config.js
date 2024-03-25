/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: "open-sans",
        header: "lato",
      },
      backgroundImage: {
        bg: "url('../../img/bg.png')",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
        primary: "33% 67% 32% 68% / 32% 28% 72% 68%",
      },
      animation: {
        format: "format 10s ease-in-out infinite alternate",
        format2:"format2 10s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
