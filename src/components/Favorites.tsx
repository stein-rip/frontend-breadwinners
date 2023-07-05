import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import FavoritesContext from "../context/FavoritesContext";

import FavoriteCard from "./FavoriteCard";
import "./Favorites.css";
const Favorites = () => {
	const { favorites } = useContext(FavoritesContext);
	const { profile } = useContext(AuthContext);
	console.log(favorites);

	return (
		<div className="Favorites">
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
