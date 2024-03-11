import coffeeTypes from "./coffeAPI.json";
import "./card.css";

export function Card() {
  return (
    <div className="cards-container">
      {coffeeTypes.coffeeTypes.map((coffeeType) => {
        return (
          <article className="card-content-container" key={coffeeType.id}>
            <img className="card-img" src={coffeeType.picture} />
            <div className="card-text">
              <h2 className="card-text-title">{coffeeType.title}</h2>
              <p className="card-text-subtitle">{coffeeType.volume}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
