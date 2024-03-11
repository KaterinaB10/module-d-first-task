import coffeeTypes from "./coffeAPI.json";

export function Card() {
  return (
    <div className="card-container">
      <div className="card">
        {coffeeTypes.coffeeTypes.map((coffeeType) => {
          return (
            <article key={coffeeType.id}>
              <img src={coffeeType.picture} />
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
