import "./user-account.css";
import icon from "../../assets/images/user-icon.svg";

export function UserAccount() {
  return (
    <section className="user-account-section">
      <div className="user-account-container">
        <div className="user-icon-container">
          <img src={icon} alt="icon" />
        </div>
        <div className="user-title-container">
          <p>My Account</p>
        </div>
      </div>
    </section>
  );
}
