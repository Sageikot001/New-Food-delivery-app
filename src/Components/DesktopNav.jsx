import React from "react";
import './CSS/Navigation.css';
import MobileNav from "./MobileNav";



export default function DesktopNav() {
  return (
    <>
      <div className="menu">
        <ul>
            <li> <a href="#">Restaurants</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Page <img src="./Data/VectorD.svg" /></a></li>
        </ul>
        </div>

    <div>
      <div className="action-buttons">
        <button className="btn1">Login</button>
        <button className="btn2">Sign Up</button>
      </div>
      {/* <MobileNav/> */}
    </div>



    </>
  );
}
