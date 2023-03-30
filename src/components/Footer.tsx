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
            <CustomLink property="saved" to="/jobs/favorites">
              saved
            </CustomLink>
            <CustomLink property="profile" to="/settings/profile">
              profile
            </CustomLink>
          </ul>
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
