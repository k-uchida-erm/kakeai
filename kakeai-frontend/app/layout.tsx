import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-background text-foreground">
        <Header />
        <main className="p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
