import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full -mt-13 bg-transpernt bg-opacity-70 text-gray-400 text-center py-4 text-sm">
      © 2025 | All rights reserved. Designed & Developed by  Prashant Yadav.
    <Link to="/login" className="text-blue-500 hover:underline">
      Admin Login
    </Link>
    </footer>
  );
};

export default Footer;
