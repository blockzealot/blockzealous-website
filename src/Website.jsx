import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full border-b fixed top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-black">BlockZealous</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-800 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
            <a href="#services" className="text-gray-800 hover:text-blue-600">Services</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>
          </nav>
          <button
            className="text-2xl md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t">
            <a href="#home" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">Home</a>
            <a href="#about" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">About</a>
            <a href="#services" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">Services</a>
            <a href="#contact" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">Contact</a>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center mt-24">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Welcome to BlockZealous
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl">
          Exploring the intersection of blockchain, web3, and technology
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/blockzealot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <Github size={32} />
          </a>
          <a
            href="https://x.com/blockzealous"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            {/* Twitter (X) Icon */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8">
        <div className="mb-2">BlockZealous</div>
        <div>© 2024 BlockZealous. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Website;
