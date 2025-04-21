import React, { useEffect, useState } from "react";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import useScrollDirection from "../hooks/useScrollDirection";

const navItems = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "projects", label: "Projects", icon: <FaCode /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const scrollDir = useScrollDirection();

  useEffect(() => {
    const timer = setTimeout(() => setShowNavbar(true), 0); // after splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
    className={`
        fixed left-1/2 transform -translate-x-1/2 z-10 w-fit rounded-3xl
        bg-black/30 backdrop-blur-lg border border-white/10 shadow-md 
        transition-all duration-1000 ease-in-out
        ${showNavbar ? "opacity-100 top-4" : "opacity-0 -translate-y-10"}
        ${showNavbar && scrollDir === "down" ? "-translate-y-full" : ""}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <ul className="hidden md:flex gap-8 text-sm text-white font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-orange-400 transition-all"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul className="md:hidden flex gap-6 text-xl text-white">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-orange-400 transition-all"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
