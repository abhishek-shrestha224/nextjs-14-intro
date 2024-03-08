import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-slate-200 text-slate-800">
      <h1 className="font-primary text-7xl font-extrabold">Welcome Home</h1>
      <p className="font-secondary text-3xl">Welcome to Next.js 14 Learning.</p>
      <div className="w-1/3 flex justify-start gap-4">
        <Link
          href="/about"
          className="text-slate-800 underline font-accent font-bold text-xl"
        >
          About
        </Link>
        <Link
          href="/products"
          className="text-slate-800 underline font-accent font-bold text-xl"
        >
          Products
        </Link>
        <Link
          href="/catch-all"
          className="text-slate-800 underline font-accent font-bold text-xl"
        >
          Catch-All
        </Link>
      </div>
    </div>
  );
}
