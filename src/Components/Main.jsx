import React from "react";
import Food from "./Food";
import Order from "./Order";

const Main = () => {
  return (
    <div>
      <div className="Dishes">
        <h2>
          More Than<span className="orange"> 10,000</span> Dishes To Order!
        </h2>
        <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
      </div>
      <main>
        <section className="first-section">
          <div className="main-line-1">
            <div className="food-menu">
              <Food img="Pizza.svg" foodname="Pizza" />
              <Food img="burger.svg" foodname="Burger" />
              <Food img="sushi.svg" foodname="Sushi" />
            </div>
            <div className="free-delivery">
              <h4>
                Find <span className="orange">deals</span>,{" "}
                <span className="green">free delivery</span>, and more from our
                restaurant partners.
              </h4>
              <img src="./Data/Illustrations.svg" className="illustration" />
            </div>
          </div>
          <div className="main-line-2">
            <div className="lorem">
              <img src="./Data/VectorQ.svg" />
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="food-menu2">
              <Food img="Pasta.svg" foodname="Pasta" />
              <Food img="Salad.svg" foodname="Salad" />
              <Food img="Desserts.svg" foodname="Desserts" />
            </div>
          </div>
          <div></div>
        </section>

        <section className="second-section">
          <h2>How To Order?</h2>
          <div className="how-to">
          <Order num="01" img='pin.svg' steps='Choose your location' />
          <Order num="02" img='bow.svg' steps='Choose what to eat' />
          <Order num="03" img='burger.svg' steps='Make your first order' />
          <Order num="04" img='Home.svg' steps='Now! Your food on  way ' />
          </div>
        </section>

        <section className="third-section">
          <div className="feedback">
            <h2>Our Clients Feedback</h2>
            <p>The food at your doorstep. Why starve when you have us. You hunger partner. straight out of the oven to your doorstep.</p>
          </div>
          <img src="./Data/Vector.svg"/>
          <div className="comment">
            <h4>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</h4>
            <div>
            <h5>Mitchell Marsh</h5>
            <p>CEO, Bexon Agency</p>
              <img src="./Data/Group 3586.svg" alt="#" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
