import React from "react";

export default function page({ params }: { params: { productId: string } }) {
  return <div>Reviews Page - {params.productId} </div>;
}
