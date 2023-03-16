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
      <h3>{jobProp.title}</h3>
      {jobProp.images.original.url ? (
        <Link to={`/jobs/${jobProp.id}`}>
          <img src={jobProp.images.original.url} alt={jobProp.title} />
        </Link>
      ) : (
        <img src={fourOhFour} alt="not found" />
      )}

      {user &&
        (isFav(jobProp.id) ? (
          <button onClick={() => deleteFavoriteHandler(jobProp.id)}>
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
