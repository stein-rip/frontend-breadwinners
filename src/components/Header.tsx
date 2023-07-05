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
			<div className="Title">
				<h1>BREADWINNERS</h1>
				<h2>a butter way to find your dough!</h2>
			</div>

			<div className="Breadwinners">
				{user ? (
					<Link to="/">
						<img
							className="SignImg"
							src={SignOut}
							alt="Toast"
							onClick={signOut}
						/>
					</Link>
				) : (
					<img
						className="SignImg"
						src={SignIn}
						alt="Toast Sign in"
						onClick={signInWithGoogle}
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
