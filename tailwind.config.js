/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white1": "#F1F7F6",
        "paragraph": "#BDC7C2",
        "button": "#00DF81",
        "dark1": "#021A19 ",
        "green1": "#03624C",
        "dark3": "#032221",
        "green2": "#06644E",
        "dark2": "#021B1A",
        "dark4": "#042221",
        "green3": "#3F8B89",
        "green4": "#025441",
        "pink1": "#FF007A",
        "green5": "#0B453A",
        "green6": "#168067"
      },
      screens: {
        'sm': '615px',
        'md': '865px',
        'lg': '1024px',
        'xl': '1280px',
        'xxl': '1310px',
        '2xl': '1500px',
        '3xl': '1800px',
      },
      fontFamily: {
        interbold: ["inter-bold", "sans-serif"],
        interlight: ["inter-light", "sans"],
        interregular: ["inter-regular", "sans-serif"]
      }
    },
  },
  plugins: [],
}

