/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui']
    },
    fontSize: {
      xs: ['12px', '20px'],
      sm: ['14px', '22px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      smTit: ['12px', '20px'],
      baseTit: ['14px', '22px'],
      lgTit: ['16px', '24px'],
      xlTit: ['18px', '26px'],
      btn: ['14px', '24px']
    },
    extend: {}
  },
  plugins: []
}
