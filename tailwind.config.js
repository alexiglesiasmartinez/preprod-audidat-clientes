/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'mainGradient': 'var(--mainGradient)',
        'secondaryGradient': 'var(--secondaryGradient)',
        'mainColor': 'var(--mainGradient)',
        'mainColor2': 'var(--mainColor2)',
        'mainColor3': 'var(--mainColor3)',
      },
      textColor: {
        'mainColor': 'var(--mainGradient)',
        'secondaryColor': 'var(--secondaryGradient)',
      },
      borderColor: {
        'mainColor': 'var(--mainGradient)',
        'secondaryColor': 'var(--secondaryGradient)',
      }
    },
  },
  plugins: [],
};
