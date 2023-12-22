import React, { useState } from "react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="Desktop-navigation">
                <img src="./Data/Pizza.svg" alt="icon-logo" />
                <ul>
                    <li>
                        <a href="#link1">Restaurants</a>
                    </li>
                    <li>
                        <a href="#link2">Recipes</a>
                    </li>
                    <li>
                        <a href="#link3">About</a>
                    </li>
                    <li>
                        <a href="#link4">
                            Page
                            <img src="./Data/VectorD.svg" alt="arrow-icon" />
                        </a>
                    </li>
                </ul>

                <div className="action-buttons">
                    <button className="btn1">Login</button>
                    <button className="btn2">Sign Up</button>
                    {/* <MobileNav/> */}
                </div>
            </div>

            {/* Mobile navbar */}
            <div className="Mobile-navigation">
                <div className="mobile-nav-header">
                    <img src="./Data/Pizza.svg" alt="icon-logo" />

                    <div className="Hamburger-Icon">
                        <button
                            id="mobile-menu-btn"
                            className={`btn ${isMenuOpen ? "open" : ""}`}
                            onClick={toggleMenu}
                        >
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>
                </div>
                
                <div
                    className={`nav ${isMenuOpen ? "flex" : "hidden"}`}
                    id="mobile-menu"
                >
                    <ul>
                        <li>
                            <a href="#limk1">Pricing</a>
                        </li>

                        <li>
                            <a href="#link2">Product</a>
                        </li>

                        <li>
                            <a href="#link3">About Us</a>
                        </li>

                        <li>
                            <a href="#link4">Careers</a>
                        </li>

                        <li>
                            <a href="#link5">Community</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
