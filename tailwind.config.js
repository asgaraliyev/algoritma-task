module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
      colors: {
        "primary": "#2c8eff",
        "primary_dark": "#02336a",
        "primary_light": "#91c2fb",
        "normal":"#585c6d",
        "light":"#ffffff",
        "dark":"#000",
        "danger":"#ff5252",
        "warning":"#f07930",
        "success":"#28ab1d",
        "info":"#47acff"
      },
    },
    safelist: [
      {
        pattern:
          /(bg|text|border|shadow|)-(primary|primary_dark|primary_light|normal|dark|danger|warning|success|info)/,
      },
    ],
  };
  