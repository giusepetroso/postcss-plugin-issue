const path = require("path");
module.exports = (ctx) => ({
  plugins: {
    "postcss-import": {},
    "postcss-at-rules-variables": {},
    "postcss-each": {},
    "postcss-mixins": {
      mixinsDir: path.join(__dirname, "src/assets/components/mixins"),
    },
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
});
