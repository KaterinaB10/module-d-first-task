import "./card-menu.css";
import { useState } from "react";
import coffeeTypes from "./coffeAPI.json";
import { PopUpDescription } from "./PopUpDescription";

export function CardMenu() {
  return (
    <div className="menu-cards">
      {coffeeTypes.coffeeTypes.map((coffeeType) => {
        return <MenuItem key={coffeeType.id} coffeeType={coffeeType} />;
      })}
    </div>
  );
}

function MenuItem(props) {
  const { coffeeType } = props;
  const [readMoreButton, setReadMoreButton] = useState(false);

  return (
    <div className="card-container">
      <div className="card-price-container">
        <p className="card-price">{coffeeType.price}</p>
      </div>
      <div className="card-description-container">
        <h2 className="card-description-title">{coffeeType.title}</h2>
        <button
          className="card-description-read-more-btn"
          onMouseEnter={() => setReadMoreButton(true)}
          onMouseLeave={() => setReadMoreButton(false)}
        >
          Read more
        </button>
      </div>
      <PopUpDescription trigger={readMoreButton}>
        <div className="pop-up-text">
          <p>{coffeeType.description}</p>
        </div>
      </PopUpDescription>
    </div>
  );
}
