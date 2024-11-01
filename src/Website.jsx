// src/Website.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      {/* Header */}
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      {/* Main Content */}
      <MainContent />

      {/* Footer */}
      <Footer />

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
          onClick={() => setIsMenuOpen(false)} // Close overlay when clicking outside
        >
          <div
            className="bg-white p-6 rounded-md text-center space-y-4 shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
          >
            <a href="#" className="text-2xl text-gray-800 hover:text-blue-500 block transition duration-300">Home</a>
            <a href="#" className="text-2xl text-gray-800 hover:text-blue-500 block transition duration-300">About</a>
            <a href="#" className="text-2xl text-gray-800 hover:text-blue-500 block transition duration-300">Contact</a>
            <button onClick={toggleMenu} className="text-xl text-gray-600 mt-4 hover:text-gray-800 transition duration-300">Close Menu</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Website;
