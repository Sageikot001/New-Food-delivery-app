import Food from "./Food";

const Foods = () => {
    return (
        <section className="food-section">
            <div className="food-line-1">

                <div className="food-menu-1">
                    <Food img="Pizza.svg" foodname="Pizza" />
                    <Food img="burger.svg" foodname="Burger" />
                    <Food img="sushi.svg" foodname="Sushi" />
                </div>

                <div className="free-delivery">
                    <h4>
                        Find <span className="orange">deals</span>,
                        <span className="green">free delivery</span>, and more
                        from our restaurant partners.
                    </h4>
                    <img
                        src="./Data/Illustrations.svg"
                        alt="illustration-img"
                        className="illustration"
                    />
                </div>

            </div>

            <div className="food-line-2">
                
                <div className="lorem">
                    <img src="./Data/VectorQ.svg" alt="icon" />
                    <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.”
                    </p>
                </div>

                <div className="food-menu-2">
                    <Food img="Pasta.svg" foodname="Pasta" />
                    <Food img="Salad.svg" foodname="Salad" />
                    <Food img="Desserts.svg" foodname="Desserts" />
                </div>

            </div>
        </section>
    );
};

export default Foods;
