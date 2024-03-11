import "./App.css";
import { NavBar } from "./components/nav-bar/NavBar";
import { UserAccount } from "./components/user-account/UserAccount";
import { Card } from "./components/cards-carousel/Card";

function App() {
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <div className="main-nav-btns-container">
            <NavBar />
          </div>
          <UserAccount />
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
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
