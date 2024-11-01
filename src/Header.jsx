// src/Header.jsx
import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-gray-50 border-b z-10 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-black text-gray-800">BlockZealous</h1>
        <button
          className="flex items-center text-2xl text-gray-800 hover:text-gray-600 focus:outline-none transition duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          <span className="ml-2 text-lg font-medium">Menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
