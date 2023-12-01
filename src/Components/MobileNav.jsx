import React, { useState }  from 'react';
import './CSS/MobileNavigation.css';
import './CSS/Navigation.css';

const MobileNav = () => {

    // const mobileMenu = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
          };

  return (
    <div>
      <div className="Hamburger-Icon">
        <button id="menu-btn" className={`btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className={`nav ${isMenuOpen ? 'flex' : 'hidden'}`} id="menu">
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </div>
    </div>
  );
    };
// };

export default MobileNav;
