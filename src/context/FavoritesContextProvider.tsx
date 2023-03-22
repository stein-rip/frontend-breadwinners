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
  const { profile } = useContext(AuthContext);

  const loadFavorites = useCallback(async () => {
    if (profile) {
      const favorites: Favorite[] = await getFavorites(profile._id!);
      setFavorites(favorites);
    } else {
      setFavorites([]);
    }
  }, [profile]);

  const addFavoriteHandler = async (newFavorite: Favorite): Promise<void> => {
    if (profile) {
      await addFavorite(newFavorite, profile._id!);
      loadFavorites();
    }
  };

  const deleteFavoriteHandler = async (job_id: string): Promise<void> => {
    if (profile) {
      await deleteFavorite(profile._id!, job_id);
      loadFavorites();
    }
  };

  const isFav = (job_id: string): boolean =>
    favorites.some((favorite) => favorite._id === job_id);

  useEffect(() => {
    (async () => {
      loadFavorites();
    })();
  }, [profile, loadFavorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavoriteHandler, deleteFavoriteHandler, isFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
