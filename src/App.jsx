import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="p-4 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BlockZealous</h1>
          <div className="space-x-6">
            <button className="hover:opacity-75">Home</button>
            <button className="hover:opacity-75">Articles</button>
            <button className="hover:opacity-75">Projects</button>
            <button className="hover:opacity-75">Timeline</button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold">Welcome to BlockZealous</h1>
          <p className="text-xl">
            Exploring the intersection of blockchain, web3, and technology
          </p>
          
          <div className="flex justify-center space-x-6 pt-6">
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
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <span className="font-bold">BlockZealous</span>
          <span>© 2024 BlockZealous. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
