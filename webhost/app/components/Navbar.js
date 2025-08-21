'use client';

import { LogIn, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm relative">
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
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={24} className="text-gray-700" />
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Navigation Links */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        md:static md:transform-none md:shadow-none md:w-auto md:h-auto md:flex md:items-center md:space-x-6
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b md:hidden">
          <span className="text-xl font-bold text-blue-900">Menu</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-6 md:p-0">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-purple-900 transition-colors py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/hosting" 
            className="text-gray-700 hover:text-purple-900 transition-colors py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Hosting
          </Link>
          <Link 
            href="/servers" 
            className="text-gray-700 hover:text-purple-900 transition-colors py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Servers
          </Link>
          <Link 
            href="/payment" 
            className="text-gray-700 hover:text-purple-900 transition-colors py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Payment Methods
          </Link>
          <Link 
            href="/help" 
            className="text-gray-700 hover:text-purple-900 transition-colors py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Need Help?
          </Link>
          <Link 
            href="/pages" 
            className="text-gray-700 hover:text-purple-900 transition-colors py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Pages
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-700 hover:text-purple-900 transition-colors py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>

        {/* Client Login Button - Mobile */}
        <div className="p-6 border-t mt-auto md:hidden">
          <button className="w-full flex items-center justify-center gap-2 bg-purple-900 text-white px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors">
            Client Login
            <LogIn size={16} />
          </button>
        </div>
      </div>

      {/* Right Section: Client Login Button - Desktop */}
      <button className="hidden md:flex items-center gap-2 bg-purple-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors">
        Client Login
        <LogIn size={16} />
      </button>
    </nav>
  );
}