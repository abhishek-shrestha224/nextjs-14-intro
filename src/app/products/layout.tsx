export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="absolute w-screen flex justify-center items-center font-primary font-bold text-3xl text-slate-200 bg-zinc-700 h-12">
        Hello World
      </nav>
      {children}
    </section>
  );
}
