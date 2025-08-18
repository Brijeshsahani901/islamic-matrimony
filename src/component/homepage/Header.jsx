"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="mx-4 sm:mx-6 lg:mx-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* <span className="text-red-600 text-2xl font-bold">❤️</span> */}
            <img
        src="/images/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="hover:scale-110 transition-transform duration-500 ease-in-out"
        priority
      />
          <span className="text-xl font-semibold text-red-700">Marrying Muslims</span>
       
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-semibold">
          <Link
            href="#how-it-works"
            className="text-md text-gray-700 hover:text-red-600 transition"
          >
            How It Works
          </Link>
          <Link
            href="/login"
            className="text-md text-red-600 hover:text-red-700 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-red-600 text-white text-md px-4 py-2 rounded-md font-medium hover:bg-red-700 transition"
          >
            Sign Up
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl text-red-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-semibold"
          >
            <Link
              href="#how-it-works"
              onClick={closeMenu}
              className="block text-gray-700 hover:text-red-600 transition"
            >
              How It Works
            </Link>
            <Link
              href="/login"
              onClick={closeMenu}
              className="block text-red-600 hover:text-red-700 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={closeMenu}
              className="block bg-red-600 text-white px-4 py-2 rounded-md text-center hover:bg-red-700 transition"
            >
              Sign Up
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
