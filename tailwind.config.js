export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        envic: {
          50: '#f1fbf1',
          100: '#ddf5dd',
          200: '#bcebbd',
          300: '#8dda90',
          400: '#5cc361',
          500: '#4caf4f',
          600: '#3a8f3e',
          700: '#307133',
          800: '#2a5a2c',
          900: '#234a26',
        },
        ink: {
          DEFAULT: '#1f2220',
          soft: '#2c302d',
          muted: '#5f6a62',
          line: '#e4e9e5',
          bg: '#f6f8f6',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(31, 34, 32, 0.35)',
        lift: '0 30px 80px -40px rgba(31, 34, 32, 0.45)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}
