import type { Metadata } from "next";
import { Header } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Josh Goldsmith",
  description: "Josh Goldsmith's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
