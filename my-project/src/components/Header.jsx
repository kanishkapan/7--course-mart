import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State to track screen size for responsive behavior
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  // Reference to the navigation menu and toggle button
  const navRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside or navigating
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effect to handle clicks outside the menu and scrolling
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the nav menu and toggle button
      if (
        navRef.current && 
        !navRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    // Handle scrolling to close menu
    const handleScroll = () => {
      if (isMenuOpen) {
        closeMenu();
      }
    };

    // Handle responsive screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      
      // Automatically close menu on desktop view
      if (window.innerWidth > 640) {
        setIsMenuOpen(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Navigation links for both desktop and mobile
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#product", label: "Product" },
    { href: "#brands", label: "Brands" },
    { href: "#franchise", label: "Franchise" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="relative w-full h-screen text-white">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src="./Images/IMG_20241119_173733.jpg"
          alt="Store Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Top Navigation Bar */}
      <div className="relative z-20 flex justify-between items-center px-6 sm:px-10 py-6 bg-transparent">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="./Images/logo-removebg-preview.png"
            alt="Logo"
            className="w-10 h-10 object-cover filter brightness-75 contrast-125"
          />
          <h1 className="text-xl sm:text-2xl font-extrabold drop-shadow-lg tracking-wider">
            7 Course Mart
          </h1>
        </div>

        {/* Mobile Navigation */}
        {isMobile ? (
          <>
            {/* Mobile Menu Toggle */}
            <button 
              ref={toggleButtonRef}
              className="sm:hidden z-30 relative"
              onClick={toggleMenu} 
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Navigation Links */}
            <nav 
              ref={navRef}
              className={`
                fixed sm:static 
                top-0 right-0 w-[75%] h-full 
                bg-black/95
                flex flex-col 
                items-center justify-center
                transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                z-20 shadow-lg
              `}
            >
              <div className="flex flex-col items-center justify-center w-full h-full pt-18 px-8 space-y-12">
                {navLinks.map((link, index) => (
                  <div 
                    key={link.href} 
                    className="w-full flex flex-col items-center"
                  >
                    <a 
                      href={link.href} 
                      className="
                        text-xl 
                        text-center 
                        font-bold 
                        tracking-wide 
                        drop-shadow-lg
                        transition-colors duration-300
                        hover:text-gray-400
                        mb-3
                      "
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                    {index < navLinks.length - 1 && (
                      <div className="w-1/2 h-[2px] bg-white/30"></div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </>
        ) : (
          // Desktop Navigation
          <nav className="hidden sm:flex space-x-14 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-base 
                  font-bold 
                  tracking-wide 
                  transition-colors 
                  duration-300
                  hover:text-gray-300
                "
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-start justify-center h-full px-6 sm:px-10 md:px-20 text-left z-10">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl tracking-tight mb-4 sm:mb-6 font-michroma">
          If it's not Unique <br /> it's not here!!!
        </h2>
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-3xl font-thin drop-shadow-lg tracking-wide font-michroma">
          7 Course Mart brings you exclusive international beverages <br />
          and packaged foods, now available in India for the first time!
        </p>
      </div>
    </header>
  );
};

export default Header;