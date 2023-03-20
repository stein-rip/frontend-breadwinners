import { ReactNode, useCallback, useContext, useEffect, useState } from "react";
import Favorite from "../models/Favorite";
import {
  addFavorite,
  deleteFavorite,
  getFavorites,
} from "../services/FavoriteService";
import FavoritesContext from "./FavoritesContext";
import AuthContext from "./AuthContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { user } = useContext(AuthContext);

  const loadFavorites = useCallback(async () => {
    if (user) {
      const favorites: Favorite[] = await getFavorites(user.uid!);
      setFavorites(favorites);
    } else {
      setFavorites([]);
    }
  }, [user]);

  const addFavoriteHandler = async (newFavorite: Favorite): Promise<void> => {
    if (user) {
      await addFavorite(newFavorite, user.uid!);
      loadFavorites();
    }
  };

  const deleteFavoriteHandler = async (job_id: string): Promise<void> => {
    if (user) {
      await deleteFavorite(user.uid!, job_id);
      loadFavorites();
    }
  };

  const isFav = (job_id: string): boolean =>
    favorites.some((favorite) => favorite._id === job_id);

  useEffect(() => {
    (async () => {
      loadFavorites();
    })();
  }, [user, loadFavorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavoriteHandler, deleteFavoriteHandler, isFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
