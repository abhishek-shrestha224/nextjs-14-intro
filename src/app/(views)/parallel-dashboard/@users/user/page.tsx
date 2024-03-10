import React from "react";

export default function User() {
  const firstName = "Abhishek";
  return (
    <div className="border-2 h-full bg-pink-300 text-slate-800 flex justify-center items-center font-bold text-3xl flex-1 rounded-md">
      {firstName}
    </div>
  );
}
