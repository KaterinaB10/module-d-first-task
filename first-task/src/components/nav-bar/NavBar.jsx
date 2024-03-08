import "./navbar.css";

export function NavBar() {
  return (
    <section className="nav-bar-section">
      <ul className="nav-bar-container">
        <li className="nav-btn-container">
          <a href="" className="nav-btn">
            About us
          </a>
        </li>
        <li className="nav-btn-container">
          <a href="" className="nav-btn">
            Menu
          </a>
        </li>
        <li className="nav-btn-container">
          <a href="" className="nav-btn">
            Our locations
          </a>
        </li>
        <li className="nav-btn-container">
          <a href="" className="nav-btn">
            Delivery
          </a>
        </li>
      </ul>
    </section>
  );
}
