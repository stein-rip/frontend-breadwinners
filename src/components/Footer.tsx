import { profile } from "console";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Footer.css";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return <div className="Footer"></div>;
};

export default Footer;
