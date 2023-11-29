import './CSS/MobileNavigation.css';


const MobileNav = () => {
  return (
    <div>
      <div className="Hamburger-Icon">
        <button className="menu-btn">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="mobile-menu" id="menu">
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </div>
    </div>
  );
};

export default MobileNav;
