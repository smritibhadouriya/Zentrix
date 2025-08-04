import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (index) => {
    setActiveIndex(index);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white fixed w-full z-50 ${isScrolled ? 'shadow-xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex justify-center items-center">
              <button className="bg-gradient-to-r from-orange-400 to-orange-600 p-2 rounded-full text-white shadow-lg hover:scale-100 transition-transform duration-300">
                <div className="flex justify-center items-center w-5 h-5 bg-white rounded-full">
                  <div className="w-4 h-4 bg-orange-400 rounded-full flex justify-center items-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </button>
              <h2 className="ml-2 text-2xl font-bold">Zentrix</h2>
            </div>
          </div>

          {/* Desktop Menu (Large screens) */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `${
                    isActive || activeIndex === index
                      ? 'text-orange-500 text-md font-semibold'
                      : 'text-gray-700 text-md'
                  } hover:text-orange-400 px-3 py-2 transition duration-300`
                }
                onClick={() => handleNavClick(index)}
              >
                {item.name}
              </NavLink>
            ))}
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-sm font-medium">
              Get Started
            </button>
          </div>

          {/* Hamburger Menu Button (Small and Medium screens) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and Medium Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-orange-500 focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 px-4">
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `${
                  isActive || activeIndex === index
                    ? 'text-orange-500 text-xl'
                    : 'text-gray-700 text-lg'
                } hover:text-orange-400 transition duration-300`
              }
              onClick={() => handleNavClick(index)}
            >
              {item.name}
            </NavLink>
          ))}
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300 text-sm font-medium w-full"
            onClick={toggleMenu}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Overlay for Mobile and Medium Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;