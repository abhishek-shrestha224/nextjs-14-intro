import React from "react";

export default function page({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <div>
      Review - {params.reviewId} for Product {params.productId}
    </div>
  );
}
