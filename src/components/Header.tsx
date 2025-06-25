import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find the currently visible section
      let current = '#home';
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = item.href;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(href);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>IBR</h1>
              <p className={`text-xs text-gray-600 hidden sm:block transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>Insight Business Reengineering</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 relative group ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-700'
                    : 'text-white hover:text-gray-300'
                } ${
                  activeSection === item.href && isScrolled ? 'text-blue-700' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  isScrolled ? 'bg-blue-700' : 'bg-white'
                } ${
                  activeSection === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
              isScrolled
                ? 'text-gray-700 hover:text-blue-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200 ${
                    activeSection === item.href ? 'text-blue-700' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;