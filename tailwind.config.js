/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#E5E5E5",
        backgroundInput: "#FFFFFF",
        primary: "#EFC81A",
        scondary: "#2E266F",
        secondaryText: "#B6B6B6",
        secondaryText2: "#999999",
        background: "#EFEFEF",
        teks: "#3F3A3A",
        komen: "#F6F5F4",
        isikomen: "#666666",
        bulan: "#AAAAAA",
      },
      fontFamily: {
        custom: ["AirBnB"],
        inter: ["Inter", "sans-serif"],
      },
      zIndex: {
        1: "1",
      },
      backgroundImage: {
        login: "url('/src/assets/images/Login/background.png')",
        detailRecipe: "",
      },
      spacing: {
        17: "70px",
        18: "75px",
        22: "100px",
        30: "135px",
        35: "180px",
        85: "350px",
        128: "514px",
        140: "685px",
        200: "820px",
        230: "975px",
        256: "1210px",
      },

      fontSize: {
        "5.5xl": "3.5rem",
      },
    },
  },
  plugins: [],
};
