import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

const notosnaskr = Noto_Sans_KR({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "next_pagination",
  description: "next paginationg & infinite scroll practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={notosnaskr.className}>{children}</body>
    </html>
  );
}
