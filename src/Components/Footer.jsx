import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-group">
        <div className="footer-left">
          <img src="./Data/Pizza.svg" />
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
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Food Menu</a>
              </li>
              <li>
                <a href="#">Offer</a>
              </li>
              <li>
                <a href="#">Review</a>
              </li>
              <li>
                <a href="#">Rider</a>
              </li>
            </ul>
          </div>
          <div className="quick-links">
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">DoorDash Stories</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Glassdoor</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>
          <div className="quick-links">
            <h3>News</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Lift Media</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Presse kit</a>
              </li>
            </ul>
          </div>
          <div className="quick-links">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="#">WhatsApp</a>
              </li>
              <li>
                <a href="#">Support 24</a>
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
