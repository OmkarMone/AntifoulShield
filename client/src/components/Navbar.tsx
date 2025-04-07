import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="text-primary-blue font-heading font-bold text-xl flex items-center">
                <i className="fa-solid fa-anchor mr-2"></i>
                <span>ANCHOR<span className="text-primary-red">PAINTS</span></span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-heading font-medium text-anchor-gray hover:text-primary-blue transition duration-150">Features</a>
            <a href="#application" className="font-heading font-medium text-anchor-gray hover:text-primary-blue transition duration-150">Application</a>
            <a href="#benefits" className="font-heading font-medium text-anchor-gray hover:text-primary-blue transition duration-150">Benefits</a>
            <a href="#gallery" className="font-heading font-medium text-anchor-gray hover:text-primary-blue transition duration-150">Gallery</a>
            <a href="#contact" className="font-heading font-medium px-4 py-2 rounded bg-primary-red text-white hover:bg-red-700 transition duration-150">Contact Us</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="mobile-menu-button p-2 rounded-md text-anchor-gray hover:text-primary-blue focus:outline-none"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'hidden'} md:hidden bg-white pb-4`}>
        <a href="#features" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm font-heading font-medium text-anchor-gray hover:bg-light-blue">Features</a>
        <a href="#application" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm font-heading font-medium text-anchor-gray hover:bg-light-blue">Application</a>
        <a href="#benefits" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm font-heading font-medium text-anchor-gray hover:bg-light-blue">Benefits</a>
        <a href="#gallery" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm font-heading font-medium text-anchor-gray hover:bg-light-blue">Gallery</a>
        <a href="#contact" onClick={handleMobileLinkClick} className="block mx-4 mt-2 px-4 py-2 text-center text-sm font-heading font-medium rounded bg-primary-red text-white hover:bg-red-700">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
