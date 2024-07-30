module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "greenblue": "rgb(0, 233, 191)",
        "backgroundColor": "#121212",
        "customColor": 'rgb(8, 160, 150)',
        "youtube" : 'rgb(255,0,0)',
        "iconColour" : 'rgb(84,48,199)',
        "buynow" : 'rgb(18,218,168)',
        "cart" : 'rgb(249,249,249)',
        "loginbg" : 'rgb(47,47,47)',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
