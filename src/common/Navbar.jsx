import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e) => {
    setIsMenuOpen(false);
    // Optional: If you want to ensure instant scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white/60 backdrop-blur-md  fixed z-50 w-full px-4 py-4 shadow-gray-500/50 shadow-sm rounded-b-3xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        {/* Logo */}
        <Link to="/" onClick={handleNavClick} className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="w-[227px] h-[43px] rounded-sm flex items-center justify-center mr-2">
              <img src='/images/Logo.png' alt="Wealth Builders Logo"/>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" onClick={handleNavClick} className="text-gray-700 text-Myanmar Khyay text-[19px] hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
          <Link to="/#aboutus" onClick={handleNavClick} className="text-gray-700 text-Myanmar Khyay text-[19px] hover:text-blue-600 font-medium transition-colors">
            About
          </Link>
          <Link to="/services" onClick={handleNavClick} className="text-gray-700 text-Myanmar Khyay text-[19px] hover:text-blue-600 font-medium transition-colors">
            Services
          </Link>
          <Link to="/#testimonial" onClick={handleNavClick} className="text-gray-700 text-Myanmar Khyay text-[19px] hover:text-blue-600 font-medium transition-colors">
            Testimonial
          </Link>
          <Link to="/sip-calculator" onClick={handleNavClick} className="text-gray-700 text-Myanmar Khyay text-[19px] hover:text-blue-600 font-medium transition-colors">
            Sip Calculator
          </Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/#contact" onClick={handleNavClick}>
            <button className="bg-blue-600 text-Montserrat text-[13px] font-bold text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
              Home
            </Link>
            <Link to="/#aboutus" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
              About
            </Link>
            <Link to="/services" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
              Services
            </Link>
            <Link to="/#testimonial" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
              Testimonial
            </Link>
            <Link to="/sip-calculator" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
              Sip Calculator
            </Link>
            <div className="px-4 pt-2">
              <Link to="/#contact" onClick={handleNavClick}>
                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;