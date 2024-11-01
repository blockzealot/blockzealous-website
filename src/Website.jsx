import React, { useState } from 'react';
import { Menu, X, ExternalLink, Clock, Github } from 'lucide-react';

const Website = () => {
  const [activeSection, setActiveSection] = useState('home');

  const XLogo = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b z-50">
        <div className="max-w-6xl mx-auto h-full px-8 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">BlockZealous</div>
          <div className="flex space-x-12">
            {['home', 'articles', 'projects', 'timeline'].map((section) => (
              <button 
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-base ${
                  activeSection === section 
                    ? 'text-black font-medium' 
                    : 'text-gray-500 hover:text-black'
                } transition-colors`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 pt-32 pb-24">
        {activeSection === 'home' && (
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold mb-6 tracking-tight">
              Welcome to BlockZealous
            </h1>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl">
              Exploring the intersection of blockchain, web3, and technology
            </p>
            <div className="flex items-center space-x-8">
              <a 
                href="https://github.com/blockzealot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition-colors"
              >
                <Github size={24} strokeWidth={1.5} />
              </a>
              <a 
                href="https://x.com/blockzealous"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition-colors"
              >
                <XLogo />
              </a>
            </div>
          </div>
        )}

        {activeSection === 'articles' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Articles</h2>
            <div className="grid gap-6">
              <div className="p-8 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                    <p className="text-gray-600">Articles will be available shortly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                    <p className="text-gray-600">Projects will be available shortly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'timeline' && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Timeline</h2>
            <div className="space-y-6">
              <div className="p-8 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">2024</h3>
                <p className="text-gray-600">Launched BlockZealous</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-8 py-8 flex justify-between items-center">
          <div className="font-medium">BlockZealous</div>
          <div className="text-gray-500">© 2024 BlockZealous. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
