'use client';

import { LogIn } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
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

      {/* Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-gray-700 hover:text-purple-900 transition-colors">
          Home
        </Link>
        <Link href="/hosting" className="text-gray-700 hover:text-purple-900 transition-colors">
          Hosting
        </Link>
        <Link href="/prohosting" className="text-gray-700 hover:text-purple-900 transition-colors">
          ProHosting
        </Link>
        <Link href="/domains" className="text-gray-700 hover:text-purple-900 transition-colors">
          Domains
        </Link>
        <Link href="/help" className="text-gray-700 hover:text-purple-900 transition-colors">
          Need Help?
        </Link>
        <Link href="/pages" className="text-gray-700 hover:text-purple-900 transition-colors">
          Pages
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-purple-900 transition-colors">
          Contact Us
        </Link>
      </div>

      {/* Right Section: Client Login Button */}
      <button className="flex items-center gap-2 bg-purple-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors">
        Client Login
        <LogIn size={16} />
      </button>
    </nav>
  );
}
