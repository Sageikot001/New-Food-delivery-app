import React from "react";

const Order = (props) => {
    return (
        <>
            <div className="orders">
            <div className="numbering">{props.num}</div>
                <div className="option-rectangle">
                    <img src={`./Data/${props.img}`} alt="#" />
                </div>
                <h4>{props.steps}</h4>
            </div>
        </>
    );
};

export default Order;
