module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        large: "2500px",
        tablet: "850px",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'heading': '35px',
        'paragraph': '16px',
        'bigheading': '50px',
        'title': '22px',
      },
    },
  },
  plugins: [],
};
