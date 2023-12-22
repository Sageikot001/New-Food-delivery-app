import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-group">
                <div className="footer-left">
                    <img src="./Data/Pizza.svg" alt="icon-logo" />
                    <div>
                        <img
                            src="./Data/App Store Black Border.svg"
                            alt="#"
                            className="footer-store"
                        />
                        <img
                            src="./Data/Google Play Black Border.svg"
                            alt="#"
                            className="footer-store"
                        />
                    </div>
                </div>
                <div className="footer-right">
                    <div className="quick-links">
                        <h3>Quick links</h3>
                        <ul>
                            <li>
                                <a href="#1">Features</a>
                            </li>
                            <li>
                                <a href="#2">Food Menu</a>
                            </li>
                            <li>
                                <a href="#3">Offer</a>
                            </li>
                            <li>
                                <a href="#4">Review</a>
                            </li>
                            <li>
                                <a href="#5">Rider</a>
                            </li>
                        </ul>
                    </div>
                    <div className="quick-links">
                        <h3>Get to Know Us</h3>
                        <ul>
                            <li>
                                <a href="#1">Gift Cards</a>
                            </li>
                            <li>
                                <a href="#2">DoorDash Stories</a>
                            </li>
                            <li>
                                <a href="#3">LinkedIn</a>
                            </li>
                            <li>
                                <a href="#4">Glassdoor</a>
                            </li>
                            <li>
                                <a href="#5">Accessibility</a>
                            </li>
                        </ul>
                    </div>
                    <div className="quick-links">
                        <h3>News</h3>
                        <ul>
                            <li>
                                <a href="#1">Blog</a>
                            </li>
                            <li>
                                <a href="#2">FAQ</a>
                            </li>
                            <li>
                                <a href="#3">Lift Media</a>
                            </li>
                            <li>
                                <a href="#4">Press</a>
                            </li>
                            <li>
                                <a href="#5">Presse kit</a>
                            </li>
                        </ul>
                    </div>
                    <div className="quick-links">
                        <h3>Contact</h3>
                        <ul>
                            <li>
                                <a href="#1">WhatsApp</a>
                            </li>
                            <li>
                                <a href="#2">Support 24</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div>© 2023 pizza.All right reserved</div>
                <div>
                    <ul>
                        <li>Privacy</li>
                        <li>Policy</li>
                        <li>Terms</li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
