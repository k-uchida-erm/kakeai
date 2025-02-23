import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // 環境変数からAPIのURLを取得
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
