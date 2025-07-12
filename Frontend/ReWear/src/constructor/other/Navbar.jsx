import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: install lucide-react or use font-awesome
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  const navLinks = [
  { name: "Home", path: "/" },
  { name: "Categorise", path: "/categorise" },
  { name: "Upload", path: "/upload" },
  { name: "Dashboard", path: "/dashboard" },
];


  return (
    <nav className="bg-white shadow-md w-full ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-500">ReWear</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          {navLinks.map((item) => (
            <a
              key={item.name}
              className="hover:text-green-600 hover:underline transition duration-200"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button onClick={() => navigate("/login")} className="py-1 px-3 rounded border border-green-600 text-green-700 hover:bg-green-100 hover:underline transition">
            Login
          </button>
          <button onClick={() => navigate("/signup")}  className="px-4 py-1 rounded bg-green-600 text-white hover:bg-green-700 transition">
            Signup
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-green-600" /> : <Menu className="text-green-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md space-y-3">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-gray-800 font-medium hover:text-green-600 hover:underline"
            >
              {item}
            </a>
          ))}
          <div className="flex space-x-4 mt-2">
            <button onClick={() => navigate("/login")}  className="py-1 px-3 w-full rounded border border-green-600 text-green-700 hover:bg-green-100 hover:underline transition">
              Login
            </button>
            <button onClick={() => navigate("/signup")} className="px-4 py-1 w-full rounded bg-green-600 text-white hover:bg-green-700 transition">
              Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
