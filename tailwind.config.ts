import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [
          "'Ubuntu Sans Mono Variable', 'M PLUS 1 Code Variable', monospace",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
