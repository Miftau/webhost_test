'use client';

import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-blue-900">Logo</span>
        <span className="flex items-center space-x-1 text-sm text-gray-500">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span>EN</span>
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Links */}
      <div className={`fixed md:static top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-50 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden md:block'} md:flex items-center space-x-6 py-16 md:py-0`}>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/" className="text-gray-700 hover:text-purple-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/hosting" className="text-gray-700 hover:text-purple-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Hosting
          </Link>
          <Link href="/servers" className="text-gray-700 hover:text-purple-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Servers
          </Link>
          <Link href="/payment" className="text-gray-700 hover:text-purple-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Payment Methods
          </Link>
          <Link href="/help" className="text-gray-700 hover:text-purple-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Need Help?
          </Link>
          <Link href="/pages" className="text-gray-700 hover:text-purple-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Pages
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-purple-900 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right Section: Client Login Button */}
      <button className="hidden md:flex items-center gap-2 bg-purple-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors">
        Client Login
        <LogIn size={16} />
      </button>
    </nav>
  );
}