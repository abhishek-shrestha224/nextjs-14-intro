import { notFound } from "next/navigation";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catch All",
};

type Props = {
  params: {
    slug: string[];
  };
};

export default function Page({ params }: Props) {
  if (params.slug?.length > 2) notFound();
  if (params.slug?.length === 2)
    return (
      <div className="h-screen w-screen font-primary font-black bg-slate-200 text-slate-800 text-7xl flex justify-center items-center">
        Route - {params.slug.at(0)}-Sub Route-{params.slug.at(1)}
      </div>
    );

  if (params.slug?.length === 1)
    return (
      <div className="h-screen w-screen font-primary font-black bg-slate-200 text-slate-800 text-7xl flex justify-center items-center">
        Content for Route-{params.slug[0]}
      </div>
    );

  return (
    <div className="h-screen w-screen font-primary font-black bg-slate-200 text-slate-800 text-7xl flex justify-center items-center">
      Default page for all other routes
    </div>
  );
}
