import { useContext } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Footer.css";

const Footer = () => {
	const { user, profile } = useContext(AuthContext);
	return (
		<div className="Footer">
			{profile && (
				<nav className="Nav">
					<ul>
						<CustomLink property="profile" to="/settings/profile">
							edit
						</CustomLink>
						<CustomLink property="saved" to="/jobs/favorites">
							saved
						</CustomLink>
					</ul>
					<p className="Last">
						{/* Your last visit: {user?.metadata.lastSignInTime} */}
					</p>
				</nav>
			)}
		</div>
	);
};

const CustomLink = ({ to, children, property }: any) => {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={`${property} ${isActive ? "active" : ""}`}>
			<Link to={to}>{children}</Link>
		</li>
	);
};

export default Footer;
