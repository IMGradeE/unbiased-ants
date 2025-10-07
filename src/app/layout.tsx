import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/app/ui/HeaderNav";
import { geistSans } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Payton Wilkes' Portfolio",
  description: "Created by Payton Wilkes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className}`}
      >
      <HeaderNav/>
        {children}
      </body>
    </html>
  );
}
