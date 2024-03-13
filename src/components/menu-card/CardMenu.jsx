import "./card-menu.css";
import coffeeTypes from "./coffeAPI.json";

export function CardMenu() {
  return (
    <div className="menu-cards">
      {coffeeTypes.coffeeTypes.map((coffeeType) => {
        return (
          <div className="card-container" key={coffeeType.id}>
            <div className="card-price-container">
              <p className="card-price">{coffeeType.price}</p>
            </div>
            <div className="card-description-container">
              <h2 className="card-description-title">{coffeeType.title}</h2>
              <button className="card-description-read-more-btn">
                Read more
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
