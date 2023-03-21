import { Link } from "react-router-dom";
import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      <div className="Title">
        <Link to="/">
          <h1>BREADWINNERS</h1>
        </Link>
        <nav className="Nav">
          <ul>
            <Link to="/jobs/favorites">
              <li>Bread Bank</li>
            </Link>
            <Link to="/settings/profile">
              <li>Profile</li>
            </Link>
          </ul>
        </nav>
      </div>
      {user ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </header>
  );
};

export default Header;
