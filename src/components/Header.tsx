import { Link } from "react-router-dom";
import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import ToastMascot from "../assets/ToastMascot.png";

import SignIn from "../assets/SignIn.png";
import SignOut from "../assets/SignOut.png";

const Header = () => {
	const { user, profile } = useContext(AuthContext);

	return (
		<header className="Header">
			<h1>BREADWINNERS</h1>
		</header>
	);
};

export default Header;
