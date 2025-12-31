import React, { useState } from "react";
import logo from "../assets/newLogo.svg";
import { FaClock, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-md font-[Poppins]">
      {/* Top Info Bar */}
      <div className="bg-[#0A4C62]  text-white text-lg px-6 py-2 flex items-center">
        <div className="flex items-center gap-2">
          <FaClock />
          <span className="hidden sm:block">
            Monday - Saturday 7:00AM - 8:00PM
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2 ml-6">
          <FaMapMarkerAlt />
          <span>195 Vadodara, Gujarat</span>
        </div>

        <div className="ml-auto flex gap-4">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/"><img src={logo} alt="logo" className="h-14 rounded-full" /></Link>
          <h1 className="text-xl font-bold">KeyRide</h1>
        </div>

        {/* Search (Desktop only) */}
        <div className="hidden lg:flex items-center gap-2 border border-amber-200 px-4 py-2 rounded-full w-[420px]">
          <input
            type="text"
            placeholder="Search Products"
            className="flex-1 bg-transparent outline-none"
          />
          <CiSearch />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-[#E03A24] cursor-pointer">Home</li>
          <li className="hover:text-[#E03A24] cursor-pointer">Services</li>
          <li className="hover:text-[#E03A24] cursor-pointer">Shop</li>
          <li className="hover:text-[#E03A24] cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          {/* Search */}
          <div className="flex items-center gap-2 border px-4 py-2 rounded-full">
            <input
              type="text"
              placeholder="Search Products"
              className="flex-1 outline-none"
            />
            <CiSearch />
          </div>

          {/* Menu Items */}
          <ul className="space-y-3 font-medium">
            <li>Home</li>
            <li>Services</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>

          <div className="font-bold text-[#E03A24]">Rent</div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
