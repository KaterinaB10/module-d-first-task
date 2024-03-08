import "./user-account.css";
import Icon from "../assets/images/2150691727.jpg";

export function UserAccount() {
  return (
    <section className="user-account-section">
      <div className="user-icon-container">
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C6.145 0 3 3.145 3 7C3 9.41 4.23 11.55 6.094 12.813C2.527 14.343 0 17.883 0 22H2C2 17.57 5.57 14 10 14C14.43 14 18 17.57 18 22H20C20 17.883 17.473 14.344 13.906 12.812C14.8573 12.1698 15.6368 11.3042 16.1762 10.291C16.7156 9.27778 16.9984 8.14783 17 7C17 3.145 13.855 0 10 0ZM10 2C12.773 2 15 4.227 15 7C15 9.773 12.773 12 10 12C7.227 12 5 9.773 5 7C5 4.227 7.227 2 10 2Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="user-title-container">
        <p>Account</p>
      </div>
    </section>
  );
}
