/** @type {import('tailwindcss').Config} */

const getColors = () => {
  const colors = [
    "primary",
    "secondary",
    "black",
    "gray",
    "blue",
    "purple",
    "aqua",
    "green",
    "red",
    "yellow",
  ];
  const alertColors = ["success", "warning", "dangerine", "danger"];

  const colorsObject = {};

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    colorsObject[`bb-${color}`] = {
      DEFAULT: `var(--color-${color}-default)`,
      lighter: `var(--color-${color}-lighter)`,
      100: `var(--color-${color}-100)`,
      200: `var(--color-${color}-200)`,
      300: `var(--color-${color}-300)`,
      400: `var(--color-${color}-400)`,
      500: `var(--color-${color}-500)`,
      600: `var(--color-${color}-600)`,
      700: `var(--color-${color}-700)`,
    };
  }

  for (let i = 0; i < alertColors.length; i++) {
    const color = alertColors[i];
    colorsObject[`bb-${color}`] = {
      DEFAULT: `var(--color-${color}-default)`,
      100: `var(--color-${color}-100)`,
      200: `var(--color-${color}-200)`,
      300: `var(--color-${color}-300)`,
    };
  }

  return colorsObject;
};
module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        ...getColors(),
      },
    },
  },
  plugins: [],
};
