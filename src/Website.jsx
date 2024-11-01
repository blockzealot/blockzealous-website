import React, { useState } from 'react';
import { Menu, X, ExternalLink, Clock, Github } from 'lucide-react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const articles = [
    { title: "Web3 Development in 2024", link: "https://mirror.xyz/...", date: "2024-03-15" },
    { title: "Blockchain Gaming Future", link: "https://mirror.xyz/...", date: "2024-02-28" }
  ];

  const timeline = [
    { year: "2024", event: "Launched BlockZealous" },
    { year: "2023", event: "Started Web3 Journey" },
    { year: "2022", event: "Graduated Computer Science" }
  ];

  const projects = [
    { name: "DeFi Dashboard", description: "Real-time DeFi analytics platform", link: "https://github.com/..." },
    { name: "NFT Marketplace", description: "Decentralized NFT trading platform", link: "https://github.com/..." }
  ];

  // SVG for X (formerly Twitter) logo
  const XLogo = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#f1eee2] text-[#0b0a0a]">
      {/* Navigation */}
      <nav className="fixed w-full backdrop-blur-sm bg-[#f1eee2]/70 border-b border-[#0b0a0a] z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">BlockZealous</div>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex space-x-8">
              {['home', 'articles', 'projects', 'timeline'].map((section) => (
                <button 
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`hover:text-[#f63741] transition-colors ${
                    activeSection === section ? 'text-[#f63741]' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden backdrop-blur-sm bg-[#f1eee2]/70 py-4">
              <div className="flex flex-col space-y-4">
                {['home', 'articles', 'projects', 'timeline'].map((section) => (
                  <button 
                    key={section}
                    onClick={() => {
                      setActiveSection(section);
                      setIsMenuOpen(false);
                    }}
                    className="hover:text-[#f63741] transition-colors px-4"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {activeSection === 'home' && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">Welcome to BlockZealous</h1>
                <p className="text-xl">Exploring the intersection of blockchain, web3, and technology</p>
              </div>
              
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://github.com/blockzealot" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f63741] transition-colors"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a 
                  href="https://x.com/blockzealous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f63741] transition-colors"
                >
                  <XLogo />
                </a>
              </div>
            </div>
          )}

          {/* Rest of the sections remain the same... */}
          {/* Articles section */}
          {activeSection === 'articles' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Articles</h2>
              <div className="grid gap-6">
                {articles.map((article, index) => (
                  <div 
                    key={index} 
                    className="p-6 border border-[#0b0a0a] rounded-lg hover:border-[#f63741] transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold">{article.title}</h3>
                      <a href={article.link} className="text-[#f63741] hover:opacity-80">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <div className="mt-2 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {article.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects section */}
          {activeSection === 'projects' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Projects</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="p-6 border border-[#0b0a0a] rounded-lg hover:border-[#f63741] transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <a href={project.link} className="text-[#f63741] hover:opacity-80">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="mt-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timeline section */}
          {activeSection === 'timeline' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Timeline</h2>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 border-l-4 border-[#f63741] bg-white rounded-r-lg"
                  >
                    <div className="font-bold text-[#f63741]">{item.year}</div>
                    <div>{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-[#0b0a0a] text-[#f1eee2] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold">BlockZealous</div>
            <div className="mt-4 md:mt-0">© 2024 BlockZealous. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
