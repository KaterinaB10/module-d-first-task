import "./App.css";
import { NavBar } from "./components/nav-bar/NavBar";
import { UserAccount } from "./components/user-account/UserAccount";
import { Card } from "./components/cards-carousel/Card";
import { CardMenu } from "./components/menu-card/CardMenu";

function App() {
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <div className="logo-container"></div>
          <div className="main-nav-btns-container">
            <NavBar />
          </div>
          <div className="user-account-container">
            <UserAccount />
          </div>
        </div>
        <title className="header-title">
          <h2 className="title-line-up">Delicious</h2>
          <h1 className="title-line-down">COFFEE</h1>
        </title>
      </header>
      <main className="main">
        <div className="cards">
          <Card />
        </div>
        <section id="about-us">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            molestiae porro asperiores a delectus totam possimus nostrum optio
            reiciendis, et dolorum! Ad maxime perferendis ea maiores officia
            totam natus quibusdam.
          </p>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.809234895921!2d5.324206376053127!3d60.382311126295235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf954c9266e49%3A0x2030e93f70bf0f75!2sNansensenteret%2C%20Thorm%C3%B8hlens%20Gate%2047%2C%205006%20Bergen!5e0!3m2!1sen!2sno!4v1710164047878!5m2!1sen!2sno"
            width="400"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </section>
        <section id="menu" className="menu">
          <CardMenu />
        </section>
        <section></section>
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
