import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white flex gap-4">
      <Link href="/" className="text-lg font-bold">カケアイ</Link>
      <Link href="/kakeibo">家計簿</Link>
      <Link href="/settings">設定</Link>
      <Link href="/auth/login">ログイン</Link>
    </header>
  );
}
