import { Link } from "react-router-dom";
import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import ToastMascot from "../assets/ToastMascot.png";

const Header = () => {
  const { user, profile } = useContext(AuthContext);
  return (
    <header className="Header">
      <div className="Title">
        <Link to="/">
          <img src={ToastMascot} alt="ToastMascot" />
          <h1>BREADWINNERS</h1>
        </Link>
        {profile && (
          <nav className="Nav">
            <ul>
              <Link to="/jobs/favorites">
                <li>saved</li>
              </Link>
              <Link to="/settings/profile">
                <li>profile</li>
              </Link>
            </ul>
          </nav>
        )}
        <div className="button">
          <p>
            hi! {user?.displayName}
            {/* <img
              src={user?.photoURL!}
              alt={`profile picture for: ${user?.displayName}`}
            /> */}
          </p>
          {user ? (
            <button onClick={signOut}>Sign out</button>
          ) : (
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
