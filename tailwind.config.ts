import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: '#7371FC',
        blue: '#51A7E1',
        green: '#55AD80',
        lime: '#89DD6A',
        dark_purple: '#6361db',
        dark_green: '#3b7a5a'
      },
      fontFamily: {
        sans: [
          "Lora",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(-0px)'}
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'bullet': 'url(app/assets/history/Bullet.png)'
      }
    },
  },
  plugins: [],
} satisfies Config;
