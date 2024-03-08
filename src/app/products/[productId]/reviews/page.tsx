import React from "react";

export default function page({ params }: { params: { productId: string } }) {
  return (
    <div className="h-screen w-screen font-primary font-black bg-slate-200 text-slate-800 text-7xl flex justify-center items-center">
      Review Page for Product-{params.productId}
    </div>
  );
}
