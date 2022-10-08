module.exports = (ctx) => ({
  plugins: {
    "postcss-import": {},
    "postcss-at-rules-variables": {},
    "postcss-each": {},
    "postcss-mixins": {},
    "postcss-conditionals": {},
    "postcss-simple-vars": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
});
