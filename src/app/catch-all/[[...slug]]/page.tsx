import { notFound } from "next/navigation";
import React from "react";

export default function Page({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length > 2) notFound();
  if (params.slug?.length === 2)
    return (
      <div>
        Route - {params.slug[0]} - Sub Route - {params.slug[1]}
      </div>
    );

  if (params.slug?.length === 1)
    return <div>Content for Route - {params.slug[0]}</div>;

  return <div>Default page for all other routes</div>;
}
