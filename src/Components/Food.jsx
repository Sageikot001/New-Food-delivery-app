import React from "react";

const Food = (props) => {
  return (
    <div>
      <div className="food-container">
        <div className="food-circle">
          <img src={`./Data/${props.img}`} className="food-image" alt="food-img" />
        </div>
        <h4>{props.foodname}</h4>
      </div>
    </div>
  );
};

export default Food;
