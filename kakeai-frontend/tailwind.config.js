/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,css}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f9fa", // 適宜変更
        border: "#e5e7eb", // グレー（適宜変更可）
        ring: "#6366f1", // ブルー系のリングカラー（適宜変更）
        foreground: "#212529", // 文字色（適宜変更）
      },
    },
  },
  plugins: [],
}

