import "./Card.css";
import Toast404 from "../assets/Toast404.png";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Job from "../models/Job";
import BreadwinnersToast from "../assets/ToastFace.png";
import CountDownTimer from "./CountDownTimer";

interface Props {
	jobProp: Job;
	fromFav: Boolean;
}

const Card = ({ jobProp, fromFav }: Props) => {
	const { addFavoriteHandler, deleteFavoriteHandler, isFav } =
		useContext(FavoritesContext);
	const { profile, user } = useContext(AuthContext);

	return (
		<li className="Card">
			<div className="Toast">
				<img
					className="BreadwinnersToast BreadBase"
					src={BreadwinnersToast}
					alt="BreadwinnersToast"
				/>
				<div className="Job">
					<div className="logo-container">
						{jobProp?.employer_logo ? (
							<img
								className="JobLogo"
								src={jobProp?.employer_logo}
								alt={jobProp?.job_title}
							/>
						) : (
							<img className="fourOhFour" src={Toast404} alt="not found" />
						)}
					</div>
					<h1>{jobProp?.job_title}</h1>

					{/* <h3>
						{jobProp?.job_city} {jobProp?.job_state}
					</h3> */}
					<p>{jobProp?.job_description.slice(0, 250)} ...</p>

					{profile &&
						(isFav(jobProp?.job_id) ? (
							<button onClick={() => deleteFavoriteHandler(jobProp?.job_id)}>
								delete favorite
							</button>
						) : null)}
					{fromFav && <CountDownTimer jobProp={jobProp} />}
				</div>
			</div>
		</li>
	);
};

export default Card;
