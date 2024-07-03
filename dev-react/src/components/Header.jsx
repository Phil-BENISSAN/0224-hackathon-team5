import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/actus">
        Biskeep
      </Link>
      <ul className="onglet">
        <Link className="link">
          <li className="features">Features</li>
        </Link>
        <Link className="link">
          <li className="features">Features</li>
        </Link>
        <Link className="link">
          <li className="features">Connexion</li>
        </Link>
      <Link className="link">
        <button className="features try">Essayer gratuitement</button>
      </Link>
      </ul>
    </header>
  );
}
