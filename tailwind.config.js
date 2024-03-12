/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./components/**/*.{html,js,ts,jsx,tsx}",
     "./src/**/*.{html,js,ts,jsx,tsx}",
   ],
   theme: {
     screens: {
       'sm': '540px',
       'md': '768px',
       'lg': '1024px',
       'xl': '1280px',
       '2xl': '1536px',
     },
     extend: {
       colors: {
         'white': '#ffffff',
         'tint': {
           100: '#7fd8dc',
           200: '#60cfd4',
           300: '#5ecfd3',
           400: '#4ac9ce',
           500: '#36c2c8',
           600: '#31afb4',
           700: '#2c9ca0',
           800: '#26888c',
           900: '#217578',
         },
       },
     },
   },
   plugins: [],
 } 