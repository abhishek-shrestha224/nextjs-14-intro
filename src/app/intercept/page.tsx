import Link from "next/link";
import React from "react";

export default function Intercept() {
  return (
    <div className="h-screen w-screen font-primary font-black bg-slate-200 text-slate-800 text-7xl flex flex-col justify-center items-center">
      Products Page
      <Link href="/intercept/sub" className="text-3xl">
        SubRoute
      </Link>
    </div>
  );
}
