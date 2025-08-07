import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const desktopServiceDropdownRef = useRef(null); // Ref for desktop Service dropdown
  const mobileServiceDropdownRef = useRef(null); // Ref for mobile Service dropdown

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Service',
      path: '/service',
      subItems: [
        { name: 'Brand & Strategy', path: '/service/brand-strategy' },
        { name: 'Creative', path: '/service/creative' },
        { name: 'Social', path: '/service/social' },
        { name: 'PR (Public Relations)', path: '/service/pr' },
        { name: 'Digital', path: '/service/digital' },
        { name: 'Performance Marketing', path: '/service/performance-marketing' },
      ],
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false); // Close services dropdown when mobile menu toggles
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutsideDesktop = desktopServiceDropdownRef.current && !desktopServiceDropdownRef.current.contains(event.target);
      const isOutsideMobile = mobileServiceDropdownRef.current && !mobileServiceDropdownRef.current.contains(event.target);
      if (isOutsideDesktop && isOutsideMobile) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Determine if a nav item or its sub-item is active
  const isNavItemActive = (item) => {
    if (item.path === location.pathname) return true;
    if (item.subItems) {
      return item.subItems.some((subItem) => subItem.path === location.pathname);
    }
    return false;
  };

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <nav className={`bg-white fixed w-full px-2 py-10 md:px-6 md:py-12 lg:px-36 lg:py-20 z-50 ${isScrolled ? 'shadow-xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex justify-center items-center">
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded-full text-white shadow-lg hover:scale-100 transition-transform duration-300">
                <div className="flex justify-center items-center w-5 h-5 bg-white rounded-full">
                  <div className="w-4 h-4 bg-blue-400 rounded-full flex justify-center items-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </button>
              <h2 className="ml-2 text-2xl font-bold">Zentrix</h2>
            </div>
          </div>

          {/* Desktop Menu (Large screens) */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative" ref={item.name === 'Service' ? desktopServiceDropdownRef : null}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={toggleServicesDropdown}
                      className={`${
                        isNavItemActive(item)
                          ? 'text-blue-500 text-md font-semibold'
                          : 'text-gray-700 text-md'
                      } hover:text-blue-400 px-3 py-2 transition duration-300 flex items-center`}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-1 transform ${isServicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className={({ isActive }) =>
                              `${
                                isActive
                                  ? 'text-blue-500'
                                  : 'text-gray-700'
                              } block px-4 py-2 text-sm hover:bg-gray-100 transition duration-300`
                            }
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? 'text-blue-500 text-md font-semibold'
                          : 'text-gray-700 text-md'
                      } hover:text-blue-400 px-3 py-2 transition duration-300`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 text-sm font-medium">
              Get Started
            </button>
          </div>

          {/* Hamburger Menu Button (Small and Medium screens) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
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
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-l transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
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
          {navItems.map((item) => (
            <div key={item.name} ref={item.name === 'Service' ? mobileServiceDropdownRef : null}>
              {item.subItems ? (
                <div>
                  <button
                    onClick={toggleServicesDropdown}
                    className={`${
                      isNavItemActive(item)
                        ? 'text-blue-500 text-xl'
                        : 'text-gray-700 text-lg'
                    } hover:text-blue-400 transition duration-300 w-full text-left flex items-center`}
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 ml-1 transform ${isServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 pt-2 flex flex-col space-y-2">
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? 'text-blue-500'
                                : 'text-gray-700'
                            } text-base hover:text-blue-400 transition duration-300`
                          }
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'text-blue-500 text-xl'
                        : 'text-gray-700 text-lg'
                    } hover:text-blue-400 transition duration-300`
                  }
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesOpen(false);
                  }}
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 text-sm font-medium w-full"
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