import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = () => {

  const windowSize = window.innerWidth;
  const screenSize = Screen.width;
  console.log(windowSize);
  console.log(screenSize);



  return (
    <nav>
      <img src="./Data/Pizza.svg" alt="#" />
      {/* <DesktopNav/> */}

      {windowSize < 800 ? <MobileNav/> : <DesktopNav/> }

      {/* <MobileNav/> */}
      
    </nav>
  );
};

export default Nav;
