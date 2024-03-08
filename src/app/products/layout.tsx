export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="w-screen bg-blue-600 h-12">Hellow World</nav>
      {children}
    </section>
  );
}
