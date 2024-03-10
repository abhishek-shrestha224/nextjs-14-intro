import type { Metadata } from "next";
import wait from "@/app/lib/wait";
import Loading from "./Loader";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "About",
};

const Foo = async () => {
  await wait(2000);
  return <div>Hello</div>;
};

export default function About() {
  return (
    <div className="h-screen w-screen font-primary font-black bg-slate-200 text-slate-800 text-7xl flex justify-center items-center">
      About
      <Suspense fallback={<Loading />}>
        <Foo />
      </Suspense>
    </div>
  );
}
