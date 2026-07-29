import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maiway Education",
  description: "International Education Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${hanken.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}