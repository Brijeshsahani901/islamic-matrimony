"use client";

import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className=" mx-10  sm:px-6 lg:px-10 h-18 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <span className="text-red-600 text-2xl font-bold">❤️</span>
          <span className="text-xl font-semibold text-red-700">WIFE4LIFE</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8 font-semibold">
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
      </div>
    </header>
  );
}
