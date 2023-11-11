import React from "react";

const Input = (props) => {
  return (
    <div>
      <div className="input-container">
        <input
          type=""
          placeholder={props.placeholder}
          className="custom-input"
        />
        <button className="order">{props.command}</button>
      </div>
    </div>
  );
};

export default Input;
