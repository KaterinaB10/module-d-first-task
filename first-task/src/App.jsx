import "./App.css";
import { NavBar } from "./components/nav-bar/NavBar";
import { UserAccount } from "./components/user-account/UserAccount";

function App() {
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <NavBar className="main-nav-btns-container" />
          <UserAccount />
        </div>
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
