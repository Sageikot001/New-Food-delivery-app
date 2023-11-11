import React from "react";

const Nav = () => {
  return (
    <div className="nav">
        <img src="./Data/Pizza.svg" alt="#" />
      <div className="menu">
        <ul>
          <li>
            <a href="#">Restaurants</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">
              Page <img src="./Data/VectorD.svg" />
            </a>
          </li>
        </ul>
      </div>
      <div className="action-buttons">
        <button className="btn1">Login</button>
        <button className="btn2">Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;
