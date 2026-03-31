const Navbar = () => {
  return (
    <nav className="bg-white px-6 md:px-10 py-4 flex justify-between items-center shadow-sm">

      {/* Logo - Left Side */}
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-0.5">
          <div className="flex gap-0.5">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm block" />
            <span className="w-2.5 h-2.5 bg-red-400 rounded-sm block" />
          </div>
          <div className="flex gap-0.5">
            <span className="w-2.5 h-2.5 bg-yellow-400 rounded-sm block" />
            <span className="w-2.5 h-2.5 bg-green-400 rounded-sm block" />
          </div>
        </div>
        <h1 className="text-xl font-bold text-gray-800">HireHub</h1>
      </div>

      {/* Buttons - Right Side */}
      <div className="flex items-center gap-3">
        <button className="text-gray-600 hover:text-blue-600 text-sm font-medium">
          Login
        </button>
        <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium">
          Signup
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Dashboard
        </button>
      </div>

    </nav>
  );
};

export default Navbar;