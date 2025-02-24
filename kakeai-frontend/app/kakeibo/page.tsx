"use client";

import { useEffect, useState } from "react";
import api from "../lib/api";

interface Transaction {
  id: number;
  user_id: number;
  amount: number;
  category_id: number | null;
  description: string;
  date: string;
}

export default function KakeiboPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("/transactions/")
      .then((res) => setTransactions(res.data.transactions))
      .catch((error) => console.error("データ取得エラー:", error));
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-3xl font-bold">家計簿ページ</h1>
      <ul>
        {transactions.map((item) => (
          <li key={item.id}>{item.date}: {item.description} - {item.amount}円</li>
        ))}
      </ul>
    </main>
  );
}
