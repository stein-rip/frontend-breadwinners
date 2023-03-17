import "./Card.css";
import fourOhFour from "../assets/404.jpg";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Job from "../models/Job";

interface Props {
  jobProp: Job;
}

const Card = ({ jobProp }: Props) => {
  const { addFavoriteHandler, deleteFavoriteHandler, isFav } =
    useContext(FavoritesContext);
  const { user } = useContext(AuthContext);

  return (
    <li className="Card">
      <h3>{jobProp.employer_name}</h3>
      {jobProp.employer_logo ? (
        <Link to={`/jobs/${jobProp.job_id}`}>
          <img src={jobProp.employer_logo} alt={jobProp.job_title} />
        </Link>
      ) : (
        <img src={fourOhFour} alt="not found" />
      )}
      <h4>{jobProp.job_title}</h4>
      <h4>{jobProp.job_description}</h4>

      {user &&
        (isFav(jobProp.job_id) ? (
          <button onClick={() => deleteFavoriteHandler(jobProp.job_id)}>
            Delete Favorite
          </button>
        ) : (
          <button onClick={() => addFavoriteHandler({ job: jobProp })}>
            Add Favorite
          </button>
        ))}
    </li>
  );
};

export default Card;
