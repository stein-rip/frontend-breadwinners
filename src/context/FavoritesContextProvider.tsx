import { ReactNode, useContext, useEffect, useState } from "react";
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

  const loadFavorites = async () => {
    if (user) {
      const favorites: Favorite[] = await getFavorites(user.uid!);
      setFavorites(favorites);
    } else {
      setFavorites([]);
    }
  };

  const addFavoriteHandler = async (newFavorite: Favorite): Promise<void> => {
    if (user) {
      await addFavorite(newFavorite, user.uid!);
      loadFavorites();
    }
  };

  const deleteFavoriteHandler = async (id: string): Promise<void> => {
    if (user) {
      await deleteFavorite(user.uid!, id);
      loadFavorites();
    }
  };

  const isFav = (id: string): boolean =>
    favorites.some((favorite) => favorite.job.id === id);

  useEffect(() => {
    (async () => {
      loadFavorites();
    })();
  }, [user]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavoriteHandler, deleteFavoriteHandler, isFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
