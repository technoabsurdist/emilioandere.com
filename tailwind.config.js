module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        'off-black': '#1e1e21',
        'off-white': '#faf8f8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
