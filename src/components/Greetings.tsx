import "./Greetings.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import ToastFace from "../assets/ToastFace.png";

const Greetings = () => {
	const { user, profile } = useContext(AuthContext);
	return (
		<div className="Greetings">
			<img
				className="Breadwinners Mascot BreadBase"
				src={ToastFace}
				alt="Breadwinners Mascot"
			/>
			);
		</div>
	);
};

export default Greetings;
