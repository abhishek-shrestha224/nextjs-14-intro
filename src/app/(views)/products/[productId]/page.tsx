import type { Metadata } from "next";
import React from "react";

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Product-${params.productId}`,
  };
}

type Props = {
  params: {
    productId: string;
  };
};
export default function page({ params }: Props) {
  return (
    <div className="h-screen w-screen font-primary font-black bg-slate-200 text-slate-800 text-7xl flex justify-center items-center">
      Product-{params.productId}
    </div>
  );
}
