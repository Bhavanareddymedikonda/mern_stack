
function Navbar() {
  return (
    <nav className=" bg-[#f6f6f4] flex items-center justify-between px-12 py-6">
      <div className=" flex items-center gap-12">
        <div className=" flex items-center gap-2">
          <Zap className="h-6 w-6" />
          <h1 className="text-2xl text-green-900 font-semibold">Clause</h1>
        </div>

        <div className="flex items-center gap-8">
          <a href="#">Solutions</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-xl border px-5 py-2">Log In</button>

        <button className="rounded-xl bg-green-900 px-5 py-2 text-white">
          Start Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
