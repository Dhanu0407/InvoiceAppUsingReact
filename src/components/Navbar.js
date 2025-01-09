import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.jpeg';
import BusinessServices from './BusinessServices2';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBusinessServices, setShowBusinessServices] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = () => {
    setShowBusinessServices(true);
  };

  const handleMouseLeave = () => {
    setShowBusinessServices(false);
  };

  return (
    <div>
      <nav
        className="flex items-center justify-between px-4 bg-white text-black font-bold shadow-md"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-20 w-80" />
        </div>

        {/* Menu Button for Mobile */}
        <button
          className="block lg:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex space-x-8 items-center w-full lg:w-auto text-lg transition-all duration-300 ${
            menuOpen ? 'block' : 'hidden'
          } lg:block`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-red-500 hover:underline transition-all duration-300 block py-2 lg:py-0"
            >
              Home
            </Link>
          </li>
          <li className="group relative">
            <span className="hover:text-red-500 hover:underline cursor-pointer block py-2 lg:py-0 transition-all duration-300">
              Technologies
            </span>
            <ul className="absolute hidden group-hover:block bg-gradient-to-r from-blue-200 to-blue-400 text-black mt-2 p-2 rounded shadow-lg w-48 z-10">
              <li>
                <Link
                  to="/technologies/react"
                  className="hover:text-red-500 block px-4 py-2 hover:bg-gray-100 rounded"
                >
                  React
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies/node"
                  className="hover:text-red-500 block px-4 py-2 hover:bg-gray-100 rounded"
                >
                  Node.js
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies/tailwind"
                  className="hover:text-red-500 block px-4 py-2 hover:bg-gray-100 rounded"
                >
                  Tailwind CSS
                </Link>
              </li>
            </ul>
          </li>
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-red-500 hover:underline cursor-pointer block py-2 lg:py-0 transition-all duration-300">
              Expertise
            </span>
            {showBusinessServices && (
              <div className="absolute top-full left-0 z-10 bg-white shadow-lg">
                <BusinessServices />
              </div>
            )}
          </li>
          <li>
            <Link
              to="/about-us"
              className="hover:text-red-500 hover:underline transition-all duration-300 block py-2 lg:py-0"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-red-500 hover:underline transition-all duration-300 block py-2 lg:py-0"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/employee-login"
              className="hover:text-red-500 hover:underline transition-all duration-300 block py-2 lg:py-0"
            >
              Employee Login
            </Link>
          </li>
          <li>
            <Link
              to="/client-login"
              className="hover:text-red-500 hover:underline transition-all duration-300 block py-2 lg:py-0"
            >
              Client Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
