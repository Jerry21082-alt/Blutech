/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        borderColor: "#CDCFD4",
        darkGray: "#4F5867",
        iconBgColor: "#F7F6FF",
        iconBgLight: "#EEEEFF",
        primaryColor: "#FF3D3D",
        grayText: "#45464B",
        h2Color: "#191635",
        tableHeadBg: "#F0F4FE",
        tableText: "#262626",
      },
    },
  },
  plugins: [],
};
