import type { Metadata } from "next";
import React from "react";

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Review-${params.reviewId}`,
  };
}

type Props = {
  params: { productId: string; reviewId: string };
};

export default function ReviewsDynamic({ params }: Props) {
  return (
    <div className="h-screen w-screen font-primary font-black bg-slate-200 text-slate-800 text-7xl flex justify-center items-center">
      Review-{params.reviewId} for Product-{params.productId}
    </div>
  );
}
