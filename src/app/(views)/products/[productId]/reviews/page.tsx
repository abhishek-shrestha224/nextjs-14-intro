import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
};
export default function page({ params }: { params: { productId: string } }) {
  return (
    <div className="h-screen w-screen font-primary font-black bg-slate-200 text-slate-800 text-7xl flex justify-center items-center">
      Review Page for Product-{params.productId}
    </div>
  );
}
