import "./Greetings.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import ToastMascot from "../assets/ToastMascot.png";

const Greetings = () => {
	const { user, profile } = useContext(AuthContext);
	return (
		<div className="Greetings">
			<img
				className="Breadwinners Mascot BreadBase"
				src={ToastMascot}
				alt="Breadwinners Mascot"
			/>
			);
		</div>
	);
};

export default Greetings;

// dough rising (waiting gif)-->cardlist
// jobs you knead-->favorite
// i can dough better/this job is crumby (delete button)
// i dont want naan of that-->delete
// stale bread-->expiration
// preheating-->loading

// bready, set go!
// rake in the dough
// jobs you loaf
// breadwinning jobs
// get a bread start
// in the oven
// burnt toast
// adjust filter in heel of bread-->put form on last card in rotation
