import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learning Next.js 14",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-slate-200 w-screen px-12">
          <Link
            className="text-slate-800 underline font-accent font-bold text-xl"
            href="/"
          >
            Home
          </Link>
        </div>

        {children}
      </body>
    </html>
  );
}
