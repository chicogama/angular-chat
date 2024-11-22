/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/!(*.stories|*.spec).{ts,html}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      sm: "0.875rem",
      base: "1.3rem",
      xl: "1.55rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {},
    daisyui: {
      themes: [
        {
          fantasy: {
            primary: "#133e87",

            secondary: "#608bc1",

            accent: "#38bdf8",

            neutral: "#cbdceb",

            "base-100": "#f3f3e0",

            info: "#0000ff",

            success: "#4ade80",

            warning: "#fef08a",

            error: "#f43f5e",
          },
        },
        "light",
      ],
      themes: true,
      base: true,
      styled: true,
      utils: true,
      prefix: "",
      logs: true,
      themeRoot: ":root",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
