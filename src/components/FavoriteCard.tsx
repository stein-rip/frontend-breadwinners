import "./FavoriteCard.css";
import Toast404 from "../assets/Toast404.png";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Job from "../models/Job";

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
      <div className="Toast">
        <div className="Job">
          {jobProp?.employer_logo ? (
            <img
              className="JobLogo"
              src={jobProp?.employer_logo}
              alt={jobProp?.job_title}
            />
          ) : (
            <img className="fourOhFour" src={Toast404} alt="not found" />
          )}
          <h2>{jobProp?.employer_name}</h2>

          <h1>{jobProp?.job_title}</h1>

          <h3>
            {jobProp?.job_city} {jobProp?.job_state}
          </h3>

          <p>{jobProp?.job_description.slice(0, 500)} ...</p>
          <div className="BtnContainer">
            {profile &&
              (isFav(jobProp?.job_id) ? (
                <button onClick={() => deleteFavoriteHandler(jobProp?.job_id)}>
                  delete favorite
                </button>
              ) : null)}
            <button>
              <Link to={`/jobs/${jobProp?.job_id}`}>more details</Link>
            </button>
            {fromFav && <CountDownTimer jobProp={jobProp} />}
          </div>
        </div>
      </div>
    </li>
  );
};

export default FavoriteCard;
