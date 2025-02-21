import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "vidIq Blog",
  description: "vidIq Blog - Blog about vidIq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <footer className="bg-blue-700 text-white py-4 text-center">
          <p className="text-xs">Made with ❤️ by Daniel O. 2025</p>
        </footer>
      </body>
    </html>
  );
}
