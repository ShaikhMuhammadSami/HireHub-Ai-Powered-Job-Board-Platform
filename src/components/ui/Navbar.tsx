// import  Link  from "next/link"
// import NavbarActions from "./NavbarActions";

// const Navbar = () => {
//   return (
//     <nav className="bg-white px-6 md:px-10 py-4 flex justify-between items-center shadow-sm sticky top-0 w-full z-50">

//       {/* Logo - Left Side */}
//       <div className="flex items-center gap-3">
//         <Link href={"/"} className="flex items-center gap-3">
//           <div className="flex flex-col gap-0.5">
//             <div className="flex gap-0.5">
//               <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm block" />
//               <span className="w-2.5 h-2.5 bg-red-400 rounded-sm block" />
//             </div>
//             <div className="flex gap-0.5">
//               <span className="w-2.5 h-2.5 bg-yellow-400 rounded-sm block" />
//               <span className="w-2.5 h-2.5 bg-green-400 rounded-sm block" />
//             </div>
//           </div>
//           <h1 className="text-2xl font-bold text-gray-800">HireHub</h1>
//         </Link>

//         <div className="flex items-center gap-8 ml-10">
//           <Link href={"/joblistingpage"} className="hidden md:block text-sm font-medium transition-colors hover:text-primary">Browse Jobs</Link>
//           <Link href={"/post-a-job"} className="text-sm font-medium transition-colors hover:text-primary">Post a Job</Link>
//         </div>
//       </div>

//       {/* Buttons - Right Side */}
//       <NavbarActions />

//     </nav>
//   );
// };

// export default Navbar;



"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import NavbarActions from "./NavbarActions";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-6 md:px-10 py-4 shadow-sm sticky top-0 w-full z-50">
      <div className="flex justify-between items-center mx-auto">
        
        {/* Logo - Left Side */}
        <div className="flex items-center gap-3">
          <Link href={"/"} className="flex items-center gap-3">
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
            <h1 className="text-2xl font-bold text-gray-800">HireHub</h1>
          </Link>

          {/* Desktop Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-8 ml-10">
            <Link href={"/joblistingpage"} className="text-sm font-medium transition-colors hover:text-blue-600">
              Browse Jobs
            </Link>
            <Link href={"/post-a-job"} className="text-sm font-medium transition-colors hover:text-blue-600">
              Post a Job
            </Link>
          </div>
        </div>

        {/* Right Side - Actions & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <NavbarActions />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar/Menu - Only shows when isOpen is true */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t p-6 flex flex-col gap-6 shadow-lg animate-in slide-in-from-top">
          <Link 
            href={"/"}
            className="text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href={"/joblistingpage"} 
            className="text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Browse Jobs
          </Link>
          <Link 
            href={"/post-a-job"} 
            className="text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Post a Job
          </Link>
          <hr />
          <div className="flex flex-col items-start">
            <NavbarActions />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;