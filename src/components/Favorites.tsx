import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import FavoritesContext from "../context/FavoritesContext";
import Card from "./Card";
import FavoriteCard from "./FavoriteCard";
import "./Favorites.css";
const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const { profile } = useContext(AuthContext);
  console.log(window.location);
  return (
    <div className="Favorite">
      {/* <h1 className="FavTitle">Saved jobs</h1> */}
      {profile ? (
        <ul>
          {favorites.map((item) => (
            <FavoriteCard jobProp={item.job} key={item._id} fromFav={true} />
          ))}
        </ul>
      ) : (
        <p>saved</p>
      )}
    </div>
  );
};
export default Favorites;
