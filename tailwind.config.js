/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            light: '#3AB0FF',
            default: '#3783FF',
            dark: '#005792',
          },
          accent: '#FF5722',
          customGray: '#F1F5F9',
        },
      },
    },
    plugins: [
      require('tailwind-scrollbar'),
    ],
  };
  