/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,jsx}",
  "./pages/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}",
  "./src/**/*.{js,jsx}",
];
export const theme = {
  extend: {
    animation: {
      'spin-slow': 'spin 8s linear infinite',
    }
  },
};
export const plugins = [];
  