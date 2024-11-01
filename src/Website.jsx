// src/Website.jsx
import React, { useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
