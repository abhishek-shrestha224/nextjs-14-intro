import Link from "next/link";
import React from "react";

export default function Admin() {
  return (
    <div className="border-2 h-full bg-pink-300 text-slate-800 flex flex-col justify-center items-center font-bold text-3xl flex-1 rounded-md">
      Admin
      <Link href="/parallel-dashboard/">Logout</Link>
    </div>
  );
}
