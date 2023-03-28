import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import AuthContext from "../context/AuthContext";
import { useContext, useEffect } from "react";
import ToastMascot from "../assets/ToastMascot.png";
import ToastFace from "../assets/ToastFace.png";
import ToastSigninFinal from "../assets/ToastSigninFinal.png";
import ToastSignoutFinal from "../assets/ToastSignoutFinal.png";

const Header = () => {
  const { user, profile } = useContext(AuthContext);

  return (
    <header className="Header">
      <div className="Breadwinners">
        <img src={ToastMascot} alt="ToastMascot" />
        <Link to="/">
          <h1>BREADWINNERS</h1>
        </Link>
        {/* <img className="SignImg" src={ToastFace} alt="Toast"  */}
        {/* <button><img src="./img/google.png" alt="my image" onClick={this.myfunction} /></button> */}
        {user ? (
          <Link to="/">
            <img
              className="SignImg"
              src={ToastSignoutFinal}
              alt="Toast"
              onClick={signOut}
            />
          </Link>
        ) : (
          <img
            className="SignImg"
            src={ToastSigninFinal}
            alt="Toast Sign in"
            onClick={signInWithGoogle}
          />
        )}
      </div>
      {profile && (
        <nav className="Nav">
          <ul>
            <CustomLink to="/jobs/favorites">saved</CustomLink>
            <CustomLink to="/settings/profile">profile</CustomLink>
          </ul>
        </nav>
      )}
      <div className="button">
        {/* <p>
            {user && profile ? "hi!" : ""} {user && profile?.display_name}
            <img
              src={user?.photoURL!}
              alt={`profile picture for: ${user?.displayName}`}
            />
          </p> */}
        {/* {user ? (
            <button className="SignIn" onClick={signOut}>
              sign out
            </button>
          ) : (
            <button className="SignOut" onClick={signInWithGoogle}>
              sign in
            </button>
          )} */}
      </div>
    </header>
  );
};
const CustomLink = ({ to, children }: any) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default Header;
