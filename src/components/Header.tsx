import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>Gif App</h1>
      </Link>
      <Link to="/gifs/favorites">Favorites</Link>
      <p>Poweded by GIPHY</p>
    </header>
  );
};

export default Header;
