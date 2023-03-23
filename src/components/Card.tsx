import "./Card.css";
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

const Card = ({ jobProp, fromFav }: Props) => {
  const { addFavoriteHandler, deleteFavoriteHandler, isFav } =
    useContext(FavoritesContext);
  const { profile, user } = useContext(AuthContext);

  return (
    <li className="Card">
      <h1></h1>
      <div className="Job">
        {jobProp?.employer_logo ? (
          <Link to={`/jobs/${jobProp?.job_id}`}>
            <img
              className="JobLogo"
              src={jobProp?.employer_logo}
              alt={jobProp?.job_title}
            />
          </Link>
        ) : (
          <img className="fourOhFour" src={Toast404} alt="not found" />
        )}
        <h3>{jobProp?.employer_name}</h3>
        <Link to={`/jobs/${jobProp?.job_id}`}>
          <h4>{jobProp?.job_title}</h4>
        </Link>
        <h4>
          {jobProp?.job_city} {jobProp?.job_state}
        </h4>
        <Link to={`/jobs/${jobProp?.job_id}`}>
          <h4>{jobProp?.job_description.slice(0, 500)} ...</h4>
        </Link>
        {fromFav && <CountDownTimer jobProp={jobProp} />}
        {profile &&
          (isFav(jobProp?.job_id) ? (
            <button onClick={() => deleteFavoriteHandler(jobProp?.job_id)}>
              Delete Favorite
            </button>
          ) : null)}
      </div>
    </li>
  );
};

export default Card;
