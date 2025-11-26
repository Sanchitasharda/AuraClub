// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "#" },
  { name: "Our Story", path: "/OurStory" },
  { name: "Get in Touch", path: "#" },
  { name: "Gift Hampers", path: "#" },
];

const Navbar = () => {
  return (
    <nav className="w-full z-50 bg-white border-b border-[#d6c2af] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <ul className="flex justify-center gap-14 font-cinzel text-lg md:text-xl tracking-wide text-[#2b1a14] font-semibold">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="transition transform duration-300 ease-in-out hover:scale-110 hover:text-[#8b5e3c] cursor-pointer"
            >
              {item.path.startsWith("/") ? (
                <Link to={item.path}>{item.name}</Link>
              ) : (
                <span>{item.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
