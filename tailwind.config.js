// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
      },
      keyframes: {
        breathe: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        
      },
      animation: {
        breathe: 'breathe 1.5s ease-out forwards', // removed infinite
      },
    },
  },
  plugins: [],
};
