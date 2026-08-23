/** PostCSS config — wires Tailwind CSS and vendor prefixes. */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default config;