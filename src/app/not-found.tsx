export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-slate-300 text-slate-900 flex flex-col justify-center items-center gap-8 text-center">
      <h1 className="text-7xl font-primary font-black">Oopsie Daisy!</h1>
      <h3 className="font-accent text-6xl">404 - Not Found</h3>
      <p className="text-4xl w-2/3">
        Page not found. 🤷‍♂️ Try again or head back home. Happy browsing!
      </p>
    </div>
  );
}
