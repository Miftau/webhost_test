"use client";

import { useState } from "react";
import { Mail, Phone, Globe, LogIn, UserPlus, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import GoogleTranslate from "../GoogleTranslate/GoogleTranslate";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="py-2 relative z-1000 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left side */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-gray-200 pr-4 text-gray-600">
            <Phone className="w-4 h-4" />
            <p className="text-sm">+880181239633</p>
          </div>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <p className="text-sm">info@doorsoft.co</p>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-gray-600 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-6">
          {/* 🌍 Replace your custom Select with Google Translate */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Globe className="w-4 h-4" />
            <GoogleTranslate /> 
          </div>

          {/* Login & Register */}
          <Link
            href="/login"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <LogIn className="w-4 h-4" />
            <span className="text-sm">Login</span>
            <ChevronDown className="w-3 h-3" />
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <UserPlus className="w-4 h-4" />
            <span className="text-sm">Register</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

