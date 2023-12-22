import Order from "./Order";

const Ordering = () => {
    return (
        <section className="ordering-section">
            <h2>How To Order?</h2>

            <div className="ordering">
                    <Order
                        num="01"
                        img="pin.svg"
                        steps="Choose your location"
                    />
                    
                    <Order
                        num="02"
                        img="bow.svg"
                        steps="Choose what to eat"
                    />
                    <Order
                        num="03"
                        img="burger.svg"
                        steps="Make your first order"
                    />
                    <Order
                        num="04"
                        img="Home.svg"
                        steps="Now! Your food on  way "
                    />
            </div>
        </section>
    );
};

export default Ordering;
