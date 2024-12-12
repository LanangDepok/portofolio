/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        borderSpinRGB: "borderRGB 4s linear infinite, spin 4s linear infinite",
        pagesRGB: "bacgroundRGB 4s linear infinite",
      },
      keyframes: {
        borderRGB: {
          "0%": {
            borderColor: "#FF1493",
          },
          "20%": {
            borderColor: "#39FF14",
          },
          "40%": {
            borderColor: "#00BFFF",
          },
          "60%": {
            borderColor: "#FFFF00",
          },
          "80%": {
            borderColor: "#FF4500",
          },
          "100%": {
            borderColor: "#FF1493",
          },
        },
        bacgroundRGB: {
          "0%": {
            backgroundColor: "#FF1493",
          },
          "20%": {
            backgroundColor: "#39FF14",
          },
          "40%": {
            backgroundColor: "#00BFFF",
          },
          "60%": {
            backgroundColor: "#FFFF00",
          },
          "80%": {
            backgroundColor: "#FF4500",
          },
          "100%": {
            backgroundColor: "#FF1493",
          },
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
