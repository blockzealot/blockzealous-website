// src/Website.jsx
import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between relative">

      {/* Header */}
      <header className="w-full border-b fixed top-0 left-0 right-0 bg-white z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-black text-left">BlockZealous</h1>
          <button className="text-2xl" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Main Content - Centered */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center mt-20">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-black">
          Welcome to BlockZealous
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-600">
          Exploring the intersection of blockchain, web3, and technology
        </p>

        {/* Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="https://github.com/blockzealot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-75"
          >
            <Github size={40} />
          </a>
          <a
            href="https://x.com/blockzealous"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-75"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8">
        <div className="mb-2 text-lg font-bold text-black">BlockZealous</div>
        <div className="text-sm text-gray-600">© 2024 BlockZealous. All rights reserved.</div>
      </footer>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-md text-center space-y-4">
            <a href="#" className="text-2xl text-black block">Home</a>
            <a href="#" className="text-2xl text-black block">About</a>
            <a href="#" className="text-2xl text-black block">Contact</a>
            <button onClick={toggleMenu} className="text-xl text-gray-600 mt-4">Close Menu</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Website;
