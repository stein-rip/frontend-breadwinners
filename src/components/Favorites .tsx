import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import FavoritesContext from "../context/FavoritesContext";
import Card from "./Card";
import "./Favorites.css";
const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const { profile } = useContext(AuthContext);
  return (
    <div className="Favorite">
      <h1>Saved jobs</h1>
      {profile ? (
        <ul>
          {favorites.map((item) => (
            <Card jobProp={item.job} key={item._id} fromFav={true} />
          ))}
        </ul>
      ) : (
        <p>Keeps</p>
      )}
    </div>
  );
};
export default Favorites;
