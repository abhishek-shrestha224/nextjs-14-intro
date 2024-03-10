import Link from "next/link";

export default function Users() {
  // const isAdmin = false;
  return (
    <Link
      href="/parallel-dashboard/admin"
      className="border-2 h-full bg-pink-300 text-slate-800 flex justify-center items-center font-bold text-3xl flex-1 rounded-md"
    >
      Login
    </Link>
  );
}
