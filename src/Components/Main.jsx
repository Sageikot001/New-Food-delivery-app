import React from "react";
import Foods from "./Foods";
import Ordering from "./Ordering";
import Feedback from "./Feedback";
import Newsletter from "./Newsletter";

const Main = () => {
  return (
    <>
      <main>
        <h2 className="main-heading">
          More Than <span className="orange"> 10,000</span> Dishes To
          Order!
        </h2>
        <p className="main-paragraph">
          Welcome to The Biggest Network of Food Ordering & Delivery
        </p>

        <Foods />

        <Ordering />

        <Feedback />

        <Newsletter />
      </main>
    </>
  );
};

export default Main;
