import coffeeTypes from "./coffeAPI.json";
import "./card.css";

export function Card() {
  return (
    <div className="card-container">
      <div className="card">
        {coffeeTypes.coffeeTypes.map((coffeeType) => {
          return (
            <article className="card-content" key={coffeeType.id}>
              <img className="card-img" src={coffeeType.picture} />
              <div>
                <h2 className="card-text-title">{coffeeType.title}</h2>
                <p className="card-text-subtitle">{coffeeType.volume}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
