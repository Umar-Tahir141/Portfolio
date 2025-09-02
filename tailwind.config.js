/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}","./**/*.php",],
  safelist: [
    "inline-block",
    "opacity-0",
    "opacity-100",
    "-translate-x-5",
    "translate-x-0",
    "transition-all",
    "duration-500",
    "ease-out",
    "animate-fade-in-left2",
    "animate-scale-in-left",
    "animate-scale-in-right",
    "text-orange-600",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-left': 'fadeInLeft 0.4s ease-out forwards',
        'scale-in-left': 'scaleInLeft 0.6s ease-out forwards',
        'scale-in-right': 'scaleInRight 0.6s ease-out forwards',
        'fade-in-left2': 'fadeInLeft2 1s ease-out forwards',
        
      },
      keyframes: {
        fadeInLeft2: {
        '0%': { opacity: '0', transform: 'translateX(-50px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
         },

        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
         scaleInLeft: {
      '0%': { transform: 'translateX(-50%) scale(0.5)', opacity: '0' },
      '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
        },
       scaleInRight: {
      '0%': { transform: 'translateX(50%) scale(0.5)', opacity: '0' },
      '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
       },
       
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        myblack: "#151515",
        lightblack: "#111111",
        buttoncol: "#1B1B1B",
        lightbg: "#292929",
      },
      screens: {
        custom: "984px", // now you can use custom: in your classes
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}