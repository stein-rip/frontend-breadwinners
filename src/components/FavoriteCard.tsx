import "./FavoriteCard.css";
import ToastMascot from "../assets/ToastMascot.png";
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

const FavoriteCard = ({ jobProp, fromFav }: Props) => {
	const { addFavoriteHandler, deleteFavoriteHandler, isFav } =
		useContext(FavoritesContext);
	const { profile, user } = useContext(AuthContext);

	return (
		<li className="FavoriteCard">
			<div className="Toast BreadBase">
				<img
					className="BreadwinnersToast BreadBase"
					src={BreadwinnersToast}
					alt="BreadwinnersToast"
				/>
				<div className="Job">
					{jobProp?.employer_logo ? (
						<img
							className="JobLogo"
							src={jobProp?.employer_logo}
							alt={jobProp?.job_title}
						/>
					) : (
						<img className="fourOhFour" src={ToastMascot} alt="not found" />
					)}
					<h2>{jobProp?.employer_name}</h2>

					<h1>{jobProp?.job_title}</h1>

					<h3>
						{jobProp?.job_city} {jobProp?.job_state}
					</h3>

					<p>{jobProp?.job_description.slice(0, 100)} ...</p>
					<div className="BtnContainer">
						{profile &&
							(isFav(jobProp?.job_id) ? (
								<button onClick={() => deleteFavoriteHandler(jobProp?.job_id)}>
									unfavorite
								</button>
							) : null)}
						<button>
							<Link to={`/jobs/${jobProp?.job_id}`}>see more</Link>
						</button>
						{fromFav && <CountDownTimer jobProp={jobProp} />}
					</div>
				</div>
			</div>
		</li>
	);
};

export default FavoriteCard;
