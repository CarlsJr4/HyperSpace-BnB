/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        navbar: '1fr auto auto',
        hero: '1fr 1fr',
      },
      backgroundImage: {
        habitat: "url('/assets/images/habitat.png')",
        plant: "url('/assets/images/plane.png')",
        robot: "url('/assets/images/robot.png')",
        rocket: "url('/assets/images/rocket.png')",
      },
      fontFamily: {
        headings: ['Montserrat', 'serif'],
        paragraphs: ['Hind', 'serif'],
      },
    },
  },
  plugins: [],
};
