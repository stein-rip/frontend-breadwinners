import { Link } from "react-router-dom";
import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      <Link to="/">
        <h1>Jobs</h1>
      </Link>
      <nav>
        <ul>
          <Link to="/jobs/favorites">
            <li>Favorites</li>
          </Link>
        </ul>
      </nav>
      {user ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </header>
  );
};

export default Header;
