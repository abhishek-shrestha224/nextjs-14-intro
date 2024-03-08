import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

export default function page() {
  return (
    <div className="h-screen w-screen font-primary font-black bg-slate-200 text-slate-800 text-7xl flex justify-center items-center">
      Products Page
    </div>
  );
}
