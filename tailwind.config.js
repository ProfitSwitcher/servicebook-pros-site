const config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'servicebook-navy': '#1E3A5F',
        'servicebook-bright': '#2E86C1',
        'servicebook-light': '#5DADE2',
        'professional-gray': '#333333',
        'light-gray': '#F8F9FA',
      },
    },
  },
  plugins: [],
};

module.exports = config;
