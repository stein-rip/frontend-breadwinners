import { to } from "@react-spring/web";
import { profile } from "console";
import path from "path";
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
            <CustomLink to="/jobs/favorites">saved</CustomLink>
            <CustomLink to="/settings/profile">profile</CustomLink>
          </ul>
        </nav>
      )}
    </div>
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

export default Footer;
