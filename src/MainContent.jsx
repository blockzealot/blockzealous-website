// src/MainContent.jsx
import React from 'react';
import { Github } from 'lucide-react';

const MainContent = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-6 mt-32 max-w-3xl mx-auto">
      <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-gray-900">
        Welcome to <span className="text-blue-500">BlockZealous</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-600">
        Exploring the intersection of blockchain, web3, and technology
      </p>
      <div className="flex justify-center space-x-8 mb-12">
        <a
          href="https://github.com/blockzealot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-blue-500 transition duration-300 transform hover:scale-110"
        >
          <Github size={40} />
        </a>
        <a
          href="https://x.com/blockzealous"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-blue-500 transition duration-300 transform hover:scale-110"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </main>
  );
};

export default MainContent;
