// src/Header.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-white border-b z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-black">BlockZealous</h1>
        <button className="text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
