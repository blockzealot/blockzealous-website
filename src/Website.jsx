import React, { useState } from 'react';
import { Menu, Github } from 'lucide-react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Header */}
      <header className="w-full border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-black">BlockZealous</h1>
          <button className="text-2xl">
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Main Content - Centered */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
          Welcome to BlockZealous
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl text-gray-600">
          Exploring the intersection of blockchain, web3, and technology
        </p>

        {/* Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="https://github.com/blockzealot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <Github size={40} className="text-gray-700" />
          </a>
          <a
            href="https://x.com/blockzealous"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8">
        <div className="mb-2 text-lg font-bold">BlockZealous</div>
        <div className="text-sm text-gray-600">© 2024 BlockZealous. All rights reserved.</div>
      </footer>

    </div>
  );
};

export default Website;
