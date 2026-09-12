/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        plum: {
          950: '#170710',
          900: '#20091A',
          800: '#2B1220',
          700: '#3A1029',
          600: '#4C1836',
          500: '#5E2143',
        },
        olive: {
          50: '#F5F6EC',
          100: '#E8EAD2',
          200: '#D3D7A8',
          300: '#B9BF7E',
          400: '#A3A75F',
          500: '#8B8949',
          600: '#71703C',
          700: '#585731',
          800: '#404023',
        },
        gold: {
          200: '#F1DBA5',
          300: '#E8C87C',
          400: '#DCA54B',
          500: '#C98F3A',
          600: '#AD7529',
          700: '#8C5D20',
        },
        cream: {
          50: '#FDFBF6',
          100: '#F8F2E5',
          200: '#F1E8D2',
          300: '#E8DABA',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(43, 18, 32, 0.08)',
        card: '0 8px 32px rgba(43, 18, 32, 0.12)',
        gold: '0 4px 20px rgba(220, 165, 75, 0.25)',
      },
      backgroundImage: {
        'leaf-pattern': "url('/src/assets/decor/leaf-texture.svg')",
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'bg-zoom': 'bgZoom 20s ease-out forwards',
        'leaf-drift-1': 'leafDrift1 22s ease-in-out infinite',
        'leaf-drift-2': 'leafDrift2 28s ease-in-out infinite',
        'leaf-drift-3': 'leafDrift3 25s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        bgZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        leafDrift1: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.5' },
          '90%': { opacity: '0.5' },
          '100%': { transform: 'translate(30px, -140px) rotate(50deg)', opacity: '0' },
        },
        leafDrift2: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '12%': { opacity: '0.4' },
          '88%': { opacity: '0.4' },
          '100%': { transform: 'translate(-45px, -170px) rotate(-40deg)', opacity: '0' },
        },
        leafDrift3: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '15%': { opacity: '0.45' },
          '85%': { opacity: '0.45' },
          '100%': { transform: 'translate(20px, -120px) rotate(30deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
