import React, { useState } from 'react';
import { Menu, X, ExternalLink, Clock, Github } from 'lucide-react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // SVG for X (formerly Twitter) logo - fixed size
  const XLogo = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white border-b z-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="h-16 flex justify-between items-center">
            <h1 className="text-2xl font-bold">BlockZealous</h1>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'articles', 'projects', 'timeline'].map((section) => (
                <button 
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`py-1 ${
                    activeSection === section ? 'text-black' : 'text-gray-600'
                  } hover:text-black transition-colors`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white border-b z-40 md:hidden">
          <div className="px-4 py-2">
            {['home', 'articles', 'projects', 'timeline'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-3 hover:text-gray-600"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="pt-24 px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          {activeSection === 'home' && (
            <div className="space-y-12">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Welcome to BlockZealous
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Exploring the intersection of blockchain, web3, and technology
                </p>
              </div>
              
              <div className="flex justify-center space-x-8">
                <a 
                  href="https://github.com/blockzealot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://x.com/blockzealous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  <XLogo />
                </a>
              </div>
            </div>
          )}

          {activeSection === 'articles' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Articles</h2>
              <div className="grid gap-6">
                <div className="p-6 border rounded-lg hover:border-gray-400 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">Coming soon...</h3>
                  <p className="text-gray-600">Articles will be available shortly.</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Projects</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 border rounded-lg hover:border-gray-400 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">Coming soon...</h3>
                  <p className="text-gray-600">Projects will be available shortly.</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'timeline' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Timeline</h2>
              <div className="space-y-6">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">2024</h3>
                  <p className="text-gray-600">Launched BlockZealous</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">BlockZealous</div>
            <div className="text-gray-600">© 2024 BlockZealous. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
